import React from "react";
import { IoMdMore } from "react-icons/io";

const Dropdown = ({ options = [], ICON,IconSize }) => {
  const IconComponent = ICON; // Dynamicznie przypisuje ikonę jako komponent

  return (
    <div className="dropdown dropdown-end ">
      <div
        tabIndex={0}
        className=" transition-all  outline-none cursor-pointer  w-fit h-fit"
      >
          {ICON}
    </div>
      {options.length > 0 && (
        <ul
          tabIndex={0}
          className="dropdown-content cursor-pointer  bg-base-100 rounded-box z-[1] w-52  shadow font-semibold mt-[10px] "
        >
          {options.map(({ label, onClick, icon }) => {
            const isDeleteOption = label === "Usuń";
            const hoverColorClass = isDeleteOption
              ? "hover:bg-rose-500/50 transition-all"
              : "hover:bg-blue-100 transition-shadow";

            return (
              <li
                key={label}
                className={`py-2.5 px-3 rounded ${hoverColorClass}`}
                onClick={onClick}
              >
                <button className="flex items-center gap-x-2">
                  {icon}
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
