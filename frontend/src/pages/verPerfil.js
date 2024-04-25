import { useNavigate } from "react-router-dom";
import logo from '../assets/nicereads2.png'
import { useState, useEffect } from "react";
import service from "../services/service";
import { Link } from 'react-router-dom';
function VerPerfil() {
   

    const navigate = useNavigate()
    const [userLogged, setUserLogged] = useState("")
    const [nameLogged, setNameLogged] = useState("")
    const handleLogout = (e) => {
        sessionStorage.setItem("user","")
        navigate("/index")
    }

   
    useEffect(() => {
        //Obteniendo los datos del usuario loggeado
        setUserLogged(sessionStorage.getItem("user"))
        service.getUserInfo(sessionStorage.getItem("user"))
        .then(({user_name}) => {
            console.log(user_name)
            setNameLogged(user_name)
        });
       
        
      }, []); // El segundo argumento es un array vacío para indicar que esta acción solo se ejecuta una vez
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary border">
  <div class="container">
  <Link class="navbar-brand" to="/home">
      <img src={logo} alt="Nicereads" width={250}/>
    </Link>

    <ul class="navbar-nav text-start">
    <li class="nav-item">
          <Link class="nav-link" to="/text">Extraer texto</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/translate">Traducir texto</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/speech">Leer en voz alta</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/entity">Entidades de un texto</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/chatbot">Chatbot</Link>
          </li>
    </ul>

    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
          </svg> 
          {nameLogged}
        </a>
        <ul class="dropdown-menu">
        <Link class="dropdown-item" to="/profile">{userLogged}</Link>
          <li>
            <a class="dropdown-item" href="" onClick={handleLogout}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
              </svg>
              &nbsp;Cerrar sesión
            </a>
          </li>
        </ul>
      </li>      
    </ul>
  </div>
</nav>
    <br></br>
    <div className="container">
    <div className="row">
        <div className="col-md-5">
        <div className="card h-100 d-flex flex-column justify-content-between">
          <div className="card-body">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
          </svg> 
            <p className="card-text">{nameLogged}</p>
            <p className="card-text"><small className="text-muted">{userLogged}</small></p>
          </div>
        </div> 
        </div>

    <div className="col-md-7 text-center">
        <h2>Mis reseñas</h2>
    </div>
    </div>
    </div>

    </>
  );
}

export default VerPerfil;
