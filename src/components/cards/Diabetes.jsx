import React from 'react'
import Rating from '@mui/material/Rating';
import './Card.css'
function Cardd() {
  return (
    <>
    <div className='card-container'>
        <div className="image-container">
            <img src='https://www.netmeds.com/images/product-v1/600x600/354458/accu_chek_active_test_strip_100_s_0.jpg' alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>Accu-Chek Active Test Strip 100's</h3>
            </div>
            
            <div className="card-body">
                <p>₹1718.28 MRP ₹1998.00 Save 14 %</p>
            </div>
            
            </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
        </div>
        
            <div>
            <button>
                
                <a>
                    view more
                </a>
            </button>
            
            </div>
            
        </div>
        
        </div>
    
    <div className='card-container1'>
        <div className="image-container">
            <img src='https://www.netmeds.com/images/product-v1/600x600/966766/patanjali_nutrela_diabetic_care_powder_400_gm_0_0.jpg' alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>Patanjali Nutrela Diabetic Care Powder 400 gm</h3>
            </div>
            
            <div className="card-body">
                <p>₹558.00 MRP ₹620.00 Save 10 %</p>
            </div>
            
            </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
        </div>
        
            <div>
            <button>
                
                <a>
                    view more
                </a>
            </button>
            
            </div>
            
        </div>
        
        </div>
    <div className='card-container2'>
        <div className="image-container">
            <img src='https://www.netmeds.com/images/product-v1/600x600/802997/contour_plus_blood_glucose_test_strip_50_s_0.jpg' alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>Contour Plus Blood Glucose Test Strip 50's</h3>
            </div>
            
            <div className="card-body">
                <p>₹919.08 MRP ₹999.00 Save 8 %</p>
            </div>
            </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
        </div>
        
            <div>
            <button>
                
                <a>
                    view more
                </a>
            </button>
            
            </div>
            
        </div>
        
        </div>
    <div className='card-container3'>
        <div className="image-container">
            <img src='https://www.netmeds.com/images/product-v1/600x600/925481/equal_original_low_calorie_sweetener_sachets_100s_409768_0_0.jpg' alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>Equal Original Low Calorie Sweetener Sachets 100's</h3>
            </div>
            
            <div className="card-body">
                <p>₹127.50 MRP ₹150.00 Save 15 %</p>
            </div>
            
            </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        </div>
        
            <div>
            <button>
                
                <a>
                    view more
                </a>
            </button>
            
            </div>
            
        </div>
        
        </div>
    <div className='card-container3'>
        <div className="image-container">
            <img src='https://www.netmeds.com/images/product-v1/600x600/404208/accu_chek_softclix_lancets_200_s_0.jpg' alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>Accu-Chek Softclix Lancets 200's</h3>
            </div>
            
            <div className="card-body">
                <p>₹127.50 MRP ₹150.00 Save 15 %</p>
            </div>
            
            </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
        </div>
        
            <div>
            <button>
                
                <a>
                    view more
                </a>
            </button>
            
            </div>
            
        </div>
        
        </div>
        </>
)
}
export default Cardd