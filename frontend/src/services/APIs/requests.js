import axios from 'axios'

const instance = axios.create(
    {
        baseURL: 'http://localhost:9000', //la ip podría cambiar http://44.202.167.5
        timeout: 100000,
        headers:{
            'Content-Type':'application/json'
        }
    }
)
//Registro de nuevo usuario
export const registry = async(email, name, password) =>{
    
    const { data } = await instance.post("/registro", {user_email:email, user_name:name, user_password:password})
    return data
}
//Inicio de sesión
export const login = async(email, password) =>{
    console.log(email,password)
    const { data } = await instance.post("/login", {user_email:email, user_password:password})
    console.log(data)
    return data
}