import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const HeaderComponents = () => {
  const navData = [
    {name: "Home", link: "/",},
    {name: "Movies", link: "/movies"},
    {name: "TVSeries", link: "/series"},
    {name: "Search", link: "/search"},
    {name: "Contact Us", link: "/contact"},
    {name: "About", link: "/about"}
  ];
  return (
    <>
      <header className="header">
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand>My Entertainment</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarscroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-aut my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarscroll
              >
                {
                    navData.map((item)=>{
                        return(
                            <nav key={item.name}>
                                <Link to={item.link}>
                                {item.name}

                                </Link>
                            </nav>
                        )
                    })
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default HeaderComponents;
