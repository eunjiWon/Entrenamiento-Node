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
  cod_mun character(3) NOT NULL,
  nom_mun character(255) NOT NULL,
  CONSTRAINT municipios_pkey PRIMARY KEY (cod_mun),
  CONSTRAINT "FK_mun_edo" FOREIGN KEY (cod_edo)
      REFERENCES estados (cod_edo) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
*/
module.exports = function(sequelize,DataTypes){
	
	const Municipios = sequelize.define("municipios",{
			munCod :{
				field : "cod_mun",
				type : DataTypes.STRING(3),
				primaryKey : true,
				allowNull : false,
				validate : {
					noEmpty : true
				}
			},
			munName : {
				field : "nom_mun",
				type : DataTypes.STRING(255),
				allowNull : false,
				validate : {
					noEmpty : true
				}
			},
			edoCod :{
				field : "cod_edo",
				type : DataTypes.STRING(2),
				allowNull : false,
				validate : {
					noEmpty : true
				}		
			}
		},
		{/*
			classMethods : {
				associate : (models) =>{
					Municipios.hasMany(models.estados)
					foreingKey : "cod_edo"
					as : "municipality"
					}
			}
			*/
	})
	return Municipios;
}
