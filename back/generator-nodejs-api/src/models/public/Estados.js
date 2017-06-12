"use strict";

/**
* @param {Sequelize} secuelize [description]
* @param {Sequelize.DataTypes} DataTypes [description]
* @param {ApiEviroment} env 	[description]
* @return {Sequelize.model}     [description]
*
*
*/

module.exports = function(sequelize,DataTypes,env){
	
	const Estados = sequelize.define("estados",{
		stateCod :{
			field : "cod_edo",
			type : DataTypes.STRING(2),
			primaryKey : true,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},
		stateName : {
			field : "nom_edo",
			type : DataTypes.STRING(100),
			allowNull : false,
			validate : {
				noEmpty : true
			}
		}
	}/*
	,
	{
		/*classMethods : {
		associate : (models) =>{
			Estados.hasMany(models.municipios)
			foreingKey : "cod_edo"
			as : "municipality"
			}
		}*/
	//}
	);
		return Estados;		
}
