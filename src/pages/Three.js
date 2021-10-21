import React, { useState, useEffect }  from 'react';
import './One.css';
import LogoKabab from "../images/Logo-MagicKebab.png"
import Accomp from "../models/Item"
import { useHistory } from "react-router-dom";
import Checkout from '../components/Checkout';



const Three = () => {
  const [accomps, setAccomp] = useState([])
  const [checkout, setCheckout] = useState([])

  const history = useHistory();



  useEffect(() => {
    fetch("https://run.mocky.io/v3/d8f0f6c4-3fea-4c1f-9019-ce796ff38112")
      .then(res => res.json())
      .then(res => setAccomp(res))
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
                <div className="montext">Salades, Tomates, Oignons ?</div>
                <div className="card">
                {accomps.map(accomp => (
          <Accomp key={accomp.name} item={accomp} addToCart={addToCart} />
          
        ))}</div>
         <div className="buttonone" onClick={()=> history.push("/four")}>Continuer</div>
         <Checkout checkout={checkout} />
                <div className="titrekebab">MAGIC KEBAB</div>
            
            </div>
        </>
    )
}

export default Three
