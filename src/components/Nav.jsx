import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
const Nav = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const isLogin = useSelector(state => state.auth.isLogin)
    const username = useSelector(state => state.auth.username)
     
    const handleLogout = () => {
        dispatch(logout())
        .then(() => {
            localStorage.removeItem('token')
            navigate('/login')
        })
    }

    const islogeInd = () => {
        if (!isLogin) {
            navigate('/login')
        } else {
            navigate('/success')
        }
    }

    useEffect(() => {
        islogeInd()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin])

    return (
        <div className="bg-blue-500 px-10 py-4 text-white">
            <div>
                <ul className="space-x-4">
                    <div className="flex w-full space-x-4 justify-between">
                        <div className="flex w-full space-x-4 justify-end">
                            { !isLogin && 
                                <div className="flex w-full space-x-4 justify-end">
                                     <li className="space-x-4 text-base">
                                        <Link to="/login">Login</Link>
                                    </li>
                
                                    <li className="space-x-4 text-base">
                                        <Link to="/register">Register</Link>
                                    </li>
                                </div>
                            }
                            {isLogin &&
                                <div className="flex items-center space-x-2">
                                    <li>
                                        <div>Welcome <span className="capitalize font-bold">{username}</span>!</div>
                                    </li>
                                    <li className="space-x-4 text-base">
                                        <div onClick={handleLogout} className="cursor-pointer block">Logout</div>
                                    </li> 
                                </div>
                                
                            }
                            
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Nav
