import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../actions/auth";
const Register = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const initialState = {
        email: '',
        full_name: '',
        password: '',
        password_confirmation: ''
    }

    const errors = {
        email: '',
        full_name: '',
        password: '',
        password_confirmation: ''
    }

    const [formData, setFormData] = useState(initialState)
    const [formErrors, setFormErrors] = useState(errors)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(register(formData))
        .then(() => {
            navigate('/verification')
        })
        .catch(err => {
            const isError = err.response.data.errors
            setFormErrors(errors)
            Object.keys(isError).forEach(err => {
                const errorKey = err
                setFormErrors((prevError) => ({
                    ...prevError,
                    [errorKey]: isError[err][0]
                }))
            })
        })
    }

    return (
        <div className="text-left">
            <h1 className="text-black text-3xl text-center">Register</h1>
            <div className="w-full sm:w-2/4 m-auto mt-8">
                {/* <div className="text-red-500 text-base font-bold py-2">message</div> */}
                <form onSubmit={handleRegister}>
                    <label className="block mb-6">
                        <span className={` ${formErrors.email ? 'text-red-500' : 'text-gray-700'} text-base`}>Email</span>
                        <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        className={`${formErrors.email ? 'border-red-500': ''} mt-1 block w-full rounded-sm`} placeholder="" />
                        { formErrors.email && <span className="help-block text-red-500 block mt-2">{formErrors.email}</span>}
                    </label>
                    <label className="block mb-6">
                        <span className={` ${formErrors.full_name ? 'text-red-500' : 'text-gray-700'} text-base`}>Full Name</span>
                        <input
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        type="text" 
                        className={`${formErrors.full_name ? 'border-red-500': ''} mt-1 block w-full rounded-sm`} placeholder="" />
                        { formErrors.full_name && <span className="help-block text-red-500 block mt-2">{formErrors.full_name}</span>}
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
                    <label className="block mb-6">
                        <span className="text-base text-gray-700">Password Confirmation</span>
                        <input
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        type="password" 
                        className="mt-1 block w-full rounded-sm" placeholder="" />
                    </label>
                    <div className="flex mt-4">
                        <button className="bg-blue-500 hover:bg-blue-600 py-3  text-white w-full rounded-sm text-lg font-bold">Register</button>
                    </div>
                    <div className="mt-4">
                        <div className="text-lg font-bold text-center flex justify-center items-center">
                            <span>Already have an account?</span>
                            <span className="text-blue-500 hover:underline cursor-pointer ml-1"> <Link to="/login">Login</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
