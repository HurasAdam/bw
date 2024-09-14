import React from "react";
import { IoMdMore } from "react-icons/io";
const Dropdown = ({ options = [] }) => {
  return (
    <div className="dropdown dropdown-end ">
      <IoMdMore
        tabIndex={0}
        className="hover:text-secondary transition-all  outline-none cursor-pointer w-[21px] h-6"
      ></IoMdMore>
      {options.length > 0 && (
        <ul
          tabIndex={0}
          className="dropdown-content cursor-pointer bg-base-100 rounded-box z-[1] w-52  shadow font-semibold "
        >
          {options.map(({ label, onClick, icon }) => {
            // Sprawdzenie dla opcji
            const isEditOption = label === "Edytuj";
            const isDeleteOption = label === "Usuń";
            const isVerifyOption = label === "Zweryfikuj";
            const isUnverifyOption = label === "Cofnij weryfikację";

            // Ustawienie klasy na podstawie opcji
            const hoverColorClass = isDeleteOption
              ? "hover:bg-rose-500/50 transition-all"
              :"hover:bg-blue-100"

            return (
              <li
                key={label} // dodaj unikalny klucz dla każdego elementu listy
                className={`py-2.5 px-3 rounded ${hoverColorClass}`}
                onClick={onClick}
              >
                <button className="flex items-center gap-x-2" >
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
