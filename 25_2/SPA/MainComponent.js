import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import EmployeeListComponent from "../productAPI/ProductListComponent";
import UpdateComponent from "./UpdateComponent";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Shantanu"
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent></HeaderComponent>
                    <ContentComponent></ContentComponent>
                    <FooterComponent></FooterComponent>
                </div>
            </BrowserRouter>
        )
    }
}

function ContentComponent() {
    return (
        <div style={{ border: "1px solid red", padding: "10px", margin: "10px", height: "600px", overflow: "auto" }}>
            <Route exact path="/" component={EmployeeListComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Route exact path="/help" component={HelpComponent}></Route>
            <Route exact path="/update/:userId" component={UpdateComponent}></Route>
        </div>
    )
}

function HeaderComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ProductCatalog</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link style={{ margin: "10px" }} to="/">Home</Link>
                        <Link style={{ margin: "10px" }} to="help">Help</Link>
                        <Link style={{ margin: "10px" }} to="about">About</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

function FooterComponent() {
    return <h3>This is Footer Component</h3>
}

function AboutComponent() {
    return <h3>This is About Component</h3>
}

function HelpComponent() {
    return <h3>This is Help Component</h3>
}