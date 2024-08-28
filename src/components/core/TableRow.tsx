import React, { useState, useEffect } from 'react';

interface TableRowProps {
  data: Record<string, any>; // Dynamiczny obiekt danych
  showId?: boolean;         // Prop do kontrolowania widoczności ID
  currentUserId: string;    // ID aktualnie zalogowanego użytkownika
}

const TableRow: React.FC<TableRowProps> = ({ data, showId = false, currentUserId,showTextarea }) => {
  const [note, setNote] = useState<string>('');

  // Ładowanie notatki z localStorage przy montowaniu komponentu
  useEffect(() => {
    if (currentUserId) {
      const storedNote = localStorage.getItem(`note-${currentUserId}-${data.id}`);
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
      alert('Note saved!');
    }
  };

  return (
    <tr className='text-[15px] border-b-[1.5px] border-gray-200 text-gray-600 hover:bg-gray-300/10'>
      {showId && <td className='py-2.5'>{data.id}</td>}
      {Object.keys(data).map((key) => {
        if (key !== 'id') {
          return (
            <td key={key} className='py-2.5'>
              {data[key]}
            </td>
          );
        }
        return null;
      })}
{showTextarea&&      <td className='py-2.5 flex flex-col'>
        <textarea
          value={note}
          onChange={(e) => handleNoteChange(e.target.value)}
          className='border rounded p-1 w-full h-20 resize-none mb-2'
          placeholder='Add a note...'
        />
        <button
          onClick={saveNoteToLocalStorage}
          className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600'>
          Save Note
        </button>
      </td>}
    </tr>
  );
};

export default TableRow;
