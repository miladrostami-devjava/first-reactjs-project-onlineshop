import {useContext} from "react";
import {ShopContext} from "../../context/shopContext-New";

const Product = (props)=>{
    const  {id,productName,price,productImage} = props.data;
    const {cartItems,addToCart,removeToCart}  = useContext(ShopContext)
    const isInCart = cartItems?.some((item)=> item.id === id)


    return (
        <div key={props.data} className="col-3" >
            <img src={productImage} className="w-100"/>
           <h5> {productName}</h5>
            <p>price : {price} $</p>
            <button className="btn btn-info btn-sm" onClick={()=>addToCart(id)}>+</button>
            <span className="mx-1">{cartItems?.filter((row)=> row.id === id)[0]?.count}</span>
            { isInCart && <button className="btn btn-info btn-sm" onClick={()=>removeToCart(id)}>-</button>}
        </div>
    )
}
  export default Product;