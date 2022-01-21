import React from 'react'
import './Songs.css'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import ListTwo from './Routes/ListTwo';
import Footer from './Footer'
import List from './Routes/List';

function Songs() {
    
    return (
        <div className='songs'>
           <h2>Trending Songs</h2>
            <div className='songs__lists'>
                <List image="https://a10.gaanacdn.com/gn_img/albums/JD2KJAbOLw/2KJyNVRNbO/size_m.jpg" title="Dance Meri Rani" />
                <List image="https://a10.gaanacdn.com/gn_img/albums/d41WjznWPL/1WjzE1g5WP/size_m.jpg" title="Money" />
                <List image="https://a10.gaanacdn.com/gn_img/song/zLp36v3rGe/p36w5AwBWr/size_m_1639638055.webp" title="Udd Jaa Parindey" />
                <List image="https://a10.gaanacdn.com/gn_img/albums/01A3mar3NQ/A3maPONn3N/size_m.jpg" title="Dil Vich"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/R7vKX66Wmr/vKX6oez6Wm/size_m.jpg" title="Mohabbat"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp" title="Love Nwantiti"/>
            </div>

            <h2>New Releases</h2>
            <div className='songs__lists'>
                <List image="https://a10.gaanacdn.com/gn_img/albums/4Z9bqo3yQn/9bqgBDP13y/size_m_1640343731.webp" title="Jersey"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/BZgWoQOK2d/gWoQo1j7K2/size_m.jpg" title="When I'm Gone"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/JD2KJAbOLw/2KJyNVRNbO/size_m.jpg" title="Dance Meri Rani"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/kGxbn03y4r/xbnw7NqQKy/size_m.jpg" title="Wait"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/21GWwR3pkg/GWwrX9VL3p/size_m_1640274059.webp" title="83"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/jBr3gybR1m/r3gLZZpOWR/size_m.jpg" title="Echoes of Silence"/>
            </div>
            
            <h2>Top Charts</h2>
            <div className='songs__lists'>
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/P7m3GNKqxo/7m3GQwOybq/size_m_1636699645.webp" title="Hindi Top 50"/>
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDElKnL/JbDEDR0lKn/size_m_1640016519.webp" title="International Top.."/>
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDlbnL8/JbDeDmpvKn/size_m_1638353836.webp" title="India Top 50"/>
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/Dk9KNk23Bx/9KN6Xy6dKB/size_m_1636703189.webp" title="Dance Top 50"/>
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/zLp36v3rGe/Lp36kP5NWr/size_m_1636699773.webp" title="Hindi Romance Top..."/>
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/7rVW1aRWk5/VW1Q4oQOWk/size_m_1636701208.webp" title="Top Search On..."/>
            </div>

            <h2>Featured Artists</h2>
            <div className='songs__lists'>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1638898900.webp" title="Arjit Singh"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/artists/21GWwrR3pk/1GWwYz4DKp/size_m_1567610470.webp" title="Tanishk Bagchi"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/artists/zLp36PvbrG/Lp36AR0KrG/size_m_1516707336.webp" title="Pritam"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/artists/Rz4W87v3xD/Rz4W8ppWxD/size_m_1638817418.webp" title="Neha Kakkar"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/artists/9MAWe7KyJe/MAWe9lBGWy/size_m_1516185303.webp" title="Badshah"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/artists/6Zxb2r7b9w/Zxb2xp0w39/size_m.jpg" title="B Praak"/>
            </div>

            <h2>Radio</h2>
            <div className='songs__lists'>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/m_radio_circle/w4MKPObojg/w4MKPObojg/size_m_1563783532.webp" title="Club Mirchi Radio"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/g_radio_circle/DwPKOxB3qV/DwPKOwkKqV/size_m_1567583117.webp" title="Party Non Stop"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/m_radio_circle/Bp1bAnK029/Bp1bAnK029/size_m_1637922143.webp" title="Mirchi Campus"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/g_radio_circle/21GWwrR3pk/21GWwe4Kpk/size_m_1588760360.webp" title="Happy Feels"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/g_radio_circle/4Z9bqZoKyQ/4Z9bqNPKyQ/size_m_1628848671.webp" title="90'S ki Cassette"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/g_radio_circle/a7LWBkzbzX/a7LWBwkbzX/size_m_1567583320.webp" title="Chill Music"/>
            </div>

            <Footer/>
        </div>
    )
}

export default Songs
