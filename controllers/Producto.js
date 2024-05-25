const { response } = require('express');
const Producto = require('../models/Producto');

const getProducto = async (req, res) => {
    try {
        const productos = await Producto.find(); // Obtener todos los documentos de una colección
        res.json({
            msg: productos
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener los productos',
            error
        });
    }
};

const postProducto = async (req, res) => {
    const datos = req.body; // Capturar datos de la URL-postman
    let mensaje = 'Inserción exitosa';
    try {
        const producto = new Producto(datos); // Instanciar el objeto
        await producto.save(); // Guardar en la base de datos
        console.log(producto);
        res.json({
            msg: mensaje,
            producto
        });
    } catch (error) {
        mensaje = error.message;
        console.log(error);
        res.status(500).json({
            msg: mensaje
        });
    }
};

const putProducto = async (req, res) => {
    const { idProducto, nombreProducto, Foto, stock, precioEnPesos, precioEnDolares } = req.body; // Desestructurar el array con los datos
    let mensaje = '';

    try {
        const producto = await Producto.findOneAndUpdate(
            { idProducto: idProducto }, // Búsqueda
            { nombreProducto, Foto, stock, precioEnPesos, precioEnDolares }, // Campos a editar
            { new: true } // Para obtener el documento actualizado
        );

        if (!producto) {
            return res.status(404).json({ mensaje: 'No se encontró el producto' });
        }

        mensaje = 'Actualización exitosa';
        res.status(200).json({ mensaje, producto });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

const deleteProducto = async (req, res) => {
    const { idProducto } = req.body;
    let mensaje = '';

    try {
        const producto = await Producto.findOneAndDelete({ idProducto: idProducto }); // Encuentra y elimina el documento por su idProducto
        if (!producto) {
            return res.status(404).json({ mensaje: 'No se encontró el producto' });
        }
        mensaje = 'Eliminación exitosa';
    } catch (error) {
        mensaje = error.message;
        return res.status(500).json({ mensaje });
    }

    res.json({ msg: mensaje });
};

module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
};
