
import './../Register.css';
import Comp from './Comp';
import { LoginContext } from '../Context/LoginContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';



function Login() {
    const { setUser } = useContext(LoginContext);

    const [data, setdata] = useState({});

    console.log("data", data);

    const setRegister = (event) => {
        console.log("event",event);
        const name = event.target.name;
        const value = event.target.value;
        setdata({ ...data, [name]: value })
    }
    const submitb = (e) => {
        e.preventDefault()
        console.log("username===>", data);
        setUser(data)

    }
    return (
        <div className='main'>

            <div >
                <h1>Login !</h1>

            </div>
            <from  >
                <div className="div-section" style={{ marginTop: "10px", }}>
                    <label>username</label>
                    <input type="text" name='username' onChange={setRegister}></input>
                </div>
                <div className='div-section'>
                    <label>password</label>
                    <input type="text" name='password' onChange={setRegister}></input>
                </div>


                <div>
                    <input type="submit" onClick={submitb} value="save"></input>


                    <Link to={'/'}>hfhgfhhg</Link>

                    <Link to='/register'>register</Link>
                    <Link to={'/register'}>   click  </Link>
                    <Link to={'/register'}><button>click</button></Link>
                </div>
            </from>
        </div>

    );
}
export default Login;