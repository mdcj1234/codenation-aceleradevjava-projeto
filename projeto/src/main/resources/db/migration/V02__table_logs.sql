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

INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING', 'Teste de warning', 'Detalhamento de teste de warning', 'SGDA', 1, '2020-06-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('WARNING', 'Teste de warning 2', 'Detalhamento de teste de warning 2', 'GRDA', 1, '2020-06-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('ERROR', 'Teste de warning', 'Detalhamento de teste de error', 'SGDA', 1, '2020-05-01');
INSERT INTO logs (level,description,details,origin,quantity,created_at) VALUES ('INFO', 'Teste de warning', 'Detalhamento de teste de info', 'GRDA', 1, '2020-05-01');