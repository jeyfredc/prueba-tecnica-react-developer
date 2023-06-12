import { useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer";
import { types } from "../../../types/types";

const initialState = {
    logged: false,
  };


const AuthProvider = ({children}) => {

   const [ authState, dispatch ] = useReducer(authReducer, initialState)

   const login = (name= '') => {
    const action = {
      type: types.login,
      payload: {
        id: '123',
        name:name
      }
    }

    dispatch(action)
   }

   const logout = () => {
    const action = {
      type: types.logout,
      payload: {
        id: '',
        name:''
      }
    }

    dispatch(action)
   }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login,
      logout:logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
