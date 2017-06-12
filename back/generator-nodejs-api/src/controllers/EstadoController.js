/**
 * Clase controller Estado
 * @class EstadoController
 * @module controllers
 */
"use strict";
var modelo = require('../models');

class EstadoController {
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
        valueDefault.stateCod =-1;
        valueDefault.stateName = "--Sin Selección--";
        modelo.estados.findAll({
            order : [
                ['nom_edo', 'ASC'],
            ]
        }).then(function(data) {
            if (data.length > 0){
                data.push(valueDefault);
                return res.status(200).json(
                    {
                        sucess: true,
                        messages: 'Todos los estados',
                        errors: null,
                        data: data
                    }
                );
            }
            else if(data.length == 0){
                return res.status(200).json(
                    {
                        sucess: true,
                        messages: 'Sin Estados',
                        errors: null,
                        data: null
                    }
                );
            }
            res.status(401).json(
                {
                    sucess: false,
                    messages: 'No existen estados',
                    errors: null,
                    data: [data]
                }
            );


         });
    }
}

module.exports = new EstadoController();
