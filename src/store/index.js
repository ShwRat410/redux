import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import authenticationSlice from './authenticationSlice'

const store = configureStore({
    //reducer:counterSlice.reducer
    reducer:{
        counter:counterSlice.reducer,
        authentication:authenticationSlice.reducer
    }
})

export default store