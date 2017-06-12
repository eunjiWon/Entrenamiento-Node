-- Table: puntos_referencia

-- DROP TABLE puntos_referencia;

CREATE TABLE puntos_referencia
(
  cod_pun_ref integer NOT NULL,
  nom_pun_ref character varying(255) NOT NULL,
  cod_edo character varying(2) NOT NULL,
  cod_mun character varying(3) NOT NULL,
  cod_par character varying(3) NOT NULL,
  cod_pun point,
  CONSTRAINT cod_pun_ref_pkey PRIMARY KEY (cod_edo, cod_mun, cod_par, cod_pun_ref),
  CONSTRAINT cod_par_fk FOREIGN KEY (cod_edo, cod_mun, cod_par)
      REFERENCES parroquias (cod_edo, cod_mun, cod_par) MATCH FULL
      ON UPDATE CASCADE ON DELETE RESTRICT
)
WITH (
  OIDS=FALSE
);
ALTER TABLE puntos_referencia
  OWNER TO postgres;

-- Index: "índice_nom_pun_ref"

-- DROP INDEX "índice_nom_pun_ref";

CREATE INDEX "índice_nom_pun_ref"
  ON puntos_referencia
  USING btree
  (nom_pun_ref COLLATE pg_catalog."default");

