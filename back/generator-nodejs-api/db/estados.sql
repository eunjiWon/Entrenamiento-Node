-- Table: estados

-- DROP TABLE estados;

CREATE TABLE estados
(
  cod_edo character varying(2) NOT NULL,
  nom_edo character varying(100) NOT NULL,
  CONSTRAINT cod_edo_pkey PRIMARY KEY (cod_edo)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE estados
  OWNER TO postgres;

-- Index: "índice_nom_edo"

-- DROP INDEX "índice_nom_edo";

CREATE INDEX "índice_nom_edo"
  ON estados
  USING btree
  (nom_edo COLLATE pg_catalog."default");

