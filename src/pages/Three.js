import React, { useState, useEffect }  from 'react';
import './One.css';
import LogoKabab from "../images/Logo-MagicKebab.png"
import Accomp from "../models/Item"
import { useHistory } from "react-router-dom";


const Three = () => {
  const [accomps, setAccomp] = useState([])
  const history = useHistory();


  useEffect(() => {
    fetch("https://run.mocky.io/v3/d8f0f6c4-3fea-4c1f-9019-ce796ff38112")
      .then(res => res.json())
      .then(res => setAccomp(res))
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
                <div className="montext">Salades, Tomates, Oignons ?</div>
                <div className="card">
                {accomps.map(accomp => (
          <Accomp key={accomp.name} item={accomp}  />
          
        ))}</div>
         <div className="buttonone" onClick={()=> history.push("/four")}>Continuer</div>
                <div className="titrekebab">MAGIC KEBAB</div>
            
            </div>
        </>
    )
}

export default Three
