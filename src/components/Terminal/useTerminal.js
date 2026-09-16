import { useState, useRef, useCallback } from "react";

let lineCounter = 0;

const useTerminal = () => {
  const [lines, setLines] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [isStreaming, setIsStreaming] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);
  const containerRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      const el = containerRef.current;
      if (!el) return;
      const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
      if (distFromBottom < 300) {
        el.scrollTop = el.scrollHeight;
      }
    });
  }, []);

  // addLine(parts) → appends a new line, returns its id
  // addLine(parts, existingId) → replaces the line with that id in-place
  const addLine = useCallback(
    (parts, existingId) => {
      if (existingId != null) {
        setLines((prev) =>
          prev.map((l) => (l.id === existingId ? { ...l, parts } : l)),
        );
        setTimeout(scrollToBottom, 0);
        return existingId;
      }
      const id = ++lineCounter;
      setLines((prev) => [...prev, { id, parts }]);
      setTimeout(scrollToBottom, 0);
      return id;
    },
    [scrollToBottom],
  );

  const addStreamingLine = useCallback(() => {
    const id = ++lineCounter;
    setLines((prev) => [...prev, { id, parts: [] }]);

    const appendChar = (char) => {
      setLines((prev) =>
        prev.map((line) => {
          if (line.id !== id) return line;
          const parts = [...line.parts];
          if (parts.length === 0) {
            parts.push({ text: char, color: null });
          } else {
            const last = parts[parts.length - 1];
            if (last.color === null || last.color === undefined) {
              parts[parts.length - 1] = { ...last, text: last.text + char };
            } else {
              parts.push({ text: char, color: null });
            }
          }
          return { ...line, parts };
        }),
      );
      setTimeout(scrollToBottom, 0);
    };

    const appendCharColored = (char, color) => {
      setLines((prev) =>
        prev.map((line) => {
          if (line.id !== id) return line;
          const parts = [...line.parts];
          if (parts.length === 0 || parts[parts.length - 1].color !== color) {
            parts.push({ text: char, color });
          } else {
            const last = parts[parts.length - 1];
            parts[parts.length - 1] = { ...last, text: last.text + char };
          }
          return { ...line, parts };
        }),
      );
      setTimeout(scrollToBottom, 0);
    };

    const appendPart = (part) => {
      setLines((prev) =>
        prev.map((line) => {
          if (line.id !== id) return line;
          return { ...line, parts: [...line.parts, part] };
        }),
      );
      setTimeout(scrollToBottom, 0);
    };

    const setParts = (newParts) => {
      setLines((prev) =>
        prev.map((line) => {
          if (line.id !== id) return line;
          return { ...line, parts: newParts };
        }),
      );
      setTimeout(scrollToBottom, 0);
    };

    const finish = () => {};

    return { id, appendChar, appendCharColored, appendPart, setParts, finish };
  }, [scrollToBottom]);

  const clearLines = useCallback(() => {
    setLines([]);
  }, []);

  const pushHistory = useCallback((cmd) => {
    setHistory((prev) => {
      if (prev[0] === cmd) return prev;
      return [cmd, ...prev].slice(0, 20);
    });
    setHistoryPointer(-1);
  }, []);

  const navigateHistory = useCallback((dir, currentHistory, currentPointer) => {
    if (dir === "up") {
      const next = currentPointer + 1;
      if (next >= currentHistory.length) {
        return {
          value: currentHistory[currentHistory.length - 1] || "",
          pointer: Math.min(currentPointer, currentHistory.length - 1),
        };
      }
      return { value: currentHistory[next], pointer: next };
    } else {
      const next = currentPointer - 1;
      if (next < 0) return { value: "", pointer: -1 };
      return { value: currentHistory[next], pointer: next };
    }
  }, []);

  return {
    lines,
    setLines,
    inputValue,
    setInputValue,
    history,
    setHistory,
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
    scrollToBottom,
  };
};

export default useTerminal;
