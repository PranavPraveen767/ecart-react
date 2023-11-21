import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer) //here state means store and it is predefined
  const cart = useSelector((state)=>state.cartReducer)

  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary-primary" fixed='top'>
      <Container>
        <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-cart-shopping fa-bounce me-1"></i>E-cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link className='btn border rounded border-secondary me-1'><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-heart me-1" style={{color:"#fa0000"}} ></i>Wishlist <Badge className='rounded ms-1' bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>

            <Nav.Link className='btn border rounded border-secondary'><Link to={'/cart'} style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-cart-shopping me-1" style={{color:"#f4eb01"}}></i>Cart <Badge className='rounded ms-1' bg="secondary">{cart.length}</Badge></Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  )
}

export default Header