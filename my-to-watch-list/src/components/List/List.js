import { useDispatch, useSelector } from "react-redux";
import { deleteToWatch } from "../../redux-toolkit/toWatchReducer";
// import { deleteItem } from "../../redux/action";

const List=({list=[]})=>{
    const notesList=useSelector(state=>state.toWatchList);
    const dispatch=useDispatch();
    const watchedItem=(id)=>{
        dispatch(deleteToWatch(id));
    }
    return <div className="container ">
        <p>List:</p>
        {notesList?.map(item=>{
            return <div key={item?.id} className="container border m-3 p-2">
                 Name: <p>{item?.name}</p>
                 Category: <p>{item.category}</p>
                 Genre: <p>{item.genres?.toString()}</p>
                 Platform: <p>{item.platform}</p>
                 <button onClick={()=>watchedItem(item.id)}>Watched</button>
              </div>
        })}

    </div>
}
export default List;