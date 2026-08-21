function FilterBar({query, level, onSearch, onLevelChange}) {
    return (
        <>
            <div>
                <label>Enter Title: </label>
                <input type="text" name="query" value={query} onChange={onSearch}  placeholder="search...." />
            </div>

            <div style={{ marginTop: '10px' }}>
                <label>Select Level:</label>
                <select name="level" value={level} onChange={onLevelChange}>
                    <option value="all">All</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </div>
        </>
    )
}

export default FilterBar;