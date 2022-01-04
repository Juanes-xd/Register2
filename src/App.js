import logo from './3.png';
import './App.css';

function App() {
  return (
    <div className="App">
   <title>Registro</title>
   <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap" rel="stylesheet"></link>
   <body>
   <header class="header">
        <img class="header__img" src={logo} alt=""></img>
    </header>
    <section class="Register">
    <section class="Register__container">
    <h2 class="regis">Registrate</h2>
       <div class="profile icon"></div>
       <div class="profile icon2"></div>
       <div class="arrow-right icon"></div>
       <div class="mail icon"></div>
       <div class="key2 icon"></div>
       <form class="Register__container--form">
       <input class="input" type="text" placeholder="Nombre"></input>
            <input class="input" type="text" placeholder="Usuario"></input>
            <input class="input" type="text" placeholder="Correo"></input>
            <input class="input" type="password" placeholder="Contraseña"></input>
            <button class="button">Registrarme</button>
       </form>
       <p class="Register__container--registro"><a href="">¿Ya tienes cuenta? Inicia sesion</a></p>

    </section>
    </section>
    <footer class="footer"></footer>
   </body>

    </div>
  );
}

export default App;
