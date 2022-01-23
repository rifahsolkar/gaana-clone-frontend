import React from 'react'
import './Radio.css'
import Heading from './Heading'
import ListTwo from './ListTwo'

function Radio() {
    return (
        <div className='radio'>
            <div className='allRadio'>
                <div className='top'>
                    <h3>Radio</h3>
                </div>
                <Heading/>
                <h2>Mirchi Play</h2>
                <div className='songs__lists'>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/m_radio_circle/DwPKOBbqVZ/DwPKOBbqVZ/size_m_1563783835.webp" title="Mirchi 90's Radio.."/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/m_radio_circle/qa4WEqWP1p/qa4WEqWP1p/size_m_1563783408.webp" title="Meethi Mirchi ..."/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/m_radio_circle/Bp1bAnK029/Bp1bAnK029/size_m_1637922143.webp" title="Mirchi Campus"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/m_radio_circle/6Zxb27K9wN/6Zxb27K9wN/size_m_1586325953.webp" title="Mirchi Tootha Dil"/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/m_radio_circle/w4MKPObojg/w4MKPObojg/size_m_1563783532.webp" title="Club - Mirchi.."/>
                <ListTwo image="https://a10.gaanacdn.com/gn_img/m_radio_circle/koMWQBbqLE/koMWQBbqLE/size_m_1637242935.webp" title="Mirchi Indies..."/>
            </div>

            <h2>Popular Gaana Radio</h2>
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
