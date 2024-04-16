import { useNavigate } from "react-router-dom";
import logo from '../assets/nicereads2.png'
import { useState, useEffect } from "react";
import service from "../services/service";
function Home() {
   

    const navigate = useNavigate()
    const [userLogged, setUserLogged] = useState("")
    const [nameLogged, setNameLogged] = useState("")
    const [books, setBooks] = useState([])
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
       //Obteniendo listado de libros disponible
       service.getBooks()
        .then(({books}) => {
            setBooks(books)
        });
      }, []); // El segundo argumento es un array vacío para indicar que esta acción solo se ejecuta una vez
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary border">
  <div class="container">
    <a class="navbar-brand" href="">
      <img src={logo} alt="Nicereads" width={250}/>
    </a>
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
            <li><a class="dropdown-item" >{userLogged}</a></li>
            <li><a class="dropdown-item" href="" onClick={handleLogout}>Cerrar sesión</a></li>
          </ul>
    </li>      
    </ul>
    </div>
    </nav>
    <br></br>
    <div className="container">
    <div className="row">
      {books.map(book => (
        <div key={book.book_id} className="col-md-3 mb-4">
           <div className="card h-100 d-flex flex-column justify-content-between">
         
            <img src={book.book_cover} className="card-img-top" alt={book.book_name} />
            <div className="card-body">
              <h5 className="card-title">{book.book_name}</h5>
              <p className="card-text">{book.book_description}</p>
              <p className="card-text"><small className="text-muted">Autor: {book.author_name}</small></p>
            </div>
          </div>
        
        </div>
      ))}
    </div>
    </div>

    </>
  );
}

export default Home;
