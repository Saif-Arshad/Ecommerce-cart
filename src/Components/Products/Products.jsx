/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addCart,addFav } from "@/Redux/feature/cartSlice"
import '@/Stylesheets/Product.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Products() {

    const products = useSelector((state)=>state.cart.item)
    const dispatch = useDispatch()

    return(
        <div className="main-box">
        <h1 className="main">Products</h1>
        <div className="mainCards">
            {
                products.map((item,index) =>(
                    <div key={index} 
                    className="card " >
                        <img 
                       
                            src={`${item.thumbnail}`}
                         
                            alt={`${item.title}`}
                       />
                        <div >
                    <h1 >{item.title}</h1>
                    <p>{item.description}</p>
                    <p className="text-xl text-purple-700 font-bold "> Price: {item.price}</p>
               <div className="buttons">
      <Button variant="outlined" 
         onClick={()=>dispatch(addCart(item))}
      startIcon={<AddShoppingCartIcon />}>
  Add to Cart
</Button>
      <Button variant="outlined"
         onClick={()=>dispatch(addFav(item))}
      startIcon={<FavoriteBorderIcon />}>
  Add to Favorite
</Button>
</div> 
                    </div>
                    </div>
                ))
            }
        </div>
</div>
    )

}

export default Products;