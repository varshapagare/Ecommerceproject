import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TopMenu=()=>{
 const MyData=useSelector((state)=>state.addCart.cart);
 console.log(MyData);
 const DataCount= MyData.length;
 const navigate= useNavigate();


 const myCart=()=>{
  navigate("/mycart");
 }



  return(
        <>
        <div id="topmenu">
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
           <img src={logo} />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="home">Home</Nav.Link>
            <Nav.Link  to="home">Searvices</Nav.Link>
            <Nav.Link  to="home">Products</Nav.Link>
            <Nav.Link  to="home">Watches</Nav.Link>
            <Nav.Link  to="home">Sale</Nav.Link>
            <Nav.Link  to="home">Blog</Nav.Link> 
            <NavDropdown title="Category" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="kidswatches"> Kids Watches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Mens Watches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Girls Watches</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Premium Watches
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
            <IoSearch />
            </Nav.Link>
            <Nav.Link href="#deets">
            <FaUser />
            </Nav.Link>
            <Nav.Link  href="#memes">
            <a href='#' onClick={myCart}>
            <FaShoppingCart />
            </a>
            


             {DataCount<=0?"": 
             <span style={{padding:"2px", borderRadius:"50%", marginLeft:"5px", border:"1px solid grey", backgroundColor:"lightblue"}}> {DataCount}</span> }
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
        </>
    )
}

export default TopMenu;