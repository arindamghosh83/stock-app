import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import { Nav, Navbar, NavDropdown} from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {setStockTicker, changePreference, login} from '../../actions/action';
import classes from './Navigation.module.css'


const Navigation = props => {
    const [search, setSearch] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const authenticateHandler = () => {
      props.login(userName, password);
    }
    // const clickHandler = (eventKey, event) => {
    //     console.log('event fired',eventKey, event);
    //     props.changePreference(eventKey);
    // }
    return (
        <div>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
        <Form.Label htmlFor="userName" srOnly>
          Name
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="userName"
          placeholder="User Name" value={userName} onChange={event => setUserName(event.target.value)}
        />
        <Form.Label htmlFor="password" srOnly>
          Password
        </Form.Label>
        <Form.Control className="mb-2 mr-sm-2" id="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}  />
        <Button onClick={authenticateHandler} className={"mb-2 " + (props.loggedIn ? classes.hidden : classes.show)} >
        Login
      </Button>
        <h3 className={props.loggedIn ? classes.show : classes.hidden}>{`Hi ${props.username}`}</h3>
        </Form>
        <Nav className="ml-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" onClick={(e)=> clickHandler(e)}>
            <NavDropdown.Item href="#action/3.1">Open</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">High</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Low</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Close</NavDropdown.Item>
          </NavDropdown> */}
          {/* <Dropdown navbar={true} onSelect={(eventKey, event)=> clickHandler(eventKey,event)}> */}
          <Dropdown navbar={true}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Preferences
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {/* <Dropdown.Item href="open"><Link to='/open'>Open</Link></Dropdown.Item> */}
                <Dropdown.Item as="button"><Link to='/preference/open'>Open</Link></Dropdown.Item>
                <Dropdown.Item as="button"><Link to='/preference/high'>High</Link></Dropdown.Item>
                <Dropdown.Item as="button"><Link to='/preference/low'>Low</Link></Dropdown.Item>
                <Dropdown.Item as="button"><Link to='/preference/close'>Close</Link></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Nav>
        <Form inline>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={event => setSearch(event.target.value)} />
          {/* <Button variant="outline-success" onClick={searchHandler}>Search</Button> */}
          <Button variant="outline-success"><Link to={`/newSearch/${search}`}>Search</Link></Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
        </div>
    )
}

const mapStatetoProps = state => ({
  loggedIn: state.auth.loggedIn,
  username: state.auth.username
})
  


export default connect(mapStatetoProps, {login})(Navigation);