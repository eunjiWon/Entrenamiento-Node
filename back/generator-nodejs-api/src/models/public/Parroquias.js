"use strict"
/**
* @param {Sequelize} secuelize [description]
* @param {Sequelize.DataTypes} DataTypes [description]
* @param {ApiEviroment} env 	[description]
* @return {Sequelize.model}     [description]
*
*
*/
/*
  cod_par character(3) NOT NULL,
  nom_par character(255) NOT NULL,
   polygon,
  CONSTRAINT parroquias_pkey PRIMARY KEY (cod_par),
*/
module.exports = function(sequelize,DataTypes){
	
	const Parroquias = sequelize.define("parroquias",{
		parCod :{
			field : "cod_par",
			type : DataTypes.STRING(3),
			primaryKey : true,
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},
		parName : {
			field : "nom_par",
			type : DataTypes.STRING(255),
			allowNull : false,
			validate : {
				noEmpty : true
			}
		}
		,
		parCoo : {
			field : "coo_par",
			type : DataTypes.GEOMETRY                    
		},
		munCod :{
			field : "cod_mun",
			type : DataTypes.STRING(3),
			allowNull : false,
			validate : {
				noEmpty : true
			}
		},		
	})
	return Parroquias;
}
