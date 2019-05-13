'use strict'

const Comment = require('../models/comment');
const moment = require('moment');



function listAll(req,res){

    Comment.find({
        gasolinera: req.params.id
    }).populate('gasolinera').populate('user').exec((err, foundedComments) => {
        if(err) return res.status(500).send({message: 'Hubo un error en la petición',error: err});
        if(foundedComments && foundedComments.length<=0) return res.status(302).send({message: 'No existen comentarios para la gasolinera'});
        console.log(foundedComments.length<=0)
        return res.status(201).send({
            message :   'Comentarios de la gasolinera',
            foundedComments    :   foundedComments
        });
    });
}
function createComment (req, res) {
    let commParams = req.body;
    if(commParams.user && commParams.gasolinera && commParams.text){
        let new_comm = new Comment({
            user   :  commParams.user,
            gasolinera  : commParams.gasolinera,
            text    :   commParams.text
        });
        new_comm.added_time = moment().format('MMMM Do YYYY, h:mm:ss a');
        new_comm.save((err,new_co)=>{
            if(err) return res.status(500).send({message: 'Hubo un error en la petición',error: err});
            if(!new_co) return res.status(201).send({
                message :   'No se ha registrado el comentario',
                new_co    :   new_co
            });
            return res.status(201).send({
                message :   'Comentario registrado con éxito',
                new_co    :   new_co
            });
        });
        
    }else{
        return res.status(411).send({message: 'Por favor complete todos los campos'});
    }
}

function deleteCom (req, res) {
    const comToDelete = req.params.id;
    Comment.findById(comToDelete,(err, comm) => {
        if(err) return res.status(500).send({message: 'Hubo un error en la petición'});
        if(!comm) return res.status(404).send({message: 'No existe el comentario'});
        Comment.findByIdAndRemove({'_id':comToDelete}).exec().then((removed) => {
            if(!removed) return res.status(401).send({message: 'El comentario no ha sido eliminado'});
            return res.status(200).send({message: 'Comentario eliminado con éxito'});
        }).catch((err) => {
            return err;
        });
    });
}

module.exports = {
    listAll,
    createComment,
    deleteCom
}