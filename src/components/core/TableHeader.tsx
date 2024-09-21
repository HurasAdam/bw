import React from "react";

interface TableHeaderProps {
  headers: string[];
  showId: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {

  const tagClassNameHandler = (header: string) => {

    if (header === "ID") {
      return "hidden lg:flex ";
    }

    if (header === "Tagi") {
      return "hidden lg:flex ";
    }
    

    if(header ==="Data dodania"){
      return "hidden lg:flex"
    }
  };


 return (
    <thead className="bg-blue-300/20  min-w-full ">
      <tr className="w-full text-gray-700">
        {headers.map((header, index) => {
          console.log(header)
           return(
        
            <th className={tagClassNameHandler(header)}  key={index}>{header}</th>
          )
        })}
      </tr>
    </thead>
  );
}

export default TableHeader;
