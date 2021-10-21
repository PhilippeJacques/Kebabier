import React, { useState, useEffect }  from 'react';
import './One.css';
import LogoKabab from "../images/Logo-MagicKebab.png"
import Pain from "../models/Item"
import Checkout from '../components/Checkout';
import { useHistory } from "react-router-dom";


const One = () => {
    const [pains, setPain] = useState([])
    const [checkout, setCheckout] = useState([])
    const history = useHistory();

    useEffect(() => {
        fetch("https://run.mocky.io/v3/d3562337-9bcc-45af-9c7d-4076860c2b03")
          .then(res => res.json())
          .then(res => setPain(res))
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
            <div className="appone">
                <div className="logoone">
                <nav >
        <img
          height="100px"
          src={LogoKabab}
          alt="Logo le bon burger"
          
        />
       
      </nav>  
                </div>
              
                <div className="montext">Pain ou galette ?</div>
                <div className="card">
                {pains.map(pain => (
          <Pain key={pain.name} item={pain}   addToCart={addToCart} />
          
        ))}</div>
      <div className="buttonone" onClick={()=> history.push("/two")}  >Continuer</div>
                <div className="titrekebab">MAGIC KEBAB</div>
                  
                <Checkout checkout={checkout} />
      
            </div>
        </>
    )
}

export default One
