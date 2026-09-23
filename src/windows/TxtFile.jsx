import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const TxtFile = () => {
  const data = useWindowStore((s) => s.windows.txtfile.data);

  if (!data) return null;

  const { name, image, subtitle, description = [] } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <span className="ml-4 text-sm font-medium opacity-70">{name}</span>
      </div>

      <div className="p-6 flex flex-col gap-4 overflow-y-auto max-h-[70vh]">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover rounded-lg"
          />
        )}
        <h2 className="text-xl font-semibold">{name}</h2>
        {subtitle && <p className="text-sm opacity-60">{subtitle}</p>}
        <div className="flex flex-col gap-3 text-sm leading-relaxed">
          {description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </>
  );
};

const TxtFileWindow = WindowWrapper(TxtFile, "txtfile");
export default TxtFileWindow;
