'use strict'

const Favorite = require('../models/favorite');
const moment = require('moment');


function listAll(req,res){

    Favorite.find({
        user: req.params.id
    }).exec((err, foundedFavs) => {
        if(err) return res.status(500).send({message: 'Hubo un error en la petición'});
        if(!foundedFavs && !foundedFavs.length>0) return res.status(302).send({message: 'No existen favoritos para el usuario'});
        
        return res.status(201).send({
            message :   'Favoritos del usuario',
            foundedFavs    :   foundedFavs
        });
    });
}
function createFavorite (req, res) {
    let favsParam = req.body;
    if(favsParam.user && favsParam.gasolinera){
        let new_fav = new Favorite({
            user   :  favsParam.user,
            gasolinera  : favsParam.gasolinera 
        });
        new_fav.added_time = moment().format('MMMM Do YYYY, h:mm:ss a');
        new_fav.save((err,new_fav)=>{
            if(err) return res.status(500).send({message: 'Hubo un error en la petición'});
            if(!new_fav) return res.status(201).send({
                message :   'No se ha registrado el favorito',
                new_fav    :   new_fav
            });
            return res.status(201).send({
                message :   'Favorito registrado con éxito',
                new_fav    :   new_fav
            });
        });
        
    }else{
        return res.status(411).send({message: 'Por favor complete todos los campos'});
    }
}

function viewFav (req, res) {
    const favToView = req.params.id;

    Favorite.findById(favToView,(err,fav)=>{
        if(err) return res.status(500).send({message: 'Hubo un error en la petición'});
        if(!fav) return res.status(404).send({message: 'El favorito no existe'});
        return res.status(200).send({
            message :   'Favorito encontrado',
            fav    :   fav
        });
    });

}

function deleteFav (req, res) {
    const favToDelete = req.params.id;
    Favorite.findById(favToDelete,(err, fav) => {
        if(err) return res.status(500).send({message: 'Hubo un error en la petición'});
        if(!fav) return res.status(404).send({message: 'No existe el favorito'});
        Favorite.findByIdAndRemove({'_id':favToDelete}).exec().then((removed) => {
            if(!removed) return res.status(401).send({message: 'El favorito no ha sido eliminado'});
            return res.status(200).send({message: 'Favorito eliminado con éxito'});
        }).catch((err) => {
            return err;
        });
    });
}

module.exports = {
    listAll,
    createFavorite,
    viewFav,
    deleteFav
}