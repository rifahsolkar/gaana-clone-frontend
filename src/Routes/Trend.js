import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './Heading'
import TopDesc from './TopDesc'
import './Trend.css'
import SongRow from './SongRow'

function Trend() {
    return (

        <div className='trend'>
            <div className='topTrend'>
                <TopDesc image='https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/r3gLqn5YWR/size_l.jpg' title='Trending Songs'
                p1='Top trending hits, refreshed daily' p2='Created by gaana' p3='30 Tracks'/>
            </div>
            <Heading/>

            <div className='trendRow'>
            <SongRow image='https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/r3gLqn5YWR/size_xs.jpg' title='Meri Tarha' 
           artist='Jubin Nautiyal, Payal Dev' duration='04:05'/>
           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/d41WjznWPL/1WjzE1g5WP/size_xs.jpg' title='Money' 
           artist='Lisa' duration='02:48'/>
           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/DwPKOkBKqV/PKOxyP8a3q/size_xs.jpg' title='Aasman Wale' 
           artist='Jubin Nautiyal, Rochak Kohli, Amar-Utpal' duration='04:59'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoQJyZOK2/size_xs.jpg' title='You' 
           artist='Armaan Malik' duration='03:15'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/6Zxb2r7b9w/xb2rlPGob9/size_xs.jpg' title='Yaad Na Aaye' 
           artist='Akull' duration='04:05'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/VW1alznLWk/size_xs.jpg' title='Light Switch' 
           artist='Charlie Puth' duration='03:55'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/song/7rVW1aRWk5/VW1LG9Bg3k/size_xs_1639457383.jpg' title='Shrivalli' 
           artist='Javed Ali' duration='03:15'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/BZgWoQOK2d/gWoQo1j7K2/size_xs.jpg' title='When Im Gone' 
           artist='Alesso, Katy Perry' duration='02:41'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/10q3Zj1352/q3ZRQQ7135/size_xs.jpg' title='Sacrifice' 
           artist='The Weeknd, Swedish House Mafia' duration='03:58'/>
           </div>

        </div>
    )
}

export default Trend
