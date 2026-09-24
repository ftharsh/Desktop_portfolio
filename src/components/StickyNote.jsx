import { STICKY_NOTE_ITEMS } from "#constants";

const StickyNote = () => {
  return (
    <div className='sticky-note'>
      <div className='sticky-note-header'>
        Sticky Note
        <span className='sticky-note-dots'>
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className='sticky-note-body'>
        <div className='sticky-note-title'>To do:</div>
        {STICKY_NOTE_ITEMS.map((item, i) => (
          <div key={i} className={item.done ? "sticky-item-done" : "sticky-item"}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyNote;
