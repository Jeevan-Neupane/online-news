import useGlobalContext from "../custom Hooks/useGlobalContex"


function Pagination() {
    const {page,nbPages,getNextPage,getPrevPage,isLoading}=useGlobalContext();
  console.log(isLoading)
  return (
    <>
    <div className="pagination-btn">
        <button disabled={isLoading} onClick={()=>getPrevPage()}>PREV</button>
        <p>
            {page+1} of {nbPages}
        </p>
        <button disabled={isLoading} onClick={()=>getNextPage()}>NEXT</button>

    </div>
      
    </>
  )
}

export default Pagination
