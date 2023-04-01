import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import ShoppingCart from '../Shopping/ShoppingCart'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiX } from 'react-icons/bi';
import Logo from '../../assets/Logo.png'
import { ShoppingInitialState } from '../reducers/ShoppingReducer';
// import { ShoppingContext } from '../reducers/ShoppingReducer';
// import { TYPE } from '../Shopping/ShoppingAction';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

    // Obtén las categorías únicas de los productos
    const categorias = ShoppingInitialState.categorias;

    // Filtra los productos según la categoría seleccionada
    const productosFiltrados = categoriaSeleccionada
        ? ShoppingInitialState.productos.filter(
            (producto) => producto.categoriaId === categoriaSeleccionada
        )
        : ShoppingInitialState.productos;



    return (
        <div>
            <ShoppingCart />
            <div className="bg-violet shadow-xl shadow-pink fixed top-0 w-full h-20">
                <div className="flex justify-center items-center">
                    <img
                        className="flex justify-center items-center p-2"
                        width={80}
                        src={Logo}
                        alt="logo"
                    />
                    <div className=' flex flex-row'>
                        <Link to="/" className="text-2xl font-bold py-2 px-4 font-Amatic justify-end rounded-xl hover:bg-gray-200">
                            Inicio
                        </Link>
                        <Link to="/servicios" className="text-2xl font-bold py-2 px-4 font-Amatic justify-end rounded-xl border-1 hover:bg-gray-200 hover:border-pink">
                            Servicios
                        </Link>
                    </div>
                </div>
                <div className="fixed p-1 left-5 top-4 z-[100] w-fit h-fit rounded-full bg-purple border-1 border-yellow hover:bg-pink-200 cursor-pointer" onClick={() => setMenu(!menu)}>
                    {/* Cambia el icono del menú */}
                    {menu ? (
                        <BiX className='text-2xl' color="white" />
                    ) : (
                        <GiHamburgerMenu className='text-2xl' color="white" />
                    )}
                </div>
                <div className="fixed right-5 top-3 z-[100] w-fit h-fit rounded-full bg-purple border-1 border-yellow hover:bg-pink-200 cursor-pointer p-1">
                </div>
                {menu && (
                    <div className="bg-white py-2 px-4 mt-12 rounded-lg shadow-xl w-64 ">
                        <div className="flex flex-col">
                            {categorias.map((categoria) => (
                                <Link
                                    key={categoria.id}
                                    className={`text-2xl font-bold py-2 px-4 font-Amatic ${categoria.id === categoriaSeleccionada
                                            ? "bg-pink-200"
                                            : "hover:bg-gray-200"
                                        }`}
                                    to="#"
                                    onClick={() =>
                                        setCategoriaSeleccionada(categoria.id)
                                    }
                                >
                                    {categoria.nombre}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="h-20" />
            {/* Renderiza los productos filtrados */}
            {productosFiltrados.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.name}</h2>
                </div>
            ))}
        </div>

    )
}

export default Navbar