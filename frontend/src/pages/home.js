import { useNavigate } from "react-router-dom";
import logo from '../assets/nicereads2.png'
import { useState, useEffect } from "react";
import service from "../services/service";
import { Link } from 'react-router-dom';
function Home() {
   

    const navigate = useNavigate()
    const [userLogged, setUserLogged] = useState("")
    const [nameLogged, setNameLogged] = useState("")
    const [books, setBooks] = useState([])
    const [genres, setGenres] = useState([])
    const [selectedGenre, SetSelectedGenre]= useState("")
    const [search, setSearch] = useState("")
    const handleLogout = (e) => {
        sessionStorage.setItem("user","")
        navigate("/index")
    }

    const handleSelectChange = (e) => {
      SetSelectedGenre(e.target.value);
    };

    function filterUniqueById(array) {
      const seen = new Set();
      return array.filter(item => {
          const id = item.book_id;
          return seen.has(id) ? false : seen.add(id);
      });
    }

    const handleSearch = (event) =>{
      event.preventDefault()
      
      if (search.length > 0) {
        var result = [];
        var result2 = [];
        service.searchTitle(search)
            .then(({ books }) => {
                result = books;
                return service.searchAuthor(search); // Devolver la promesa para la cadena de promesas
            })
            .then(({ rbooks }) => {
                result2 = rbooks;
                let listaCombinada = result.concat(result2);
                let listafiltrada = filterUniqueById(listaCombinada);
                setBooks(listafiltrada);
            })
            .catch(error => {
                console.error('Error:', error);
                // Manejar el error si es necesario
            });
    
       

        
        

       

        
      }else{
        //Obteniendo listado de libros disponible
       service.getBooks()
       .then(({books}) => {
           setBooks(books)
       });
      }
      };

    

    const genreFilter = (e) => {
      if(selectedGenre==""){
        service.getBooks()
        .then(({books}) => {
            setBooks(books)
        });
      }else{
      service.getBooksByGenre(selectedGenre)
        .then(({books}) => {
            setBooks(books)
        });
      }
    };
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

        //Obteniendo el listado de géneros disponibles
        service.getGenres()
        .then(({genres}) => {
            setGenres(genres)
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
  <div className="col-md-3">
    <h6 className="mr-3">Filtrar por género:</h6>
  </div>
  <div className="col-md-3">
    <select onChange={handleSelectChange} className="form-control">
      <option value="">Selecciona un género</option>
      {genres.map((option, index) => (
        <option key={index} value={option.genre_id}>{option.genre_name}</option>
      ))}
    </select>
  </div>
  <div className="col-md-2">
    <button class="btn btn-warning" onClick={genreFilter}>Filtrar</button>
    </div>
    <div className="col-md-4">
<form class="search-bar" role="search" style={{display:"flex", alignItems:"center", width:"100%", marginLeft:"10px"}}>
      <input class="form-control me-2" type="search" placeholder="Búsqueda por título o autor" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
      <button class="btn btn-outline-success" type="submit" onClick={handleSearch}>Buscar</button>
    </form>
</div>
</div>

      <br></br>
    <div className="row">
    
    {books.length > 0 ? (
    books.map(book => (
      <div key={book.book_id} className="col-md-3 mb-4">
        <div className="card h-100 d-flex flex-column justify-content-between" onClick={()=>navigate("/book",{ state: book })} style={{cursor:"pointer"}}>
          <img src={book.book_cover} className="card-img-top" alt={book.book_name} />
          <div className="card-body">
            <h5 className="card-title">{book.book_name}</h5>
            <p className="card-text">{book.book_description}</p>
            <p className="card-text"><small className="text-muted">{book.author_name}</small></p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="col-12">
      <p>No hay libros disponibles.</p>
    </div>
  )}
    </div>
    </div>

    </>
  );
}

export default Home;
