/**
 * Clase controller Parroquias
 * @class ParroquiasController
 * @module controllers
 */
"use strict";
var modelo = require('../models');
var sequelize = require('../utils/sequelizeInstance');

class PuntosReferenciaController {
    /**
     * IO Constructor
     */
    constructor(){}

    /**
     * Metodo utilizado por HTTP POST
     * @method create
     * @param req
     * @param res
     */
    create(req,res){
        console.log(""+req.body.namePointRef+"");

// \" \"

        sequelize.query("SELECT f_inserta_punto("+"'"+req.body.namePointRef+"'"+
            ","+req.body.longitude+","+req.body.latitude+");")
        .then(function(puntoReferencia){
            console.log("Exito");
        }).catch(function(error){
            console.log(JSON.stringify(error));
            console.log("Error");
        });

      /*  res.status(200).json(
            {
                sucess: true,
                messages: 'Estructura base POST',
                errors: null,
                data: [{}, {}, {}]
            }
        );*/
    }
    /**
     * Metodo utilizado por HTTP GET (GET_ALL)
     * @method find
     * @param req
     * @param res
     */
    find(req,res){

        var whereValue = {};
        var codMun = req.query.idMunicipally;
        var codEst = req.query.idState;
        var codParr = req.query.idParr;

        if(codEst != null ){
            whereValue.edoCod = codEst;
        }
        if(codMun != null){
            whereValue.munCod = codMun;
        }
        if(codParr != null){
             whereValue.parCod = codParr;
        }

        modelo.puntos_referencia.findAll({
            where : whereValue
        })
        .then(function(data) {
            if (data.length > 0){
                return res.status(200).json(
                    {
                        sucess: true,
                        messages: 'Puntos de Referencia',
                        errors: null,
                        data: data
                    }
                );

            } 
            res.status(401).json(
                {
                    sucess: false,
                    messages: 'No existen puntos de referencia',
                    errors: null,
                    data: [data]
                }
            );


         });
    }
}

module.exports = new PuntosReferenciaController();
