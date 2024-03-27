const SearchBar = ({value, handleChange}) => {
    return (
        <div>
            <span>filter shown with</span>
            <input value={value} onChange={handleChange}></input>
        </div>
    )
}

export default SearchBar