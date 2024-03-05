import React from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";

import { AddCircle } from "@mui/icons-material";

export default function DeliveryCardOne(props: any) {
  const { title, description, disabled } = props;
  return (
    <Box
      display={"flex"}
      gap={"40px"}
      alignItems={"start"}
      justifyContent="space-between"
      className="css-my-text-gray-1 bg-white"
      sx={{ padding: "10px", width: "100%", marginBottom: "20px", borderRadius: '4px' }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box sx={{ padding: 1 }} className="bg-white deliverymandiv">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className="deliveryheading">{title}</Box>
            <Button
              size="small"
              variant="outlined"
              onClick={() => {}}
              className={`lightgraybutton ${!disabled && "activebutton"}`}
            >
              Assign Driver
              <AddCircle sx={{ color: `${disabled ? "#D9D9D9" : "activebutton"}`, marginLeft: "10px" }} />
            </Button>
          </Box>
          <Box className="deliverymandesc">
            
            {description}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
