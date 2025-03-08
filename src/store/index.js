import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        counter:0,
        showCounter:false
    },
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter+action.payload.amount
        },
        toggle(state){
            !state.toggle
        }
    }
})

const store = createStore(counterReducerFunction)

export default store