import React from 'react'
import Content1 from '../content1/Content1'
import Content2 from '../content2/Content2'
import Content3 from '../content3/Content3'
import './Homepage.css'


const Homepage = () => {
  return (
    <div>
    <div id="bgcolor">
        </div>
        <Content2/>
        <Content1/>
        <Content3/>
    </div>
  )
}

export default Homepage