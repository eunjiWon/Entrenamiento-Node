-- Table: spatial_ref_sys

-- DROP TABLE spatial_ref_sys;

CREATE TABLE spatial_ref_sys
(
  srid integer NOT NULL,
  auth_name character varying(256),
  auth_srid integer,
  srtext character varying(2048),
  proj4text character varying(2048),
  CONSTRAINT spatial_ref_sys_pkey PRIMARY KEY (srid),
  CONSTRAINT spatial_ref_sys_srid_check CHECK (srid > 0 AND srid <= 998999)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE spatial_ref_sys
  OWNER TO postgres;
GRANT ALL ON TABLE spatial_ref_sys TO postgres;
GRANT SELECT ON TABLE spatial_ref_sys TO public;
