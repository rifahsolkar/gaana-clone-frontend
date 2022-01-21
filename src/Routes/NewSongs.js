import React from 'react'
import Heading from './Heading'
import './NewSongs.css'
import List from './List'

function NewSongs() {
    return (
        <div className='newSongs'>
            <div className='allNewSongs'>
                <div className='top'>
                    <h3>New Songs 2022 - O Aasman Wale , Light Switch</h3>
                </div>
                <Heading/>
                <div className='songs__lists'>
                <List image="https://a10.gaanacdn.com/gn_img/albums/DwPKOkBKqV/PKOxyP8a3q/size_m.jpg" title="O Aasman Wale" />
                <List image="https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/VW1alznLWk/size_m.jpg" title="Light Switch" />
                <List image="https://a10.gaanacdn.com/gn_img/albums/dwN39y83DP/N39yPRVZ3D/size_m.jpg" title="Ek Mili Mainu Apsraa" />
                <List image="https://a10.gaanacdn.com/gn_img/albums/XYybzNrb2g/ybzNpa0Eb2/size_m.jpg" title="Dawn FM"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/d41WjznWPL/1Wjz8wynWP/size_m.jpg" title="Pushpa The Rise P.."/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoQJyZOK2/size_m.jpg" title="You"/>
            </div>
            <div className='songs__lists'>
                <List image="https://a10.gaanacdn.com/gn_img/albums/JD2KJAbOLw/2KJyNVRNbO/size_m.jpg" title="Dance Meri Rani" />
                <List image="https://a10.gaanacdn.com/gn_img/albums/d41WjznWPL/1WjzE1g5WP/size_m.jpg" title="Money" />
                <List image="https://a10.gaanacdn.com/gn_img/song/zLp36v3rGe/p36w5AwBWr/size_m_1639638055.webp" title="Udd Jaa Parindey" />
                <List image="https://a10.gaanacdn.com/gn_img/albums/01A3mar3NQ/A3maPONn3N/size_m.jpg" title="Dil Vich"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/R7vKX66Wmr/vKX6oez6Wm/size_m.jpg" title="Mohabbat"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp" title="Love Nwantiti"/>
            </div>
            
            </div>
        </div>
    )
}

export default NewSongs
