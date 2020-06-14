DROP TABLE IF EXISTS `logs`;

CREATE TABLE `logs`  (
  `id` BIGINT AUTO_INCREMENT  PRIMARY KEY,
  `level` ENUM('ERROR', 'WARNING', 'INFO') NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `details` VARCHAR(1000) NOT NULL,
  `origin` VARCHAR(100) NOT NULL,
  `quantity` INTEGER NOT NULL,
  `created_at` DATETIME NOT NULL
);

INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING'   , 'Teste de warning'    , 'Detalhamento de teste de warning', 'SGDA', 1, '2020-06-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING'   , 'Teste de warning'    , 'Detalhamento de teste de warning', 'GRDA', 4, '2020-06-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('ERROR'     , 'Teste de error'      , 'Detalhamento de teste de error', 'SGDA', 1, '2020-04-23');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('INFO'      , 'Teste de info'       , 'Detalhamento de teste de info', 'GRDA', 5, '2020-05-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING'   , 'Teste de warning'    , 'Detalhamento de teste de warning', 'CODENATION', 1, '2020-06-02');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING'   , 'Teste de warning'    , 'Detalhamento de teste de warning', 'GRDA', 2, '2020-05-11');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('ERROR'     , 'Teste de error'      , 'Detalhamento de teste de error', 'SGDA', 1, '2020-05-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('INFO'      , 'Teste de info'       , 'Detalhamento de teste de info', 'GRDA', 3, '2020-05-10');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING'   , 'Teste de warning'    , 'Detalhamento de teste de warning', 'CODENATION', 1, '2020-06-21');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING'   , 'Teste de warning'    , 'Detalhamento de teste de warning', 'CODENATION', 1, '2020-04-15');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('ERROR'     , 'Teste de error'      , 'Detalhamento de teste de error', 'SGDA', 3, '2020-05-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('INFO'      , 'Teste de info'       , 'Detalhamento de teste de info', 'GRDA', 1, '2020-05-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING'   , 'Teste de warning'    , 'Detalhamento de teste de warning', 'CODENATION', 1, '2020-06-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING'   , 'Teste de warning'    , 'Detalhamento de teste de warning', 'CODENATION', 1, '2020-05-30');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('ERROR'     , 'Teste de error'      , 'Detalhamento de teste de error', 'SGDA', 1, '2020-04-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('INFO'      , 'Teste de info'       , 'Detalhamento de teste de info', 'GRDA', 2, '2020-05-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING'   , 'Teste de warning'    , 'Detalhamento de teste de warning', 'SGDA', 1, '2020-06-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING'   , 'Teste de warning'    , 'Detalhamento de teste de warning', 'GRDA', 1, '2020-06-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('ERROR'     , 'Teste de error'      , 'Detalhamento de teste de error', 'CODENATION', 1, '2020-05-09');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('INFO'      , 'Teste de info'       , 'Detalhamento de teste de info', 'GRDA', 5, '2020-05-06');