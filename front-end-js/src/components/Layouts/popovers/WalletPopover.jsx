import { Apps } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton, useTheme } from "@mui/material";
import FlexBox from "components/FlexBox";
import { H6, Tiny } from "components/Typography";
import { Fragment, useRef, useState } from "react";
import PopoverLayout from "./PopoverLayout"; // dummy  data
import { Button, Card, Grid, Modal, styled } from "@mui/material";
import { FormControl, FormControlLabel, Switch, FormGroup } from '@mui/material';
import { ethers } from "ethers";
import React from 'react';
import { login } from 'utils/loginuser';
import { createProfile } from 'utils/create-profile';
import toast from "react-hot-toast";
import { StyledEngineProvider } from "@mui/styled-engine-sc";


const services = [{
  id: "5e8883f7ed1486d665d8be1e",
  title: "Skillwallet",
  body: "A wallet that proof your community contribution",
  image: "/static/daohack/skillwallet.png"
}
  ,
{
  id: "5e8883fca0e5432144248ecf",
  title: "Connect Lens",
  body: "Connect with Lens Profile",
  image: "/static/daohack/lens.png"

}
  , {
  id: "5e8883fca0e8612044248ecf",
  title: "Discord",
  body: "Community Engagement",
  image: "/static/daohack/discord.svg"
}


];

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

/*Use like so*/

async function timeSensativeAction(){ //must be async func
  //do something here
  await sleep(5000) //wait 5 seconds
  //continue on...
}

async function lensOperation() {
  toast("Logging in to Lens.");
  await sleep(1000)
  
  login();
  toast.success("Login to Lens Successfully!");
  console.log("Login SuccessFul");
  await sleep(2000)
  
 
  await sleep(2000)
  const createProfileRequest = {
      "handle": "devABTest001",
      "profilePictureUri": null,
      "followNFTURI": null,
      "followModule": null
    };


  const profile = await createProfile(createProfileRequest).catch(error => 
    {
      toast.error("Something wrong with Lens Operation. Please try again later.");
    });
    toast.success("Profile created successfully.");
  await sleep(2000)

  console.log("Profile created successfully", profile);
}


const WalletPopover = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);



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
    const accounts = await provider.send("eth_requestAccounts", []).then((result) => {
      setWalletAddress(result[0].slice(0, 8) + "...");
    });
    console.log(accounts);
    // await console.log(accounts[0]);
    // setWalletAddress(accounts[0]);

  }

  async function disconnect_metamask() {
    console.log('disconnecting');
    // window.ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);

    const accounts = await provider.send("eth_requestAccounts",
      [{ eth_accounts: {} }]).then((result) => {
        setWalletAddress(result[0]);
      });
  }




  return <Fragment>
    <IconButton ref={anchorRef} onClick={() => setOpen(true)}>


      {walletAddress.length > 0 ?
        <Badge color="error" badgeContent={0}>
          <Apps sx={{
            color: "text.disabled"
          }} />
          {walletAddress}
        </Badge>
        :
        <Button variant="contained" onClick={metamask}>Connect wallet</Button>
      }

    </IconButton>

    <PopoverLayout hiddenViewButton popoverOpen={open} anchorRef={anchorRef} title="DAO Services" popoverClose={() => setOpen(false)}>
      {services.map(service => <ListItem service={service} key={service.id} />)}
    </PopoverLayout>
  </Fragment>;
}; // -----------------------------------------------------------------


function ListItem({
  service
}) {
  const theme = useTheme();
  const colorbg = theme.palette.mode === "light" ? "secondary.light" : "divider";
  return <FlexBox p={2} alignItems="center" sx={{
    cursor: "pointer",
    "&:hover": {
      backgroundColor: colorbg
    }
  }}>
    <Avatar src={service.image} sx={{
      width: 35,
      height: 35
    }} />

    <Box ml={2} onClick={lensOperation}>
      <H6>{service.title}</H6>
      <Tiny display="block" fontWeight={500} color="text.disabled">
        {service.body}
      </Tiny>
    </Box>
  </FlexBox>;
}

export default WalletPopover;