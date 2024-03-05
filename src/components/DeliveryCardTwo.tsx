import React from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";

import { AddCircle, Image } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import UserImage from "../../src/assets/images/Ellipse 17.png";


import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function DeliveryCardTwo(props: any) {
  const { title, actionText, icon } = props;
  const customer = {
    initials: "AK",
    name: "Akihito Kanbara",
    email: "aki.mirai@kyokainokanata.com",
    phone: "404 324453245",
  };
  const iconComponent = () => {
    return icon === "view" ? (
      <VisibilityIcon sx={{ color: "#707070", marginLeft: "10px" }} />
    ) : (
      <EditIcon sx={{ color: "#707070", marginLeft: "10px" }} />
    );
  };
  return (
    <Box
     
      className="css-my-text-gray-1 bg-white"
      sx={{
        padding: "10px",
        width: "100%",
        marginBottom: "20px",
        borderRadius: "4px",
      }}
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
              className={`lightgraybutton deliveryCardTwoActionText`}
            >
              {actionText}
              {iconComponent()}
            </Button>
          </Box>
          <CardContent sx={{width: '100%'}}>
            <Grid container spacing={2}>
              <Grid item>
                <img src={UserImage}/>
              </Grid>
              <Grid item xs>
                <Box className="nameText" >{customer.name}</Box>
                <Box className="emailText" color="textSecondary">
                  <EmailIcon className="cardIconStyle"/> {customer.email}
                </Box>
                <Box className="phoneText" color="textSecondary">
                  <PhoneIcon className="cardIconStyle"/> {customer.phone}
                </Box>
              </Grid>
              {/* <Grid item>
                  <IconButton color="primary" href={`tel:${customer.phone}`}>
                    <PhoneIcon />
                  </IconButton>
                  <IconButton color="primary" href={`mailto:${customer.email}`}>
                    <EmailIcon />
                  </IconButton>
                </Grid> */}
            </Grid>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
}
