import React from "react";
import Card from "../Card/Card";
import "./cardList.css";

const CardList = ({countries}) => {
    
    return(
        <div className="cardList">
            {
                
                countries.map((country, i) => (
                    <Card key={i}
                          name={country.name}
                          population={country.population}
                          region={country.region}
                          capital={country.capital}
                          flag={country.flag}/>
                ))
                
            }
            
        </div>
    )
}

export default CardList;