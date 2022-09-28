-- Adminer 4.8.1 MySQL 5.7.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `nilai`;
CREATE TABLE `nilai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(30) NOT NULL,
  `mataKuliah` varchar(30) NOT NULL,
  `nilai` int(2) NOT NULL,
  `indeksNilai` varchar(2) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `nilai` (`id`, `nama`, `mataKuliah`, `nilai`, `indeksNilai`, `created_at`, `updated_at`) VALUES
(1,	'ismed update',	'footbal analyze',	9,	'E',	'2022-09-28 21:21:45',	'2022-09-28 21:21:45'),
(2,	'yanto',	'footbal analyze',	89,	'A',	'9999-12-31 23:59:59',	'9999-12-31 23:59:59'),
(3,	'yanto',	'footbal analyze',	89,	'A',	'9999-12-31 23:59:59',	'9999-12-31 23:59:59'),
(4,	'yanto basna',	'footbal analyze',	89,	'A',	'2022-09-28 20:11:59',	'2022-09-28 20:11:59'),
(7,	'runtuboy update',	'footballer',	87,	'A',	'2022-09-28 22:04:27',	'2022-09-28 22:04:27');

-- 2022-09-28 15:06:53
