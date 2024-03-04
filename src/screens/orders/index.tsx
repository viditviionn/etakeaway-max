// src/components/Orders/index.tsx
import React from "react";
import OrdersTable from "../../components/OrdersTable";
import Filters from "./Filters";
import Header from "../../components/Header";
import "./styles.css";
import { Box } from "@mui/material";

const Orders: React.FC = () => {
  return (
    <div>
      <Header />
      <Box className="order-list-container">
        <h2>Orders Listing</h2>
        <Filters />
        <OrdersTable />
      </Box>
    </div>
  );
};

export default Orders;
