import { createContext, useReducer, useEffect } from "react";
export const AppContext = createContext();
import reducer from "../useReducer/reducer";

const API = "https://hn.algolia.com/api/v1/search?query=";

const intialState = {
  hits: [],
  query: "",
  page: 0,
  nbPages: 0,
  isLoading: true,
  isError: "",
};

export default function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        dispatch({
          type: "GET_STORIES",
          payload: {
            hits: data.hits,
            nbPages: data.nbPages,
            page: data.page,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    

    fetchData(`${API}${state.query}&page=${state.page}`);
  }, [state.query,state.page]);
  const removePost=(objectId)=>{
   
    dispatch({
     type:"REMOVE_POST",
     payload:objectId,
     
   })
 }
 const handleSearch = (value) => {
  
  dispatch({
    type:"SET_SEARCH_QUERY",
    payload:value,
  })

  
}

const getNextPage=()=>{
  dispatch({
    type:"NEXT_PAGE",
    payload:"",
  })

}
const getPrevPage=()=>{
  dispatch({
    type:"PREV_PAGE",
    payload:"",
  })
  
    


 };

  return (
    <AppContext.Provider value={{ ...state, removePost,handleSearch,getNextPage,getPrevPage }}>
      {children}
    </AppContext.Provider>
  );
}
