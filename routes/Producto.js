const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getProducto, postProducto,putProducto,deleteProducto} = require('../controllers/Producto') //Importando el controlador

route.get('/', getProducto)

route.post('/', postProducto)

route.put('/', putProducto)

route.delete('/', deleteProducto)


module.exports = route