import React, { useState } from "react";

import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Header = () => {
  const [error, setError] = useState();
  const [account, setAccount] = useState();
  const connectWallet = () => {
    console.log("jkdcbhdscbhd");
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          console.log({ result });
          setAccount(result[0]);
          localStorage.setItem({ walletData: account });
        });
    } else {
      setError("install metamask");
    }
  };
  console.log({ account });
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Slashiee</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/my-dashboard">My dashboard</Nav.Link>
              <Nav.Link href="/add-a-request">Add a Request</Nav.Link>
              <Nav.Link href="/add-a-service">Add a Service</Nav.Link>
            </Nav>
            <Nav>
              {account === undefined && (
                <Button onClick={connectWallet}>Connect</Button>
              )}
              {account && <div>{account}</div>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
