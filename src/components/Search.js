import React , {useState} from 'react';
import './Search.css';
import   SearchIcon from "@material-ui/icons/Search";
import    MicIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import {actionTypes} from "../reducer"
function Search({hidebuttons = false,query=''}) {
    const [{term},dispatch] = useStateValue();

    const [input, setInput] = useState(query);
    const history = useHistory();
    

    const search = (e) => {
        e.preventDefault();

        console.log("you hit it >> ",input)

        dispatch ({
            type : actionTypes.SET_SEARCH_TERM,
            term : input
        })

        history.push('/search')


    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon color="disabled" className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                <MicIcon />
            </div>
            {!hidebuttons ? (
                <div className="search__buttons">
                <Button type="submit" onClick={search} variant="outline">Google Search</Button>
                <Button variant="outline">I'm Feeling Lucky</Button>
            </div>
            ):
            (
                <div className="search__buttons">
                <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outline">Google Search</Button>
                <Button className="search__buttonsHidden" variant="outline">I'm Feeling Lucky</Button>
            </div>
            )}
        </form>
    )
}

export default Search
