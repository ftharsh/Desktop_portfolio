import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import React from "react";

const SPOTIFY_SRC = "https://open.spotify.com/embed/playlist/6GbgDQTMlWbaqfblvWFKHF";

export const Spotify = () => {
  const isOpen = useWindowStore((s) => s.windows.spotify.isOpen);

  return (
    <>
      <div id='window-header'>
        <WindowControls target='spotify' />
        <h2>Spotify</h2>
      </div>

      <div className='spotify-content'>
        <div className='spotify-frame'>
          <iframe
            src={isOpen ? SPOTIFY_SRC : "about:blank"}
            width='100%'
            height='500'
            style={{ border: "none", borderRadius: "0" }}
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            allowTransparency='true'
            loading='lazy'
          />
        </div>
      </div>
    </>
  );
};

const SpotifyWindow = WindowWrapper(Spotify, "spotify");

export default SpotifyWindow;
