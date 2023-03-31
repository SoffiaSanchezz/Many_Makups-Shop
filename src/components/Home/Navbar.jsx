import {React, useState } from 'react'
import { Link } from 'react-router-dom';
import ShoppingCart from '../Shopping/ShoppingCart'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiX } from 'react-icons/bi';
import Logo from '../../assets/Logo.png'
// import { ShoppingContext } from '../reducers/ShoppingReducer';
import { TYPE } from '../Shopping/ShoppingAction';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    // const { state, dispatch } = useContext(ShoppingContext);

    // Filtra los productos por categoría
    const handleCategoryClick = (categoryId) => {
        dispatch({ type: TYPE.FILTER_PRODUCTS_BY_CATEGORY , payload: categoryId });
    };



    return (
        <div>
            <ShoppingCart />
            <div className='bg-violet shadow-xl shadow-pink fixed top-0 w-full h-20'>
            <div className='flex justify-center items-center'>
                <img className='flex justify-center items-center p-2' width={80} src={Logo} alt='logo' />
            </div>
                <div className="fixed left-5 top-4 z-[100] w-fit h-fit rounded-full bg-purple border-1 border-yellow hover:bg-pink-200 cursor-pointer" onClick={() => setMenu(!menu)}>
                    {/* Cambia el icono del menú */}
                    {menu ? <BiX className="text-4xl" /> : <GiHamburgerMenu className="text-4xl p-2" />}
                </div>
                <div>
                    <br />
                    {menu && (
                        <div>
                        <Link  className="absolute left-0 text-3xl text-fuchsia-300">
                            <span className="p-3 hover:text-purple-800"></span>
                        </Link>
                        </div>
                    )}  
            </div>
        </div>
    </div>
    )
}

export default Navbar