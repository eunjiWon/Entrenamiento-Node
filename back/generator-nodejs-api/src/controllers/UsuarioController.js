/**
 * Clase controller usuario
 * @class usuarioController
 * @module controllers
 */
"use strict";

var modelo = require('../models');
class usuarioController {
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
            modelo.usuarios.create({
                userName: req.body.userName,
                userLastName : req.body.userLastName,
                userLog : req.body.userLog,
                userPas : req.body.userPas,
                userNivAdm : req.body.userNivAdm
             }).then(function(user) {
                res.status(200).json(
                    {
                        sucess: true,
                        messages: 'Usuario creado',
                        errors: null,
                        data: [user]
                    }
                );
             }).catch(function(error){
                if(error.name == "SequelizeUniqueConstraintError"){
                    res.status(401).json(
                    {
                        sucess: false,
                        messages: 'Usuario existente',
                        errors: 401,
                        data: [error]
                    }); 
                }
                else{
                    res.status(500).json(
                        {
                            sucess: false,
                            messages: 'Error al crear usuario',
                            errors: null,
                            data: [error]
                        }
                    );
                }
             })              
    }
    /**
     * Metodo utilizado por HTTP PUT
     * @method update
     * @param req
     * @param res
     */
    update(req,res){
        modelo.usuarios.findOne({ 
            where: {
                userId: req.params.id
                } 
        }).then(function(user) {
           if(user != null){
                
            modelo.usuarios.update({
                    userName: req.body.userName,
                    userLastName : req.body.userLastName,
                    userLog : req.body.userLog,
                    userPas : req.body.userPas,
                    userNivAdm : req.body.userNivAdm
                },{
                    where : {
                        userId : user.userId
                    }
                }).then(function(user) {
                    res.status(200).json(
                        {
                            sucess: true,
                            messages: 'Usuario actualizado',
                            errors: null,
                            data: null
                        }
                    );
                }).catch(function(error){
                    if(error.name == "SequelizeUniqueConstraintError"){
                       
                    res.status(400).json(
                        {
                            sucess: false,
                            messages: 'usuario',
                            errors: 400,
                            data: [error]
                        }
                    );
                    }else{
                    res.status(500).json(
                        {
                            sucess: false,
                            messages: 'usuario',
                            errors: 500,
                            data: [error]
                        }
                        );
                    }
                    res.status(500).json(
                        {
                            sucess: false,
                            messages: 'Error',
                            errors: 500,
                            data: [error]
                        }
                    );  
                });
           }
           else{
                res.status(412).json(
                    {
                        sucess: false,
                        messages: 'Precondicion fallida',
                        errors: 402,
                        data: null
                    }
                );
           }
        });
    }

    /**
     * Metodo utilizado por HTTP DELETE
     * @method destroy
     * @param req
     * @param res
     */
    destroy(req,res){
        modelo.usuarios.destroy({ 
                    where: {userId: req.params.id
                } 
            }).then(function(user) {
                res.status(200).json(
                    {
                        sucess: true,
                        messages: 'Usuario eliminado',
                        errors: null,
                        data: [user]
                    }
                );
             }).catch(function(error){
                    res.status(401).json(
                        {
                            sucess: true,
                            messages: 'Error al eliminar',
                            errors: 401,
                            data: []
                        }
                    );
             });
    }

    /**
     * Metodo utilizado por HTTP GET (GET_ONE)
     * @method findOne
     * @param req
     * @param res
     */
    findOne(req,res){
            modelo.usuarios.findOne({ 
                    where: {userId: req.params.id
                } 
            }).then(function(user) {
                   res.status(200).json(
                    {
                        sucess: true,
                        messages: 'Informacion del usuario',
                        errors: null,
                        data: [user]
                    }
                );
            }).catch(function(error) {
                res.status(401).json(
                    {
                        sucess: false,
                        messages: 'Precondicion fallida',
                        errors: 500,
                        data: null
                    }
                );
            })
    }

    /**
     * Metodo utilizado por HTTP GET (GET_ALL)
     * @method find
     * @param req
     * @param res
     */
    find(req,res){
        modelo.usuarios.findAll().then(function(data) {
            if (data.length > 0){
                for(var i=0;i<data.length;i++){
                    if(data[i].userNivAdm == 0){
                        data[i].userNivAdm = "Digitalizador"
                    }
                    else{
                        data[i].userNivAdm = "Administrador"
                    }
            }
                return res.status(200).json(
                    {
                        sucess: true,
                        messages: 'Todos los usuarios',
                        errors: null,
                        data: data
                    }
                );

            } 
            res.status(401).json(
                {
                    sucess: false,
                    messages: 'No existen usuarios',
                    errors: null,
                    data: [data]
                }
            );


         });
    }


    /**
     * Metodo utilizado por HTTP POST
     * @method login
     * @param req
     * @param res
     */
    login(req,res){
          let userName = req.body.username;
          let password = req.body.password;
        modelo.usuarios.find({
            where: {
               userLog: userName,
               userPas: password
            }
         }).then(function(data) {
            if (data != null){
                return res.status(200).json(
                    {
                        sucess: true,
                        messages: 'Usuario existente',
                        errors: null,
                        data: [data]
                    }
                );

            }
            else {
                 return res.status(200).json(
                  
                    {
                        sucess: false,
                        messages: 'no login',
                        errors: null,
                        data: [2]
                    }
                );
            } 
            
         });

    }

      /**
     * Metodo utilizado por HTTP GET (GET_ALL)
     * @method find
     * @param req
     * @param res
     */
    findByParams(req,res){

        modelo.usuarios.findAll({
            where : {
                $or: [
                    {
                      userName: {
                        $like: req.query.search+'%'
                      }
                    },
                    {
                      userLastName: {
                        $like: req.query.search+'%'
                      }
                    },
                    {
                        userLog: {
                            $like: req.query.search+'%'
                        }
                    }
                  ]
            }
        }).then(function(data) {
            if (data.length > 0){
                for(var i=0;i<data.length;i++){
                    if(data[i].userNivAdm == 0){
                        data[i].userNivAdm = "Digitalizador"
                    }
                    else{
                        data[i].userNivAdm = "Administrador"
                    }
                }
                return res.status(200).json(
                    {
                        sucess: true,
                        messages: 'usuarios',
                        errors: null,
                        data: data
                    }
                );

            } 
            res.status(412).json(
                {
                    sucess: false,
                    messages: 'No existen usuarios',
                    errors: 412,
                    data: [null]
                }
            );


         });
    }


    /**
     * Metodo utilizado por HTTP OPTIONS
     * @method options
     * @param req
     * @param res
     */

    options(req,res){
        res.status(200).json(
            {
                sucess: true,
                messages: 'Estructura base OPTIONS',
                errors: null,
                data: [{}, {}, {}]
            }
        );
    }
}

module.exports = new usuarioController();
