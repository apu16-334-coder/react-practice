function SearchBar({ query, isQueryEmpty, onSearch, onQueryChange }) {

    return (
        <>
            <form onSubmit={onSearch}>
                <p>GitHub Search</p>
                <input type="text" name="query" value={query} onChange={onQueryChange} />
                <input type="submit" value="Search" />
                <br />
                {isQueryEmpty && <span style={{color: 'red'}}>Enter a username to search</span>}
            </form>
        </>
    )
}

export default SearchBar;