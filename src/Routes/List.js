import React from 'react'
import './List.css'

function List(props) {

    const {image,title}= props;
    return (
        <div className='list'>
            <img src={image}/>
            <p>{title}</p>
        </div>
    )
}

export default List
