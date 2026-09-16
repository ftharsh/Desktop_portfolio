import React, { useRef, useCallback, useEffect } from "react";
import useTerminal from "./useTerminal";
import useStreamEngine from "./useStreamEngine";
import { executeCommand, getTabCompletions } from "./commands/index";
import BootSequence from "./BootSequence";
import useWindowStore from "#store/window";
import WindowControls from "#components/WindowControls";

function TerminalLine({ parts }) {
  if (!parts || parts.length === 0) {
    return <div className="t-line">&nbsp;</div>;
  }
  return (
    <div className="t-line">
      {parts.map((part, i) => {
        const style = {
          color: part.color || "var(--t-text)",
          fontWeight: part.bold ? 600 : undefined,
          fontStyle: part.italic ? "italic" : undefined,
          whiteSpace: "pre",
          cursor: part.clickable ? "pointer" : undefined,
          textDecoration: part.clickable ? "underline" : undefined,
        };
        return (
          <span key={i} style={style} onClick={part.clickable ? part.onClick : undefined}>
            {part.text}
          </span>
        );
      })}
    </div>
  );
}

function PromptLine({ inputValue, isStreaming }) {
  return (
    <div className="t-line t-prompt-line">
      <span style={{ color: "var(--t-prompt-user)", whiteSpace: "pre" }}>visitor</span>
      <span style={{ color: "var(--t-text)", whiteSpace: "pre" }}>@</span>
      <span style={{ color: "var(--t-prompt-host)", whiteSpace: "pre" }}>HarshOS</span>
      <span style={{ color: "var(--t-text)", whiteSpace: "pre" }}> </span>
      <span style={{ color: "var(--t-prompt-path)", whiteSpace: "pre" }}>~</span>
      <span style={{ color: "var(--t-prompt-symbol)", whiteSpace: "pre" }}> % </span>
      <span style={{ color: "var(--t-text)", whiteSpace: "pre" }}>{inputValue}</span>
      {!isStreaming && <span className="t-cursor">█</span>}
    </div>
  );
}

const Terminal = () => {
  const {
    lines,
    inputValue,
    setInputValue,
    history,
    historyPointer,
    setHistoryPointer,
    isStreaming,
    setIsStreaming,
    bootComplete,
    setBootComplete,
    addLine,
    addStreamingLine,
    clearLines,
    pushHistory,
    navigateHistory,
    containerRef,
  } = useTerminal();

  const engine = useStreamEngine();
  const inputRef = useRef(null);
  const { openWindow } = useWindowStore();

  const helpers = { addLine, addStreamingLine, clearLines };

  const runCommand = useCallback(
    async (cmd) => {
      const normalized = cmd.trim().replace(/\s+/g, " ").toLowerCase();

      addLine([
        { text: "visitor", color: "var(--t-prompt-user)" },
        { text: "@", color: "var(--t-text)" },
        { text: "HarshOS", color: "var(--t-prompt-host)" },
        { text: " ~ % ", color: "var(--t-prompt-symbol)" },
        { text: cmd, color: "var(--t-text)" },
      ]);

      if (!normalized) return;

      setIsStreaming(true);
      engine.isCancelled.current = false;

      try {
        await executeCommand(normalized, engine, helpers, openWindow, (c) => runCommand(c));
      } finally {
        setIsStreaming(false);
      }
    },
    [engine, helpers, openWindow],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const cmd = inputValue;
        setInputValue("");
        setHistoryPointer(-1);
        if (cmd.trim()) pushHistory(cmd);
        runCommand(cmd);
      } else if (e.key === "Backspace") {
        e.preventDefault();
        setInputValue((v) => v.slice(0, -1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const { value, pointer } = navigateHistory("up", history, historyPointer);
        setInputValue(value);
        setHistoryPointer(pointer);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        const { value, pointer } = navigateHistory("down", history, historyPointer);
        setInputValue(value);
        setHistoryPointer(pointer);
      } else if (e.key === "l" && e.ctrlKey) {
        e.preventDefault();
        clearLines();
      } else if (e.key === "c" && e.ctrlKey) {
        e.preventDefault();
        if (isStreaming) {
          engine.cancel();
          setIsStreaming(false);
          addLine([{ text: "^C", color: "var(--t-muted)" }]);
        } else {
          addLine([
            { text: "visitor", color: "var(--t-prompt-user)" },
            { text: "@", color: "var(--t-text)" },
            { text: "HarshOS", color: "var(--t-prompt-host)" },
            { text: " ~ % ", color: "var(--t-prompt-symbol)" },
            { text: inputValue + "^C", color: "var(--t-muted)" },
          ]);
          setInputValue("");
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const completions = getTabCompletions(inputValue);
        if (completions.length === 1) {
          setInputValue(completions[0]);
        } else if (completions.length > 1) {
          addLine([{ text: completions.join("    "), color: "var(--t-muted)" }]);
        }
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        if (inputValue.length < 120) {
          setInputValue((v) => v + e.key);
        }
      }
    },
    [
      inputValue,
      history,
      historyPointer,
      isStreaming,
      engine,
      runCommand,
      clearLines,
      addLine,
      pushHistory,
      navigateHistory,
      setInputValue,
      setHistoryPointer,
      setIsStreaming,
    ],
  );

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (bootComplete) {
      focusInput();
    }
  }, [bootComplete, focusInput]);

  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Terminal</h2>
      </div>

      <div
        className="t-body"
        ref={containerRef}
        role="log"
        aria-live="polite"
        onClick={focusInput}
      >
        {/* All lines (boot + commands) always stay rendered */}
        {lines.map((line) => (
          <TerminalLine key={line.id} parts={line.parts} />
        ))}

        {/* Boot sequence is headless — it writes into lines via addLine */}
        {!bootComplete && (
          <BootSequence
            addLine={addLine}
            onComplete={() => setBootComplete(true)}
            containerRef={containerRef}
          />
        )}

        {/* Prompt only appears after boot */}
        {bootComplete && (
          <PromptLine inputValue={inputValue} isStreaming={isStreaming} />
        )}
      </div>

      <input
        ref={inputRef}
        className="t-hidden-input"
        value={inputValue}
        onChange={() => {}}
        onKeyDown={handleKeyDown}
        autoFocus={bootComplete}
        aria-hidden="true"
        tabIndex={-1}
      />
    </>
  );
};

export default Terminal;
