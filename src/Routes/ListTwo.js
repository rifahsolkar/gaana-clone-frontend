import React from 'react'
import './ListTwo.css'

function ListTwo(props) {
    const {image,title}= props;
    return (
        <div className='listTwo'>
            <img src={image}/>
            <p>{title}</p>
        </div>
    )
}

export default ListTwo
