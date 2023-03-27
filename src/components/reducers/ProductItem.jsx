import React from 'react'
import { TbShoppingCartPlus } from "react-icons/tb"

const ProductItem = ({ data, addToCart }) => {
    let { id, name, price, img } = data;

    return (
        <div className=''>
            <section className=' bg-violet px-2 py-3 rounded-2xl border-2 border-pink flex flex-col      justify-between items-center'>
                <h4 className='text-2xl'>{name}</h4>
                <img src={img} alt={name} width={200} className=" rounded-xl bg-white my-2 hover:scale-125" />
                <div className='flex flex-row justify-between items-center gap-12'>
                    <h5 className='flex justify-start items-center'>${price}.00</h5>
                    <button onClick={() => addToCart(id)} className="flex flex-row justify-end items-center bg-purple px-3 py-1 rounded-2xl border-2 border-violet hover:bg-pink">
                    <TbShoppingCartPlus className='text-3xl sm:text-1xl' />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default ProductItem