import React from 'react'
import './style.css'
import Mountain1 from '../../assets/1.jpg'
import Mountain2 from '../../assets/2.jpg'
import Mountain3 from '../../assets/3.jpg'
import Mountain4 from '../../assets/4.jpg'

export default function DestinationData(props) {
  return (
    <div className={props.className}>
        <div className='des-text'>
          <h2>{props.heading}</h2>
          <p>
            {props.text}
          </p>
        </div>
        <div className='image'>
          <img alt='img' src={props.img1}/>
          <img alt='img' src={props.img2}/>
        </div>
      </div>
  )
}
