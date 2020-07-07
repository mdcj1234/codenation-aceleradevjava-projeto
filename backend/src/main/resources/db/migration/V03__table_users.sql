DROP TABLE IF EXISTS `users`;

CREATE TABLE `users`  (
  `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(400) NOT NULL
);

INSERT INTO users (name,email,password) VALUES ('Marcio Junior','marcio@teste.com.br','$2a$12$8izn4Z7se0iRwNJaxKgkfuF2AgaTC5CBkbxV7PPYWS83ouoN59mx6');