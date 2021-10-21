import React, { useState, useEffect }  from 'react';
import './Four.css';
import LogoKabab from "../images/Logo-MagicKebab.png"
import Checkout from '../components/Checkout';

import Sauce from "../models/Item"
import { useHistory } from "react-router-dom";




const Four = () => {
  const [sauces, setSauces] = useState([])
  const [checkout, setCheckout] = useState([])

  const history = useHistory();


  useEffect(() => {
    fetch("https://run.mocky.io/v3/4bef230f-fb4c-47fb-b8b5-d75d83bbc764")
      .then(res => res.json())
      .then(res => setSauces(res))
  }, [])


  const addToCart = kebab => {
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
                {sauces.map(sauce => (
          <Sauce key={sauce.name} item={sauce} addToCart={addToCart}  />
          
        ))}</div>
         <div className="buttoninone"   >Continuer</div>
         <Checkout checkout={checkout} />

                <div className="titrekebab">MAGIC KEBAB</div>
            
            </div>
        </>
    )
}

export default Four
