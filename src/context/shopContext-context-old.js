import {createContext, useState} from "react";

export const ShopContextContextOld = createContext(null);
export  const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState([]);
    const addToCart = (itemId)=>{
        if (!cartItems?.find((item)=> item.id === itemId)){
            setCartItems([...cartItems,{id:itemId,count:1}])
        }else {
            setCartItems(cartItems.map((item)=> {
                if (item.id === itemId){
                    return {...item,count:item.count + 1};
                }else {
                    return item;
                }
            }))
        }

console.log(cartItems)
    }
    const removeToCart = (itemId)=>{
        setCartItems(cartItems.map((index)=>{
            if (index.id === itemId){
                return{...index,count: index.count===0 ? 0 : index.count-1};
            }else {
                return index;
            }
        }))

    }
    const contextValue = {cartItems,addToCart,removeToCart}
    return <ShopContextContextOld.Provider value={contextValue}>{props.children}</ShopContextContextOld.Provider>
}