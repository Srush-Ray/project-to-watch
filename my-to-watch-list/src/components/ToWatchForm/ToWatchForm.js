/** @jsxImportSource @emotion/react */
"use client"
import {container,formContainer,categoryContainer,submitBtn} from './ToWatchFormStyle';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { addToWatch } from '../../redux-toolkit/toWatchReducer';
// import { addItem } from '../../redux/action';

const ToWatchForm=({setList=()=>{}})=>{
  const dispatch=useDispatch();
  const setListOnSubmit=(e)=>{
    e.preventDefault();
    var nameValue = document.getElementById("watch_name").value;
    var radioCategoryValue = document.querySelector('input[name="category"]:checked')?.value; 
    var genreCheckboxValue = [...document.querySelectorAll('.genre:checked')].map(i=>i.value);
    var platformSelectValue = document.getElementById('platform');
    var platformSelectedOptionValue = platformSelectValue.options[platformSelectValue.selectedIndex]?.value;
    // setList(prev=>(
    //   [...prev,{
    //     name:nameValue,
    //     category:radioCategoryValue,
    //     genres:genreCheckboxValue,
    //     platform:platformSelectedOptionValue,
    //     uuid:uuidv4()
    //   }]
    // ))
    dispatch(addToWatch({
      name:nameValue,
      category:radioCategoryValue,
      genres:genreCheckboxValue,
      platform:platformSelectedOptionValue,
    }));
  }
    return <>
    <div>
      <h1 css={container} class="title">To Watch List</h1>
      <p css={container}>Add series/movies to watch</p>
      </div>
    <form id='form' css={formContainer} onSubmit={setListOnSubmit}>
    <label for="watch_name">Series/Movie Name:</label>
    <input type="text" id="watch_name" name="watch_name" />
    <div css={categoryContainer}>
    Pick a category:
      <input type="radio" id="series" name="category" value="series"/>
      <label for="series">Series</label>
      <input type="radio" id="movie" name="category" value="Movie"/>
      <label for="movie">Movie</label>
    </div>
    <div css={categoryContainer}>
    Select Genre Tags:
    <input type="checkbox" id="comedy" class="genre" value="comedy"/>
    <label for="comedy">Comedy</label>
    <input type="checkbox" id="romantic" class="genre" value="romantic"/>
    <label for="romantic">Romantic</label>
    <input type="checkbox" id="horror" class="genre" value="horror"/>
    <label for="horror">horror</label>
    </div>
    <div css={categoryContainer}>
    <label for="platform">Choose a platform:</label>
    <select name="platform" id="platform">
    <option value="Netflix">Netflix</option>
    <option value="Amazon Prime">Amazon Prime</option>
    <option value="Jio Hotstar">Jio Hotstar</option>
    <option value="Sony Liv">Sony Liv</option>
    </select>
    </div>
    <br/><br/>
    <div css={container}>
    <input type="submit" value="Submit" css={submitBtn}/>
    </div>
  </form> 
    </>
}
export default ToWatchForm;