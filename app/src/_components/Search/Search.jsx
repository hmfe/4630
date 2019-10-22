import React, { useState } from 'react';
import { api_url } from '../../config.json';
import { getTime } from '../../_helpers/helpers.js';
import './Search.scss'

const Search = () => {
    const [list, setList] = useState([]);
    const [savedList, setSavedList] = useState([]);
    const [dataListIsVisible, setDataListIsVisible] = useState(false);

    const handleChange = (value) => {
        if(value === '') {
            setList([]);
            setDataListIsVisible(false)
        } else {
            fetch(`${api_url}/episode/?name=${value}`)
            .then(res => res.json())
            .then(json => {
                setList(json.results);
                setDataListIsVisible(true);
            })
        }

    }

    const handleAddItem = (item) => {
        const hasItem = savedList.filter(i => i.title === item).length > 0
        if(!hasItem) setSavedList([...savedList, {title: item, time: getTime()}]);
    }

    const handleRemoveItem = (item) => {
        const filteredArray = savedList.filter(i => i.title !== item);
        setSavedList(filteredArray)
    }

    const handleRemoveAllSaved = () => {
        setSavedList([])
    }
  
    return (
        <>
            <form action="#">
                <label for="search-input" style={{display: 'none'}}>Search</label>
                <input type="text" name="search-input" placeholder="Search here" onChange={(e)=> {handleChange(e.currentTarget.value); }} />
            </form>
            <datalist style={{display: dataListIsVisible ? 'block' : 'none'}}>
                { list ? 
                  list.map((item, i) => (
                    <option key={item.id} value={item.name} onClick={(e) => {handleAddItem(e.currentTarget.value)}}>{item.name}</option>
                  ))
                : <span>Nothing found.</span> }
            </datalist>
            <section className="saved-container">
                <header>
                    <h1>Search History</h1>
                    <span onClick={handleRemoveAllSaved}>Delete search history</span>
                </header>
                <ul className="saved-list">
                    <hr/>
                    {   savedList ? 
                        savedList.map((item, i) => (
                            <li key={i}>
                                
                                <span>{item.title}</span>
                                <span className="delete-item" onClick={() => handleRemoveItem(item.title)}>&#10005;</span>
                                <time>{item.time}</time>
                                <hr/>
                            </li>
                        )) : null }
                </ul>
            </section>
        </>
    )
}

export default Search;
