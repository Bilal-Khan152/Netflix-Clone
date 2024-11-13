import { createSlice } from '@reduxjs/toolkit'
 

export const authSlice = createSlice({
  name: 'auth',
  initialState :  {
    isAuthenticated :  false , 
    user : null 
  } ,
  reducers: {
        // signUpUser : (state , action) => {
        //     state.isAuthenticated = true 
        //      state.user = action.payload

        // }  ,
        loginUser : (state , action) => {
              state.isAuthenticated = true  
              state.user = action.payload
        }  ,
        logoutUser : (state , action) => {
              state.isAuthenticated = false 
              state.user = null 
        } 
  }
})
 
export  const {   loginUser , logoutUser  } =  authSlice.actions

export default authSlice.reducer