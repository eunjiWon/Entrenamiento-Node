-- Table: usuarios

-- DROP TABLE usuarios;

CREATE TABLE usuarios
(
  id_usu serial NOT NULL,
  nom_usu character varying(50) NOT NULL,
  ape_usu character varying(50) NOT NULL,
  log_usu character varying(40) NOT NULL,
  pas_usu character varying(40) NOT NULL,
  niv_adm boolean,
  CONSTRAINT id_usu_pkey PRIMARY KEY (id_usu)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE usuarios
  OWNER TO postgres;

-- Index: "índice_log_usu"

-- DROP INDEX "índice_log_usu";

CREATE INDEX "índice_log_usu"
  ON usuarios
  USING hash
  (log_usu COLLATE pg_catalog."default");

-- Index: "índice_pas_usu"

-- DROP INDEX "índice_pas_usu";

CREATE INDEX "índice_pas_usu"
  ON usuarios
  USING hash
  (pas_usu COLLATE pg_catalog."default");

