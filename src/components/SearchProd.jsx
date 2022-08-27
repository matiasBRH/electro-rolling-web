import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchProd = () => {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
        navigate(`/search/${inputValue}`);
        // buscarBlog(inputValue).then((respuesta) => {
        //   console.log(respuesta);
        //   navigate(`/search/${inputValue}`);
        // });
        }
    };


    return (

        <form className="input-group " onSubmit={handleSubmit}>
            <input type="search" className="form-control" placeholder="Buscar" aria-label="Search" aria-describedby="button-addon2" value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}></input>

            <button className="btn btn-success" type="button" id="button-addon2"><i className="fa fa-search" aria-hidden="true"></i></button>

            {/* <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/> */}
            {/* <button className="btn btn-outline-success" type="submit" onClick={handleClick}><i class="fa fa-search fa-2x" aria-hidden="true"></i></button> */}
        </form>
    )
}

export default SearchProd