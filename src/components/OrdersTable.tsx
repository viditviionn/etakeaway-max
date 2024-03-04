import React, { useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowModel,
  GridRowsProp,
} from "@mui/x-data-grid";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";

// Define the structure of your row data
interface RowData extends GridRowModel {
  customer: string;
  type: string;
  pay_type: String;
  amount: number | null;
  status: string; // Status field added
  date: string;
}

// Initial rows data
const initialRows: RowData[] = [
  {
    id: 1,
    customer: "Snow",
    type: "Jon",
    pay_type: "",
    amount: 35,
    status: "In Progress",
    date: "",
  },
  {
    id: 2,
    customer: "Lannister",
    type: "Cersei",
    pay_type: "",
    amount: 42,
    status: "Completed",
    date: "",
  },
  // ... other rows
];

// Status options
const statusOptions = ["In Progress", "Completed", "Pending"];

// Define the columns
const columns: GridColDef[] = [
  { field: "id", headerName: "Order ID", width: 130,  disableColumnMenu: true },
  { field: "customer", headerName: "Customer", width: 170, sortable: false, disableColumnMenu: true },
  { field: "type", headerName: "Type", width: 130, sortable: false,disableColumnMenu: true },
  { field: "pay_type", headerName: "Pay Type", width: 130, sortable: false, disableColumnMenu: true},
  { field: "amount", headerName: "Amount", width: 130, sortable: false, disableColumnMenu: true},
  {
    field: "status",
    headerName: "Status",
    width: 170,
    disableColumnMenu: true,
    renderCell: (params: GridRenderCellParams) => (
      <Select
        value={params.value}
        onChange={(event) =>
          params.api.setEditCellValue(
            { id: params.id, field: params.field, value: event.target.value },
            event
          )
        }
        size="small"
        sx={{
          width: "100%",
          backgroundColor: getStatusColor(params.value),
        }}
      >
        {statusOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    ),
  },
  { field: "date", headerName: "Date", width: 130 , sortable: false, disableColumnMenu: true},
];

// Function to return color based on status
const getStatusColor = (status: string): string => {
  switch (status) {
    case "In Progress":
      return "#FFFF99"; // Yellow
    case "Completed":
      return "#99FF99"; // Green
    case "Pending":
      return "#FFCC99"; // Orange
    default:
      return "transparent";
  }
};

// The OrdersTable component
const OrdersTable: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>(initialRows);

  const handleProcessRowUpdate = (newRow: RowData) => {
    const updatedRows = rows.map((row) =>
      row.id === newRow.id ? { ...row, ...newRow } : row
    );
    setRows(updatedRows);
    return newRow;
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5, 10]}
        checkboxSelection
        processRowUpdate={handleProcessRowUpdate}
        pagination
        // experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
};

export default OrdersTable;
