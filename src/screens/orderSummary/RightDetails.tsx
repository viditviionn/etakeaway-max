import { Box, Grid } from "@mui/material";
import calenderImg from "../../assets/icons/calendar-today.png";
import deliveryImg from "../../assets/icons/fast-delivery-svgrepo-com 1.png";
import locationImg from "../../assets/icons/location-on.png";
import mobileImg from "../../assets/icons/mobile.png";
import shareOImg from "../../assets/icons/share-o.png";
import Button from "@mui/material/Button";

import MyButton from "../../components/Button";
import { AddCircle, Circle, CloudDownload } from "@mui/icons-material";

const RightDetails: React.FC = () => {
  const productDetails = {
    items: [
      {
        vegType: "non-veg",
        quantity: 1,
        itemName: "Chicken Pizza",
        description: "Regular, Extra mayo, Bell pepper",
        price: "£25.00",
      },
      {
        vegType: "veg",
        quantity: 1,
        itemName: "Make Your Veg Meal",
        description: "Allo gobi, Roti, Gulab Jamun, Coke",
        price: "£25.00",
      },
    ],
    item_total: "£50.0",
    discount: "-£2.00",
    order_packaging_carges: "£0.50",
    taxes_and_charges: "£0.50",
    tip: "£2.0",
    layality_points: "-£3.00",
    delivery_fees: "£0.50",
  };
  return (
    <Grid container paddingLeft={2}>
      <Box
        display={"flex"}
        gap={"40px"}
        alignItems={"start"}
        justifyContent="space-between"
        className="css-my-text-gray-1 bg-white"
        sx={{ padding: "10px", width: "100%" }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box sx={{ padding: 1 }} className="bg-white deliverymandiv">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box className="deliveryheading">Deliveryman</Box>
              <Button
                size="small"
                variant="outlined"
                onClick={() => {}}
                className="lightgraybutton"
              >
                Assign Driver
                <AddCircle sx={{ color: "#D9D9D9", marginLeft: "10px" }} />
              </Button>
            </Box>
            <Box className="deliverymandesc">
              Please mark the order status to prepared and then contact the
              delivery partner
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap={"40px"}
        alignItems={"start"}
        justifyContent="space-between"
        className="css-my-text-gray-1 bg-white"
        sx={{ padding: "10px", width: "100%", marginTop:'20px' }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box sx={{ padding: 1 }} className="bg-white deliverymandiv">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box className="deliveryheading">Deliveryman</Box>
              <Button
                size="small"
                variant="outlined"
                onClick={() => {}}
                className="lightgraybutton"
              >
                Assign Driver
                <AddCircle sx={{ color: "#D9D9D9", marginLeft: "10px" }} />
              </Button>
            </Box>
            <Box className="deliverymandesc">
              Please mark the order status to prepared and then contact the
              delivery partner
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap={"40px"}
        alignItems={"start"}
        justifyContent="space-between"
        className="css-my-text-gray-1 bg-white"
        sx={{ padding: "10px", width: "100%", marginTop:'20px' }}
      >
        <Box display={"flex"} justifyContent={"space-between"} width={'100%'}>
          <Box sx={{ padding: 1 }} className="bg-white deliverymandiv">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box className="deliveryheading">Deliveryman</Box>
              <Button
                size="small"
                variant="outlined"
                onClick={() => {}}
                className="lightgraybutton"
              >
                Assign Driver
                <AddCircle sx={{ color: "#D9D9D9", marginLeft: "10px" }} />
              </Button>
            </Box>
         
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default RightDetails;
