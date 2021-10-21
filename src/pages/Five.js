import React, { useState, useEffect }  from 'react';
import './Four.css';
import LogoKabab from "../images/Logo-MagicKebab.png"
import Cart from "../components/Checkout"
import Sauce from "../models/Item"
import { useHistory } from "react-router-dom";
import Pain from "../models/Item"
// import checkout from '../components/Checkout';




const Five = () => {

    const [pains, setPain] = useState([])
    const [checkout, setCheckout] = useState([])

    const setOrder = kebab => {
        if (checkout.find(el => el.kebab.name === kebab.name)) {
          // Si le burger est deja dans le panier, on augmente la quantité
          const updatedCheckout = checkout.map(el =>
            el.kebab.name === kebab.name
              ? { ...el, quantity: el.quantity + 1 }
              : el
          )
          setCheckout(updatedCheckout)
        } else {
          // Sinon, on ajoute le burger avec une quantité de 1
          const updatedCheckout = [...checkout, { kebab, quantity: 1 }]
          setCheckout(updatedCheckout)
        }
      }
  

    return (
        <>
            <div className="apponefour">
                <div className="logoone">
                <nav >
        <img
          height="100px"
          src={LogoKabab}
          alt="Logo le bon burger"
          
        />
       
      </nav>
                </div>
                <div className="montext">Quelques Sauces?</div>
                <div className="card">
                {pains.map(saucey => (
          <Pain key={saucey.name} item={saucey}  />
          
        ))}</div>
          
                <div className="titrekebab">MAGIC KEBAB</div>
            
            </div>
        </>
    )
}

export default Five
