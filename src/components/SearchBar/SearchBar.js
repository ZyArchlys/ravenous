import React,{useState, useEffect} from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('Highest Rated');

  function handleLiClick(valeur) {
      setSort(valeur)
    }

  function handleCategoryChange({target}) {
    setCategory(target.value)
  }

  function handleLocationChange({target}){
    setLocation(target.value)
  }

  function handleSubmit(){
    alert(`Searchin yelp wit ${location}, ${category}, ${sortByOptions[sort]}`)
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li onClick={() => handleLiClick(sortByOption)} className={sort===sortByOption?  styles.SearchBarSelectedOption : ""} key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input onChange={handleCategoryChange} value={category} placeholder="Search Businesses" />
        <input onChange={handleLocationChange} value={location} placeholder="Where?" />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a onClick={handleSubmit}>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
