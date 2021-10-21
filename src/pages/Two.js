import React, { useState, useEffect }  from 'react';
import './Two.css';
import LogoKabab from "../images/Logo-MagicKebab.png"
import Viande from "../models/Item"
import { useHistory } from "react-router-dom";


const Two = () => {
  const [viandes, setViandes] = useState([])
  const history = useHistory();


  useEffect(() => {
    fetch("https://run.mocky.io/v3/af1894a5-d6fb-48cb-9aad-298d82cab005")
      .then(res => res.json())
      .then(res => setViandes(res))
  }, [])

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
          <Viande key={viande.name} item={viande}  />
          
        ))}</div>
        <div className="buttonone"  onClick={()=> history.push("/three")} >Continuer</div>
                <div className="titrekebab">MAGIC KEBAB</div>
            
            </div>
        </>
    )
}

export default Two
