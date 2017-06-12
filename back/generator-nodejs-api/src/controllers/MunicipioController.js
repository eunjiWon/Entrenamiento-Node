/**
 * Clase controller Municipio
 * @class MunicipioController
 * @module controllers
 */
"use strict";
var modelo = require('../models');

class MunicipioController {
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
        var valueDefault = {};
        valueDefault.munCod =-1;
        valueDefault.munName = "--Sin Selección--";
        modelo.municipios.findAll({
            where : {
                edoCod :  req.query.idState
            },
            order : [
                ['nom_mun', 'ASC'],
            ]
        }).then(function(data) {
            data.push(valueDefault);
            if (data.length > 0){
                return res.status(200).json(
                    {
                        sucess: true,
                        messages: 'Todos los Municipios',
                        errors: null,
                        data: data
                    }
                );

            } 
            res.status(401).json(
                {
                    sucess: false,
                    messages: 'No existen municipios',
                    errors: null,
                    data: [data]
                }
            );


         });
    }
}

    module.exports = new MunicipioController();


