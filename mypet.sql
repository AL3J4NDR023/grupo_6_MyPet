-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-05-2022 a las 04:02:40
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mypet1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Kanu'),
(2, 'Agility'),
(3, 'My Pet'),
(4, 'Loving Pets'),
(5, 'Tre Ponti'),
(6, 'Kong'),
(7, 'Evolve'),
(8, 'Carval'),
(9, 'Vetnil'),
(10, 'Elanco'),
(11, 'Natural Freshly'),
(12, 'Dinky'),
(13, 'Hills'),
(14, 'Royal Canin'),
(15, 'Total Max'),
(16, 'Nutrecan'),
(17, 'Pedigree'),
(18, 'Whiskas'),
(19, 'Dog Chow');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cartproducts`
--

CREATE TABLE `cartproducts` (
  `id` int(11) NOT NULL,
  `idProducts` int(11) NOT NULL,
  `idCart` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Alimentos'),
(2, 'Accesorios'),
(3, 'Snacks'),
(4, 'Juguetes'),
(5, 'Medicamentos'),
(6, 'Higiene y belleza');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`id`, `name`) VALUES
(1, 'Perro'),
(2, 'Gatos'),
(3, 'Mixto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `idBrand` int(11) NOT NULL,
  `idMascota` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `amount`, `description`, `color`, `idBrand`, `idMascota`, `idCategory`) VALUES
(41, 'Alimento Para Perro Adulto Premium Pollo', 50000, 'product1.webp', 10, 'Max Premium Especial Pollo & Vegetales contiene proteínas de alta calidad. Su fórmula está enriquecida con vitaminas y minerales que le darán a tu amigo de cuatro patas la energía necesaria para disfrutar al máximo la mejor etapa de su vida. Variedad de ingredientes y nutrición balanceada que harán feliz a tu perro con cada bocado.', NULL, 15, 1, 1),
(45, 'Alimento Para Perro Pollo y Vegetales - Raza Pequeña', 30000, 'product2.webp', 20, 'Ideal para razas pequeñas por el tamaño de la croqueta, alimento indicado para perros adultos de razas pequeñas con pollo, vegetales, arroz y maíz, extracto de Yucca Shidigera para la reducción del olor de las heces.', NULL, 15, 1, 1),
(46, 'Alimento Para Perro - Hills Perfect Digestion', 80000, 'product3.webp', 15, 'Ayuda al cuerpo de tu mascota a absorber y utilizar nutrientes vitales.', NULL, 13, 1, 1),
(47, 'Alimento Para Perro - Royal Canin Chihuahua Senior 8', 60000, 'product4.webp', 3, ' incluye un complejo de nutrientes para apoyar a los chihuahuas envejecidos. Contiene una combinación exclusiva de antioxidantes para ayudar a mantener la salud celular y está formulado con un contenido de fósforo adecuado para perros mayores.', NULL, 14, 1, 1),
(48, 'Alimento Para Gato - Royal Canin Mother And Baby Cat', 13000, 'product5.webp', 6, 'El alimento húmedo para gatos Mother & Baby Cat está formulado para satisfacer las necesidades específicas de los gatitos en crecimiento (de 1 a 4 meses) y las gatas embarazadas o lactantes.', NULL, 14, 2, 1),
(49, 'Alimento Para Gato - Evolve Libre de Granos Pavo 85 Gr', 7000, 'product6.webp', 10, 'Los exclusivos Pouches Evolve Grain Free para Gatos están hechos con CARNE REAL y con los mejores ingredientes junto con carbohidratos saludables SIN GRANOS y superalimentos como arándanos, arándanos agrios y más. ', NULL, 7, 2, 1),
(50, 'Alimento Para Gato - Agility Gold Esterilizados', 30000, 'product7.webp', 18, '- Movilización de grasas. - Reducción calórica. - Control de bolas de pelo. - Favorece la salud renal.', NULL, 2, 2, 1),
(51, 'Alimento para gato -Hills Felino K/D 4 Lb', 65000, 'product8.webp', 2, 'Protege la función del riñón y el corazón de vital importancia. Es compatible con la capacidad natural del gato para aumentar la masa muscular diaria. Estimula el apetito y aumenta el consumo de calorías.', NULL, 13, 2, 1),
(52, 'Arnes Primo Militar Para Perro', 150000, 'product9.webp', 8, ' Talla XL ideal para perros de 30 a 40 KG. - Medidas de contorno 76 cm min/97 cm max. - Adecuado para perros medianos y grandes; material hipoalergénico, impermeable, duradero y fabricado en Italia. Su diseño único y ergonómico lo hace totalmente cómodo.', NULL, 5, 1, 2),
(53, 'Laberinto Para Gato', 105000, 'product10.webp', 1, 'Producto bajo revisión de inventario, tiempo estimado de entrega de 5 a 8 días hábiles. - Juguete inteligente que estimula a los gatos a trabajar por su comida. - Con 6 actividades divertidas.', 'Blanco y verde', 6, 2, 4),
(54, 'Galletas Natural Value Potato And Chicken Para Perro', 11100, 'product11.webp', 11, 'Tu mascota anhelará estos bocadillos CRUJIENTES y deliciosos Con MENOS DE 10 CALORIAS por bocadillo, son el bocadillo de entrenamiento perfecto o un bocadillo para cualquier momento. No contienen maíz, soja ni glicerina. Estas golosinas crujientes son perfectas para perros de cualquier edad o tamaño.', NULL, 4, 1, 1),
(55, 'Galletas Kanu Hairball Control Para Gato', 7500, 'product12.webp', 12, ' Cada bocado tiene un tamaño aproximado de 8mm x 1,3cm. Para Kanú es vital brindarle a nuestras mascotas no solo sabor sino también nutrición. Nuestro Snack Kanú Hairball Control es un delicioso alimento complementario a base de ingredientes 100% naturales como el extracto de malta, carne, levadura y más, que ayudan a controlar las molestas bolas de pelos.', NULL, 1, 2, 3),
(57, ' Peluche Roughskin Mico Medium Para Perro', 63000, 'product13.webp', 5, 'KONG RoughSkinz Suedez están diseñados para brindar durabilidad al mismo tiempo que recompensan el comportamiento de masticación adecuado y brindan una diversión duradera.', NULL, 6, 1, 2),
(58, 'Catit Senses 2.0 Circuito de Juego Para Gato', 94800, 'product14.webp', 7, 'Producto bajo revisión de inventario, tiempo estimado de entrega de 5 a 8 días hábiles. Incluye el circuito de 5 tramos, 2 piezas de cierre y 1 pelota. ', NULL, 6, 2, 2),
(59, 'Ciclorac X 120 Ml para todas', 26500, 'product15.webp', 9, 'Ciclorac elimina el 99,9% de la carga microbiana. Fórmula incolora que no mancha la piel de las mascotas. No requiere enjuague. Para el tratamiento de cualquier tipo de heridas crónicas y complejas con y sin infección asociada. NO causa daño en piel y tejidos. ', NULL, 8, 3, 5),
(60, 'Organew Para Todas', 19600, 'product16.webp', 12, 'Suplemento nutricional que tiene aminoácidos , vitaminas , probióticos y prebióticos , para la reposición de la flora gastro intestinal.', NULL, 9, 3, 5),
(61, 'Dinky Spray Para Peinar Con Argan Mascotas', 44300, 'product17.webp', 21, 'Con la sofisticada fórmula de nuestro nuevo Spray Brillo y Reparación con Argán, reduce la resequedad de la piel de tu #AmigoFiel, recuperando el brillo sensacional de su pelaje y previniendo su envejecimiento, además ¡Te deleitarás con su exquisita fragancia!', NULL, 12, 3, 6),
(62, 'Perfume Para Machos Esbelt para todos.', 25900, 'product18.webp', 13, '', 'Ninguno', 2, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `name`) VALUES
(1, 'Usuario'),
(2, 'Administrador'),
(3, 'Visitante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `cellphone` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `email`, `password`, `cellphone`, `address`, `image`, `idRol`) VALUES
(1, 'Luisa', 'Escobar', 'lui.fer@gmail.com', '$2a$10$euhkRY6EjmD0buA3Wl6dDeDy2/8JZxhdSdA6KjSu/x.SHdr10QzwG', 123456789, 'Carrera3 # 18- 45', 'Luisa.jpeg', 1),
(2, 'Alejandro', 'Londoño', 'sweekly1@rediff.com', '$2a$10$ekNk4P2IrcOIufIHtT7WwOGqCWixpUe4/xtKXCbSJn8wpddrW0Mb6', 123456789, 'Carrera 7 # 84- 72', 'user_2.png', 1),
(3, 'Luis', 'Cortes', 'aetteridge2@gnu.org', 'ZAWWERDmd987*', 123456789, 'Calle 11 No. 4 - 14', 'user_3.png', 1),
(4, 'william', 'Butchers zz', 'wbutchers3@blogspot.com', 'qvtmUBRu*87', 123456789, 'Carrera 7 # 84- 72', 'user_4.png', 3),
(5, 'Kai', 'Assel', 'kassel4@disqus.com', 'I917VT8uPXI*54', 123456789, 'Calle 11 No. 4 - 14', 'user_5.png', 2),
(6, 'Stephen', 'Wey', 'swey5@seattletimes.com', 'JnUycrZ*987', 123456789, 'Calle 10 No. 5-22', 'user_6.png', 1),
(7, 'Katey', 'McInerney', 'kmcinerney6@hugedomains.com', 'r4vNVI*45', 123456789, 'Calle 10 No. 5-22', 'user_7.png', 1),
(8, 'Pearla', 'Krebs', 'pkrebs7@gov.uk', '28ZkTOMgj5#', 123456789, 'Carrera 7 # 84- 72', 'user_8.png', 2),
(9, 'Hortensia', 'Harby', 'hharby8@about.com', '8MAevZ4KN#', 123456789, 'Calle 10 No. 6-22', 'user_9.png', 1),
(10, 'Franni', 'Schechter', 'fschechter9@people.com.cn', '2bHw2hufj*', 123456789, 'Calle 10 No. 5-25', 'user_10.png', 3),
(16, 'Luis Gabriel', 'Cortes Jacanamijoy', 'luiscortes@mypet.com', '$2b$10$OsTSOR7fZa193tZVM7kG5OvK1oUUXk43kPza/mEiB/2Yhj/JeOwS6', 30122, 'cra 3 # 7-30', 'user-Luis-Gabriel-luiscortes@mypet.com.png', 2),
(17, 'william', 'muñoz', 'alex@hotmail.com', '$2a$10$q8Mfp.Nk5nc/foNRClrYVO4JeKhU4vPpKrTtVxR8ZzXPOe.ZPZYKW', 3000000, 'cra 3 # 7-30', 'user-william-alex@hotmail.com.png', 1),
(31, 'Will', 'Butchers', 'wbutchers3@blogspot.com', 'qvtmUBRu*87', 123456789, 'Carrera 7 # 84- 72', 'user_4.png', 3),
(32, 'Kai', 'Assel', 'kassel4@disqus.com', 'I917VT8uPXI*54', 123456789, 'Calle 11 No. 4 - 14', 'user_5.png', 2),
(33, 'Stephen', 'Wey', 'swey5@seattletimes.com', 'JnUycrZ*987', 123456789, 'Calle 10 No. 5-22', 'user_6.png', 1),
(34, 'Katey', 'McInerney', 'kmcinerney6@hugedomains.com', 'r4vNVI*45', 123456789, 'Calle 10 No. 5-22', 'user_7.png', 1),
(35, 'Pearla', 'Krebs', 'pkrebs7@gov.uk', '28ZkTOMgj5#', 123456789, 'Carrera 7 # 84- 72', 'user_8.png', 2),
(36, 'Hortensia', 'Harby', 'hharby8@about.com', '8MAevZ4KN#', 123456789, 'Calle 10 No. 6-22', 'user_9.png', 1),
(37, 'Franni', 'Schechter', 'fschechter9@people.com.cn', '2bHw2hufj*', 123456789, 'Calle 10 No. 5-25', 'user_10.png', 3),
(38, 'Luisa', 'Escobar', 'lui.fer@gmail.com', 'luisaFda16*', 123456789, 'Carrera3 # 18- 45', 'Luisa.jpeg', 1),
(39, 'Alejandro', 'Londoño', 'sweekly1@rediff.com', 'gmuQ57HNsZzz0*', 123456789, 'Carrera 7 # 84- 72', 'user_2.png', 1),
(40, 'Luis', 'Cortes', 'aetteridge2@gnu.org', 'ZAWWERDmd987*', 123456789, 'Calle 11 No. 4 - 14', 'user_3.png', 1),
(41, 'Will', 'Butchers', 'wbutchers3@blogspot.com', 'qvtmUBRu*87', 123456789, 'Carrera 7 # 84- 72', 'user_4.png', 3),
(42, 'Kai', 'Assel', 'kassel4@disqus.com', 'I917VT8uPXI*54', 123456789, 'Calle 11 No. 4 - 14', 'user_5.png', 2),
(43, 'Stephen', 'Wey', 'swey5@seattletimes.com', 'JnUycrZ*987', 123456789, 'Calle 10 No. 5-22', 'user_6.png', 1),
(44, 'Katey', 'McInerney', 'kmcinerney6@hugedomains.com', 'r4vNVI*45', 123456789, 'Calle 10 No. 5-22', 'user_7.png', 1),
(45, 'Pearla', 'Krebs', 'pkrebs7@gov.uk', '28ZkTOMgj5#', 123456789, 'Carrera 7 # 84- 72', 'user_8.png', 2),
(46, 'Hortensia', 'Harby', 'hharby8@about.com', '8MAevZ4KN#', 123456789, 'Calle 10 No. 6-22', 'user_9.png', 1),
(47, 'Franni', 'Schechter', 'fschechter9@people.com.cn', '2bHw2hufj*', 123456789, 'Calle 10 No. 5-25', 'user_10.png', 3),
(48, 'Luisa', 'Escobar', 'lui.fer@gmail.com', 'luisaFda16*', 123456789, 'Carrera3 # 18- 45', 'Luisa.jpeg', 1),
(49, 'Alejandro', 'Londoño', 'sweekly1@rediff.com', 'gmuQ57HNsZzz0*', 123456789, 'Carrera 7 # 84- 72', 'user_2.png', 1),
(50, 'Luis', 'Cortes', 'aetteridge2@gnu.org', 'ZAWWERDmd987*', 123456789, 'Calle 11 No. 4 - 14', 'user_3.png', 1),
(51, 'Will', 'Butchers', 'wbutchers3@blogspot.com', 'qvtmUBRu*87', 123456789, 'Carrera 7 # 84- 72', 'user_4.png', 3),
(52, 'Kai', 'Assel', 'kassel4@disqus.com', 'I917VT8uPXI*54', 123456789, 'Calle 11 No. 4 - 14', 'user_5.png', 2),
(53, 'Stephen', 'Wey', 'swey5@seattletimes.com', 'JnUycrZ*987', 123456789, 'Calle 10 No. 5-22', 'user_6.png', 1),
(54, 'Katey', 'McInerney', 'kmcinerney6@hugedomains.com', 'r4vNVI*45', 123456789, 'Calle 10 No. 5-22', 'user_7.png', 1),
(55, 'Pearla', 'Krebs', 'pkrebs7@gov.uk', '28ZkTOMgj5#', 123456789, 'Carrera 7 # 84- 72', 'user_8.png', 2),
(59, 'admin', 'admin', 'admin123@mypet.com', '$2b$10$Ru24cbWKP2CWqUxKeQp5ierykDDwUynV8IX7RRjGUi9Ld8jU92ism', 12313, 'cra 3 # 7-30', 'user_2.png', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ce88a010-764b-4261-bb35-4f103923bd06` (`idUser`);

--
-- Indices de la tabla `cartproducts`
--
ALTER TABLE `cartproducts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_853a3faa-8c5f-4be1-99c7-8ff21731ffb9` (`idProducts`),
  ADD KEY `FK_e0fc4cd7-4a2e-4f1c-bc17-7ad06744d9ab` (`idCart`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Fk_mascota` (`idMascota`) USING BTREE,
  ADD KEY `FK_79e02a52-71a2-45dc-8649-e77bf4404a58` (`idBrand`),
  ADD KEY `idCategory` (`idCategory`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_25cbfeb8-2388-4384-90b9-92d0dd1442d5` (`idRol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cartproducts`
--
ALTER TABLE `cartproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE `mascota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FK_ce88a010-764b-4261-bb35-4f103923bd06` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `cartproducts`
--
ALTER TABLE `cartproducts`
  ADD CONSTRAINT `FK_853a3faa-8c5f-4be1-99c7-8ff21731ffb9` FOREIGN KEY (`idProducts`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FK_e0fc4cd7-4a2e-4f1c-bc17-7ad06744d9ab` FOREIGN KEY (`idCart`) REFERENCES `cart` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_79e02a52-71a2-45dc-8649-e77bf4404a58` FOREIGN KEY (`idBrand`) REFERENCES `brands` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`idMascota`) REFERENCES `mascota` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`idCategory`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_25cbfeb8-2388-4384-90b9-92d0dd1442d5` FOREIGN KEY (`idRol`) REFERENCES `rol` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;