import {createSlice,configureStore} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        counter:0,
        showCounter:true
    },
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter = state.counter+action.payload
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
    }
})

const store = configureStore({
    reducer:counterSlice.reducer
    //reducer:{counter:counterSlice.reducer}
})

export const counterActions = counterSlice.actions

export default store