import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import EmployeeListComponent from "../productAPI/ProductListComponent";
import UpdateComponent from "./UpdateComponent";
import AddComponent from "./AddComponent";
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
                    <ContentComponent pushHome={this.pushHome}></ContentComponent>
                    <FooterComponent userName={this.state.userName}></FooterComponent>
                </div>
            </BrowserRouter>
        )
    }
}

function ContentComponent(props) {
    return (
        <div style={{ backgroundColor:"gray", padding: "20px", height: "600px", overflow: "auto" }}>
            <Route exact path="/" component={EmployeeListComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Route exact path="/help" component={HelpComponent}></Route>
            <Route exact path="/update/:userId" component={UpdateComponent}></Route>
            <Route exact path="/add" component={AddComponent}></Route>
        </div>
    )
}

function HeaderComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">ProductCatalog</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link style={{ margin: "10px" }} to="/">Home</Link>
                        <Link style={{ margin: "10px" }} to="add">Add New</Link>
                        <Link style={{ margin: "10px" }} to="help">Help</Link>
                        <Link style={{ margin: "10px" }} to="about">About</Link>                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

function FooterComponent(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        Made by {props.userName}
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

function AboutComponent() {
    return <h3>This is About Component</h3>
}

function HelpComponent() {
    return <h3>This is Help Component</h3>
}