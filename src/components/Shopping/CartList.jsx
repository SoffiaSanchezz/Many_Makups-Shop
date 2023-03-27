import React from 'react'
import { ShoppingInitialState, ShoppingReducer } from '../reducers/ShoppingReducer';
import { CgTrash } from 'react-icons/cg';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import CartItem from '../reducers/CartItem';


const CartList = ({ cart, delFromCart }) => {
    return (
        <div className='flex overflow-auto h-full justify-center items-center w-80  top-5 right-0 z-30 bg-white fixed shadow-2xl shadow-black p-3'>
            <div className=' bottom-3'>
                {cart.map((item) => (
                    <div key={item.id} className='border-2 border-pink px-3  items-center shadow-pink shadow-2xl gap-6 py-5 my-2'>
                        <CartItem key={item.id} data={item} delFromCart={delFromCart} />
                        <h4>{item.name}</h4>
                        <h5>
                            ${item.price}.00 x {item.quantity} = ${item.price * item.quantity}.00
                        </h5>
                        <div className='flex justify-between items-center'>
                            <button onClick={() => delFromCart(item.id)} className='flex flex-row items-center'>
                                <CgTrash className='text-3xl text-purple' />Eliminar</button>
                            <button onClick={() => delFromCart(item.id, true)} className='flex flex-row items-center'>
                                <RiDeleteBin2Fill className='text-3xl text-plight' />Eliminar Todos</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CartList



