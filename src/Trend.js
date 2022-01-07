import React from 'react'
import { Link } from 'react-router-dom'

function Trend() {
    return (
        <Link to="/trending">

        <div className='trend'>
            <h1> Trending page</h1>
        </div>
        </Link>
    )
}

export default Trend
