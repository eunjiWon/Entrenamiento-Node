/**
 * Clase controller Parroquias
 * @class ParroquiasController
 * @module controllers
 */
"use strict";
var modelo = require('../models');
class ParroquiaController {
    /**
     * IO Constructor
     */
    constructor(){}


    /**
     * Metodo utilizado por HTTP GET (GET_ALL)
     * @method find
     * @param req
     * @param res
     */
    find(req,res){
        modelo.parroquias.findAll({
            where : {
                munCod : req.query.idMunicipally
            },
            order : [
                ['nom_par  ', 'ASC'],
            ]

        }).then(function(data) {
            if (data.length > 0){
                return res.status(200).json(
                    {
                        sucess: true,
                        messages: 'Todas las parroquias',
                        errors: null,
                        data: data
                    }
                );

            } 
            res.status(401).json(
                {
                    sucess: false,
                    messages: 'No existen parrquias',
                    errors: null,
                    data: [data]
                }
            );


         });
    }
}

module.exports = new ParroquiaController();
