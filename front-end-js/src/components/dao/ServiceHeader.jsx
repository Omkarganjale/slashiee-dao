import { Button, Box, Card, Divider, Grid, IconButton, styled , useTheme} from "@mui/material";
import { H3, H6, Small, Tiny } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import React from "react"; // component props interface
import FlexBox from "components/FlexBox";
import { useTranslation } from "react-i18next";


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


const ServiceHeader = ({
  user,theme
}) => {
    const {
        t
      } = useTranslation();
    
  return <Grid item md={5} xs={12}>
  <Card sx={{
  p: "2rem 0",
  m: "1"
}}>
  
  <FlexBox width="100%" justifyContent="space-around" sx={{
    [theme.breakpoints.between("sm", 960)]: {
   
      flexDirection: "row",
    }
  }}>
    <H3 m="1.5rem" p="0.5rem 0.8rem 0.5rem 0rem">
      {t("Our Serivces")}
    </H3>
    <H3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</H3>
    <Box  p="0.5rem 0.8rem 0.5rem 0rem">
      <img src="/static/daohack/our_service.png"  height="80" />
    </Box>
     
    </FlexBox>

  </Card>
</Grid>;
};

export default ServiceHeader;