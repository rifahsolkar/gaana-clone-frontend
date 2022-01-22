import React from 'react';
import './SongRow.css'

function SongRow(props) {
    const{image,title,artist,duration} = props;
  return <div className='songRow'>
        <div className='songList'>
            <div className='container'>
            <img src={image}/>
            </div>
            <p className='titleSong'>{title}</p>
            <p className='songp1'>{artist}</p>
            <p className='songp2'>{duration}</p>
        </div>
  </div>;
}

export default SongRow;
