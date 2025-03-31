import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialState={
    toWatchList:[]
}
const toWatchReducer=createSlice({
    name:'toWatchList',
    initialState,
    reducers:{
        addToWatch:(state,action)=>{
            state.toWatchList.push({
                id:uuidv4(),
                ...action.payload
            })
        },
        deleteToWatch:(state,action)=>{
            const filtertoWatchList=state.toWatchList.filter((item)=>item.id!==action.payload)
            state.toWatchList=filtertoWatchList;
        }
    }
});

export const {addToWatch,deleteToWatch}=toWatchReducer.actions;
export default toWatchReducer;