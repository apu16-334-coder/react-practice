function SearchBar({ query, onQueryChange }) {

    return (
        <>
            <p>GitHub Search</p>
            <input type="text" name="query" value={query} onChange={onQueryChange} />
        </>
    )
}

export default SearchBar;