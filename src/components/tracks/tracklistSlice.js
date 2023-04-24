import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: 1, name: 'Track1', artist: 'Artist1', album: 'Album1'},
    {id: 2, name: 'Track2', artist: 'Artist2', album: 'Album2'},
    {id: 3, name: 'Track3', artist: 'Artist3', album: 'Album3'}
]

const tracklistSlice = createSlice({
    name: 'tracklist',
    initialState,
    reducers: {
        
    }
})

export const selectTracklist = (state) => state.tracklist;
export default tracklistSlice.reducer