CREATE DATABASE IF NOT EXISTS `empresa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `empresa`;

CREATE TABLE `funcionario` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `cpf` varchar(30) NOT NULL,
  `birthDate` date NOT NULL,
  `gender` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `funcionario` (`id`, `name`, `cpf`, `birthDate`, `gender`) VALUES
(NULL, 'Allan', '123.123.123-12', '2000-06-30', 'Masculino'),
(NULL, 'Rafaela', '123.123.123-01', '1999-10-20', 'Feminino'),
(NULL, 'Gabriel', '123.123.123-01', '1000-10-10', 'Masculino');

