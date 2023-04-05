/* eslint-disable no-unused-vars */
import {useState, useContext} from 'react'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth';

export default function SingUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const{ singUp} = useContext(AuthContext);

   function handleSubmit(e){
    e.preventDefault();

    if(name!== '' && email !== '' && password !== ''){
        singUp(email, password, name)
    }

   } 

    return(
        <div className='container-center' >
            <div className='login'>
                <div className='login-area'>
                <img src={logo} alt='logo do sistema de chamados' /> 
                </div>

                <form onSubmit={handleSubmit}>
                    <h1> Nova conta </h1>
                    <input 
                    type='text'
                    placeholder='Your name'
                    value={email}
                    onChange={ (e) => setName(e.target.value)}
                    />
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
                    <button type= 'submit' >Cadastrar</button>
                </form>

            <Link to ='/register'> Log in </Link>
               

            </div>
        </div>
    )
}