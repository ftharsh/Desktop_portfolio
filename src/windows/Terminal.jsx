import React from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import { techStack } from "#constants";
import { Check, Flag } from "lucide-react";
import { WindowControls } from "../components";

const Terminal = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='terminal' />
        <h2>Tech Stack</h2>
      </div>

      <div className='techstack '>
        <p className='text-[#666] text-xs mb-3'>
          Last login: Mon Jun 9 11:42:03 on ttys001
        </p>
        <p>
          <span className='font-bold'>harshvardhan@portfolio:~ $ </span>
          show tech stack
        </p>
        <div className='label'>
          <p className='w-32'>Category</p>
          <p>Technologies</p>
        </div>

        <ul className='content'>
          {techStack.map(({ category, items }) => (
            <li className='flex items-center gap-4' key={category}>
              <Check classname='check' size={20} color='green' />
              <h3>{category}</h3>

              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < items.length - 1 ? ", " : " "}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className='footnote'>
          <p>
            <Check size={20} />5 of 5 stack loaded successfully (100%)
          </p>
          <p className='text-black'>
            <Flag size={15} fill='black' />
            Render time: 6ms
          </p>
        </div>
        <div className='py-3'>
          <span className='font-bold '>harshvardhan@portfolio:~ $ </span>
          <span className='inline-block w-[8px] h-[15px] bg-[#000000] ml-2 align-middle animate-[pulse_0.7s_ease-in-out_infinite]' />
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
