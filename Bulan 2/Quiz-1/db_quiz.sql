-- Adminer 4.8.1 MySQL 5.7.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `release_year` int(11) NOT NULL,
  `price` varchar(255) NOT NULL,
  `total_page` int(11) NOT NULL,
  `thickness` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `book` (`id`, `title`, `description`, `image_url`, `release_year`, `price`, `total_page`, `thickness`, `created_at`, `updated_at`, `category_id`) VALUES
(1,	'Api Tauhid',	'lorem ipsum',	'https://th.bing.com/th/id/OIP.k3e7woyWX-XZC8QJWz05BwDFEs?pid=ImgDet&w=171&h=259&c=7&dpr=1,5',	2007,	'20.000',	100,	'tipis',	'2022-10-01 16:26:40',	'2022-10-01 16:26:40',	1),
(2,	'Matinya Socarates',	'buku filsafat',	'https://th.bing.com/th/id/OIP.k3e7woyWX-XZC8QJWz05BwDFEs?pid=ImgDet&w=171&h=259&c=7&dpr=1,5',	2005,	'2000.000',	320,	'tebal',	'2022-10-01 16:47:34',	'2022-10-01 16:47:34',	2),
(3,	'Matinya Socarates',	'buku filsafat',	'asal',	2005,	'2000.000',	320,	'tebal',	'2022-10-01 16:55:31',	'2022-10-01 16:55:31',	2),
(4,	' Socarates',	'buku filsafat',	'asal',	2005,	'2000.000',	320,	'tebal',	'2022-10-01 17:17:12',	'2022-10-01 17:17:12',	2);

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `category` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1,	'ujang',	'2022-10-01 14:23:04',	'2022-10-01 14:23:04'),
(2,	'didin wahyudin',	'2022-10-01 14:24:41',	'2022-10-01 14:24:41');

-- 2022-10-01 14:47:55
