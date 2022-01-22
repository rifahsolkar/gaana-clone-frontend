import React from 'react'
import Heading from './Heading'
import './OldSongs.css'
import TopDesc from './TopDesc'
import SongRow from './SongRow'

function OldSongs() {
    return (
        <div className='oldSongs'>
            <div className='topOldSongs'>
            <TopDesc image='https://a10.gaanacdn.com/gn_img/albums/DwPKOkBKqV/wPKORwkbqV/size_l.jpg' title='Old Songs'
                p1='Collection of timeless melodies' p2='Created by gaana' p3='500 Tracks'/>
            </div>
            <Heading/>

            <div className='oldSongRow'>
            <SongRow image='https://a10.gaanacdn.com/gn_img/albums/DwPKOkBKqV/wPKORwkbqV/size_xs.jpg' title='Bheegi Bheegi Raaton Mein' 
           artist=' Kishore Kumar, Lata Mangeshkar' duration='04:05'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/zLp36v3rGe/Lp367JvWrG/size_xs.jpg' title='Aap Ki Ankhon Mein Kuch' 
           artist='Lisa' duration='02:48'/>
           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/ogNWkLDbmX/gNWkLY1Xbm/size_xs.jpg' title='Hamen Tumse Pyar Kitna' 
           artist='Kishore Kumar' duration='04:59'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/qa4WEqqWP1/a4WErPYbP1/size_xs.jpg' title='Tere Bina Zindagi Se' 
           artist='Kishore Kumar, Lata Mangeshka' duration='03:15'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/YoEWlwa3zX/oEWlwrg3zX/size_xs.jpg' title='Kora Kagaz Tha Yeh Man Mera' 
           artist='Kishore Kumar, Lata Mangeshka' duration='04:05'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/Rz4W87v3xD/Rz4W87v3xD/size_xs.jpg' title='Ae Mere Humsafar' 
           artist='Udit Narayan, Alka Yagnik' duration='03:55'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/DwPKOkBKqV/wPKORwkbqV/size_xs.jpg' title='Ek Ajnabee Haseena Se' 
           artist='Kishore Kumar' duration='03:15'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/kGxbn03y4r/GxbnxmM3y4/size_xs.jpg' title='Lag Ja Gale' 
           artist='Lata Mangeshkar' duration='02:41'/>

           <SongRow image='https://a10.gaanacdn.com/gn_img/albums/ogNWkDbmXJ/gNWkgjQWmX/size_xs.jpg' title='Tere Mere Milan Ki Yeh Raina' 
           artist='Kishore Kumar, Lata Mangeshkar' duration='03:58'/>
           </div>

        </div>
    )
}

export default OldSongs
