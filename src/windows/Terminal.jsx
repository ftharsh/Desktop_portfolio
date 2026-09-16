import Terminal from "#components/Terminal/Terminal";
import WindowWrapper from "#hoc/WindowWrapper";

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
