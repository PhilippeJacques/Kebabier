import React, { useState, useEffect } from 'react'
import check from "../images/checked.png"
import './Item.css'



const Item = ({ item, addToCart }) => {
  
  const OrderContext = React.createContext();

  
    const [checked, setChecked] = useState(false);
    const { name, image, price } = item;
    const [count, setCount] = useState(0);
    const [order, setOrder] = useState([]);
    // const formattedPrice = `${parseInt(price / 100)}€${price % 100 || ""}`

    const Twoaction=() =>{
      addToCart(item);
    setOrder(item)
      setChecked(true);
      setCount(count + 1);
      if( count % 2 != 0 ){
        setChecked(false);
      }
      
      
    }
    

    

    return (
        
            <div className="pain" 
            onClick={() => Twoaction()}
            >
       {checked ?        <img
               className="imagecheck"
          src={check}
          alt={name}
          
        /> : ""} 
                <img
               className="image"
          src={image}
          alt={name}
          
        />
          
        <p className="thistext">{name}</p> 
                </div>
               
      
    )
}

export default Item
