import { Box, Card, Divider, Grid, IconButton, styled , useTheme} from "@mui/material";
import { H3, H6, Small, Tiny } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import React from "react"; // component props interface
import FlexBox from "components/FlexBox";

// styled components
const ImageWrapper = styled(Box)(({
  theme
}) => ({
  height: 100,
  position: "relative",
  "&::before": {
    content: '""',
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    opacity: 0.6,
    backgroundColor: theme.palette.primary[100]
  }
}));
const StyledAvatar = styled(UkoAvatar)(({
  theme
}) => ({
  zIndex: 1,
  width: 50,
  height: 50,
  bottom: -25,
  position: "absolute",
  left: "50%",
  right: "50%",
  transform: "translateX(-50%)",
  border: "2px solid",
  borderColor: theme.palette.background.paper
}));

const MetricHeader = ({
  user,theme
}) => {
  return <Grid item md={7} xs={12}>
  <Card sx={{
  padding: "3rem 0",
  margin: "3"
}}>
    
  <FlexBox flexDirection="row" justifyContent="space-around" width="100%" p="0.5rem 0.8rem 0.5rem 0rem" sx={{
    [theme.breakpoints.between("sm", 960)]: {
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
      m:30
    }
  }}>
    
    <Box justifyContent="flex-end" flexDirection="column" textAlign="center">
     <H3>40</H3>
     <H3>Open</H3>
     </Box>

     <Box justifyContent="flex-end" flexDirection="column" textAlign="center">
     <H3>63</H3>
     <H3>On Going</H3>
     </Box>

     <Box justifyContent="flex-end" flexDirection="column" textAlign="center">
     <H3>101</H3>
     <H3>Total</H3>
     </Box>
     
    </FlexBox>

  </Card>

</Grid>;
};

export default MetricHeader;