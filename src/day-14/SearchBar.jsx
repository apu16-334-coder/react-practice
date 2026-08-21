function SearchBar({ query, isQueryEmpty, onSearch, onHandle }) {

    return (
        <>
            <form onSubmit={onSearch}>
                <p>GitHub Search</p>
                <input type="text" name="query" value={query} onChange={onHandle} />
                <input type="submit" value="Search" />
                <br />
                {isQueryEmpty && <span style={{color: 'red'}}>Enter a username to search</span>}
            </form>
        </>
    )
}

export default SearchBar;