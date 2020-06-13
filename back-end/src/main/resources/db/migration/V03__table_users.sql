DROP TABLE IF EXISTS `users`;

CREATE TABLE `users`  (
  `id` BIGINT AUTO_INCREMENT  PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(400) NOT NULL,
  `created_at` DATETIME NOT NULL
);

INSERT INTO users (name,email,password,created_at) VALUES ('Marcio Junior', 'admin@admin.com.br', '$2y$12$b7acUskgXIS4OLgFEdBLzOx9bNlQRJJd7c6P5od512IbHygPEhdYy', '2020-06-01');