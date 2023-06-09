const reducer=(state,action)=>{
    switch(action.type){
       case "GET_STORIES":
        return {
            ...state,
            hits:action.payload.hits,
            nbPages:action.payload.nbPages,
            isLoading:false,


        }
        case "REMOVE_POST":
            
            return {
                ...state,
                
                hits:state.hits.filter((hit)=>{
                  return  hit.objectID!=action.payload;
                })
            }
        case "SET_SEARCH_QUERY":
            return {
                ...state,
                query:action.payload,

            }

        case "PREV_PAGE":
            return {
                ...state,
                page:state.page>0?state.page-1:49,
                
                isLoading:true 
                
            }   
            case "NEXT_PAGE":
                return {
                    ...state,
                    page:state.page<49?state.page+1:0,
                    isLoading:true 

            }   



    }

}

export default reducer;