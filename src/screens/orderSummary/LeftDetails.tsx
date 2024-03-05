import { Box, Grid } from "@mui/material";
import calenderImg from "../../assets/icons/calendar-today.png";
import deliveryImg from "../../assets/icons/fast-delivery-svgrepo-com 1.png";
import locationImg from "../../assets/icons/location-on.png";
import mobileImg from "../../assets/icons/mobile.png";
import shareOImg from "../../assets/icons/share-o.png";
import Button from "../../components/Button";
import MyButton from "../../components/Button";
import { Circle, CloudDownload } from "@mui/icons-material";

const LeftDetails: React.FC = () => {
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
    <Grid container>
      <Box
        display={"flex"}
        gap={"10px"}
        alignItems={"start"}
        justifyContent="space-between"
        className="css-my-text-gray-1 bg-white"
        sx={{ padding: "20px", width: "100%" }}
        flexWrap={'wrap'}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Box
            display={"flex"}
            gap={"20px"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Box>Ordered date:</Box>
            <Box>
              <img src={calenderImg} />
            </Box>
            <Box>09:00 am; 12-01-2024</Box>
          </Box>
          <Box
            display={"flex"}
            gap={"20px"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Box>Delivery date:</Box>
            <Box>
              <img src={calenderImg} />
            </Box>
            <Box>09:00 am; 12-01-2024</Box>
          </Box>
          <Box
            display={"flex"}
            gap={"20px"}
            alignItems={"center"}
            // justifyContent="space-between"
          >
            <Box>Payment:</Box>
            <Box className="complete-green">Completed</Box>
          </Box>
          <Box
            display={"flex"}
            gap={"20px"}
            alignItems={"center"}
            // justifyContent="space-between"
          >
            <Box>Payment type:</Box>
            <Box className="online-orange">Online</Box>
          </Box>
          <Box
            display={"flex"}
            gap={"20px"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Box>Note</Box>
            <Box></Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={"10px"}
        >
          <Box
            display={"flex"}
            gap={"20px"}
            alignItems={"center"}
            // justifyContent="space-between"
          >
            <Box>Status:</Box>
            <Box className="complete-green">New</Box>
          </Box>
          <Box
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            // justifyContent="space-between"
          >
            <Box>Order Type:</Box>
            <Box>
              <img src={deliveryImg} />
            </Box>
            <Box>Deliver</Box>
          </Box>
          <Box
            display={"flex"}
            gap={"20px"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Box>Address:</Box>
            <Box></Box>
          </Box>
          <Box
            display={"flex"}
            gap={"20px"}
            alignItems={"start"}
            justifyContent="space-between"
          >
            <Box>Home:</Box>
            <Box>
              <Box
                display={"flex"}
                gap={"5px"}
                alignItems={"center"}
                // justifyContent="space-between"
              >
                <Box>
                  <img src={locationImg} />
                </Box>
                <Box>1289 Front St.Sacramento, CA 95814</Box>
              </Box>
              <Box
                display={"flex"}
                gap={"10px"}
                alignItems={"center"}
                // justifyContent="space-between"
              >
                <Box sx={{ marginLeft: "4px" }}>
                  <img src={mobileImg} />
                </Box>
                <Box>404 443322546</Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{marginTop:'10px'}}>
          <MyButton icon={locationImg} lable="View location on map" />
          </Box>
        </Box>
      </Box>
      {/* Product Details */}
      <Box
        className=" bg-white "
        sx={{ padding: "20px", marginTop: "20px", width: "100%" }}
      >
        <Box
          display={"flex"}
          gap={"5px"}
          alignItems={"center"}
          justifyContent="space-between"
          className="css-my-text-gray-1"
          sx={{flexWrap:'wrap'}}
        >
          <Box sx={{ color: "black", fontSize: "16px", fontWeight: "600" }}>
            Product Details
          </Box>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              className="css-btn-2"
            >
              <CloudDownload sx={{ color: "#F38B08" }} />
              <Box>Download</Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              className="css-btn-2"
            >
              <img src={shareOImg} />
              <Box>Share</Box>
            </Box>
          </Box>
        </Box>
        <Box className="border-gray"></Box>
        {productDetails.items.map((item, index) => {
          return (
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"10px"}
              marginTop={'10px'}
            >
              <Box>
                <Box display={"flex"} gap={"15px"} alignItems={"start"}>
                  <Box
                    className={
                      item.vegType === "non-veg" ? `non-veg-logo` : `veg-logo`
                    }
                  >
                    <Circle sx={{ fontSize: "12px" }} />
                  </Box>
                  <Box>
                    <Box className="item-name-d">
                      {item.quantity}*{item.itemName}
                    </Box>
                    <Box className="item-desc-d">{item.description}</Box>
                  </Box>
                </Box>
              </Box>
              <Box className="price-d">{item.price}</Box>
            </Box>
          );
        })}
        <Box className="border-gray-dash"></Box>
        <Box className="css-my-text-gray-2">
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>Item Total</Box>
            <Box>{productDetails.item_total}</Box>
          </Box>
        </Box>
        <Box className="border-gray-dash-0"></Box>
        <Box
          className="css-my-text-gray-2"
          display={"flex"}
          flexDirection={"column"}
          gap={"8px"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>Discount</Box>
            <Box sx={{ color: "#3E9514", fontWeight: "400" }}>
              {productDetails.discount}
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>Order Packing Charges</Box>
            <Box>{productDetails.order_packaging_carges}</Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>Taxes & Charges</Box>
            <Box>{productDetails.taxes_and_charges}</Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>Tip</Box>
            <Box>{productDetails.tip}</Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>Loyalty Points</Box>
            <Box sx={{ color: "#3E9514", fontWeight: "400" }}>
              {productDetails.layality_points}
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>Delivery Fee</Box>
            <Box>{productDetails.delivery_fees}</Box>
          </Box>
        </Box>
        <Box className="border-gray-dash-0"></Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            sx={{
              fontWeight: "500",
              color: "#3E9514",
              fontSize: "14px",
              lineHeight: "21px",
            }}
          >
            Paid via Card
          </Box>
          <Box
            sx={{
              color: "black",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Total Bill £48.50
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default LeftDetails;
