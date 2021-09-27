import {createSlice} from '@reduxjs/toolkit'
import {printAction,getPrintInfo} from '../actions/printAction'


const printReducer = createSlice({
    name: 'print',
    initialState:{
        loader: false,
        response:{},
        error:{},
        prints: {}
    },
    extraReducers:{ 
        [printAction.pending]: (state, action) => {
            state.loader = true
        },
        [printAction.fulfilled]: (state, action) => {
            state.loader = false
            state.response = action.payload

        },
        [printAction.error]: (state, action) => {
            state.loader = false
            state.error = action.payload
        },
        [getPrintInfo.pending]: (state, action) => {
            state.loader = true
        },
        [getPrintInfo.fulfilled]: (state, action) =>{
            state.loader = false
            state.prints = action.payload
        },
        [getPrintInfo.error]: (state, action) =>{
            state.loader = false
            state.error = action.payload
        }
    }
})

export default printReducer.reducer