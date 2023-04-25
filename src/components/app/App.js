import './App.css';
import React from 'react';
import { SearchBar } from '../search/SearchBar';
import { SearchResults } from '../search/SearchResults'
import { Playlist } from '../tracks/Playlist'
import { useState } from 'react';
import Spotify from '../../util/Spotify';

function App() {    

    const [searchResults, setSearchResults] = useState([]);

    const search = (term) => {
        console.log(`term este: ${term}`)
        console.log(Spotify.search(term));

        Spotify.search(term).then(searchResults => {
            setSearchResults(searchResults);
        })
    }

    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar 
                /> 
                <div className='App-playlist'>
                    <SearchResults 
                    />
                    <Playlist />
                </div>

            </div>
        </div>
    )
}

export default App;
