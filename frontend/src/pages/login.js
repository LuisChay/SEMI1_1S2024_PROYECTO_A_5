import { useNavigate } from "react-router-dom";
import logo from '../assets/nicereads2.png'
import { useState } from "react";
import service from "../services/service";
import Swal from 'sweetalert2'
import CryptoJS from 'crypto-js';
function Login() {
    const navigate = useNavigate()
    const secretKey = 'ClavesitaSemi';
    const [formData, setFormData] = useState({
        email: '',
        contraseña: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Enviando los datos al backend
        service.login(formData.email, CryptoJS.MD5(formData.contraseña).toString())
        .then(({success}) => {
          if(success){
            setFormData({
                email: '',
                contraseña: ''
              });
              navigate("/home")
          }else{
            Swal.fire({
                title: "Inicio de sesión fallido",
                text: "Email o contraseña incorrectos",
                icon: "error"
              });
          }
        
      });

        
      };
  return (
    <>
    <div class="container d-flex justify-content-center align-items-center vh-100">
    <div className="text-left">
        <a href="" onClick={()=>navigate("/")}>
        <img src={logo}></img>
        </a>
        <h3>Iniciar sesión</h3>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="yourmail@mail.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="Ingresa tu contraseña"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          required
        />
      </div>
        <br></br>
      <button type="submit" className="btn btn-warning">
        Iniciar sesión
      </button>
    </form>
    <div class="text-center">
    <a href="" class="btn" role="button" data-bs-toggle="button" style={{color:"GrayText"}} onClick={()=>navigate("/registro")}>¿No tienes una cuenta? ¡Registrate aquí!</a>
    </div>
    </div>
    
    </div>

    </>
  );
}

export default Login;
