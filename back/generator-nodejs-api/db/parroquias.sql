-- Table: parroquias

-- DROP TABLE parroquias;

CREATE TABLE parroquias
(
  cod_edo character varying(2) NOT NULL,
  cod_mun character varying(3) NOT NULL,
  cod_par character varying(3) NOT NULL,
  nom_par character varying(255) NOT NULL,
  coo_par polygon,
  CONSTRAINT cod_par_pkey PRIMARY KEY (cod_edo, cod_mun, cod_par),
  CONSTRAINT cod_mun_fk FOREIGN KEY (cod_edo, cod_mun)
      REFERENCES municipios (cod_edo, cod_mun) MATCH FULL
      ON UPDATE CASCADE ON DELETE RESTRICT
)
WITH (
  OIDS=FALSE
);
ALTER TABLE parroquias
  OWNER TO postgres;

-- Index: "índice_nom_par"

-- DROP INDEX "índice_nom_par";

CREATE INDEX "índice_nom_par"
  ON parroquias
  USING btree
  (nom_par COLLATE pg_catalog."default");

