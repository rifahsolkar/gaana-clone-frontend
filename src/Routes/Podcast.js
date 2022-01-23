import React from 'react'
import List from './List';
import Heading from './Heading';
import './Podcast.css'

function Podcast() {
    return (
        <div className='podcast'>
            <div className='allPodcast'>
                <div className='top'>
                    <h3>Podcasts</h3>
                </div>
                <Heading/>
                <h2>Gaana Podcast Originals</h2>
                <div className='songs__lists'>
                <List image="https://a10.gaanacdn.com/gn_img/shows/koMWQ7BKqL/oMWQdaX3qL/size_m_1642090246.jpg" title="Kahani Mein Twist" />
                <List image="https://a10.gaanacdn.com/gn_img/shows/a7LWBkzbzX/7LWBXaDKzX/size_m_1620279776.jpg" title="Tech Flix" />
                <List image="https://a10.gaanacdn.com/gn_img/shows/koMWQ7BKqL/oMWQ76PKqL/size_m_1574432674.jpg" title="sit Down Comedy" />
                <List image="https://a10.gaanacdn.com/gn_img/shows/2lV3d1WRgB/lV3dX213Rg/size_m_1630515094.JPG" title="Garv Hai"/>
                <List image="https://a10.gaanacdn.com/gn_img/shows/10q3ZR1352/0q3ZRMX352/size_m_1641235142.jpg" title="Sarthak's Rockumen..."/>
                <List image="https://a10.gaanacdn.com/gn_img/shows/2lV3d1WRgB/lV3dOaoKRg/size_m_1626878370.jpg" title="Investment Ki Shuru..."/>
                </div>

                <h2>Famous Personalities</h2>
            <div className='songs__lists'>
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/mGjKrP1W6z/jKrOGdQj36/size_m_1619107635.jpg" title="Sachin Tendulkar" />
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/0wrb4qNKLg/rb4xBMZybL/size_m_1618916681.jpg" title="Donald Trump" />
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/ogNWkLDbmX/NWkg2p2vWm/size_m_1611765925.jpg" title="Lala Lajpat Rai" />
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/lJvKa63DV9/vKagYj02WD/size_m_1607960308.jpg" title="Mark Zuckerburg"/>
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/w4MKPgOboj/MKPrGVloWo/size_m_1611325809.jpeg" title="Subhas Chandra Bose"/>
                <List image="https://a10.gaanacdn.com/gn_pl_img/playlists/XYybzNrb2g/ybzJOL9mb2/size_m_1614065584.jpg" title="Steve Jobs"/>
            </div>


            <h2>Best From Around The World</h2>
            <div className='songs__lists'>
                <List image="https://a10.gaanacdn.com/gn_img/shows/qaLKY23pO4/aLKYypzKpO/size_m_1619875430.jpg" title="Eric On The World" />
                <List image="https://a10.gaanacdn.com/gn_img/shows/Dk9KN2KBx1/k9KNe0dbBx/size_m_1619862841.jpg" title="Naturally Inspired P..." />
                <List image="https://a10.gaanacdn.com/gn_img/shows/mGjKr1b6zX/GjKrkRm36z/size_m_1619862409.jpg" title="The Full Bodied Evol..." />
                <List image="https://a10.gaanacdn.com/gn_img/shows/zLp36PvbrG/Lp36Ll0brG/size_m_1619862572.jpg" title="The Left Right Ga..."/>
                <List image="https://a10.gaanacdn.com/gn_img/shows/9En3peWXDV/En3pN8kbXD/size_m_1619862747.jpg" title="The Story Behind He..."/>
                <List image="https://a10.gaanacdn.com/gn_img/shows/oAJbDlbnL8/AJbDm10KnL/size_m_1619870785.jpg" title="Pattern Of Purpose"/>
            </div>
            </div>
        </div>
    )
}

export default Podcast
