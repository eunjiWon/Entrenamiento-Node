"use strict";
/**
 * Metodo para la publicacion de rutas
 * @example
 *
 *  routes.publish('GET,POST,PUT,DELETE,..',
 *              'nombre_endpoint',
 *              'nombre_controller?nombre_metodo',
 *               arreglos_middlewares)
 *
 *  NOTA: 'el arreglo middlewares recibe el nombre de los archivos en la carpeta middlewares
 *         o los nombres de metodos existente en el controlador referenciado en la ruta.
 *         El arreglo de middlewares no es requerido'
 *
 * @packages
 * @author Jefferson Lara
 * @date 08-10-2016
 * @param routes {object}
 */
var responseUtil = require('./utils/responseUtil');
var config = require('./config');

module.exports = function (routes) {

    /**
     * @api {get} / Request base route
     * @apiVersion 0.0.1
     * @apiName GetBaseRoute
     * @apiGroup Base
     *
     * @apiSuccess {String} code HTTP response code.
     * @apiSuccess {Object} data response data.
     * @apiSuccess {String} data.inner The port in which the api was started.
     * @apiSuccess {String} error if errors found.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "code": 200,
     *       "data": {
     *          "inner":"Api started on port 120"
     *       },
     *       "error": null
     *     }
     */
    routes.publish('get','/',function (req,res) {
        responseUtil.sendResponse(res,200,{
            "inner":"Api started on port " + config.API_PORT
        });
    },null);

    /**
     * @api {post} /usuarios 
     * @apiVersion 0.0.1
     * @apiName create
     * @apiGroup UsuarioController
     *
     * @apiSuccess {String} code HTTP response code.
     * @apiSuccess {Object} data response data.
     * @apiSuccess {String} data.inner The port in which the api was started.
     * @apiSuccess {String} error if errors found.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
            "sucess":true,
            "messages":"Todos los usuarios",
            "errors":null,
            "data":[
                {
                    "userId":6,
                    "userName":"luis",
                    "userLastName":"carrasco",
                    "userLog":"lcarrasco",
                    "userPas":"casa1234",
                    "userNivAdm":"Digitalizador"
                }
            ]
        }
     */
    routes.publish('post','/usuarios','UsuarioController?create',null);

    /**
     * @api {put} /usuarios/id 
     * @apiVersion 0.0.1
     * @apiName update
     * @apiGroup UsuarioController
     *
     * @apiSuccess {String} code HTTP response code.
     * @apiSuccess {Object} data response data.
     * @apiSuccess {String} data.inner The port in which the api was started.
     * @apiSuccess {String} error if errors found.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *     "sucess": true,
     *     "messages": "Usuario actualizado",
     *     "errors": null,
     *     "data": null
     *   }
     */
    routes.publish('put','/usuarios/:id','UsuarioController?update',null);

    /**
     * @api {delete} /usuarios/id 
     * @apiVersion 0.0.1
     * @apiName destroy
     * @apiGroup UsuarioController
     *
     * @apiSuccess {String} code HTTP response code.
     * @apiSuccess {Object} data response data.
     * @apiSuccess {String} data.inner The port in which the api was started.
     * @apiSuccess {String} error if errors found.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *      "sucess": true,
     *      "messages": "Usuario eliminado",
     *      "errors": null,
     *      "data": [1]
     *  }
     */
    routes.publish('delete','/usuarios/:id','UsuarioController?destroy',null);

    /**
     * @api {get} /usuarios
     * @apiVersion 0.0.1
     * @apiName find
     * @apiGroup UsuarioController
     *
     * @apiSuccess {String} code HTTP response code.
     * @apiSuccess {Object} data response data.
     * @apiSuccess {String} data.inner The port in which the api was started.
     * @apiSuccess {String} error if errors found.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *     "sucess": true,
     *     "messages": "Usuario actualizado",
     *     "errors": null,
     *     "data": null
     *   }
     */
    routes.publish('get','/usuarios','UsuarioController?find',null);

    /**
     * @api {get} /usuariosfind 
     * @apiVersion 0.0.1
     * @apiName findByParams
     * @apiGroup UsuarioController
     *
     * @apiSuccess {String} code HTTP response code.
     * @apiSuccess {Object} data response data.
     * @apiSuccess {String} data.inner The port in which the api was started.
     * @apiSuccess {String} error if errors found.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *       {
     *          "sucess": true,
     *          "messages": "usuarios",
     *          "errors": null,
     *          "data": [
     *             {
     *                "userId": 78,
     *                "userName": "luis",
     *                "userLastName": "camacaro",
     *                "userLog": "lcamacaro",
     *                "userPas": "casa1234",
     *                "userNivAdm": "Digitalizador"
     *             },
     *             {
     *                "userId": 6,
     *                "userName": "luis Miguel",
     *                "userLastName": "carrasco Bereciartu",
     *                "userLog": "lcarrasco",
     *                "userPas": "casa1234",
     *                "userNivAdm": "Administrador"
     *             }
     *          ]
     *       }
     */    
    routes.publish('get','/usuariosfind','UsuarioController?findByParams',null);

    /**
     * @api {post} /login 
     * @apiVersion 0.0.1
     * @apiName login
     * @apiGroup UsuarioController
     *
     * @apiSuccess {String} code HTTP response code.
     * @apiSuccess {Object} data response data.
     * @apiSuccess {String} data.inner The port in which the api was started.
     * @apiSuccess {String} error if errors found.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *      "sucess": true,
     *      "messages": "Usuario existente",
     *      "errors": null,
     *      "data": [   
     *          {
     *             "userId": 6,
     *             "userName": "luis Miguel",
     *             "userLastName": "carrasco Bereciartu",
     *             "userLog": "lcarrasco",
     *             "userPas": "casa1234",
     *             "userNivAdm": true
     *          }
     *       ]
     *   }
     */        
    routes.publish('post','/login','UsuarioController?login' ,null);

    /**
     * @api {get} /usuarios/:id
     * @apiVersion 0.0.1
     * @apiName findOne
     * @apiGroup UsuarioController
     *
     * @apiSuccess {String} code HTTP response code.
     * @apiSuccess {Object} data response data.
     * @apiSuccess {String} data.inner The port in which the api was started.
     * @apiSuccess {String} error if errors found.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *      "sucess": true,
     *      "messages": "Informacion del usuario",
     *      "errors": null,
     *      "data": [   {
     *         "userId": 79,
     *         "userName": "Oswaldo",
     *         "userLastName": "morales",
     *         "userLog": "omorales",
     *         "userPas": "casa1234",
     *         "userNivAdm": false
     *      }]
     *   }
     */    
    routes.publish('get','/usuarios/:id','UsuarioController?findOne' ,null);

    /**
     * @api {get} /estados
     * @apiVersion 0.0.1
     * @apiName find
     * @apiGroup EstadoController
     *
     * @apiSuccess {String} code HTTP response code.
     * @apiSuccess {Object} data response data.
     * @apiSuccess {String} data.inner The port in which the api was started.
     * @apiSuccess {String} error if errors found.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *      "sucess": true,
     *      "messages": "Todos los estados",
     *      "errors": null,
     *      "data":    [
     *               {
     *            "stateCod": "22",
     *            "stateName": "ESTADO AMAZONAS"
     *         }
     *      ]
     *   }
     */ 
    routes.publish('get','/estados','EstadoController?find',null);

    /**
     * @api {get} /municipios
     * @apiVersion 0.0.1
     * @apiName find
     * @apiGroup MunicipioController
     *
     * @apiSuccess {String} code HTTP response code.
     * @apiSuccess {Object} data response data.
     * @apiSuccess {String} data.inner The port in which the api was started.
     * @apiSuccess {String} error if errors found.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *      "sucess": true,
     *      "messages": "Todos los Municipios",
     *      "errors": null,
     *      "data": [   {
     *         "munCod": "1",
     *         "munName": "LIBERTADOR",
     *         "edoCod": "1"
     *      }]
     *   }
     */ 
    routes.publish('get','/municipios','MunicipioController?find',null);

    routes.publish('get','/parroquias','ParroquiaController?find',null);
    
    routes.publish('get','/puntos','PuntosReferenciaController?find',null);  

    routes.publish('post','/puntos','PuntosReferenciaController?create',null);  


};
