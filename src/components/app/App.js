import './App.css';
import React from 'react';
import { SearchBar } from '../search/SearchBar';
import { SearchResults } from '../search/SearchResults'
import { Playlist } from '../tracks/Playlist'

function App() {
  
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar /> 
                <div className='App-playlist'>
                    <SearchResults />
                    <Playlist />
                </div>

            </div>
        </div>
    )
}

export default App;
