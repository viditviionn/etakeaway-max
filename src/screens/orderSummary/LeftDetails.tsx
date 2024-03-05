import { Box, Grid } from "@mui/material";
import calenderImg from "../../assets/icons/calendar-today.png";
import deliveryImg from "../../assets/icons/fast-delivery-svgrepo-com 1.png";
import locationImg from "../../assets/icons/location-on.png";
import mobileImg from "../../assets/icons/mobile.png";
import Button from "../../components/Button";
import MyButton from "../../components/Button";
import { CloudDownload } from "@mui/icons-material";

const LeftDetails: React.FC = () => {
  return (
    <Grid container>
      <Box
        display={"flex"}
        gap={"40px"}
        alignItems={"start"}
        justifyContent="space-between"
        className="css-my-text-gray-1 bg-white"
        sx={{ padding: "20px" }}
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
          <MyButton icon={locationImg} lable="View location on map" />
        </Box>
      </Box>
      {/* Product Details */}
      <Box
        display={"flex"}
        gap={"40px"}
        alignItems={"start"}
        justifyContent="space-between"
        className="css-my-text-gray-1 bg-white"
        sx={{ padding: "20px", marginTop: "20px" }}
      >
        <Box>Product Details</Box>
        <Box>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <CloudDownload />
            <Box>Download</Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default LeftDetails;
