import React from 'react'
import wright_donut from '../img/big_donut.svg';
import left_donut from '../img/left_donuts.svg';
import './Showcase.css'
import styled from 'styled-components'


const LinkButton = styled.a`
border: 4px solid #D84A6B;
border-radius: 36px;
color: #D84A6B;
font-family: 'Sen';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.07em;
background: transparent;
padding: 26px 33px;
&:hover{
  color:#FAEADB;
  background: #D84A6B;
}
`
const Showcase = () => {
  
  return (
    <div className=''>
        <div className=' showcase __container'>
         <div className='face_text'>
            <h2>Love Donuts</h2>
            <h2>Eat Donuts</h2>
            <h2>Life Donuts</h2>
           <img src={wright_donut} alt="wright_donut"/>
         </div>
         <div className='face_bnt'>
            <LinkButton href='./setInBox' target='_blank'
        rel=''>Order now</LinkButton>
            <LinkButton href='./setInBox' target='_blank'
        rel=''>Best deals</LinkButton>
         </div>
        <img src={left_donut} alt="left_donut"/>
        </div>
      
    </div>
  )
}

export default Showcase