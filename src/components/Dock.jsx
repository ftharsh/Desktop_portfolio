import { useRef } from "react";
import { Tooltip } from "react-tooltip";

import { dockApps } from "#constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "#store/window";

const Dock = () => {
  const dockref = useRef(null);
  const { openWindow, closeWindow, windows } = useWindowStore();
  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const window = windows[app.id];
    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }

    console.log(windows);
  };

  useGSAP(() => {
    const dock = dockref.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();
      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const centre = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - centre);

        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };
    const handleMouseMove = (e) => {
      const { left } = dockref.current.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };
    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };
    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  return (
    <section id='dock'>
      <div ref={dockref} className='dock-container'>
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className='relative flex justify-center'>
            <button
              type='button'
              className='dock-icon'
              aria-label={name}
              data-tooltip-id='dock-tooltip'
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}>
              <img src={`/images/${icon}`} alt={name} loading='lazy' />
            </button>
          </div>
        ))}
        <Tooltip id='dock-tooltip' className='tooltip' place='top' />
      </div>
    </section>
  );
};

export default Dock;
