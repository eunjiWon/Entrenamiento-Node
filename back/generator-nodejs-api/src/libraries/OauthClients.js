"use strict"
/**
* @param {Sequelize} secuelize [description]
* @param {Sequelize.DataTypes} DataTypes [description]
* @param {ApiEviroment} env 	[description]
* @return {Sequelize.model}     [description]
*
*
*/

module.exports = fuction(sequelize,DataTypes,env){
	
	const OauthClients = sequelize.define("oauthClients",{
		clientId :{
			field : "client_id",
			DataTypes : DataTypes.TEXT,
			primaryKey : true,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},
		clientSecret : {
			field : "client_secret",
			DataTypes : DataTypes.TEXT,
			primaryKey : true,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},
		redirectUri :{
			field : "redirect_uri",
			DataTypes : DataTypes.TEXT,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		}
	})
}

