import React, { useState } from "react";
import logo from '../img/restaurant.png'
import avatar from '../img/avatar.png'
import { MdShoppingCart, MdAdd, MdLogout } from 'react-icons/md'
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config"
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import menu from './MenuContainer'

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu);
        }
    }

    const logout = () => {
        setIsMenu(false);
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    }

    const showCart = () => {
        dispatch({
          type: actionType.SET_CART_SHOW,
          cartShow: !cartShow,
        }
        );
    }

    return (
        <header className=" fixed z-50 w-screen p-3 px-4 md:px-16 bg-primary">
            {/* desktop layout */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={"/"} className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-20 object-cover" />
                    <p className="text-2xl font-bold text-gray-800">Rezpecto</p>
                </Link>

                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8 ml-auto">
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                            <Link to={"/menu"}>Menu</Link>
                        </li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                            <Link to={"/about"}>About Us</Link>
                        </li>
                    </ul>

                    <div className="relative flex items-center justify-center" onClick={showCart}>
                        <MdShoppingCart className="text-2xl text-textColor cursor-pointer" />
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">{cartItems.length}</span>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src={user ? user.photoURL : avatar}
                            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
                            alt="userProfile" onClick={login} />
                        {
                            isMenu && (
                                <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex-col absolute top-12 right-0">
                                    {user && user.email === "dandi.agungs46@gmail.com" && (
                                        <Link to={'/createItems'}>
                                            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer
                                             hover:bg-slate-100 transition-all duration-100 ease-in-out
                                              text-textColor text-base" onClick={()=> setIsMenu(false)}>
                                                New item <MdAdd />
                                            </p>
                                        </Link>
                                    )}
                                    <p className="m-2 p-2 rounded-md shadow-md flex items-center items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all 
                                        duration-100 ease-in-out text-textColor text-base" onClick={logout}>
                                        Logout <MdLogout />
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* mobile layout */}
            <div className="flex items-center justify-between md:hidden w-full">
                <div className="relative flex items-center justify-center" onClick={showCart}>
                    <MdShoppingCart className="text-2xl text-textColor cursor-pointer" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">{cartItems.length}</span>
                    </div>
                </div>

                <Link to={"/"} className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-10 object-cover" />
                    <h1 className="text-2xl font-bold text-gray-800">Rezpecto Resto.</h1>
                </Link>

                <div className="relative">
                    <img
                        src={user ? user.photoURL : avatar}
                        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
                        alt="userProfile" onClick={login} />
                    {
                        isMenu && (
                            <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex-col absolute top-12 right-0">
                                {user && user.email === "hosnolarifin220@gmail.com" && (
                                    <Link to={'/createItems'}>
                                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                            New item <MdAdd />
                                        </p>
                                    </Link>
                                )}

                                <ul className="flex flex-col">
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                    onClick={() => setIsMenu(false)}>
                                        Home
                                    </li>
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                    onClick={() => setIsMenu(false)}>
                                        Menu
                                    </li>
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                    onClick={() => setIsMenu(false)}>
                                        About Us
                                    </li>
                                </ul>

                                <p className="m-2 p-2 rounded-md shadow-md flex items-center items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all 
                                    duration-100 ease-in-out text-textColor text-base" onClick={logout}>
                                    Logout <MdLogout />
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    );
}
export default Header;