import { useState } from "react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";

function SearchPage() {
    const [searchData, setSearchData] = useState({
        query : '',
        isQueryEmpty: null
    });

    function handleChange(e) {
        setSearchData(prev => ({...prev, query: e.target.value}))
    }

    function handleSearch(e) {
        e.preventDefault()

        const flag = searchData.query.trim() === '' ? true : false
        setSearchData(prev => ({ ...prev, isQueryEmpty: flag}))
        if(flag) return
        
 
    }

    return (
        <>
            <SearchBar {...searchData} onSearch = {handleSearch} onHandle = {handleChange} />
        </>
    )
}

export default SearchPage;