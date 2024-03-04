// src/components/Orders/index.tsx
import React from "react";
import Header from "../../components/Header";
import "./styles.css";
import { Box } from "@mui/material";
import OrdersSummary from "./OrderSummary";

const Orders: React.FC = () => {
  return (
    <div>
      <Header />
      <OrdersSummary />
    </div>
  );
};

export default Orders;
