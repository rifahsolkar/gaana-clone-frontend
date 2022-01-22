import React from 'react';
import './TopDesc.css'

function TopDesc(props) {

    const {image,title,p1,p2,p3} = props;
  return <div className='topDesc'>
    <div className='part1'>

    <img src={image}/>
    </div>
    <div className='part2'>
      <h2>{title}</h2>
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <b className='common'>Play All</b>
    </div>

  </div>;
}

export default TopDesc;
