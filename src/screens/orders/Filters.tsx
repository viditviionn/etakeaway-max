// src/components/Orders/Filters.tsx
import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Filters: React.FC = () => {
  return (
    <Box display="flex" gap={2} padding={2} flexWrap={'wrap'}>
      <TextField
        id="input-with-icon-textfield"
        label="Search"
        type="search"
        variant="outlined"
        size="small"
        sx={{
            width: "220px",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        id="order-type"
        select
        label="Order Type"
        value=""
        size="small"
        variant="outlined"
        sx={{ width: "172px" }}
      >
        <MenuItem value="" disabled>
          <em>Order Type</em>
        </MenuItem>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Delivery">Delivery</MenuItem>
        <MenuItem value="Pickup">Pickup</MenuItem>
      </TextField>
      <TextField
        id="order-type"
        select
        label="By Status"
        value=""
        size="small"
        variant="outlined"
        sx={{ width: "119px" }}
      >
        <MenuItem value="" disabled>
          <em>By status</em>
        </MenuItem>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Delivery">Delivery</MenuItem>
        <MenuItem value="Pickup">Pickup</MenuItem>
      </TextField>
      <TextField
        id="order-type"
        select
        label="By payment"
        value=""
        size="small"
        variant="outlined"
        sx={{ width: "172px" }}
      >
        <MenuItem value="" disabled>
          <em>By payment</em>
        </MenuItem>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Delivery">Delivery</MenuItem>
        <MenuItem value="Pickup">Pickup</MenuItem>
      </TextField>
    </Box>
  );
};

export default Filters;
