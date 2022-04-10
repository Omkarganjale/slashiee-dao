import { Button, Box, Card, Divider, Grid, IconButton, styled, useTheme } from "@mui/material";
import { H3, H6, Small, Tiny } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import React from "react"; // component props interface
import FlexBox from "components/FlexBox";
import { useTranslation } from "react-i18next";
import CreateService from "pages/forms/CreateService";
import { useNavigate } from "react-router-dom";



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


const SlashieeHeader = ({
    user, theme, action = "Propose a Service"
}) => {
    const {
        t
    } = useTranslation();
    const navigate = useNavigate();
    const handleClick = (_, currentPageNo) => {
        navigate("../daocreateservice");
    };

    return <Grid container spacing={3}>
        <Grid item md={12} xs={12}>
            <Card sx={{
                p: "1rem 1.5rem 1.5rem 2rem",
                m: "1rem 0rem 1.4rem 0rem"
            }}>
                <FlexBox width="100%" justifyContent="space-between" sx={{
                    [theme.breakpoints.between("sm", 960)]: {

                        flexDirection: "row",
                    }
                }}>
                    <img src="/static/daohack/header.png" height="80px"></img>

                    <Button height="80" variant="outlined" onClick={handleClick} > {action} </Button>
                </FlexBox>
            </Card>
        </Grid>

    </Grid>;
};

export default SlashieeHeader;