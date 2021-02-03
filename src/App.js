import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBox from "./components/SearchBox/SearchBox";
// import FilterByRegion from "./components/FilterByRegion/FilterByRegion";
import "./App.css";
import CardList from "./components/CardList/CardList";

 
 class App extends Component{
    constructor() {
        super()
        this.state = {
            countries : [],
            searchfield: '',
            region : ""
        }

    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response=> 
            response.json())
        .then(json=> {
            this.setState({
                countries : json
            })
        });
            
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
    };
    
    handleListChange = (event) => {
        if(event.target.value !== "All"){
            this.setState({
                region: event.target.value
            })
        }
      };

    render(){
        let {searchfield, countries} = this.state;
        let filteredCountries = countries;
        let region = this.state.region.trim().toLowerCase();

        
        
        if (region > 0) {
          filteredCountries =  countries.filter(country =>  {
              
            return country.name.toLowerCase().includes(region.toLowerCase())
                // return country['region'].toLowerCase().match(region);
                
            });
            
                
        }
        
        //  this.state.countriesByRegion =  region.map(opt => ({ label: opt, value: opt }));
         
        
         filteredCountries = countries.filter(country => {
            return country.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return(
            <div>
                
                <Navbar />
                <div className="searchBar">
                <SearchBox searchChange={this.onSearchChange} />
                <div className="filter">
                    {/* <FilterByRegion  handleListChange={this.handleListChange}/> */}
                    {/* <Select options={region} onChange={opt  => 
                        (opt.label, opt.value)} /> */}

            <select  id="searchRegion" className="filter" onChange={this.handleListChange}>
                <option defaultChecked value={"All"}>Filter by Region</option>
                <option value={"Africa"}>Africa</option>
                <option value={"Americas"}>America</option>
                <option value={"Asia"}>Asia</option>
                <option value={"Europe"}>Europe</option>
                <option value={"Oceania"}>Oceania</option>
            </select>
                </div>
            </div>

            <div>
                <CardList countries={filteredCountries} />
                
            </div>
            
            </div>
            
        )
    }
}
export default App;