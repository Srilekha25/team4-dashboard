import React, { useEffect } from "react";
import { useState } from "react";
import { getCodeWarsByUser } from "../../services/post-services";

const SearchBar = () => {
  //Sets input value
  const [inputValue, setInputValue] = useState("");
  const [selectInput, setSelectInput] = useState("01");
  //Sets the search term
  const [initialSearchTerm, setSearchTerm] = useState("");
  //Set loading state
  const [loading, setLoading] = useState(false);
  //Set Error State
  const [error, setError] = useState(false);

  //Handles change in input
  const handleChange = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value);
  };

  const handleClick = (e) =>{
    e.preventDefault();
    console.log(e.target.value)
    setSelectInput(e.target.value);
  }

  //Sets Search term for API call
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  useEffect(()=>{
    if(selectInput==="01"){
        setLoading(true)
        getCodeWarsByUser(initialSearchTerm).then((data)=>{
            console.log("data",data);
        })
    }else{
        //needs to call for hackerRank
    }
  }, [initialSearchTerm])

  return (
    <div>
      <div>
        <input
          
          onChange={handleChange}
          type="text"
          id="input__text"
          placeholder="Enter a username"
          required
        />
        <select onClick={handleClick}>
          <option value="01">Codewars</option>
          <option value="02">HackerRank</option>
        </select>
        <button onClick={handleSubmit}>Search</button>        
      </div>
    </div>
  );
};

export default SearchBar;
