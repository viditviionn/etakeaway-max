import { LocationOn } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";

interface ChildProps {
  icon: string;
  lable: string;
}
const MyButton: React.FC<ChildProps> = ({ icon, lable }) => {
  return (
    <Button className="lightOrange-btn" size="small" sx={{width:'fit-content'}}>
      <Box display={"flex"} gap={"5px"} alignItems={"center"} >
      <LocationOn/>
        <Box>{lable}</Box>
      </Box>
    </Button>
  );
};

export default MyButton;
