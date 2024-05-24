
import React, {useContext} from 'react'
import {PRODUCTS} from "../../data/products";
import {ShopContext} from "../../context/shopContext-New";
import Product from "../shop/product";

const  Cart = ()=>{
    const {cartItems} = useContext(ShopContext)
    return(
       <React.Fragment>
           <h1>Your Cart Item</h1>
           <div className='row'>
               {PRODUCTS.map((product)=> {
                 if (cartItems.some((index)=>index.id === product.id && index.count > 0)){
                     return <Product data={product} />
                 }

               })}
           </div>
       </React.Fragment>
    )

}
export default Cart;