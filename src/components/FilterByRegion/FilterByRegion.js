import React from "react";
import "./FilterByRegion.css";
// import Select from 'react-select';


// const region = [
//     { label: "Africa", value: 1 },
//     { label: "Americas", value: 2 },
//     { label: "Asia", value: 3 },
//     { label: "Europe", value: 4 },
//     { label: "Oceania", value: 5 },
//     { label: "Snakes", value: 6 },
//     { label: "Polar", value: 6 },
//   ];

//   region.map(opt => ({ label: opt, value: opt }));

const FilterByRegion = ({handleListChange}) => {
    return(
        <div className="filter">
            <select  id="searchRegion" className="filter" onChange={handleListChange}>
                <option defaultChecked value={"All"}>Filter by Region</option>
                <option value={"Africa"}>Africa</option>
                <option value={"America"}>America</option>
                <option value={"Asia"}>Asia</option>
                <option value={"Europe"}>Europe</option>
                <option value={"Oceania"}>Oceania</option>
            </select>

            {/* <Select options={region} onChange={opt => (opt.label, opt.value)} /> */}
        </div>
    )
}

export default FilterByRegion;