import { useNavigate } from "react-router-dom";
import logo from '../assets/nicereads2.png'
function Index() {
    const data = [
        { carnet: '202000650', nombre: 'Marjorie Gissell Reyes Franco' },
        { carnet: '202003381', nombre: 'Luisa María Ortíz Romero' },
        { carnet: '202000343', nombre: 'Luis Manuel Chay Marroquín' }
    ];

    const navigate = useNavigate()
  return (
    <>
    <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="">
      <img src={logo} alt="Nicereads" width={300}/>
    </a>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-outline-success"onClick={()=>navigate("/login")} >Iniciar sesión</button>
        <button type="button" class="btn btn-warning" onClick={()=>navigate("/registro")}>Registrarse</button>
    </div>
    </div>
    </nav>

    <div className="container">
      <h2>Integrantes</h2>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Carnet</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {data.map((estudiante, index) => (
            <tr key={index}>
              <td>{estudiante.carnet}</td>
              <td>{estudiante.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
}

export default Index;
