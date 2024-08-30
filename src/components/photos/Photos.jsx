import React from 'react'
import Cards from './Cards'


const Photos = ({data}) => {
    // console.log(data);
  return (
    <div className='photos'>
    {data.map((item, index)=>
        <Cards key={index} {...item}/>
    )}
    </div>
  )
}

export default Photos