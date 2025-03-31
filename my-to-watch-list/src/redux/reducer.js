import { ADD_ITEM, DELETE_ITEM } from "./action";
import { initialStore } from "./store";
import { v4 as uuidv4 } from 'uuid';


export const toWatchReducer=(state=initialStore, action)=>{
    switch(action.type){
        case ADD_ITEM:
            const updatedList=[...state.listToWatch,{
                ...action.payload,
                id:uuidv4()
            }];
        return {
            ...state,
            listToWatch:updatedList
        };

        case DELETE_ITEM:
            const updatedListDeleted=state.listToWatch?.filter(i=>i.id!==action.payload);
            return {
                ...state,
                listToWatch:updatedListDeleted
            };

        default: return state;
    }
}