import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {RiCloseLargeLine} from '@remixicon/react'
import {removeItem} from '../config/cartSlice'

export default function Cart() {
    
    //Redux Select and Dispatch
    const slector = useSelector((store) => store.cart.items);
    const quantity = useSelector((store) => store.cart.cartTotalQuantity)
    const dispatch = useDispatch()

    console.log(slector);

    //Price Logic
  

    //Quantity Logic


  return (
    <>
    <div className="p-9 px-28 w-full flex flex-col items-center justify-center" >

      <h1 className='font-thin text-2xl mt-4 text-center mb-2'>Shopping Cart</h1>
      <div className='CartSection w-full flex items-start justify-between mt-10'>

        <div className="cartProducts w-1/2 flex flex-col justify-start space-y-4">

            {slector.map((cartIteam) =>(
             <div key={cartIteam.card.info.id} className="product flex gap-20 w-full items-center border-t-2 border-dashed border-black">
                 <button  onClick={() => {
                    dispatch(removeItem(cartIteam.card.info.id));
                    console.log(slector);
                    }}>❌</button>
                 <img className='w-32 object-cover' src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cartIteam.card.info.imageId}`} alt="" />
                 <h1>{cartIteam.card.info.name}</h1>
                <div className="cartQuantity flex">
                    <button>-</button>
                    <span>{}</span>
                    <button>+</button>
                </div>
                  <h1>₹{cartIteam.card.info.price/100}</h1>
             </div>
            ))}

        </div>
     

        <div className="CartPrice w-1/2 flex flex-col align-middle items-center justify-center">
            <h1 className='font-medium text-2xl'>Summary</h1>
            <div className="PriceSummary w-full px-20 mt-8">
                <span className='flex justify-between'>
                    <h1>Subtotal:</h1>
                    <h1>₹{150}</h1>
                </span>
                <span className='flex justify-between mt-2'>
                    <h1>Shipping:</h1>
                    <h1>₹{20}</h1>
                </span>
                <span className='flex justify-between mt-10 py-3 border-dotted border-t-2 border-black'>
                    <h1 className='font-semibold text-lg'>Total:</h1>
                    <h1 className='font-semibold text-lg'>₹{170}</h1>
                </span>
            </div>

            <button onClick={() =>{alert("Your Order is Placed 😁")}} className='bg-black border-2 border-black hover:bg-white px-4 py-2 text-white hover:text-black  duration-300'>Place Order 🌟</button>

         </div>
  
      </div>
    </div>
    </>
  )
}
