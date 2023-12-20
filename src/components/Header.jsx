import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
// to access state useselector hook is used
const wishlist =useSelector((state)=>state.wishlistReducer) //here the state represent store
/* console.log(wishlist); */
const cart = useSelector((state)=>state.cartReducer)

  return (
    <Navbar expand="lg" className="bg-dark position-fixed top-0 w-100" style={{zIndex:'1'}} >
    <Container >
      <Navbar.Brand><Link style={{textDecoration:'none',color:'white',fontWeight:'bolder',fontFamily:'monospace',fontSize:'30px'}}  to ={'/'}><i class="fa-solid fa-cart-shopping fa-flip me-2 "></i>C-Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded me-2 mt-3' ><Link  style={{textDecoration:'none',color:'white'}}  to ={'/wishlist'}> <i class="fa-solid fa-heart " style={{color:'red'}}></i> WishList <Badge bg="warning">{wishlist.length}</Badge></Link></Nav.Link>
          <Nav.Link className='btn border rounded me-2 mt-3'><Link   style={{textDecoration:'none',color:'white'}}  to ={'/cart'}><i class="fa-solid fa-cart-shopping "></i> Cart <Badge bg="warning">{cart.length}</Badge> </Link></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header


