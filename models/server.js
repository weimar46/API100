const express = require('express')
const cors = require('cors'); //Implementar seguridad
const bodyParser = require('body-parser') //Paquete para convertir el objeto enviado desde el formulario
const { dbConection } = require('../database/config');



class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.productoPath = '/producto' //Ruta de la API
        this.servicioPath = '/servicios' //Ruta de la API
        this.membresiaPath = '/membresia' //Ruta de la API

        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }
    routes(){
        this.app.use(this.productoPath, require('../routes/Producto'))
        this.app.use(this.servicioPath, require('../routes/servicios')),
        this.app.use(this.membresiaPath, require('../routes/membresia'))
    }
    
    middlewares(){
        this.app.use( cors() ); //Indicar el uso de cors
        this.app.use(bodyParser.json())//Parsear objetos a insertar en la base de datos
    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase