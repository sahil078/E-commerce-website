import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const {cart} = useSelector((state) =>state);

    return (
        <div>
            <div className='flex items-center h-20 max-w-5xl mx-auto justify-between'>

                <NavLink to="/">
                <div className="ml-5">
                    <img src='../logo.png' className="h-10" alt='' />
                </div>
                </NavLink>

                <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/Cart">
                        <FaShoppingCart />
                        { cart.length > 0 &&
                            <span className="absolute top-[20px] bg-green-600 text-xs w-5 h-4 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                        }
                    </NavLink>
                    
                </div>

            </div>
        </div>
    )
}

export default Navbar
