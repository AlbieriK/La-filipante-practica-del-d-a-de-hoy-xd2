//Guardar en una constante la libreria mongoose para usarla
const mongoose = require('mongoose')
//Guardo la url de la conexion de BD en constante
const url_bd = 'mongodb://localhost:27017/Empresa'
//Conexion con la base de datos en MongoDB
mongoose.connect(url_bd)
//Promesa
//.then es para que comprobar que todo funcine bien
.then(() => {
    console.log("Si Funciona")
})
//.cath es para cachar un error
.catch((err) => {
    console.log("No Funciono")
})
//Esquema para la BD
const Esquema_Empleados=new mongoose.Schema({
    Nombre: {
        type:String
    },
    Apellido:{
        type:String
    },
    ID:{
        type:String
    },
    Nacionalidad:{
        type:String
    },
    Idiomas:{
        type:String
    },
    Edad:{
        type:String
    },
    Noseeee:{
        type:String
    }

})
//Coleccion es una tabla
const modelo_Empleados=new mongoose.model('DatosDL',Esquema_Empleados)
//Meter datos en mi tabla de BD
modelo_Empleados.create({
    Nombre: "Karim",
    Apellido: "Reyes",
    ID:   "S03298i",
    Nacionalidad: "Méxicano",
    Idiomas: "Español Ingles",
    Edad: "diecinueve",
    Noseeee: "No se me ocurrio que poner aqui"
})
//Para correr el programa es en la terminal y poner node app.js