CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `price` INT NOT NULL,
   `image` VARCHAR(255),
   `amount` INT NOT NULL,
   `description` TEXT,
   `color` VARCHAR(255),
   `idBrand` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `lastname` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `cellphone` INT NOT NULL,
   `address` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255),
   `idRol` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `cart` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `idUser` INT NOT NULL,
   `totalPrice` INT NOT NULL,
   `amount` INT NOT NULL,
   `date` DATETIME NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `cartProducts` (
   `id` INT AUTO_INCREMENT,
   `idProducts` INT NOT NULL,
   `idCart` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `rol` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `brands` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categoryProducts` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `idProduct` INT NOT NULL,
   `idCategory` INT NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_79e02a52-71a2-45dc-8649-e77bf4404a58` FOREIGN KEY (`idBrand`) REFERENCES `brands`(`id`)  ;

ALTER TABLE `users` ADD CONSTRAINT `FK_25cbfeb8-2388-4384-90b9-92d0dd1442d5` FOREIGN KEY (`idRol`) REFERENCES `rol`(`id`)  ;

ALTER TABLE `cart` ADD CONSTRAINT `FK_ce88a010-764b-4261-bb35-4f103923bd06` FOREIGN KEY (`idUser`) REFERENCES `users`(`id`)  ;

ALTER TABLE `cartProducts` ADD CONSTRAINT `FK_853a3faa-8c5f-4be1-99c7-8ff21731ffb9` FOREIGN KEY (`idProducts`) REFERENCES `products`(`id`)  ;

ALTER TABLE `cartProducts` ADD CONSTRAINT `FK_e0fc4cd7-4a2e-4f1c-bc17-7ad06744d9ab` FOREIGN KEY (`idCart`) REFERENCES `cart`(`id`)  ;

ALTER TABLE `categoryProducts` ADD CONSTRAINT `FK_25cc8c0c-39a3-4a40-9d6f-69e1ff2e95d9` FOREIGN KEY (`idProduct`) REFERENCES `products`(`id`)  ;

ALTER TABLE `categoryProducts` ADD CONSTRAINT `FK_0a07a41a-aa4b-40d6-952f-4c2b321d9613` FOREIGN KEY (`idCategory`) REFERENCES `category`(`id`)  ;

