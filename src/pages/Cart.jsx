import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { CartItems } from '../components/CartItems';

const Cart = () => {

  // creating a useSelector to access the state that we have created in cartSlice
  const { cart } = useSelector((state) => state);


  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0));
  }, [cart])


  return (
    <div>
      <div>
        {
          cart.length > 0 ?
            (<div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>
              <div className='w-[100%] md:w-[60%] flex flex-col p-2'>
                {
                  cart.map((item, index) => {
                    return <CartItems key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div className='w-[100%] md:w-[40%] mt-5 flex flex-col p-5 '>
                <div className='flex flex-col gap-5 my-2  h-[100%] justify-between'>
                  <div className='font-semibold text-xl text-green-800 '>
                    <p>Your Cart</p>
                    <p className='font-semibold text-5xl text-green-700 mt-4'>SUMMARY</p>
                    </div>


                  <p className='text-xl'>
                    <span className='text-gray-700 font-semibold text-xl'>Total Items: {cart.length}</span>
                  </p>
                </div>

                <div className='flex flex-col'>
                  <p className='text-xl font-bold'>Total Amount: ${totalAmount}</p>
                </div>

                <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white 
                transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>CheckOut Now</button>
              </div>
            </div>) :

            (<div className='min-h-[80vh] flex flex-col items-center justify-center'>
              <p className='text-gray-700 font-semibold text-xl mb-2'>Your Cart is Empty !</p>
              <Link to={'/'}>
                <button className='bg-green-600 hover:bg-purple-50 rounded-lg text-white 
            transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider'>Shop Now</button>
              </Link>
            </div>)
        }
      </div>

    </div>
  )
}

export default Cart;
