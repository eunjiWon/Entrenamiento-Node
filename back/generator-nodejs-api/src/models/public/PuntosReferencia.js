"use strict"
/**
* @param {Sequelize} secuelize [description]
* @param {Sequelize.DataTypes} DataTypes [description]
* @param {ApiEviroment} env 	[description]
* @return {Sequelize.model}     [description]
*
*
*/

module.exports = function(sequelize,DataTypes){
	
	const PuntoReferencia = sequelize.define("puntos_referencia",{
		
		pointCod :{
			field : "cod_pun_ref",
            type : DataTypes.INTEGER,
            primaryKey : true,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		}
		,namePointRef :{
			field : "nom_pun_ref",
			type : DataTypes.STRING(255),
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},
		cooPun : {
			field : "coo_pun",
			type : DataTypes.GEOMETRY,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},
		edoCod : {
			field : "cod_edo",
			type : DataTypes.STRING(2),
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},
		munCod : {
			field : "cod_mun",
			type : DataTypes.STRING(3),
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},
		parCod : {
			field : "cod_par",
			type : DataTypes.STRING(3),
			allowNull : false,
			validate : {
				noEmpty : true
			}
		}
	})
	return PuntoReferencia;
}
