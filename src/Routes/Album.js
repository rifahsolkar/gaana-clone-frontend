import React from 'react'
import './Album.css'
import List from './List';
import Heading from './Heading';

function Album() {
    return (
        <div>
        <div className='album'>
        <div className='allAlbum'>
                <div className='top'>
                    <h3>Album Songs</h3>
                </div>
                <Heading/>
                <div className='songs__lists'>
                <List image="https://a10.gaanacdn.com/gn_img/albums/0wrb4N3Lg7/wrb4JvN3Lg/size_m.jpg" title="Laksha (Original ..." />
                <List image="https://a10.gaanacdn.com/gn_img/albums/w4MKPgOboj/4MKP7ggboj/size_m.jpg" title="Roja (Original Moti..." />
                <List image="https://a10.gaanacdn.com/gn_img/albums/0wrb4kNWLg/wrb4yMgvKL/size_m.jpg" title="Four More Shots Pl..." />
                <List image="https://a10.gaanacdn.com/gn_img/albums/lJvKa63DV9/JvKa1lPnKD/size_m.jpg" title="Bombay"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW0ey2bo5/size_m.jpg" title="My Name Is Khan (..."/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/oAJbDElKnL/AJbDo5DWnL/size_m.jpg" title="Julie"/>
            </div>
            <div className='songs__lists'>
                <List image="https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3gp19WR1/size_m.jpg" title="Ek Deewana Tha ..." />
                <List image="https://a10.gaanacdn.com/gn_img/albums/dwN398KDPa/wN39yaEX3D/size_m.jpg" title="Devdas" />
                <List image="https://a10.gaanacdn.com/gn_img/albums/qaLKY23pO4/aLKYJ9zx3p/size_m.jpg" title="Lean On" />
                <List image="https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/ZgWoQnvaK2/size_m.jpg" title="Satta Pe Satta"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/a7LWBzWzXA/LWBkLwkJbz/size_m.jpg" title="Levitating (Feat . Pr..."/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/DwPKOBbqVZ/PKOxgw863q/size_m.jpg" title="Tadipaar"/>
            </div>

            <div className='songs__lists'>
                <List image="https://a10.gaanacdn.com/gn_img/albums/BZgWoQOK2d/ZgWoxa4vb2/size_m.jpg" title="Yaariyan (Roma..." />
                <List image="https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/oMWQaAxaWq/size_m_1607595804.jpg" title="Music IS The Weap..." />
                <List image="https://a10.gaanacdn.com/gn_img/albums/10q3Z1K52r/0q3ZQvgnK5/size_m.jpg" title="Raanjhanaa (Origin..." />
                <List image="https://a10.gaanacdn.com/gn_img/albums/a7LWBkzbzX/7LWBO9PbzX/size_m.jpg" title="Zamaane ko Dikha..."/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pqmy4WX/size_m.jpg" title="Janbaaz"/>
                <List image="https://a10.gaanacdn.com/gn_img/albums/7rVW1Rbk56/rVW1pgpY3k/size_m.jpg" title="Four More Shots Pl.."/>
            </div>
            
            </div>
        </div>
        </div>
        
    )
}

export default Album
