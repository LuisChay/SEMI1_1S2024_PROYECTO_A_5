import { useNavigate } from "react-router-dom";
import logo from '../assets/nicereads2.png'
import { useState, useEffect, useRef } from "react";
import service from "../services/service";
import "../assets/chat.css"
function Chatbot() {
   

    const navigate = useNavigate()
    const [userLogged, setUserLogged] = useState("")
    const [nameLogged, setNameLogged] = useState("")

    const [text, setText] = useState("")

    const [messages, setMessages] = useState([
        { text: '¡Bienvenido!', sender: 'bot' },
      ]);
      const [newMessage, setNewMessage] = useState('');
      const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
    
   
    const handleLogout = (e) => {
        sessionStorage.setItem("user","")
        navigate("/index")
    }
    /*
    const handleSendMessage = (e) => {
        service.extractText(base64Data)
        .then(({texto}) => {
           setText(texto)
        });

    }
*/
const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim() !== '') {
     // Guardar el mensaje del usuario
  const newUserMessage = { text: newMessage, sender: 'user' };
  setMessages(prevMessages => [...prevMessages, newUserMessage]);

  // Enviar mensaje al bot y manejar la respuesta
  service.chatbot(newMessage.toString())
    .then(({ mensajes }) => {
      // Para cada mensaje del bot, agregarlo al estado de mensajes
      mensajes.forEach((mensaje) => {
        setMessages(prevMessages => [...prevMessages, { text: mensaje.content, sender: 'bot' }]);
      });
    });

  // Limpiar el input
  setNewMessage('');
  };
}
   


   
    useEffect(() => {
        //Obteniendo los datos del usuario loggeado
        setUserLogged(sessionStorage.getItem("user"))
        service.getUserInfo(sessionStorage.getItem("user"))
        .then(({user_name}) => {
            console.log(user_name)
            setNameLogged(user_name)
        });
        scrollToBottom();
      
        
      }, [messages]); 
  return (
    <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary border">
  <div class="container">
    <a class="navbar-brand" href="" onClick={()=> navigate("/home")}>
      <img src={logo} alt="Nicereads" width={250}/>
    </a>

    <ul class="navbar-nav text-start">
      <li class="nav-item">
        <a class="nav-link active" href="" onClick={()=>navigate("/text")}>Extraer texto</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" onClick={()=>navigate("/translate")}>Traducir texto</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" onClick={()=>navigate("/speech")}>Leer en voz alta</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" onClick={()=>navigate("/entity")}>Entidades de un texto</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="" onClick={()=>navigate("/chatbot")}>Chatbot</a>
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
          <li><a class="dropdown-item" href="" onClick={()=> navigate("/profile")}>{userLogged}</a></li>
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
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="chat-container">
            <div className="chat-messages" id="chat-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
                >
                  {message.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage}>
            <div className="input-group fixed-bottom mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Escribe un mensaje..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                style={{padding:"2px"}}
              />
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  

        
    


  
    
    

    </>
  );
}

export default Chatbot;
