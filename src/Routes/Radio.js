import React from 'react'
import './Radio.css'
import Heading from './Heading'
import ListTwo from './ListTwo'

function Radio() {
    return (
        <div className='radio'>
            <div className='allRadio'>
                <div className='top'>
                    <h3>Album Songs</h3>
                </div>
                <Heading/>
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
            </div>
        </div>
    )
}

export default Radio
