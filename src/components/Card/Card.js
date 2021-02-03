import React from "react";
import "./Card.css";
// import CardDetail from "../CardDetail/CardDetail";



const Card = ({name,flag,capital,population,region}) => {
    
    
    return (
        
        
            <div className="card light-mode-elements  dib br3 pa3   grow" >
            
        
        
            
                
           <img src={flag} alt="Country Flag" style={{width:200, height:200}}/>
           
           <div className='pl3 info' >
               
                   
                    <h3>{name}</h3>
                    <p>Population:{population}</p>
                    <p>Region:{region}</p>
                    <p>Capital:{capital}</p>
                    
                    
        </div>
           
           
           
        </div>   
        
        
        
        
    )
}

export default Card;