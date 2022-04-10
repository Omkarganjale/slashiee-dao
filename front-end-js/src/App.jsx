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


  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [walletAddress, setWalletAddress] = useState('');

  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    
  }
  //TODO: error handling
  async function metamask() {
    console.log('Connecting');
    // window.ethereum.request({ method: 'eth_requestAccounts' });
    // MetaMask requires requesting permission to connect users accounts
    const accounts = await provider.send("eth_requestAccounts", []).then( (result)=> {
      setWalletAddress(result[0].slice(0, 8)+ "...");
    });
    console.log(accounts);
    // await console.log(accounts[0]);
    // setWalletAddress(accounts[0]);
    
  }

  async function disconnect_metamask(){
    console.log('disconnecting');
    // window.ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);

    const accounts = await provider.send("eth_requestAccounts",
        [{eth_accounts: {}}]).then( (result)=> {
          setWalletAddress(result[0]);
        });
  }

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
          <Grid container justifyContent="flex-end">
            {walletAddress.length > 0 ? 
            <Button>{walletAddress}</Button>
            :
            <Button variant="contained" onClick={metamask}>Connect wallet</Button>
            }
          </Grid>


          {allPages}
        </RTL>
      </ThemeProvider>
    </StyledEngineProvider>;
};

export default App;