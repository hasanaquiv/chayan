import {createSlice} from '@reduxjs/toolkit'
import {getUser} from '../actions/profileAction'


const printReducer = createSlice({
    name: 'user',
    initialState:{
        loader: false,
        error:{},
        user: {}
    },
    extraReducers:{ 
        [getUser.pending]: (state, action) => {
            state.loader = true
        },
        [getUser.fulfilled]: (state, action) => {
            state.loader = false
            state.user = action.payload

        },
        [getUser.error]: (state, action) => {
            state.loader = false
            state.error = action.payload
        },
    }
})

export default printReducer.reducer