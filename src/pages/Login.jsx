import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
const Login = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const initialState = {
        username: '',
        password: ''
    }

    const errors = {
        username: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialState)
    const [formErrors, setFormErrors] = useState(errors)
    const [messageError, setMessageError] = useState('')

    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
        .then(data => {
            navigate('/success')
            window.location.reload(false);
        })
        .catch(err => {
            const isError = err.response.data.errors
            setFormErrors(errors)

            if (!isError) {
                console.log("eking");
                setMessageError(err.response.data.message)
            } else {
                setMessageError('')
                Object.keys(isError).forEach(err => {
                    const errorKey = err
                    setFormErrors((prevError) => ({
                        ...prevError,
                        [errorKey]: isError[err][0]
                    }))
                })
            }
        })
        
    }

    return (
        <div className="text-left">
            <h1 className="text-black text-3xl text-center">Login</h1>
            <div className="w-full sm:w-2/4 m-auto mt-8">
                { messageError && <div className="text-red-500 text-base font-bold py-2">{messageError}</div> }
                <form onSubmit={handleSubmit}>
                        <label className="block mb-6">
                            <span className={` ${formErrors.username ? 'text-red-500' : 'text-gray-700'} text-base`}>Username</span>
                            <input
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            type="email" 
                            className={`${formErrors.username ? 'border-red-500': ''} mt-1 block w-full rounded-sm`} placeholder="" />
                            { formErrors.username && <span className="help-block text-red-500 block mt-2">{formErrors.username}</span>}
                            
                        </label>
                        <label className="block mb-6">
                            <span className={` ${formErrors.password ? 'text-red-500' : 'text-gray-700'} text-base`}>Password</span>
                            <input
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password" 
                            className={`${formErrors.password ? 'border-red-500': ''} mt-1 block w-full rounded-sm`} placeholder="" />
                            { formErrors.password && <span className="help-block text-red-500 block mt-2">{formErrors.password}</span>}
                        </label>
                        <div className="flex mt-4">
                            <button className="bg-blue-500 hover:bg-blue-600  py-3  text-white w-full rounded-sm text-lg font-bold">Login</button>
                        </div>
                        <div className="mt-4">
                            <div className="text-lg font-bold text-center flex justify-center items-center">
                                <span>Don't have an account?</span>
                                <span className="text-blue-500 hover:underline cursor-pointer ml-1"> <Link to="/register">Register</Link></span>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Login
