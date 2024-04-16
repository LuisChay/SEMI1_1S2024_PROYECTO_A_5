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
    return data
}
//Obtener información del usuario
export const getUserInfo = async(email) =>{
    console.log(email)
    const { data } = await instance.post("/userInfo", {user_email:email})
    console.log(data)
    return data
}

//Obtener libros disponibles
export const getBooks = async() =>{
    const { data } = await instance.get("/books")
    return {books:data}
}