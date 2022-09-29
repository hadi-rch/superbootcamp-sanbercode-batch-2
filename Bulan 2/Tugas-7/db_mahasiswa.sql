-- Adminer 4.8.1 MySQL 5.7.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `mahasiswa`;
CREATE TABLE `mahasiswa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(225) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `mahasiswa` (`id`, `nama`, `created_at`, `updated_at`) VALUES
(1,	'Aristoteles',	'2022-09-29 17:15:04',	'2022-09-29 17:15:04'),
(2,	'Friedrich Nietzsche',	'2022-09-29 17:15:45',	'2022-09-29 17:15:45'),
(3,	'Maulana Jalalludin Rumi',	'2022-09-29 17:16:07',	'2022-09-29 17:16:07'),
(4,	'Imam Ghozali update',	'2022-09-29 17:44:25',	'2022-09-29 17:44:25');

DROP TABLE IF EXISTS `mata_kuliah`;
CREATE TABLE `mata_kuliah` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `mata_kuliah` (`id`, `nama`, `created_at`, `updated_at`) VALUES
(1,	'filsafat',	'2022-09-29 17:12:11',	'2022-09-29 17:12:11'),
(2,	'sastra sunda',	'2022-09-29 17:12:42',	'2022-09-29 17:12:42'),
(3,	'Filsafat Plato',	'2022-09-29 17:13:33',	'2022-09-29 17:13:33');

DROP TABLE IF EXISTS `nilai`;
CREATE TABLE `nilai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `indeks` varchar(255) NOT NULL,
  `skor` int(2) NOT NULL,
  `mahasiswa_id` int(11) NOT NULL,
  `mata_kuliah_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `mahasiswa_id` (`mahasiswa_id`),
  KEY `mata_kuliah_id` (`mata_kuliah_id`),
  CONSTRAINT `nilai_ibfk_1` FOREIGN KEY (`mahasiswa_id`) REFERENCES `mahasiswa` (`id`),
  CONSTRAINT `nilai_ibfk_2` FOREIGN KEY (`mata_kuliah_id`) REFERENCES `mata_kuliah` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `nilai` (`id`, `indeks`, `skor`, `mahasiswa_id`, `mata_kuliah_id`, `created_at`, `updated_at`) VALUES
(1,	'A',	89,	1,	3,	'2022-09-29 17:22:01',	'2022-09-29 17:22:01'),
(2,	'A',	88,	2,	3,	'2022-09-29 17:46:26',	'2022-09-29 17:46:26'),
(3,	'B',	77,	3,	1,	'2022-09-29 17:29:09',	'2022-09-29 17:29:09'),
(5,	'A',	81,	1,	2,	'2022-09-29 18:46:26',	'2022-09-29 18:46:26');

-- 2022-09-29 11:49:38
