import { useReducer } from "react";
import { showsReducer } from "./ShowsReducer";
import { ShowsContext } from "./ShowsContext";
import {url} from "../../config/variables"
import { types } from "../../types/types";


const initialState = {
    series: '',
  };


const ShowsProvider = ({children}) => {

   const [ showsState, dispatch ] = useReducer(showsReducer, initialState)

   const seriesList = async () => {

    const peticion = await fetch(`${url}/get_data`, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-csrftoken': sessionStorage.getItem("token")
        }
    })
    const res = await peticion.json();
    console.log(res);
    const action = {
      type: types.list,
      payload: {
        seriesList: res
      }
    }

    dispatch(action)
   }

  return (
    <ShowsContext.Provider value={{
      ...showsState,
      seriesList: seriesList
    }}>
        {children}
    </ShowsContext.Provider>
  )
}

export default ShowsProvider
