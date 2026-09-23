import React, { useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { NOTES_DATA, NOTES_FOLDERS } from "#constants";

const MAIN_FOLDERS = NOTES_FOLDERS.filter((f) => f.id !== "project-ideas" && f.id !== "easter-egg");
const OTHER_FOLDERS = NOTES_FOLDERS.filter((f) => f.id === "project-ideas" || f.id === "easter-egg");

const Notes = () => {
  const [activeFolder, setActiveFolder] = useState("java");

  const data = NOTES_DATA[activeFolder];
  const folderColor = NOTES_FOLDERS.find((f) => f.id === activeFolder)?.color;

  return (
    <>
      <div id="window-header">
        <WindowControls target="notes" />
        <h2>Notes</h2>
      </div>

      <div className="notes-body">
        <aside className="notes-sidebar">
          <p className="notes-section-label">TOPICS</p>
          {MAIN_FOLDERS.map((folder) => (
            <div
              key={folder.id}
              className={`notes-folder-item${activeFolder === folder.id ? " notes-folder-active" : ""}`}
              onClick={() => setActiveFolder(folder.id)}
            >
              <span className="notes-folder-dot" style={{ background: folder.color }} />
              <span className="notes-folder-name">{folder.name}</span>
            </div>
          ))}

          <p className="notes-section-label">OTHER</p>
          {OTHER_FOLDERS.map((folder) => (
            <div
              key={folder.id}
              className={`notes-folder-item${activeFolder === folder.id ? " notes-folder-active" : ""}`}
              onClick={() => setActiveFolder(folder.id)}
            >
              <span className="notes-folder-dot" style={{ background: folder.color }} />
              <span className="notes-folder-name">{folder.name}</span>
            </div>
          ))}
        </aside>

        <div className="notes-content">
          <h2 className="notes-content-title" style={{ color: folderColor ?? "rgba(255,255,255,0.9)" }}>
            {data.title}
          </h2>

          {data.stanzas ? (
            data.stanzas.map((stanza, i) => (
              <div key={i} className="notes-stanza">
                {stanza.map((line) => (
                  <div key={line} className="note-item-pending">
                    {line}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <>
              {data.items
                .filter((item) => item.done)
                .map((item) => (
                  <div key={item.text} className="note-item-done">
                    {item.text}
                  </div>
                ))}

              {data.items
                .filter((item) => !item.done)
                .map((item) => (
                  <div key={item.text} className="note-item-pending">
                    {item.text}
                  </div>
                ))}
            </>
          )}

          {data.doubts.length > 0 && (
            <div className="notes-doubts-section">
              <p className="notes-doubts-label">DOUBTS</p>
              {data.doubts.map((doubt) => (
                <div key={doubt} className="note-doubt">
                  • {doubt}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WindowWrapper(Notes, "notes");
