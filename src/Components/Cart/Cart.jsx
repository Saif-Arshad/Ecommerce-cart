"use client"

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import "@/Stylesheets/Cart.css"
import { showCart, removeCartItem } from '@/Redux/feature/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function TemporaryDrawer() {
 const cartVisibility = useSelector(state => state.cart.cartSection);
 const dispatch = useDispatch();
 const cartData= useSelector(state => state.cart);
 const cartOrder = cartData.cart;
 const cartPrice = cartData.totalPrice;
 
 const deleteHandler = (item) => {
  const deleteReq = window.confirm(`Are you sure you want to delete ${item.title}`);
  if (deleteReq) {
    dispatch(removeCartItem(item));
  }
};
 const DrawerList = (
   <div className='cart-main'>
     <div>
       <h1 className='cart'>Cart</h1>
       <h3 className='price'>Total:{cartPrice} PKR </h3>
     </div>
     {Object.keys(cartOrder).length ? 
       <div className='main-item-container'>
         {cartOrder.map((item, index) => (
           <div key={index} className='main-cart-items'>
             <img src={`${item.thumbnail}`} className=''/>
             <div className='cart-text'>
               <span className='cart-Title'>{item.title}</span>
               <span className='price'>Price: {item.price}PKR</span>
               <span className='price'>Quantity: {item.quantity}</span>
               <Button className='delete-btn' onClick={() => deleteHandler(item)} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
             </div>
           </div>
         ))}
       </div>
       :
       <p className='empty-Cart'>Your Cart is Empty</p>
     }
   </div>
 );

 return (
   <div>
     <Drawer open={cartVisibility} onClose={() => dispatch(showCart(false))}>
       {DrawerList}
     </Drawer>
   </div>
 );
}
