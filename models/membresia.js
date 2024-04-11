const {Schema, model} = require('mongoose')

const MembresiaSchema = ({
    idMembresia:{
        type: Number,
        unique: true,
        required:[true, 'El id de la membresia  es necesaria']
    },

    nombreMembresia: {
        type:String,
        required:[true, 'El nombre de la membresia es requerida'],
    },
    precioMembresia: {
        type:String,
        required:[true, 'El precio de la membresia es requerida'],
    },
    frecuenciaMembresia:{
        type:String,
        required:[true, 'La frecuencia de la membresia es requerida'],
    },

    fechaInicio:{
        type:String,
        required:[true, 'La fecha de inicio de la membresia es requeriad'],
    },

    fechaFin:{
        type:String,
        required:[true, 'La fecha fin de la membresia es requeriad'],
    },
    iva:{
        type:String,
        required:[true, 'El servicio es requerido'],
    }
   
   
})


module.exports = model('Membresia', MembresiaSchema)