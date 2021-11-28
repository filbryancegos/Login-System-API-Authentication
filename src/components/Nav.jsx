import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
const Nav = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        .then(response => {
            localStorage.removeItem('token')
            navigate('/login')
        })
    }

    const isLoggedIn = localStorage.getItem('isLoggedin')

    const checkAuth = () => {
        if (!isLoggedIn) {
            navigate('/login')
        }
    }

    useEffect(() => {
        checkAuth()
    },[isLoggedIn])

    return (
        <div className="bg-blue-500 px-10 py-4 text-white">
            <div>
                <ul className="space-x-4">
                    <div className="flex w-full space-x-4 justify-between">
                        <div className="flex w-full space-x-4 justify-end">
                            {!isLoggedIn && 
                                <div className="flex w-full space-x-4 justify-end">
                                     <li className="space-x-4 text-base">
                                        <Link to="/login">Login</Link>
                                    </li>
                
                                    <li className="space-x-4 text-base">
                                        <Link to="/register">Register</Link>
                                    </li>
                                </div>
                            }
                           
                            
                            {isLoggedIn && 
                                <li className="space-x-4 text-base">
                                    <div onClick={handleLogout} className="cursor-pointer block">Logout</div>
                                </li> 
                            }
                            
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Nav
