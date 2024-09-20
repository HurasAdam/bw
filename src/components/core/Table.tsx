import React from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

interface TableProps {
  headers: string[];
  data: {
    id: number;
    internalNumber: string;
    firstName: string;
    lastName: string;
    department: string;
    email: string;
  }[];
  showId?: boolean; // Prop is optional and controls the visibility of the 'ID' column
}

const Table: React.FC<TableProps> = ({
  showAction,
  headers,
  data,
  showId = false,
  showTextarea,
}) => {
  let tableHeaders = showId ? ["ID", ...headers] : headers;

  // Conditionally include 'Actions' in the headers if showAction is true
  if (showAction) {
    tableHeaders = [...tableHeaders, "Akcje"];
  }

  return (
    <div className="overflow-x-auto  border rounded ">
      <table className="table table-md ">
        <TableHeader
          headers={tableHeaders}
          showId={showId}
          showAction={showAction}
        />
        <tbody>
          {data?.map((item) => (
            <TableRow
              showAction={showAction}
              key={item.id}
              data={item}
              showId={showId}
              showTextarea={showTextarea}
              showCreatedAt={false}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
