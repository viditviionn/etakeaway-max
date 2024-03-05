import React, { useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowModel,
  GridRowsProp,
} from "@mui/x-data-grid";
import { Select, MenuItem, SelectChangeEvent, Button, } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import StatusModal from "./StatusModal";
import EditIcon from '@mui/icons-material/Edit';

// The OrdersTable component
const OrdersTable: React.FC = () => {

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
      id: 121212,
      customer: "Snow",
      type: "Jon",
      pay_type: "Cash",
      amount: 35,
      status: "In Progress",
      date: "01:40 pm; 20/12/2023",
    },
    {
      id: 21212,
      customer: "Lannister",
      type: "Cersei",
      pay_type: "Cash",
      amount: 42,
      status: "Completed",
      date: "01:40 pm; 20/12/2023",
    },
    // ... other rows
  ];

  // Status options
  const statusOptions = ["In Progress", "Completed", "Pending"];

  // Define the columns
  const columns: GridColDef[] = [
    { field: "id", headerName: "Order ID", width: 120, disableColumnMenu: true },
    { field: "customer", headerName: "Customer", width: 170, sortable: false, disableColumnMenu: true, headerAlign: "center", align: 'center' },
    { field: "type", headerName: "Type", width: 130, sortable: false, disableColumnMenu: true, headerAlign: "center", align: 'center' },
    { field: "pay_type", headerName: "Pay Type", width: 130, sortable: false, disableColumnMenu: true, headerAlign: "center", align: 'center' },
    { field: "amount", headerName: "Amount", width: 130, sortable: false, disableColumnMenu: true, headerAlign: "center", align: 'center' },
    {
      field: "status",
      headerName: "Status",
      width: 170,
      disableColumnMenu: true,
      headerAlign: "center", align: 'center',
      renderCell: (params: GridRenderCellParams) => (
        <Button
          variant="outlined"
          endIcon={
            params.value === "In Progress" ?
          <EditIcon /> : ""}
          sx={{
            borderRadius: '4px', // Adjust the border-radius to match your design
            borderColor: getStatusColor(params.value), // Use the color that matches your screenshot
            color: getStatusColor(params.value), // Use the color that matches your screenshot
            textTransform: 'none', // Prevents uppercase transformation
            fontSize: '14px', // Adjust font size to match your design
            '&:hover': {
              borderColor: getStatusColor(params.value), // Keeps the border color on hover
              backgroundColor: 'rgba(255, 165, 0, 0.04)' // Light orange background on hover
            },
            background: getBakgroundColor(params.value),
            height: 30,
            // width: 130,
            fontWeight: "400",
          }}
          onClick={handleOpen}
        >
          {params.value}
        </Button>
      ),
    },
    { field: "date", headerName: "Date", width: 170, sortable: false, disableColumnMenu: true, headerAlign: "center", align: 'center' },
    {
      field: "view", headerName: "", width: 130, sortable: false, disableColumnMenu: true, renderCell: (params: GridRenderCellParams) => (
        <div style={{
          paddingRight: "20px",
          opacity: 0.5
        }}>
          <VisibilityIcon />
        </div>
      ),
    },
  ];

  // Function to return color based on status
  const getStatusColor = (status: string): string => {
    switch (status) {
      case "In Progress":
        return "#F38B08"; // Yellow
      case "Completed":
        return "#00AE26"; // Green
      case "Pending":
        return "#F38B08"; // Orange
      default:
        return "transparent";
    }
  };
  const getBakgroundColor = (status: string): string => {
    switch (status) {
      case "In Progress":
        return "#F38B081A"; // Yellow
      case "Completed":
        return "#00AE261A"; // Green
      case "Pending":
        return "#F38B081A"; // Orange
      default:
        return "transparent";
    }
  };
  const [rows, setRows] = useState<RowData[]>(initialRows);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleStatusChange = (event: any) => setStatus(event.target.value);

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
      <StatusModal
        open={open}
        status={status}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default OrdersTable;
