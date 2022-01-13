import React from 'react'
import logo from './3.png';
import './Register.css';

const Register = () => {
    return (
        <div>
             <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap" rel="stylesheet"></link>
   <body>
   <header className="header">
        <img className="header__img" src={logo} alt=""></img>
    </header>
    <section className="Register">
    <section className="Register__container">
    <h2 className="regis">Registrate</h2>
       <div className="profile icon"></div>
       <div className="profile icon2"></div>
       <div className="arrow-right icon"></div>
       <div className="mail icon"></div>
       <div className="key2 icon"></div>
       <form className="Register__container--form">
       <input className="input" type="text" placeholder="Nombre"></input>
            <input className="input" type="text" placeholder="Usuario"></input>
            <input className="input" type="text" placeholder="Correo"></input>
            <input className="input" type="password" placeholder="Contraseña"></input>
            <button className="button">Registrarme</button>
       </form>
       <p className="Register__container--registro"><a href="">¿Ya tienes cuenta? Inicia sesion</a></p>

    </section>
    </section>
    <footer className="footer"></footer>
   </body>

        </div>
    )
}

export default Register
