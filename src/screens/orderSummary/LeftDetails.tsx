import { Box, Grid } from "@mui/material";
import calenderImg from "../../assets/icons/calendar-today.png";

const LeftDetails: React.FC = () => {
  return (
    <Grid container>
      <Box
        display={"flex"}
        gap={"20px"}
        alignItems={"center"}
        justifyContent="space-between"
        className='css-my-text-gray-1'
      >
        <Box display={"flex"} flexDirection={'column'} gap={'10px'}>
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
            <Box className='complete-green'>Completed</Box>
          </Box>
          <Box
            display={"flex"}
            gap={"20px"}
            alignItems={"center"}
            // justifyContent="space-between"
          >
            <Box>Payment type:</Box>
            <Box className='online-orange'>Online</Box>
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
        <Box></Box>
      </Box>
    </Grid>
  );
};

export default LeftDetails;
