-- Sequence: usuarios_id_usu_seq

-- DROP SEQUENCE usuarios_id_usu_seq;

CREATE SEQUENCE usuarios_id_usu_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 38
  CACHE 1;
ALTER TABLE usuarios_id_usu_seq
  OWNER TO postgres;