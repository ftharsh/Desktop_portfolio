import { useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock, Home } from "./components";
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
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  const [facetimeVisible, setFacetimeVisible] = useState(false);

  return (
    <main>
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
      <Home />

      <FaceTimeNotification
        visible={facetimeVisible}
        onDismiss={() => setFacetimeVisible(false)}
      />
    </main>
  );
};

export default App;
