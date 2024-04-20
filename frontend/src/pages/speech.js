import { useNavigate } from "react-router-dom";
import logo from '../assets/nicereads2.png'
import { useState, useEffect } from "react";
import service from "../services/service";
function Speech() {
   

    const navigate = useNavigate()
    const [userLogged, setUserLogged] = useState("")
    const [nameLogged, setNameLogged] = useState("")
    const [image, setImage] = useState("")
    const [text, setText] = useState("")
    const [audio, setAudio] = useState("")
   
    const handleLogout = (e) => {
        sessionStorage.setItem("user","")
        navigate("/index")
    }

    const handleExtract = (e) => {
        e.preventDefault()
        const base64Data = image.split(',')[1];

        service.extractText(base64Data)
        .then(({texto}) => {
            setText(texto)
        });

    }

    const handleSpeech = (e) => {
       e.preventDefault()
  
        service.speech(text.toString())
        .then(({audio}) => {
            setAudio("data:audio/mp3;base64,"+audio)
           
        });

    }



   
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
          setImage(reader.result);
        };
    
        if (selectedImage) {
          reader.readAsDataURL(selectedImage);
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
      
        
      }, []); // El segundo argumento es un array vacío para indicar que esta acción solo se ejecuta una vez
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary border">
  <div class="container">
    <a class="navbar-brand" href="" onClick={()=> navigate("/home")}>
      <img src={logo} alt="Nicereads" width={250}/>
    </a>

    <ul class="navbar-nav text-start">
      <li class="nav-item">
        <a class="nav-link" href="" onClick={()=>navigate("/text")}>Extraer texto</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" onClick={()=>navigate("/translate")}>Traducir texto</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="" onClick={()=>navigate("/speech")}>Leer en voz alta</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" onClick={()=>navigate("/entity")}>Entidades de un texto</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" onClick={()=>navigate("/chatbot")}>Chatbot</a>
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
          <li><a class="dropdown-item" >{userLogged}</a></li>
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
  <div className="col-md-4">
    <h6>Selecciona una imagen</h6>
    <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && (
        <div className="text-center">
            <br></br>
          <h5>Imagen seleccionada:</h5>
          <img src={image} alt="Imagen seleccionada" style={{ width: '95%',boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }} />
          <button className="btn btn-warning" onClick={handleExtract}>Extraer texto</button>
        </div>
      )}
   
  </div>

  <div className="col-md-8">

  <form >
        <div className="form-group" >
        <label>Texto extraido:</label>
          <textarea className="form-control" rows="5" value={text} placeholder="Escribe tu texto aquí" onChange={(e) => setText(e.target.value)}></textarea>
        <button type="submit" className="btn btn-success" onClick={handleSpeech}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
            <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
            <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
            </svg>
            Generar audio
            </button>
        </div>
       
       
      </form>
      <br></br> <br></br>
      
      {audio && (
        <audio controls>
          <source src={audio} type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      )}
      </div>
        </div>
        </div>
        
    


  
    
    

    </>
  );
}

export default Speech;
