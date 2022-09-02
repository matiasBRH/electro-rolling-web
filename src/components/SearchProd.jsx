import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SearchProd = () => {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
        navigate(`/search/${inputValue}`);
        }
    };

    const searchButton=()=>{
        if (inputValue) {
            navigate(`/search/${inputValue}`);
            }
    }


    return (

        <form className="input-group " onSubmit={handleSubmit}>
            <input type="search" className="form-control" placeholder="Buscar" aria-label="Search" aria-describedby="button-addon2" value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}></input>
            <button className="btn btn-success" type="button" id="button-addon2" onClick={searchButton}><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
    )
}

export default SearchProd