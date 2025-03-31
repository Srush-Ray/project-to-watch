import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import ToWatchForm from './components/ToWatchForm/ToWatchForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
// import { toWatchReducer } from './redux/reducer';
import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import toWatchReducer from './redux-toolkit/toWatchReducer';

// const store=createStore(toWatchReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store=configureStore(toWatchReducer);



function App() {
  const [listToWatch,setListToWatch]=useState([]);
  console.log(listToWatch)
  return (
    <Provider store={store}>
    <div className='mt-5'>
        <ToWatchForm setList={setListToWatch}/>
        <List list={listToWatch}/>
    </div>
    </Provider>
  );
}

export default App;
