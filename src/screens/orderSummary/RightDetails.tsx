import { Box, Grid } from "@mui/material";
import calenderImg from "../../assets/icons/calendar-today.png";
import deliveryImg from "../../assets/icons/fast-delivery-svgrepo-com 1.png";
import locationImg from "../../assets/icons/location-on.png";
import mobileImg from "../../assets/icons/mobile.png";
import shareOImg from "../../assets/icons/share-o.png";
import Button from "@mui/material/Button";

import MyButton from "../../components/Button";
import { AddCircle, Circle, CloudDownload } from "@mui/icons-material";
import DeliveryCardOne from "../../components/DeliveryCardOne";
import DeliveryCardTwo from "../../components/DeliveryCardTwo";

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
      <DeliveryCardOne
        title={"Deliveryman"}
        description={
          "Please mark the order status to prepared and then contact the delivery partner"
        }
        disabled={true}
      />
      <DeliveryCardOne
        title={"Deliveryman"}
        description={
          "Please mark the order status to prepared and then contact the delivery partner"
        }
        disabled={false}
      />
      <DeliveryCardTwo
        title={"Deliveryman"}
        description={
          "Please mark the order status to prepared and then contact the delivery partner"
        }
        disabled={false}
        actionText={"Change"}
        icon={"edit"}
      />
      <DeliveryCardTwo
        title={"customer details"}
        description={
          "Please mark the order status to prepared and then contact the delivery partner"
        }
        disabled={false}
        actionText={"View"}
        icon={"view"}
      />
      <DeliveryCardTwo
        title={"Store details"}
        description={
          "Please mark the order status to prepared and then contact the delivery partner"
        }
        disabled={false}
        actionText={"View"}
        icon={"view"}
      />
    </Grid>
  );
};

export default RightDetails;
