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

//Obtener lista de generos
export const getGenres = async() =>{
    const { data } = await instance.get("/genres")
    return {genres:data}
}

//Obtener lista de libros filtrados por género
export const getBooksByGenre = async(genre) =>{
    const { data } = await instance.get("/book/by/genre/"+genre)
    return {books:data}
}

//Obtener promedio de calificacaiones para un libro
export const getBookRating = async(book) =>{
    const { data } = await instance.get("/getRating/"+book)
    return data[0]
}

//Obtener reseñas de un libro
export const getBookOpinion = async(book) =>{
    const { data } = await instance.get("ratings/"+book)
    return {opinions:data}
}

//Obtener géneros que posee un libro
export const getBookGenres = async(book) =>{
    const { data } = await instance.get("/book/genre/"+book)
    return {genres:data}
}
//Enviar reseñas de libros
export const setReview = async(rating, comment, book, user) =>{
    const { data } = await instance.post("/setRating",{rating_value:rating, rating_comment:comment, book_id:book, user_email:user})
    return data
}

//Búsqueda por título
export const searchTitle = async(title) =>{
    const { data } = await instance.post("/search/book",{book_name:title})
    return {books:data}
}

//Búsqueda por autor
export const searchAuthor = async(author) =>{
    const { data } = await instance.post("/search/author",{author_name:author})
    return {rbooks:data}
}

//Extraer texto
export const extractText = async(image) =>{
    const { data } = await instance.post("/funcion/texto",{foto:image})
    return data
}

//Tradducir texto
export const translate = async(text, lang) =>{
    const { data } = await instance.post("/funcion/traduccion",{texto:text,idioma:lang})
    return data
}