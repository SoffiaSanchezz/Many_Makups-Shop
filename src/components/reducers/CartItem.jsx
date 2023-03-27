import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { CgTrash } from 'react-icons/cg';

const CartItem = ({ data, cart, delFromCart, showCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <div className=''>
    <div className={showCart ? 'border-none' : 'hidden'}>
      {showCart === id && (
          <div className=''>
          <h4>{name}</h4>
          <h5>
            ${price}.00 x {quantity} = ${price * quantity}.00
          </h5>
        </div>
      )}
        <div className='p-3'>
        <button onClick={() => delFromCart(id)} className='flex-row items-center hidden border-none'>
          {/* <CgTrash className='text-3xl text-purple hidden' />Eliminar */}
          </button>
        <button onClick={() => delFromCart(id, true)} className='flex flex-row items-center border-none'>
          {/* <RiDeleteBin2Fill className='text-5xl text-plight' />Eliminar Todos */}
          </button>
      </div>
    </div>
    </div>
  );
};

export default CartItem;

