import React, { useState } from "react";
import cartImg from "../../assets/icons/cart.png";
import calendarImg from "../../assets/icons/calendar-today.png";
import cartCheckedImg from "../../assets/icons/fi-rr-shopping-cart-check.png";
import creditCardImg from "../../assets/icons/credit-card.png";
import { Box, Grid } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Steps from "../../components/Steps";
import LeftDetails from "./LeftDetails";
import RightDetails from "./RightDetails";

// The OrdersTable component
const OrdersSummary: React.FC = () => {
  return (
    <Box className="container order-list-container ">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        className="bg-white"
        sx={{ marginBottom: "20px", padding: "8px 20px" }}
      >
        <Box className="arrow-back">
          <ArrowBack />
        </Box>
        <Box className='text-title-bold'>
          Order Summary
        </Box>
        <Box className="save-btn-dsbl">Save</Box>
      </Box>
      <Box className='css-pa'>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={'wrap'}
        >
          <Box display={"flex"} alignItems={"center"} >
            <Box mr={"10px"} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <img src={cartImg} />
            </Box>
            <Box className="order-name">Order #4422- Akihito Kanabara</Box>
          </Box>
          <Box className="change-color-btn">Change Status</Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          className="order-sum-hd"
          flexWrap={'wrap'}
          gap={'20px'}
        >
          <Box display={"flex"} gap={"12px"}>
            <Box>
              <img src={calendarImg} />
            </Box>
            <Box>
              <Box className="text-gray fs-14">Order date</Box>
              <Box className="fs-18" fontWeight={"bold"}>
                09:00 am; 12-01-2024
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} gap={"12px"}>
            <Box>
              <img src={creditCardImg} />
            </Box>
            <Box>
              <Box className="text-gray fs-14">Amount</Box>
              <Box className="fs-18" fontWeight={"bold"}>
                £ 32.33
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} gap={"12px"}>
            <Box>
              <img src={cartCheckedImg} />
            </Box>
            <Box>
              <Box className="text-gray fs-14">Products</Box>
              <Box className="fs-18" fontWeight={"bold"}>
                3
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="bg-white" sx={{ padding: "12px", marginBottom:'20px' }}>
          <Steps />
        </Box>
        <Grid container>
          {/* Creates a container Grid that holds items */}
          <Grid item xs={12} md={8} >
            <LeftDetails/>
          </Grid>
          <Grid item xs={12} md={4}>
            <RightDetails />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OrdersSummary;
