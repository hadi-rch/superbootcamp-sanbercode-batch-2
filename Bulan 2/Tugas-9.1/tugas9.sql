-- Adminer 4.8.1 MySQL 5.7.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `published` tinyint(4) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `deletedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `articles` (`id`, `title`, `content`, `published`, `createdAt`, `deletedAt`) VALUES
(1,	'karl mark',	'filosofi',	0,	'2022-10-05 23:55:45.878',	'2022-10-05 23:55:45.878'),
(2,	'karl mark',	'filosofi',	1,	'2022-10-05 23:55:55.577',	'2022-10-05 23:55:55.577'),
(3,	'adolf hitler',	'filosofi',	1,	'2022-10-05 23:56:10.375',	'2022-10-05 23:56:10.375'),
(4,	'Zuck',	'filosofi',	0,	'2022-10-05 23:56:29.554',	'2022-10-05 23:56:29.554');

DROP TABLE IF EXISTS `articles_categories`;
CREATE TABLE `articles_categories` (
  `article_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`article_id`,`category_id`),
  KEY `articles_categories_category_id_fkey` (`category_id`),
  CONSTRAINT `articles_categories_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `articles_categories_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `articles_categories` (`article_id`, `category_id`) VALUES
(1,	2),
(1,	3);

DROP TABLE IF EXISTS `articles_tags`;
CREATE TABLE `articles_tags` (
  `article_id` int(11) NOT NULL,
  `tags_id` int(11) NOT NULL,
  PRIMARY KEY (`article_id`,`tags_id`),
  KEY `articles_tags_tags_id_fkey` (`tags_id`),
  CONSTRAINT `articles_tags_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `articles_tags_tags_id_fkey` FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `articles_tags` (`article_id`, `tags_id`) VALUES
(1,	1),
(1,	2);

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `deletedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_name_key` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `categories` (`id`, `name`, `createdAt`, `deletedAt`) VALUES
(1,	'produck 1',	'2022-10-05 23:54:44.007',	'2022-10-05 23:54:44.007'),
(2,	'produck 2',	'2022-10-05 23:54:49.635',	'2022-10-05 23:54:49.635'),
(3,	'produck 3',	'2022-10-05 23:54:54.549',	'2022-10-05 23:54:54.549'),
(4,	'produck 4',	'2022-10-05 23:54:58.617',	'2022-10-05 23:54:58.617'),
(5,	'produck 5',	'2022-10-05 23:55:02.935',	'2022-10-05 23:55:02.935');

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `article_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `images_article_id_fkey` (`article_id`),
  CONSTRAINT `images_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `images` (`id`, `name`, `image_url`, `article_id`) VALUES
(1,	'finding nemo part last',	'https://th.bing.com/th/id/OIP.XZ8UZ_p6vlQ2h5vJACyVOQHaOG?w=115&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',	2),
(2,	'finding nemo',	'https://th.bing.com/th/id/OIP.XZ8UZ_p6vlQ2h5vJACyVOQHaOG?w=115&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',	1),
(3,	'finding nemo eps1 ',	'https://th.bing.com/th/id/OIP.XZ8UZ_p6vlQ2h5vJACyVOQHaOG?w=115&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',	1),
(4,	'finding nemo eps2 ',	'https://th.bing.com/th/id/OIP.XZ8UZ_p6vlQ2h5vJACyVOQHaOG?w=115&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',	1),
(5,	'finding nemo eps3',	'https://th.bing.com/th/id/OIP.XZ8UZ_p6vlQ2h5vJACyVOQHaOG?w=115&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',	1);

DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `deletedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `tags_name_key` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `tags` (`id`, `name`, `createdAt`, `deletedAt`) VALUES
(1,	'logika dasar',	'2022-10-06 00:01:26.455',	'2022-10-06 00:01:26.455'),
(2,	'Matinya Socrates',	'2022-10-06 00:01:45.124',	'2022-10-06 00:01:45.124'),
(3,	'FIHI MA FIHI',	'2022-10-06 00:02:30.514',	'2022-10-06 00:02:30.514'),
(4,	'sandisk',	'2022-10-06 00:03:05.732',	'2022-10-06 00:03:05.732');

DROP TABLE IF EXISTS `_prisma_migrations`;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('27454c28-1968-4fbc-8e62-9777c17830da',	'eb72626cd547c33510e162ba6a56e42b1a00f7bc1386071dab3daeca0dd374fb',	'2022-10-05 23:47:47.073',	'20221005234746_add_model_db',	NULL,	NULL,	'2022-10-05 23:47:46.696',	1);

-- 2022-10-06 01:03:33
