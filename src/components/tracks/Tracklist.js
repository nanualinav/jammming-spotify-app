import { useSelector } from 'react-redux'
import './Tracklist.css'
import { Track } from './Track'

export const Tracklist = ({isRemoval, tracks}) => {

    const renderedTracks = tracks ? tracks.map(track => (
        <Track 
          key={track.id}
          track={track}
          isRemoval={isRemoval}
        />
    )) : null
    
  return (
    <div>
      {renderedTracks}
    </div>
  )
}