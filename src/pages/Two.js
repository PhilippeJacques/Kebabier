import React, { useState, useEffect }  from 'react';
import './Two.css';
import LogoKabab from "../images/Logo-MagicKebab.png"
import Viande from "../models/Item"
import { useHistory } from "react-router-dom";
import Checkout from '../components/Checkout';



const Two = () => {
  const [viandes, setViandes] = useState([])
  const [checkout, setCheckout] = useState([])
  const history = useHistory();


  useEffect(() => {
    fetch("https://run.mocky.io/v3/af1894a5-d6fb-48cb-9aad-298d82cab005")
      .then(res => res.json())
      .then(res => setViandes(res))
  }, [])

  useEffect(() => {
    fetch("https://run.mocky.io/v3/d3562337-9bcc-45af-9c7d-4076860c2b03")
      .then(res => res.json())
      .then(res => setViandes(res))
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
                <div className="montext">Plutot viande ou Tofu ?</div>
                <div className="card">
                {viandes.map(viande => (
          <Viande key={viande.name} item={viande} addToCart={addToCart}  />
          
        ))}</div>
        <div className="buttonone"  onClick={()=> history.push("/three")} >Continuer</div>
        <Checkout checkout={checkout} />
                <div className="titrekebab">MAGIC KEBAB</div>
            
            </div>
        </>
    )
}

export default Two
