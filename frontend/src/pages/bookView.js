import { useNavigate, useLocation } from "react-router-dom";
import logo from '../assets/nicereads2.png'
import { useState, useEffect } from "react";
import service from "../services/service";
import Swal from 'sweetalert2'

function BookView() {
    const location = useLocation();
    const book = location.state;

    const navigate = useNavigate()
    const [userLogged, setUserLogged] = useState("")
    const [nameLogged, setNameLogged] = useState("")

    
    const [stars, setStars] = useState([])
    const [rating, setRating] = useState(0)
    const [opinions, setOpinions] = useState([])
    
    const [genres, setGenres] = useState([])
    
    const handleLogout = (e) => {
        sessionStorage.setItem("user","")
        navigate("/index")
    }
  const [userRating, setUserRating] = useState(0);

  const handleStarClick = (starCount) => {
    setUserRating(starCount);
  };

    const renderStars = () => {
      const ustars = [];
      for (let i = 1; i <= 5; i++) {
        const iconType = i <= userRating ? "star" : "star_border";
        ustars.push(
          <i
            key={i}
            className="material-icons"
            style={{cursor:"pointer"}}
            onClick={() => handleStarClick(i)}
          >
            {iconType}
          </i>
        );
      }
      return ustars;
    };

    const renderStarsReviews = (rating) => {
      const ustars = [];
      for (let i = 1; i <= 5; i++) {
        const iconType = i <= rating ? "star" : "star_border";
        ustars.push(
          <i
            key={i}
            className="material-icons"
            style={{cursor:"pointer"}}
            onClick={() => handleStarClick(i)}
          >
            {iconType}
          </i>
        );
      }
      return ustars;
    };

    const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que se haya seleccionado una calificacion o ingresado un comentario
    if (userRating === 0 && comment.trim().length === 0) {
      Swal.fire({
        title: "Reseña inválida",
        text: "Debes ingresar una calificación y/o comentario",
        icon: "error"
      });
      return;
    }
    service.setReview(userRating,comment,book.book_id,userLogged)
        .then(({success}) => {
            if(success){
              Swal.fire({
                title: "¡Reseña enviada!",
                text: "Tu reseña se ha registrado con éxito",
                icon: "sucess"
              });
            }else{
              Swal.fire({
                title: "Error",
                text: "No fue posible registrar tu reseña, intenta más tarde",
                icon: "error"
              });
            }
        });
   
   
    
  };

    
    useEffect(() => {
        //Obteniendo los datos del usuario loggeado
        setUserLogged(sessionStorage.getItem("user"))
        service.getUserInfo(sessionStorage.getItem("user"))
        .then(({user_name}) => {
            console.log(user_name)
            setNameLogged(user_name)
        });

        service.getBookRating(book.book_id)
        .then(({average_rating}) => {
           const temp_stars = []
            for (let i = 1; i <= 5; i++) {
                if (i <= average_rating) {
                  temp_stars.push(<i key={i} className="material-icons">star</i>);
                } else if (i - average_rating < 1) {
                  temp_stars.push(<i key={i} className="material-icons">star_half</i>);
                } else {
                  temp_stars.push(<i key={i} className="material-icons">star_border</i>);
                }
              }
              setStars(temp_stars)
              setRating(parseFloat(average_rating).toFixed(2))

              
        });
       
        service.getBookGenres(book.book_id)
        .then(({genres}) => {
            setGenres(genres.map(item => item.genre_name))
        });

        service.getBookOpinion(book.book_id)
        .then(({opinions}) => {
            setOpinions(opinions)
            console.log(userLogged)
            const userBookReview = opinions.find(review => review.user_email === sessionStorage.getItem("user")); //Reviso si el usuario ya dio una calificación
            if (userBookReview) {
             console.log(userBookReview)               
              setUserRating(userBookReview.average_rating);// Si se encuentra la reseña del usuario, guardar la calificación
              setComment(userBookReview.rating_comment); //También se asigna el comentario
            } else {
             
              // Si el usuario no ha dejado una reseña, establecer la calificación como 0
              setUserRating(0);
            }
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
            <li>
            
              <a class="dropdown-item" href="" onClick={handleLogout}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
          </svg>
          &nbsp;Cerrar sesión</a>
              </li>
          </ul>
    </li>      
    </ul>
    </div>
    </nav>
    <br></br>
    <div className="container">
    <div className="row">

      <br></br>
    <div className="col text-center">
        <img src={book.book_cover} height={480} style={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)"}}></img>
        <div>
        <p>Califica este libro</p>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        {renderStars()}
        </div>
        <div className="form-group">
          <label>Comentario:</label>
          <textarea className="form-control" rows="3" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-success">Enviar reseña</button>
      </form>
        </div>
    </div>
    <div className="col">
        <h1>{book.book_name}</h1>
        <h6>{book.author_name}</h6>
        <p>{book.book_description}</p>
        {stars} {rating}

        <div>
      {genres.map((nombre, index) => (
        <span key={index} style={{display: "inline-block",padding: "5px 10px",marginLeft:"5px",backgroundColor:"beige",border: "1px solid #ccc",borderRadius: "5px"}}>
            {nombre}
            </span>
      ))}
    </div>
      <br></br>
      <h5>Reseñas</h5>
    <div className="row">
      <div>
      {opinions.map((review, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            
            <h5 className="card-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg> &nbsp;
              {review.user_email}</h5>
            
            <div className="rating">
              {/* Renderizar estrellas según la calificación promedio */}
              {renderStarsReviews(review.average_rating)} {review.average_rating}
            </div>
            <p className="card-text">{review.rating_comment}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
    
    </div>
    </div>
      
    </div>

    </>
  );
}

export default BookView;
