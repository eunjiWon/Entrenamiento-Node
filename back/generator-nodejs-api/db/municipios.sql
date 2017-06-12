-- Table: municipios

-- DROP TABLE municipios;

CREATE TABLE municipios
(
  cod_edo character varying(2) NOT NULL,
  cod_mun character varying(3) NOT NULL,
  nom_mun character varying(255) NOT NULL,
  CONSTRAINT cod_num_pkey PRIMARY KEY (cod_edo, cod_mun),
  CONSTRAINT cod_edo_fk FOREIGN KEY (cod_edo)
      REFERENCES estados (cod_edo) MATCH FULL
      ON UPDATE CASCADE ON DELETE RESTRICT
)
WITH (
  OIDS=FALSE
);
ALTER TABLE municipios
  OWNER TO postgres;

-- Index: "índice_nom_mun"

-- DROP INDEX "índice_nom_mun";

CREATE INDEX "índice_nom_mun"
  ON municipios
  USING btree
  (nom_mun COLLATE pg_catalog."default");

