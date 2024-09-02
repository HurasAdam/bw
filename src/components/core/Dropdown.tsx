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
          className="dropdown-content cursor-pointer bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-semibold "
        >
          {options.map(({ label, onClick, icon }) => {
            // Sprawdzenie dla opcji
            const isEditOption = label === "Edytuj";
            const isDeleteOption = label === "Usuń";
            const isVerifyOption = label === "Zweryfikuj";
            const isUnverifyOption = label === "Cofnij weryfikację";

            // Ustawienie klasy na podstawie opcji
            const hoverColorClass = isEditOption
              ? "hover:bg-blue-100 transition-all"
              : isDeleteOption
              ? "hover:bg-rose-100 transition-all"
              :isVerifyOption 
              ?"hover:bg-green-100 transtion-all"
              :isUnverifyOption
              ?"hover:bg-orange-100 transtion-all":""

            return (
              <li
                key={label} // dodaj unikalny klucz dla każdego elementu listy
                className={`p-2 rounded ${hoverColorClass}`}
                onClick={onClick}
              >
                <button className="flex items-center gap-x-2" onClick={onClick}>
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
