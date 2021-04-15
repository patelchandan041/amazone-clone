import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'

function Payment() {
    const  [{ basket,user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
               
                    checkout {
                         <Link to='/checkout'>{basket?.length} items</Link>
                    }
                     
             </h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>400101 kandivali</p>
                        <p>mumbai, Mh</p>

                    </div>

                </div>

                <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review, items and delivery</h3>
                   </div>
                 <div className='payment__items'>
                     {basket.map(item => (
                          <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                          />
                     ))}
                 </div>
                    
                </div>

                <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment method</h3>
                   </div>
                   <div className='payment__details'>
                   
                   </div>
                    
                </div>



            </div>
        </div>
    )
}

export default Payment
