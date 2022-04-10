import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import RTL from "components/RTL";
import useSettings from "hooks/useSettings";
import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import "./i18n";
import routes from "./routes";
import { ukoTheme } from "./theme";
import { Box, Button, Card, Grid, IconButton, Modal, styled } from "@mui/material";
import { FormControl,FormControlLabel, Switch,FormGroup } from '@mui/material';
import { ethers } from "ethers";
import React, { useState } from 'react';

const App = () => {


  // A Web3Provider wraps a standard Web3 provider, which is
  // // what MetaMask injects as window.ethereum into each page
  // const provider = new ethers.providers.Web3Provider(window.ethereum)

  // // MetaMask requires requesting permission to connect users accounts
  // await provider.send("eth_requestAccounts", []);

  // // The MetaMask plugin also allows signing transactions to
  // // send ether and pay to change state within the blockchain.
  // // For this, you need the account signer...
  // const signer = provider.getSigner()


  
  window.ethereum.on('accountsChanged', function (accounts) {
    // Time to reload your interface with accounts[0]!
    console.warn('account changed');
  });

  const allPages = useRoutes(routes);
  const {
    settings
  } = useSettings(); // App theme

  const appTheme = ukoTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes
  }); // toaster options

  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif"
    }
  };


  return <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <RTL direction={appTheme.direction}>
          <CssBaseline />
          <Toaster toastOptions={toasterOptions} />
          


          {allPages}
        </RTL>
      </ThemeProvider>
    </StyledEngineProvider>;
};

export default App;