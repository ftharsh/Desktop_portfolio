import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const ImgFile = () => {
  const data = useWindowStore((s) => s.windows.imgfile.data);

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <span className="ml-4 text-sm font-medium opacity-70">{name}</span>
      </div>

      <div className="p-4 flex flex-col items-center gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="max-w-full max-h-[70vh] object-contain rounded-lg"
        />
      </div>
    </>
  );
};

const ImgFileWindow = WindowWrapper(ImgFile, "imgfile");
export default ImgFileWindow;
