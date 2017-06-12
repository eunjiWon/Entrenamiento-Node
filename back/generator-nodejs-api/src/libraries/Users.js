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
	
	const Users = sequelize.define("users",{
		id :{
			field : "id",
			DataTypes : DataTypes.UUID,
			primaryKey : true,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},
		userName : {
			field : "username",
			DataTypes : DataTypes.TEXT,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},		
		password :{
			field : "password",
			DataTypes : DataTypes.TEXT,
			allowNull : false,
			validate : {
				noEmpty : true
			}		
		}
	})
}
