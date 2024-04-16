import axios from 'axios'

const instance = axios.create(
    {
        baseURL: 'http://localhost:8000', //la ip podría cambiar http://44.202.167.5
        timeout: 100000,
        headers:{
            'Content-Type':'application/json'
        }
    }
)

export const registry = async(email, name, password) =>{
    const { data } = await instance.post("/registro", {user_email:email, user_name:name, user_password:password})
    return data
}