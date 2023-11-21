import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';

function Wishlist() {

   const wishlistArray = useSelector((state)=>state.wishlistReducer)
   const dispatch = useDispatch()
   const handlewishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))

   }
  return (
    <>
         <div className='ms-5 me-3' style={{marginTop:'150px'}}>

         <Row className='m-5'>
        { wishlistArray?.length > 0?
        wishlistArray?.map((item)=>(
          <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card style={{ width: '18rem', boxShadow: '5px 5px lightblue, 10px 10px pink, 15px 15px white' }} >
          <Card.Img variant="top" src={item.image} style={{height:'200px'}} />
          <Card.Body>
            <Card.Title>{item.title.slice(0,20)}</Card.Title>
            <Card.Text>
            <p> {item.description.slice(0,60)}</p>
            <p className='fw-bolder'>Price: ₹{item.price}</p>
            </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=>dispatch(removeFromWishlist(item.id))}  variant="outline-danger btn rounded"><i class="fa-solid fa-trash fs-4"></i></Button>
          <Button onClick={()=>handlewishlist(item)} variant="outline-primary btn rounded"><i class="fa-solid fa-cart-plus fs-4"></i></Button>
        </div>

      </Card.Body>
    </Card>
      </Col>)):
      <div style={{height:'100vh'}} className='d-flex flex-column  justify-content-center align-items-center'>
      <img height={'300px'} src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif" alt="No image" />
      <h4 className='text-danger fw-bolder mt-1'>Your Wishlist is Empty</h4>
      <button className='btn btn-primary rounded mt-2'><Link style={{textDecoration:'none',color:"white"}} to={'/'}>Back to Home</Link></button>
      </div>
       }
      
    </Row>

          </div> 

     </>
  )
}

export default Wishlist