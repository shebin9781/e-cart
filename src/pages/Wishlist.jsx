import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTowshlist, removeFromwishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {

const WishlistArray = useSelector((state)=>state.wishlistReducer)
console.log(WishlistArray);
const dispatch =useDispatch()

const hendlewishlist =(item)=>{
  dispatch(addToCart(item))
  dispatch(removeFromwishlist(item.id))
}

  return (
    <div>
      <Row className='m-5 me-3' style={{marginTop:'100px'}}>
     {WishlistArray?.length>0?
     WishlistArray?.map((item)=>(
      <Col style={{marginTop:'100px'}} className='mb-5'sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '18rem' , boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
        <Card.Body>
          <Card.Title className='fw-bolder'>{item.title.slice(0,20)}..</Card.Title>
          <Card.Text>
            <p>{item.description.slice(0,40)}...</p>
            <p className='fw-bolder'>price: ₹ {item.price}</p>
          </Card.Text>
          <div className='d-flex align-items-center justify-content-between'>
            <Button onClick={()=>dispatch(removeFromwishlist(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash"></i></Button>
            <Button onClick={()=>hendlewishlist(item)} variant="outline-success btn rounded "><i class="fa-solid fa-cart-plus"></i></Button>
          </div>
        </Card.Body>
      </Card>
      </Col>
     ))

    : <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      <img height={'300px'} src="https://limasy.com/img/empty-animation1.gif" alt="on image" />
      <h4 className='text-danger fw-bolder'>Your wishlist is empty</h4>
      <button className='btn btn-success rounded mt-3'><Link style={{textDecoration:'none', color:'white'}} to={'/'}> Back to Home</Link></button>
    </div>
    }
   </Row>
    </div>
  )
}

export default Wishlist