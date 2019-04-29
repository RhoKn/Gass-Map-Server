'use strict'

const Dish = require('../models/dish');
const mongoosePaginate = require('mongoose-pagination');
var mongoose = require('mongoose');

function viewAll (req,res){
    let page = req.params.page ? req.params.page : 1;
    const pdcts_per_page = 5;
    const order = req.params.order ? req.params.order : 'name';
    Dish.find().populate('category').populate('ingredients').sort(order).paginate(page, pdcts_per_page, (err, dishes, total)=>{
        if(err) return res.status(500).send({message: 'Hubo un error en la petición'});
        return res.status(200).send({
            message     :   'Lista de platillos',
            dishes    :   dishes,
            total       :   total,
            pages       :   Math.ceil(total/pdcts_per_page)
        });
    });
}
function viewDish (req,res){
    const dishToView = req.params.id;
    Dish.findById(dishToView).populate('category').populate('ingredients').exec((err,dish)=>{
        if(err) return res.status(500).send({message: 'Hubo un error en la petición'});
        if(!dish) return res.status(404).send({message: 'El platillo no existe'});
        return res.status(200).send({
            message     :   'Platillo encontrado',
            dish     :   dish
        });
    });
}
function updateDish (req,res){
    const dishToUpdate = req.params.id;
    const updateInfo = req.body;
    Dish.findByIdAndUpdate(dishToUpdate,updateInfo,{new: true}, (err, updatedDish)=>{
        if(err) return res.status(500).send({message: 'Hubo un error en la petición'});
        if(!updatedDish) return res.status(304).send({message: 'No se pudo actualizar el platillo'});
        return res.status(200).send({
            message     :   'Platillo actualizado',
            dish     :   updatedDish
        });
    });
}

function createDish (req,res){
    let dishParams = req.body;
    if(dishParams.name && dishParams.category && dishParams.description && dishParams.price && dishParams.ingredients){

            let newDish = new Dish({
                name        : dishParams.name,
                category    : dishParams.category,
                price       : dishParams.price,
                description : dishParams.description,
                enabled     : true,
                ingredients : dishParams.ingredients
            });
            Dish.find({name: newDish.name}).exec((err, foundedDishes) => {
                if (err) return res.status(500).send({ message: 'Hubo un error en la petición', err : err});
                if (foundedDishes && foundedDishes.length > 0) return res.status(302).send({ message: 'El platillo ya se encuentra registrado' });
                newDish.save((err, dish) => {
                    if (err) return res.status(500).send({ message: 'Hubo un error en la petición' });
                    if (!dish) return res.status(201).send({
                        message     : 'No se ha registrado el platillo',
                        dish    : dish
                    });
                    return res.status(201).send({
                        message     : 'Platillo registrado con éxito',
                        dish     : dish
                    });
                });

            });



    }else{
        return res.status(411).send({ message: 'Por favor complete todos los campos' });
    }
}
function deleteDish (req,res){
    const dishToDelete = req.params.id;
    Dish.findById(dishToDelete,(err, dish) => {
        if(err) return res.status(500).send({message: 'Hubo un error en la petición'});
        if(!dish) return res.status(404).send({message: 'No existe el Platillo'});
        Dish.findByIdAndRemove({'_id':dishToDelete}).exec().then((removed) => {
            if(!removed) return res.status(401).send({message: 'El platillo no ha sido eliminado'});
            return res.status(200).send({message: 'Platillo eliminado con éxito'});
        }).catch((err) => {
            return err;
        });
    });
}

module.exports = {
    viewAll, viewDish,
    updateDish,createDish, deleteDish
}
