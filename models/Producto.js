const {Schema, model } = require('mongoose')

const ProductoSchema = ({
    idProducto:{
        type: Number,
        unique:true,
        required:[true, 'El nombre de producto es requirido']
    },
    nombreProducto:{
        type: String,
        required:[true, 'El nombre de producto es requirido']
    },
    Foto: {
        type:String,
        required:[true, 'La foto del producto es requirido']
    },
    stock:{
        type: Number,
        required:[true, 'El stock del producto es requirido']
    },
    precioEnPesos:{
        type: Number,
        required:[true, 'El Precio Proyecto es requirido']
    },
    precioEnDolares:{
        type: Number,
        required:[true, 'El Precio del producto es requirido']
    },

    

});

module.exports = model('Producto', ProductoSchema);