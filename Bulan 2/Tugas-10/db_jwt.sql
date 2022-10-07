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
  `author_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `articles_author_id_fkey` (`author_id`),
  CONSTRAINT `articles_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `articles` (`id`, `title`, `content`, `published`, `createdAt`, `deletedAt`, `author_id`) VALUES
(2,	'Buku Teologi Islam',	'Sejarah islam abad ke-9 ',	1,	'2022-10-06 11:37:25.175',	'2022-10-06 11:37:25.175',	6),
(3,	'filsafat dasar',	'Filosofi teras ',	1,	'2022-10-06 11:37:48.812',	'2022-10-06 11:37:48.812',	6),
(4,	'Sistem operasi',	'sejarah linux',	1,	'2022-10-06 14:55:22.511',	'2022-10-06 14:55:22.511',	6),
(5,	'Debian',	'keunggulan linux debian',	1,	'2022-10-06 15:03:54.336',	'2022-10-06 15:03:54.336',	6),
(6,	'cyber security',	'dasar penggunaan DVWA',	1,	'2022-10-06 15:04:42.624',	'2022-10-06 15:04:42.624',	6),
(7,	'cyber security',	'penggunaan NMAP',	1,	'2022-10-06 15:07:11.539',	'2022-10-06 15:07:11.539',	6),
(8,	'cyber security',	'dasar penggunaan OWASP top ten',	1,	'2022-10-06 15:08:24.670',	'2022-10-06 15:08:24.670',	6),
(9,	'filsafat nietzsche',	'Tuhan telah mati',	1,	'2022-10-06 15:14:47.320',	'2022-10-06 15:14:47.320',	6),
(10,	'filsafat barat',	'Nietszche membunuh Tuhan',	1,	'2022-10-06 15:15:42.220',	'2022-10-06 15:15:42.220',	6),
(36,	'artikel bahasa indonesi',	'tugas bahasa indonesi',	1,	'2022-10-06 23:15:55.648',	'2022-10-06 23:15:55.648',	6),
(37,	'Filsafat kontemporer',	'filosofiss teras',	1,	'2022-10-07 10:42:00.695',	'2022-10-07 10:42:00.695',	6);

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
(7,	1),
(36,	1),
(37,	1),
(2,	2),
(8,	2),
(9,	2),
(10,	2),
(36,	2),
(37,	2),
(3,	3),
(2,	4),
(3,	4),
(4,	4),
(5,	4),
(6,	4);

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
(2,	1),
(3,	1),
(6,	1),
(7,	1),
(8,	1),
(9,	1),
(10,	1),
(36,	1),
(37,	1),
(3,	2),
(4,	2),
(5,	2),
(2,	3),
(36,	4),
(37,	4);

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
(1,	'olahraga',	'2022-10-06 11:34:39.029',	'2022-10-06 11:34:39.029'),
(2,	'sejarah',	'2022-10-06 11:34:58.395',	'2022-10-06 11:34:58.395'),
(3,	'psychology',	'2022-10-06 11:35:14.548',	'2022-10-06 11:35:14.548'),
(4,	'Filsafat Yunani',	'2022-10-06 11:35:29.892',	'2022-10-06 11:35:29.892'),
(5,	'basic DVWA',	'2022-10-07 11:55:07.985',	'2022-10-07 11:55:07.985'),
(6,	'OWASP top TEN',	'2022-10-07 11:55:31.884',	'2022-10-07 11:55:31.884');

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
(1,	'finding nemo last episode',	'https://th.bing.com/th/id/OIP.XZ8UZ_p6vlQ2h5vJACyVOQHaOG?w=115&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',	2),
(2,	'finding nemo trial',	'https://th.bing.com/th/id/OIP.XZ8UZ_p6vlQ2h5vJACyVOQHaOG?w=115&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',	2),
(3,	'finding nemo last episode',	'https://th.bing.com/th/id/OIP.XZ8UZ_p6vlQ2h5vJACyVOQHaOG?w=115&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',	2),
(4,	'anonym',	'https://th.bing.com/th/id/OIP.XZ8UZ_p6vlQ2h5vJACyVOQHaOG?w=115&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',	3);

DROP TABLE IF EXISTS `profile`;
CREATE TABLE `profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birth_date` date NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `profile_user_id_key` (`user_id`),
  CONSTRAINT `profile_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `profile` (`id`, `address`, `firstName`, `lastName`, `city`, `birth_date`, `user_id`) VALUES
(1,	'nevada',	'mark o',	'zuck',	'london',	'1999-10-10',	6),
(2,	'nevada',	'mark o',	'zuck',	'london o',	'1999-10-10',	1),
(10,	'nevada',	'mark o',	'zuck zs',	'london o',	'1999-10-10',	7);

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
(1,	'filsafat',	'2022-10-06 11:36:03.202',	'2022-10-06 11:36:03.202'),
(2,	'Teknologi',	'2022-10-06 11:36:15.582',	'2022-10-06 11:36:15.582'),
(3,	'self improvement',	'2022-10-06 11:36:36.501',	'2022-10-06 11:36:36.501'),
(4,	'sports',	'2022-10-06 11:37:06.810',	'2022-10-06 11:37:06.810'),
(5,	'pshycology ',	'2022-10-06 13:31:28.860',	'2022-10-06 13:31:28.860');

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `deletedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_username_key` (`username`),
  UNIQUE KEY `user_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `user` (`id`, `username`, `email`, `password`, `createdAt`, `deletedAt`) VALUES
(1,	'admin',	'admin@mail.com',	'$2a$10$JE8uzT24DYrZH9OYmZB6y.1t1ix5fzs6AYbR26vYr.tp4LvTPVwUS',	'2022-10-06 15:03:09.478',	'2022-10-06 15:03:09.478'),
(6,	'admin1',	'admin1@mail.com',	'$2a$10$kNinlYeAuAu3bkq10k0XWenpiEJvZ3aj9GvOuBkiaW5bEafUoO4v2',	'2022-10-06 22:47:32.780',	'2022-10-06 22:47:32.780'),
(7,	'admin2',	'admin2@mail.com',	'$2a$10$Ndxka/3.2dm81LSXkDGDKuadEtV4/BgXBY9yetSpPTobmif4v1cRK',	'2022-10-07 01:00:43.114',	'2022-10-07 01:00:43.114');

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
('c41a6e82-5ca2-4d95-ab4a-efc1c7be5b56',	'6aa9cb95cd9200e09d4eacfed845da42ac17403a15a3aa6d0645bb2b9acd1353',	'2022-10-06 09:33:47.253',	'20221006093346_add_models_all',	NULL,	NULL,	'2022-10-06 09:33:46.790',	1);

-- 2022-10-07 15:38:07
