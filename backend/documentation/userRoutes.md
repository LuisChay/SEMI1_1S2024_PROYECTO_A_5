# Manejo de usuarios

## Registro de usuario

### Método
* POST

### Ruta
* localhost:9000/registro

### JSON
```json
{
  "user_email":"rmarjoriee71@gmail.com",
  "user_name":"Marjorie Reyes",
  "user_password":"123"
}
```

### Respuestas
```json
{
  "success": true
},200
```

```json
{
  "success": false,
  "message": "El correo electrónico ya está registrado"
},200
cons
const userRoutes = require('./routes/userRoutes')t userRoutes = require('./routes/userRoutes')
```
## Login Usuarios

### Método
* POST 
### Ruta
* localhost:9000/login

### JSON
```json
{
  "user_email":"rmarjoriee71@gmail.com",
  "user_password":"1234"
}
```

### Respuestas
```json
{
  "success": true
}, 200
```

```json
{
  "success": false
}, 200
```

## Mostrar información del usuario

### Método
* POST 
### Ruta
* localhost:9000/userInfo

### JSON
```json
{
  "user_email":"rmarjoriee71@gmail.com"
}
```

### Respuestas
```json
{
  "user_email": "rmarjoriee71@gmail.com",
  "user_name": "Marjorie Reyes"
}, 200
```
