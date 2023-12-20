import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {


const cartArray = useSelector((state)=>state.cartReducer)
/* console.log(cartArray); */

const dispatch = useDispatch()
const [totel, setTotel]=useState(0)
const navigate = useNavigate()

//function to find tehe sum of given array

const getTotel =()=>{
if(cartArray.length>0){
  setTotel(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
}
else{
  setTotel(0)
}
}
console.log(totel);

useEffect(()=>{
  getTotel()
},[cartArray])


const handlecart =()=>{
  alert('Thankyou..... Your Order Placed Successfull....')
  dispatch(emptyCart())
  navigate('/')



}

  return (
    <div style={{marginTop:'200px',}}>
      
     { cartArray?.length>0? 
     <div className='row w-200'>
     
          <div className='col-lg-6 m-5'>
      <table className='table shadow border'>
        <thead>
          <tr>
           <th>#</th>
           <th>product</th>
           <th>image</th>
           <th>Price</th>
           <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {cartArray?.map((item,index)=>(<tr>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td><img style={{width:'100px',height:'100px'}} src={item.thumbnail} alt="no image" /></td>
            <td>$ {item.price}</td>
            <td> <Button onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-danger"><i class="fa-solid fa-trash "></i> </Button></td>
          </tr>))
          }
        </tbody>
      </table>
      <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" height={'200px'} alt="no image" />
        <h3 className='text-danger fw-bolder'>Your Cart is empty</h3>
       <button className='btn btn-success mt-2'> <Link style={{textDecoration:'none',color:'white'}} to ={'/'}> <i class="fa-solid fa-arrow-left"></i> Back to Home </Link></button>
      
       </div>
      }
      </div>

      <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column' style={{marginBottom:'800px',}}>
        <div className='border shadow p-5'>
          <h3 className='text-success'>Cart Summary</h3>
          <h4>Totel numbers of products : <span className='fw-bolder fs-2 text-warning'>{cartArray.length}</span></h4>
          <h4> Totel Price : <span className='fw-bolder fs-2 text-warning'> $ {totel}</span></h4>
          <button onClick={handlecart} className='btn btn-success rounded w-100 mt-3'>Checkout</button>

        </div>
      </div>
      
      
      
      </div>:
       
       <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" height={'200px'} alt="no image" />
        <h3 className='text-danger fw-bolder'>Your Wishlist is empty</h3>
       <button className='btn btn-success mt-2'> <Link style={{textDecoration:'none',color:'white'}} to ={'/'}> <i class="fa-solid fa-arrow-left"></i> Back to Home </Link></button>
      
       </div>
}

    </div>
  )
}

export default Cart