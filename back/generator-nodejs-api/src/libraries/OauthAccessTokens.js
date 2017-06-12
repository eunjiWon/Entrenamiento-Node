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
	
	const OauthAccessTokens = sequelize.define("oauthAccessTokens",{
		accessToken :{
			field : "access_token",
			DataTypes : DataTypes.TEXT,
			primaryKey : true,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},
		clientId : {
			field : "client_id",
			DataTypes : DataTypes.TEXT,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},		
		userId :{
			field : "user_id",
			DataTypes : DataTypes.UUID,
			allowNull : false,
			validate : {
				noEmpty : true
			}		
		},
		expires :{
			field : "expires",
			DataTypes : DataTypes.DATE,
			allowNull : false,
			validate : {
				noEmpty : true
			}		
		}
	})
}
