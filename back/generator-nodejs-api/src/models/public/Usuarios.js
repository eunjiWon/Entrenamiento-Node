/**
 * Modelo Usuarios
 * @class Usuarios
 * @module models
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}}
 */
module.exports = function(sequelize, DataTypes) {
    var Usuarios = sequelize.define("usuarios",
        {
            userId :{
            field : "id_usu",
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
            },
            userName : {
                field : "nom_usu",
                type : DataTypes.STRING(50),
                allowNull : false,
                unique : true,
                validate : {
                    notEmpty : true
                }
            },
            userLastName : {
                field : "ape_usu",
                type : DataTypes.STRING(50),
                allowNull : false,
                validate : {
                    notEmpty : true
                }
            },
            userLog : {
                field : "log_usu",
                type : DataTypes.STRING(40),
                allowNull : false,
                validate : {
                    notEmpty : true
                }
            },
            userPas : {
                field : "pas_usu",
                type : DataTypes.STRING(40),
                allowNull : false,
                validate : {
                    notEmpty : true
                }
            },
            userNivAdm : {
                field : "niv_adm",
                type : DataTypes.BOOLEAN
            }
        },
        {
            schema : "public",
            classMethods: {
                associate: function (models) {
                    //TODO Agrega aquí tus relaciones
                }

                //TODO Escribir metodos
            }
        }
    );

    return Usuarios;
};