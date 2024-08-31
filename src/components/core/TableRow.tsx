import React, { useState, useEffect } from "react";
import Button from "./Button";
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";

interface TableRowProps {
  data: Record<string, any>; // Dynamiczny obiekt danych
  showId?: boolean; // Prop do kontrolowania widoczności ID
  currentUserId: string; // ID aktualnie zalogowanego użytkownika
}

const TableRow: React.FC<TableRowProps> = ({
  data,
  showId = false,
  currentUserId,
  showTextarea,
  showAction,
  className,
}) => {
  const [note, setNote] = useState<string>("");

  // Ładowanie notatki z localStorage przy montowaniu komponentu
  useEffect(() => {
    if (currentUserId) {
      const storedNote = localStorage.getItem(
        `note-${currentUserId}-${data.id}`
      );
      if (storedNote) {
        setNote(storedNote);
      }
    }
  }, [currentUserId, data.id]);

  // Funkcja do obsługi zmiany wartości w textarea
  const handleNoteChange = (value: string) => {
    setNote(value);
  };

  // Funkcja do zapisywania notatki do localStorage
  const saveNoteToLocalStorage = () => {
    if (currentUserId) {
      localStorage.setItem(`note-${currentUserId}-${data.id}`, note);
      alert("Note saved!");
    }
  };

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);

    return date.toLocaleString("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <tr className="  hover:bg-gray-300/10  ">
      {showId && <td className="py-2.5 ">{data.id}</td>}

      {Object.keys(data).map((key) => {
        if (key !== "id") {
          return (
            <td className="" key={key}>
              {key === "isVerified" ? (
                data[key] ? (
                  <IoMdCheckmarkCircle className="text-green-500 w-[15px] h-auto" />
                ) : (
                  <IoMdCloseCircle className="text-red-500 w-[15px] h-auto" />
                )
              ) : key === "tags" ? (
                <div className="flex flex-wrap gap-x-1 gap-y-2 max-w-[400px]">
                  {(data[key] as string[]).map((tag) => (
                    <span
                      key={tag}
                      className="bg-tag-light text-white px-2.5 py-1.5 rounded-lg text-xs "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : key === "createdAt" ? (
                <span className="font-semibold text-slate-500 text-xs">
                  {" "}
                  {formatDate(data[key])}
                </span>
              ) : (
                <span className="font-semibold text-gray-600 text-[13px]">
                  {data[key]}
                </span>
              )}
            </td>
          );
        }
        return null;
      })}
      {showTextarea && (
        <td className="py-2.5 flex flex-col">
          <textarea
            value={note}
            onChange={(e) => handleNoteChange(e.target.value)}
            className="border rounded p-1 w-full h-20 resize-none mb-2"
            placeholder="Add a note..."
          />
          <button
            onClick={saveNoteToLocalStorage}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Save Note
          </button>
        </td>
      )}
      {showAction && (
        <td>
          <Button className="bg-blue-500 rounded text-white" label="Zobacz" />
        </td>
      )}
    </tr>
  );
};

export default TableRow;
