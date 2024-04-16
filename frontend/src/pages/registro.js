import { useNavigate } from "react-router-dom";
import logo from '../assets/nicereads2.png'
import { useState } from "react";
import service from "../services/service";
import Swal from 'sweetalert2'
function Registro() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        nombre: '',
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
        service.registry(formData.email,formData.nombre, formData.contraseña)
        .then(({success}) => {
          if(success){
            Swal.fire({
                title: "Registro exitoso",
                text: "¡Se ha registrado correctamente!",
                icon: "success"
              });

              navigate("/login")
          }else{
            Swal.fire({
                title: "Registro fallido",
                text: "No fue posible realizar el registro :c",
                icon: "error"
              });
          }
        
      });
        // Limpiar el formulario después de enviar
        setFormData({
          email: '',
          nombre: '',
          contraseña: ''
        });
      };
  return (
    <>
    <div class="container d-flex justify-content-center align-items-center vh-100">
    <div className="text-left">
        <img src={logo}></img>
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
        />
      </div>

      <div className="form-group">
        <label>Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Reader Rabbit"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
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
        />
      </div>
        <br></br>
      <button type="submit" className="btn btn-warning">
        Registrarse
      </button>
    </form>
    </div>
    </div>

    </>
  );
}

export default Registro;