import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "./components";
import { Finder, Resume, Safari, Spotify, Terminal, TxtFile } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Spotify />
      <Safari />

      <Resume />
      <Finder />
      <TxtFile />
    </main>
  );
};

export default App;
