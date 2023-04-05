import React, {useContext, useState } from 'react';
import './../Register.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../Context/LoginContext';

function Register() {

const [formData,setForm]=useState({name:"maneesh",email:"maneesh@gmail.com"})




console.log("form data",formData);


 const [inputs, setInputs] = useState([]);
const {User} = useContext(LoginContext);


    console.log("User==>", User);

    const setRegister = (event) => {
        // console.log("bn",event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        setInputs({...inputs,[name]:value})
        console.log(inputs);    
    }


    const registerSubmit = (event) => {
        event.preventDefault();
        setForm({name:"ramees"})
        if (inputs.address == "") {
            toast("ghfhfhfh")
        }

        console.log(inputs.address);
    }


    return (
        <div className='main'>

            <div >
                <h1>Register Here ! {User.username}</h1>
            </div>
            <ToastContainer/>
            <form method="post" onSubmit={registerSubmit}>
                <div className='div-section'>
                    <label>name</label>
                    <input type="text" name='username' onChange={setRegister}></input>
                </div>
                <div className='div-section'>
                    <label>email</label>
                    <input type="email" name='email' value={inputs.email || ""} onChange={setRegister}></input>
                </div>
                <div className='div-section'>
                    <label>number</label>
                    <input type="text" name='number' value={inputs.number || ""} onChange={setRegister}></input>
                </div>
                <div className='div-section'>
                    <label>age</label>
                    <input type="text" name='age' value={inputs.age || ""} onChange={setRegister}></input>
                </div>
                <div className='div-section'>
                    <label>address</label>
                    <input type="text" name='address' value={inputs.address || ""} onChange={setRegister}></input>
                </div>
                <div className='div-section'>
                    <label>username</label>
                    <input type="text" name='user' value={inputs.user || ""} onChange={setRegister}></input>
                </div>
                <div className='div-section'>
                    <label>password</label>
                    <input type="password" name='password' value={inputs.password || ""} onChange={setRegister}></input>
                </div>
                <div>
                    <input type="submit" value="save" ></input>
                </div>
            </form>
        </div>

    );
}
export default Register;