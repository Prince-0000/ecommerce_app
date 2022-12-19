import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFireWorks } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    const [ order, setOrder ] = useState(null);

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        // runFireWorks(); 
    })
  return (
    <div className = 'success-wrapper'>
      <div className = 'success'>
        <p className = 'icon'>
            <BsBagCheckFill />
        </p>
        <h2>Thank You for order</h2>
        <p className='email-msg'>Check your email for receipt</p>
        <p className = 'description'>
            If you have any query, email us
            <a className='email' href = "abc@gmail.com">
                princestore@outlook.com
            </a>
        </p>
        <Link href='/'>
            <button type='button' width='300px' className='btn'>
                Continue Shopping
            </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
