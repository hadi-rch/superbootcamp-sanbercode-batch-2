-- Adminer 4.8.1 MySQL 5.7.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `blog_post`;
CREATE TABLE `blog_post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `body` text NOT NULL,
  `author_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `blog_post_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `blog_post` (`id`, `title`, `body`, `author_id`) VALUES
(1,	'Algorithm',	'this is article for algorithm',	1),
(2,	'Lorem Ipsum',	'lorem ipsum dolor sit amet',	1),
(3,	'NodeJS',	'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',	2),
(4,	'ReactJS',	'ReactJS is JavaScript library for building user interfaces',	4),
(5,	'Git',	'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency',	3),
(6,	'Basketball',	'Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender\'s hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court, while preventing the opposing team from shooting through their own hoop',	2);

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `categories` (`id`, `name`) VALUES
(1,	'Basic'),
(2,	'Library'),
(3,	'Unknown'),
(4,	'Sport');

DROP TABLE IF EXISTS `post_categories`;
CREATE TABLE `post_categories` (
  `post_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  KEY `post_id` (`post_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `post_categories_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `blog_post` (`id`),
  CONSTRAINT `post_categories_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `post_categories` (`post_id`, `category_id`) VALUES
(1,	1),
(2,	3),
(3,	1),
(3,	2),
(4,	2),
(4,	1),
(5,	1),
(6,	4);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`id`, `name`) VALUES
(1,	'Jhon doe'),
(2,	'Robert'),
(3,	'Frank'),
(4,	'Jane');

-- 2022-09-23 13:29:29
