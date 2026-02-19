import "@/styles/Home/SearchBar.css";

export function SearchBar() {
  return (
    <>
      <search className="searchbar">
        <svg
          className="searchbar__icon"
          fill="currentColor"
          height="24"
          viewBox="0 0 256 256"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
        <input
          className="searchbar__input"
          placeholder="Search for jobs based on degree, skill or company"
        ></input>
        <button className="searchbar__button">Search</button>
      </search>
    </>
  );
}

export default SearchBar;
