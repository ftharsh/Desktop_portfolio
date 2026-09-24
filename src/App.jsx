import { useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock, Home, StickyNote } from "./components";
import BootScreen from "./components/BootScreen";
import FaceTimeNotification from "./components/FaceTimeNotification";
import {
  Finder,
  Resume,
  Safari,
  Spotify,
  Terminal,
  TxtFile,
  ImgFile,
  Contact,
  Notes,
  IMessage,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  const [facetimeVisible, setFacetimeVisible] = useState(false);

  return (
    <main>
      <BootScreen />
      <Navbar />
      <Welcome />
      <Dock
        onNotificationClick={() => {
          if (!facetimeVisible) setFacetimeVisible(true);
        }}
      />

      <Terminal />
      <Spotify />
      <Safari />

      <Resume />
      <Finder />
      <TxtFile />
      <ImgFile />
      <Contact />
      <Notes />
      <IMessage />
      <Home />

      <StickyNote />

      <FaceTimeNotification
        visible={facetimeVisible}
        onDismiss={() => setFacetimeVisible(false)}
      />
    </main>
  );
};

export default App;
