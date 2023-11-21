import React from 'react'
import Rating from '@mui/material/Rating';
import './Card.css'

function Card() {
  return (
    <>
    <div className='card-container'>
        <div className="image-container">
            <img src='https://www.netmeds.com/images/product-v1/150x150/1044005/cetaphil_gentle_skin_cleanser_for_dry_to_normal_sensitive_skin_1000_ml_409945_0_1.jpg' alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>Cetaphil Gentle Skin Cleanser For Dry to Normal - Sensitive Skin 1000 ml</h3>
            </div>
            
            <div className="card-body">
                <p>₹1130.46 MRP ₹1362.00 Save 17 %</p>
            </div>
            
            </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly style={{display:'inline-flex', paddingLeft:'5px'}}/>
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
            <img src='https://www.netmeds.com/images/product-v1/150x150/1002784/minimalist_vitamin_c_face_serum_30_ml_297320_0_6.jpg' alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>Minimalist Vitamin C Face Serum 30 ml</h3>
            </div>
            
            <div className="card-body">
                <p>MRP ₹ 699.00</p>
            </div>
            <div className="card-body">
               <h6>SkinCare  Toner&Serums</h6>
            </div>
            </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly style={{display:'inline-flex', paddingLeft:'5px'}}/>
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
            <img src='https://www.netmeds.com/images/product-v1/600x600/945302/mirabelle_korea_gold_charcoal_dual_system_facial_sheet_mask_25_ml_0_0.jpg' alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>Mirabelle Korea Gold + Charcoal Dual System Facial Sheet Mask 25 Ml</h3>
            </div>
            
            <div className="card-body">
                <p>₹119.25 MRP ₹159.00 Save 25 %</p>
            </div>
            
            </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly style={{display:'inline-flex', paddingLeft:'5px'}}/>
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
            <img src='https://www.netmeds.com/images/product-v1/600x600/945264/the_natural_wash_under_eye_cream_with_cooling_massage_roller_15_ml_0_2.jpg' alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>The Natural Wash Under Eye Cream with Potato, Almonds and Papaya Cooling Massage Roller 15ml</h3>
            </div>
            
            <div className="card-body">
                <p>₹392.00 MRP ₹560.00 Save 30 %</p>
            </div>
            
            </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly style={{display:'inline-flex', paddingLeft:'5px'}}/>
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
            <img src='https://www.netmeds.com/images/product-v1/150x150/1118850/arokleen_cleansing_refreshing_wipes_neem_tea_tree_pack_of_6_x_30s_1s_676009_0_0.jpg' alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>AroKleen Cleansing & Refreshing Wipes - Neem & Tea Tree (Pack of 6 x 30's) 1's</h3>
            </div>
            
            <div className="card-body">
                <p>₹627.00 MRP ₹660.00 Save 5 %</p>
            </div>
            
            </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnlystyle={{display:'inline-flex', paddingLeft:'5px'}} />
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
export default Card