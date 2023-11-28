import React from 'react'
import { cardsarray } from '../SharedData/globalcards';
import { Rating } from '@mui/material';
import './Product.css' ;
import { UserCart } from '../service/CartItems';

const ProductListComponents =() => {
    const handleAddToCart = (props) => {
        UserCart(props);
      };
                return (
                    <div className='card-map' style={{backgroundColor:'rgb(176, 239, 255)'}}>
                    {  cardsarray.map((card,index)=>
                     
                  <div key={index} className='card-container1'>
                    <div className="image-container">
                        <img src={card.img} alt=''/>
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h3>{card.name}</h3>
                        </div>
                        
                        <div className="card-body">
                            <p>{card.price}</p>
                        </div>
                        
                    </div>
                    
                    <div className="btn">
                        <div>
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly style={{display:'inline-flex', paddingLeft:'5px'}} />
                        </div>
                    
                        <div>
                            <button onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        
                        </div>
                        
                    </div>
                    
                </div>
                 )}
                 </div>
                )
   
        }

export default ProductListComponents;