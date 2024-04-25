"use client"

import React from 'react';
import AppBar from '@mui/material/AppBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import { StyledEngineProvider } from '@mui/material/styles';
import '@/Stylesheets/header.css'
import { showCart,showFav } from '@/Redux/feature/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


function Header() {
 const cartVisibility =  useSelector((state)=>state.cart.cartSection)
 const cartFavorites =  useSelector((state)=>state.cart.showFav)
 const cartData= useSelector(state => state.cart);
 const cartOrder = cartData.cart;
 const Favorites = cartData.Favorite;

 const dispatch = useDispatch()
 const cartHandler=()=>{
   if(cartVisibility){
     dispatch(showCart(false))
    }
    else{
      dispatch(showCart(true))
      
    }
    
  }
 const FavHandler=()=>{
   if(cartFavorites){
     dispatch(showFav(false))
    }
    else{
      dispatch(showFav(true))
      
    }
    
  }
  console.log(Favorites.length)
  return (
       <StyledEngineProvider injectFirst>
    <AppBar className='header'>
      <Box
        component="img"
        src="./light.png" 
        alt="The house from the offer."
      />
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>FAQ</li>
        <li>Contact</li>
        </ul>
    <div className='header-icons'>

        <Tooltip title="Cart">
    <Badge badgeContent={cartOrder.length} color="primary">
    <IconButton onClick={cartHandler}> 
        <ShoppingCartCheckoutIcon/>
      </IconButton>
        </Badge>
        </Tooltip>
        <Tooltip title="Favorite items">
    <Badge badgeContent={Favorites.length} color="primary">
    <IconButton onClick={FavHandler}>
        <FavoriteBorderIcon/>
      </IconButton>
        </Badge>
        </Tooltip>
    </div>
    </AppBar>
     </StyledEngineProvider>
  );
}

export default Header;
