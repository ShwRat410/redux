import {createSlice} from '@reduxjs/toolkit'

const initialAuthenticationState = {
    isAuthenticated:false
}

const authenticationSlice = createSlice({
    name:'authentication',
    initialState:initialAuthenticationState,
    reducers:{
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

export const authenticationActions = authenticationSlice.actions
export default authenticationSlice