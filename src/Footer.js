import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer edit'>
            <h1>Bas Bajna Chahiye Gaana</h1>
            <p className='edit'>Gaana is the one-stop solution for all your music needs. Gaana offers you free, unlimited access to over
                 30 million Hindi Songs, Bollywood Music, English MP3 songs, Regional Music & Mirchi Play.</p>

            <hr/>

            <div className='footer_icons'>
            <i class="bi bii bi-facebook"></i>
            <i class="bi bii bi-twitter"></i>
            </div>

            <hr/>
            <div className='footer_list edit'>
                <p>Advertise of Gaana.com</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Feedback</p>
                <p>Report an Issue</p>
                <p>Partners</p>
                <p>Sitemaps</p>
                <p>FAQ</p>
            </div>

            <hr/>

            <div className='footer_links'>

            <h4>QuickLinks</h4>
            <div className='quickLinks'>

                <div className='new'>
                <p className='first'>Albums</p>
                <div className='list edit'>
                    
                    <p>English</p>
                    <p>Hindi</p>
                    <p>Telugu</p>
                </div>
                <p className='last'>View all</p>
                </div>

                <div className='new'>
                <p className='first'>Genres</p>
                <div className='list edit'>
                    <p>Bollywood Songs</p>
                    <p>Devotional Songs</p>
                </div>
                <p className='last'>View all</p>
                </div>

                <div className='new'>
                    <p className='first'>Artists</p>
                <div className='list edit'>
                    <p>Arijit Singh</p>
                    <p>Neha Kakkar</p>
                    <p>Honey Singh</p>
                    <p>Armaan Malik</p>
                    
                </div>
                <p className='last'>View all</p>
                </div>

                <div className='new'>
                <p className='first'>New Release</p>
                <div className='list edit'>
                    
                    <p>English Songs</p>
                    <p>Hindi Songs</p>
                    <p>Marathi Songs</p>
                    <p>Bengali Songs</p>
                    <p>Urdu Songs</p>
                </div>
                <p className='last'>View all</p>
                </div>
            </div>
            </div>

            <hr/>
            <p className='edit'>© Gamma Gaana Ltd. 2022, All Rights Reserved</p>

        </div>
    )
}

export default Footer
