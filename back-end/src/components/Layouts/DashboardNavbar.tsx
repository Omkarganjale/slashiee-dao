import { Brightness4 } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  styled,
  Theme,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import FlexBox from "components/FlexBox";
import { H2 } from "components/Typography";
import { SettingsContext } from "contexts/SettingsContext";
import { TitleContext } from "contexts/TitleContext";
import LTR from "icons/LTR";
import RtlIcon from "icons/RTL";
import ThemeIcon from "icons/ThemeIcon";
import { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { themeSettingsProps } from "theme";
import { THEMES } from "../../constants";
import ActivityPopover from "./popovers/ActivityPopover";
import LanguagePopover from "./popovers/LanguagePopover";
import NotificationsPopover from "./popovers/NotificationsPopover";
import ProfilePopover from "./popovers/ProfilePopover";
import ServicePopover from "./popovers/ServicePopover";

// root component interface
interface DashboardNavBarProps {
  sideBarLocked: boolean;
  setSideBarLocked: () => void;
  setShowMobileSideBar: () => void;
  setOpenSecondarySideBar: () => void;
}

// custom styled components
const DashboardNavbarRoot = styled(AppBar)(() => ({
  zIndex: 11,
  boxShadow: "none",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  backdropFilter: "blur(6px)",
  backgroundColor: "transparent",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
}));

const StyledIconButton = styled(IconButton)(() => ({
  "&:hover": { backgroundColor: "transparent" },
}));

const ToggleIcon = styled(Box)(({ theme }) => ({
  width: 25,
  height: 3,
  margin: "5px",
  borderRadius: "10px",
  transition: "width 0.3s",
  backgroundColor: theme.palette.primary.main,
}));

// root component
const DashboardNavbar: FC<DashboardNavBarProps> = (props) => {
  const {
    sideBarLocked,
    setSideBarLocked,
    setShowMobileSideBar,
    setOpenSecondarySideBar,
  } = props;

  const { t } = useTranslation();
  const { title } = useContext(TitleContext);
  const { settings, saveSettings } = useContext(SettingsContext);
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down(1200));
  const upSm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const downSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const handleChangeTheme = (theme: string) => {
    saveSettings({ ...settings, theme } as themeSettingsProps);
  };

  const handleChangeDirection = (direction: string) => {
    saveSettings({ ...settings, direction } as themeSettingsProps);
  };

  const handleToggleBtn = () => {
    if (downMd) {
      setShowMobileSideBar();
    } else {
      setSideBarLocked();
      setOpenSecondarySideBar();
    }
  };

  if (downSm) {
    return (
      <>
        <DashboardNavbarRoot position="sticky">
          <StyledToolBar>
            <Box sx={{ cursor: "pointer" }} onClick={handleToggleBtn}>
              <ToggleIcon />
              <ToggleIcon sx={{ width: sideBarLocked ? 25 : 15 }} />
              <ToggleIcon />
            </Box>

            <Box flexGrow={1} textAlign="center">
              <img
                src="/static/logo/logo.svg"
                width="100%"
                height="30"
                alt="Logo"
              />
            </Box>

            <LanguagePopover />
            <ProfilePopover />
          </StyledToolBar>
        </DashboardNavbarRoot>

        <FlexBox alignItems="center" justifyContent="space-between">
          <H2
            fontSize={21}
            lineHeight={0}
            fontWeight="700"
            color="text.primary"
          >
            {t(title)}
          </H2>

          <Box>
            {settings.direction === "ltr" ? (
              <StyledIconButton
                disableRipple
                onClick={() => handleChangeDirection("rtl")}
              >
                <RtlIcon sx={{ color: "text.disabled" }} />
              </StyledIconButton>
            ) : (
              <StyledIconButton
                disableRipple
                onClick={() => handleChangeDirection("ltr")}
              >
                <LTR sx={{ color: "text.disabled" }} />
              </StyledIconButton>
            )}

            {settings.theme === "light" ? (
              <StyledIconButton
                disableRipple
                onClick={() => handleChangeTheme(THEMES.DARK)}
              >
                <ThemeIcon />
              </StyledIconButton>
            ) : (
              <StyledIconButton
                disableRipple
                onClick={() => handleChangeTheme(THEMES.LIGHT)}
              >
                <Brightness4 />
              </StyledIconButton>
            )}
          </Box>
        </FlexBox>
      </>
    );
  }

  return (
    <DashboardNavbarRoot position="sticky">
      <StyledToolBar>
        <Box sx={{ cursor: "pointer" }} onClick={handleToggleBtn}>
          <ToggleIcon />
          <ToggleIcon sx={{ width: sideBarLocked ? 25 : 15 }} />
          <ToggleIcon />
        </Box>

        <H2
          fontSize={21}
          lineHeight={0}
          mx={1}
          fontWeight="700"
          color="text.primary"
        >
          {t(title)}
        </H2>

        <Box flexGrow={1} ml={1} />

        {settings.direction === "ltr" ? (
          <StyledIconButton
            disableRipple
            onClick={() => handleChangeDirection("rtl")}
          >
            <RtlIcon sx={{ color: "text.disabled" }} />
          </StyledIconButton>
        ) : (
          <StyledIconButton
            disableRipple
            onClick={() => handleChangeDirection("ltr")}
          >
            <LTR sx={{ color: "text.disabled" }} />
          </StyledIconButton>
        )}

        {settings.theme === "light" ? (
          <StyledIconButton
            disableRipple
            onClick={() => handleChangeTheme(THEMES.DARK)}
          >
            <ThemeIcon />
          </StyledIconButton>
        ) : (
          <StyledIconButton
            disableRipple
            onClick={() => handleChangeTheme(THEMES.LIGHT)}
          >
            <Brightness4 />
          </StyledIconButton>
        )}

        {upSm && (
          <>
            <LanguagePopover />
            <NotificationsPopover />
            <ServicePopover />
            <ActivityPopover />
          </>
        )}
        <ProfilePopover />
      </StyledToolBar>
    </DashboardNavbarRoot>
  );
};

export default DashboardNavbar;
