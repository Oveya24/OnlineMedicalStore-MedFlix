import React from 'react'
import './Content2.css'
import { useNavigate } from 'react-router-dom'

const Content2 = () => {
  const navigate1=useNavigate();
  const handledia=()=>{
    navigate1('/diabetes')
  }
  const navigate2=useNavigate();
  const handlefit=()=>{
    navigate2('/cold')
  }
  const navigate3=useNavigate();
  const handlecold=()=>{
    navigate3('/fit')
  }
  const navigate4=useNavigate();
  const handlepet=()=>{
    navigate4('/pet')
  }
  const navigate5=useNavigate();
  const handlefem=()=>{
    navigate5('/fem')
  }
  return (
    <div id="cont2">
        <img class="cate" src="https://www.netmeds.com/images/category/l2/prod/thumb/diabetes_management_supplements.png?v=1691766744" alt="category" onClick={handledia}></img>
        <img class="cate" src="https://www.netmeds.com/images/category/prod/thumb/face_wash_cleansers.png" alt="category" onClick={handlefit}></img>
        <img class="cate" src="https://www.netmeds.com/images/category/l2/prod/thumb/cough_cold.png?v=1691766744" alt="category" onClick={handlecold}></img>
        <img class="cate" src="https://www.netmeds.com/images/category/l2/prod/thumb/petcare.png?v=1691766744" alt="category" onClick={handlepet}></img>
        <img class="cate" src="https://www.netmeds.com/images/category/l2/prod/thumb/feminine_hygiene.png?v=1691766744" alt="category" onClick={handlefem}></img>
    </div>
  )
}

export default Content2