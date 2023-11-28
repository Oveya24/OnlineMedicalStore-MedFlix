import React from 'react'
import Content1 from '../content1/Content1'
import Content2 from '../content2/Content2'
import './Homepage.css'
import ProductListComponents from '../../mappingcards/ProductListComponents'


const Homepage = () => {
  return (
    <div>
    <div id="bgcolor">
        </div>
        <Content2/>
        <Content1/>
        <ProductListComponents/>
    </div>
  )
}

export default Homepage