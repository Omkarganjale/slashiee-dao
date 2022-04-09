import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SettingsContext } from "contexts/SettingsContext";
import React, { ChangeEvent, FC, useContext } from "react";
import { themeSettingsProps } from "../theme";

const Home: FC = () => {
  const { settings, saveSettings } = useContext(SettingsContext);

  const handleChangeDirection = (event: ChangeEvent<HTMLInputElement>) => {
    saveSettings({
      ...settings,
      direction: event.target.value,
    } as themeSettingsProps);
  };

  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    saveSettings({
      ...settings,
      theme: event.target.value,
    } as themeSettingsProps);
  };

  return (
    <Box>
      <Typography variant="h1" color="primary.main">
        This is Home Component
      </Typography>
      <Typography color="text.primary" mb="3rem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        laboriosam
      </Typography>

      <Box my={3}>
        <Typography variant="h4">Change Direction</Typography>
        <RadioGroup
          row
          value={settings.direction}
          onChange={handleChangeDirection}
        >
          <FormControlLabel
            value="ltr"
            control={<Radio />}
            label="LTR Direction"
          />
          <FormControlLabel
            value="rtl"
            control={<Radio />}
            label="RTL Direction"
          />
        </RadioGroup>
      </Box>

      <Box my={3}>
        <Typography variant="h4">Change Theme</Typography>
        <RadioGroup value={settings.theme} onChange={handleChangeTheme} row>
          <FormControlLabel
            value="light"
            control={<Radio />}
            label="Light Theme"
          />
          <FormControlLabel
            value="dark"
            control={<Radio />}
            label="Dark Theme"
          />
        </RadioGroup>
      </Box>
    </Box>
  );
};
export default Home;
