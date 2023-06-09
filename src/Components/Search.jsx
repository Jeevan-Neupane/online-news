import useGlobalContext from "../custom Hooks/useGlobalContex";


function Search() {
  const { query,handleSearch } = useGlobalContext();
  
 
  

  return (
    <>
      <h1>Tech News Website</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input placeholder="Search..." onChange={(events)=>handleSearch(events.target.value)} value={query} />
      </form>
    </>
  );
}

export default Search;
