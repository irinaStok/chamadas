/* eslint-disable no-unused-vars */
import {useState, useContext} from 'react'

import './singin.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import {AuthContext} from'../../contexts/auth'

export default function SingIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {singIn} = useContext(AuthContext)

function handleSingIn(e){
    e.preventDefault();
    if(email !== '' && password !== ''){
       singIn(email, password);    }

}

    return(
        <div className='container-center' >
            <div className='login'>
                <div className='login-area'>
                <img src={logo} alt='logo do sistema de chamados' /> 
                </div>

                <form>
                    <h1> Entrar </h1>
                    <input 
                    type='text'
                    placeholder='email@email.com'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    />

                   <input 
                    type='password'
                    placeholder='********'
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                    />
                    <button type= 'submit' >acessar</button>
                </form>
               <Link to='/register'> Criar conta </Link>

            </div>
        </div>
    )
    }