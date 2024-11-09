import React from 'react'

const SearchBarVisible = () => {
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
    )
}

export default SearchBarVisible;