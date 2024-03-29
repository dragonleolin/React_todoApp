import React from 'react';
import {
    Navbar,
    Button,
    Nav,
    Form,
    FormControl,
  } from 'react-bootstrap'
  import { LinkContainer } from 'react-router-bootstrap'

const MyNavbar = ()=>{
    return(
        <>
         <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Router路由</Navbar.Brand>
            <Nav className="mr-auto">
            <LinkContainer to='/' exact>
            <Nav.Link>首頁</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/news' exact>
            <Nav.Link >新聞</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact' exact>
            <Nav.Link href="#pricing">聯絡</Nav.Link>
            </LinkContainer>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        </>
    )
}

export default MyNavbar