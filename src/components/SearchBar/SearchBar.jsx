import React, { useEffect } from "react";
import { useState } from "react";
import { getCodeWarsByUser } from "../../services/post-services";
import styles from "./SearchBar.module.scss";
import searchLogo from "../../assets/search.svg";

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
  const[books, setBooks] = useState([]);


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
  const handleSubmit = () => {
    setSearchTerm(inputValue);
  };

  useEffect(()=>{
    getCodeWarsByUser(initialSearchTerm)
            .then((books) => {
               
                console.log(books, "hello");
                setBooks(books);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
  }, [initialSearchTerm])

  return (
    <div>
      <div className={styles.search__container}>
        <input className={styles.search__container__bar}
          value={inputValue}
          onChange={handleChange}
          type="text"
          id="input__text"
          placeholder="Enter a username"
          required
        />
        <select onClick={handleClick} className={styles.search__container__bar}> 
          <option value="01">Codewars</option>
          <option value="02">HackerRank</option>
        </select>
        <button onClick={() =>handleSubmit()}><img className={styles.card__logo} src={searchLogo} alt="" /></button>        
      </div>
      {books && <h1>{books.id}</h1>}
      {error && <h1>{error.message}</h1>}
    </div>
  );
};

export default SearchBar;
