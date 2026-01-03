import { useState } from "react";

const ProductSearchBar = () => {
    // State to manage the selected category from the dropdown
    const [category, setCategory] = useState('All');
    // State to manage the search term entered by the user
    //const [searchTerm, setSearchTerm] = useState('');
    const [searchText, setSearchText] = useState('');

    // Handle the search button click
    const handleSearch = () => {
        console.log(`Searching for "${searchText}" in category "${category}"`);
    };

    return (
        <>
        <div className="category-search">
          <div className="search-bar">
            <div className="search-bar-category">
                <div className="select-category">
                    <span>{category}</span><img src="/assets/icons/arrow-down-cat.png" alt="arrow" />
                </div>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Men">men</option>
                    <option value="Women">Women</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                </select>
            </div>
            <input
              type="text"
              placeholder="Find product"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>   
        </>
    );
};

export default ProductSearchBar;
