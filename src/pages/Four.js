import React, { useState, useEffect }  from 'react';
import './Four.css';
import LogoKabab from "../images/Logo-MagicKebab.png"

import Sauce from "../models/Item"
import { useHistory } from "react-router-dom";




const Four = () => {
  const [sauces, setSauces] = useState([])
  const history = useHistory();


  useEffect(() => {
    fetch("https://run.mocky.io/v3/4bef230f-fb4c-47fb-b8b5-d75d83bbc764")
      .then(res => res.json())
      .then(res => setSauces(res))
  }, [])

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
          <Sauce key={sauce.name} item={sauce}  />
          
        ))}</div>
         <div className="buttoninone"   >Continuer</div>
                <div className="titrekebab">MAGIC KEBAB</div>
            
            </div>
        </>
    )
}

export default Four
