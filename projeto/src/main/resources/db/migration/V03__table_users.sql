DROP TABLE IF EXISTS `users`;

CREATE TABLE `users`  (
  `id` BIGINT AUTO_INCREMENT  PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(400) NOT NULL,
  `created_at` DATETIME NOT NULL
);

INSERT INTO users (name,email,password,created_at) VALUES ('Marcio Junior', 'admin@admin.com.br', '$2y$12$ZgDrmppCo96nlafjBNlr5.lm1CBI7n7T2hiHfwJ4tNnCzJwH2SI0q', '2020-06-01');