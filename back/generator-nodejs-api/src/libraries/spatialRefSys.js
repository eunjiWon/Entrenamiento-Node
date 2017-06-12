"use strict"
/**
* @param {Sequelize} secuelize [description]
* @param {Sequelize.DataTypes} DataTypes [description]
* @param {ApiEviroment} env 	[description]
* @return {Sequelize.model}     [description]
*
*
*/

module.exports = function(sequelize,DataTypes,env){
	
	const SpatialRefSys = sequelize.define("spatialRefSys",{
		srID :{
			field : "srid",
			DataTypes : DataTypes.INTEGER,
			primaryKey : true,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},
		authName : {
			field : "auth_name",
			DataTypes : DataTypes.STRING(256)
		},		
		authSrid :{
			field : "auth_srid",
			DataTypes : DataTypes.INTEGER,	
		},
		srtText :{
			field : "srtext",
			DataTypes : DataTypes.STRING(2048)	
		},
		proj4text :{
			field : "proj4text",
			DataTypes : DataTypes.STRING(2048)	
		}
	})
}
