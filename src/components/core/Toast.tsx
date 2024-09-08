import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

interface IToastProps {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
}

const Toast: React.FC<IToastProps> = ({ message, type, onClose }) => {
  const [progress, setProgress] = useState(100); // Zaczynamy od 100%
  const [visible, setVisible] = useState(true); // Sterowanie widocznością

  useEffect(() => {
    const totalDuration = 5000; // Czas trwania to 5 sekund
    const interval = 40; // Aktualizacja co 50ms
    const decrement = (interval / totalDuration) * 100; // O ile zmniejszamy procent za każdym razem

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.max(prev - decrement, 0));
    }, interval);

    // Po upływie totalDuration najpierw zmieniamy widoczność na false
    setTimeout(() => {
      setVisible(false);
      // Po krótkiej animacji (300ms) usuwamy toast
      setTimeout(onClose, 300);
    }, totalDuration);

    return () => {
      clearInterval(progressInterval);
    };
  }, [onClose]);

  const styles =
    type === "SUCCESS"
      ? "fixed bottom-4 right-5 z-40 pt-1  rounded-md bg-[#4AA255] text-white max-w-md shadow transition-opacity duration-300"
      : "fixed bottom-4 right-5 z-40  rounded-md bg-red-600 text-white max-w-md shadow transition-opacity duration-300";

  return (
    <div className={`${styles} ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="flex justify-between space-x-6 items-center pl-5 pr-3 py-4">
        <div className="flex items-center space-x-3 max-w-[350px]">
          <FaCheckCircle className="w-4 h-4" />
          <span className="text-md font-semibold break-all ">{message}</span>
        </div>
        <button onClick={onClose} className="rounded p-0.5 hover:bg-green-500">
          <IoClose className="w-5 h-5" />
        </button>
      </div>
      <div className="w-full h-[5px]  bg-[#4AA255] mt-2">
        <div
          className="h-full bg-green-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Toast;
