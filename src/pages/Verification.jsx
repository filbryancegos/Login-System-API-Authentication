import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verify } from "../actions/auth";

const Verification = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const [verificationCode, setVerificationCode] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const handeleSubmit = (e) => {
        e.preventDefault()
        const data = {
            token: verificationCode,
            via: 'email'
        }

        dispatch(verify(data))
        .then(response => {
            console.log(response);
            navigate('/login')
        })
        .catch(err => {
            console.log("eking");
            const error = err.response.data.message
            setErrorMsg(error)
        })
    }

    return (
        <div className="text-left">
        <h1 className="text-black text-3xl text-center">Verify</h1>
        <div className="w-full sm:w-2/4 m-auto mt-8">
            {errorMsg &&  <div className="text-red-500 text-lg mb-2">{errorMsg}</div> }
           
            <form onSubmit={handeleSubmit}>
                <label className="block mb-6">
                    <span className="text-gray-700 text-base">Verification Code</span>
                    <input
                    name="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    type="text" 
                    className="mt-1 block w-full rounded-sm" placeholder="" />
                </label>
                <div className="flex mt-4">
                    <button className="bg-purple-500 py-3  text-white w-full rounded-sm text-lg font-bold">Verify</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Verification
