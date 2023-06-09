import React, { useState, useReducer } from 'react';
import ProductItem from '../reducers/ProductItem';
import { AiTwotoneDelete } from "react-icons/ai";
//Trae los productos
import { ShoppingInitialState, ShoppingReducer } from '../reducers/ShoppingReducer';
import CartItem from '../reducers/CartItem';
//Trae las acciones que realiza el carrito
import { TYPE } from './ShoppingAction';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartList from './CartList';
// Función que nos permitirá calcular el total de la compra
const calculateTotal = (cart) => {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
};


const ShoppingCart = () => {

    //Hook useReducer para manejar el estado de la aplicación
  const [state, dispatch] = useReducer(ShoppingReducer, ShoppingInitialState);
  const [showCart, setShowCart] = useState(false);
  const { productos, cart } = state;

    // Función que nos permitirá agregar un producto al carrito
  const addToCart = (id) => {
    dispatch({ type: TYPE.ADD_TO_CART, payload: id });
  };

    // Función que nos permitirá eliminar un producto del carrito
  const delFromCart = (id, all = true) => {
    if (all) {
      dispatch({ type: TYPE.REMOVE_ALL_FROM_CART, payload: id })
    }
    else {
      dispatch({ type: TYPE.REMOVE_ONE_FROM_CART, payload: id })
    }
  };

    //Función que nos permitirá vaciar completamente el carrito
  const clearCart = () => {
    dispatch({ type: TYPE.CLEAR_CART })
  };

    //Función que nos permitirá mostrar/ocultar el carrito
  const toggleCart = () => {
    setShowCart(!showCart);
  };

    //Componente Total que mostrará el total de la compra
  const Total = () => {
    const total = calculateTotal(cart);
    return (
      <div className='bg-purple text-white rounded-full w-24 h-24 flex items-center justify-center text-xs fixed top-1 right-60 z-50 text-center font-Lobster font-light shadow-2xl shadow-violet'>
        Total: ${total.toFixed(2)}
      </div>
    );
  };



  return (
    <div className='container font-Handlee font-bold'>
      <h2> Carrito de compras </h2>
      <h3> Productos </h3>
      <article className='grid grid-cols-2 justify-around md:grid-cols-3 lg:grid-cols-4 p-2 gap-5 shadow-2xl'>
        {productos.map(productos => <ProductItem key={productos.id} data={productos} addToCart={addToCart} />)}
      </article>
      <h3 className=''>

        {/* Renderizamos el icono del carrito */}
        <AiOutlineShoppingCart className='text-5xl fixed right-3 top-3 z-40' onClick={toggleCart} />
      </h3>

      {/* Mostramos la cantidad de productos en el carrito */}
      <span className='bg-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-xs fixed top-2 right-2 z-50'>
        {cart.reduce((total, item) => total + item.quantity, 0)}
      </span>
      <article className={showCart ? 'cart-section visible' : 'cart-section hidden'}>
        {cart.length === 0 ?
          <p className='text-xl justify-center items-center text-black font-Amatic'>Tu carrito está vacío</p>
          :
          cart.map((item, index) => (<CartItem key={index} data={item} delFromCart={delFromCart} showCart={showCart} />))
        }
        {/* Agregar el componente Total */}
        <Total />
        <div className='bg-yellow  mt-3'>
          <button onClick={clearCart} className="fixed right-5 bottom-1 z-40 items-center justify-center text-sm bg-yellow/80 w-32 disabled:opacity-25 border-none shadow-none cursor-pointer p-1 " >
            
            {/* Elimina todos los productos del carrito */}
            <AiTwotoneDelete className='text-5xl text-purple items-center justify-center' /> Borrar todo
          </button>
          <CartList cart={cart} delFromCart={delFromCart} showCart={showCart} />
        </div>
      </article>
    </div>
  )
}

export default ShoppingCart;