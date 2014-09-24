-- MySQL dump 10.13  Distrib 5.5.38, for osx10.9 (i386)
--
-- Host: localhost    Database: fact
-- ------------------------------------------------------
-- Server version	5.5.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Fork Dimension`
--

DROP TABLE IF EXISTS `Fork Dimension`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Fork Dimension` (
  `Fork Key` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `Fork Type` enum('fact_api_request') NOT NULL DEFAULT 'fact_api_request',
  `Fork Process Data` longtext NOT NULL,
  `Fork Token` varchar(64) DEFAULT NULL,
  `Fork State` enum('Queued','In Process','Finished','Cancelled') NOT NULL DEFAULT 'Queued',
  `Fork Operations Done` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `Fork Operations No Changed` mediumint(9) NOT NULL DEFAULT '0',
  `Fork Operations Errors` mediumint(9) NOT NULL DEFAULT '0',
  `Fork Operations Cancelled` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `Fork Operations Total Operations` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `Fork Scheduled Date` datetime DEFAULT NULL,
  `Fork Start Date` datetime DEFAULT NULL,
  `Fork Finished Date` datetime DEFAULT NULL,
  `Fork Cancelled Date` datetime DEFAULT NULL,
  `Fork Result` text,
  `Fork Result Metadata` text,
  PRIMARY KEY (`Fork Key`),
  KEY `Fork Token` (`Fork Token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Fork Dimension`
--

LOCK TABLES `Fork Dimension` WRITE;
/*!40000 ALTER TABLE `Fork Dimension` DISABLE KEYS */;
/*!40000 ALTER TABLE `Fork Dimension` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Language Dimension`
--

DROP TABLE IF EXISTS `Language Dimension`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Language Dimension` (
  `Language Key` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `Language Code` varchar(5) NOT NULL,
  `Country 2 Alpha Code` varchar(2) DEFAULT NULL,
  `Language Name` varchar(60) NOT NULL,
  `Language Original Name` varchar(60) NOT NULL,
  PRIMARY KEY (`Language Key`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Language Dimension`
--

LOCK TABLES `Language Dimension` WRITE;
/*!40000 ALTER TABLE `Language Dimension` DISABLE KEYS */;
INSERT INTO `Language Dimension` VALUES (1,'en','GB','English','English'),(2,'es','ES','Spanish','Español'),(3,'de','DE','German','Deutsch'),(4,'fr','FR','French','Français'),(5,'cs','CZ','Czech','čeština'),(6,'sk','SK','Slovak','Slovenčina'),(7,'zh','CN','Chinese','中文'),(8,'pl','PL','Polish','Język Polski'),(9,'it','IT','Italian','Italiano');
/*!40000 ALTER TABLE `Language Dimension` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Result Dimension`
--

DROP TABLE IF EXISTS `Result Dimension`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Result Dimension` (
  `Result Key` mediumint(9) NOT NULL AUTO_INCREMENT,
  `Fork Key` mediumint(9) NOT NULL,
  `Result Type` enum('Ok','Error') NOT NULL DEFAULT 'Ok',
  `Date` datetime DEFAULT NULL,
  `Query` varchar(256) NOT NULL,
  `Journal ISSN` varchar(9) DEFAULT NULL,
  `Journal Name` varchar(256) DEFAULT NULL,
  `Compilance` enum('Yes','No','Maybe','Unknown') NOT NULL DEFAULT 'No',
  `Compilance Type` enum('Green','Gold','GreenGold','None') NOT NULL DEFAULT 'None',
  `Compilance Report` varchar(64) DEFAULT NULL,
  `Gold Compilance Code` enum('Yes','No','Maybe','Unknown') NOT NULL DEFAULT 'Unknown',
  `Gold Compilance Report` text,
  `Gold Compilance Reason` text,
  `Gold Compilance Advice` text,
  `Green Compilance Code` enum('Yes','No','Maybe','Unknown') NOT NULL DEFAULT 'Unknown',
  `Green Compilance Report` text,
  `Green Compilance Reason` text,
  `Green Compilance Advice` text,
  PRIMARY KEY (`Result Key`),
  KEY `Result Type` (`Result Type`),
  KEY `Date` (`Date`),
  KEY `Fork Key` (`Fork Key`),
  KEY `Compilance` (`Compilance`),
  KEY `Compilance Type` (`Compilance Type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Result Dimension`
--

LOCK TABLES `Result Dimension` WRITE;
/*!40000 ALTER TABLE `Result Dimension` DISABLE KEYS */;
/*!40000 ALTER TABLE `Result Dimension` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Session Dimension`
--

DROP TABLE IF EXISTS `Session Dimension`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Session Dimension` (
  `Session Key` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Session ID` varchar(32) NOT NULL,
  `HTTP User Agent` varchar(32) NOT NULL,
  `Session Data` longblob NOT NULL,
  `Session Expire` int(11) NOT NULL DEFAULT '0',
  `Session Created` datetime DEFAULT NULL,
  PRIMARY KEY (`Session Key`),
  UNIQUE KEY `Session ID` (`Session ID`),
  KEY `Session Expire` (`Session Expire`),
  KEY `HTTP User Agent` (`HTTP User Agent`(8)),
  KEY `Session Created` (`Session Created`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Session Dimension`
--

LOCK TABLES `Session Dimension` WRITE;
/*!40000 ALTER TABLE `Session Dimension` DISABLE KEYS */;
/*!40000 ALTER TABLE `Session Dimension` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Theme Dimension`
--

DROP TABLE IF EXISTS `Theme Dimension`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Theme Dimension` (
  `Theme Key` int(11) NOT NULL AUTO_INCREMENT,
  `Theme Code` varchar(16) NOT NULL,
  `Theme Name` varchar(255) NOT NULL,
  PRIMARY KEY (`Theme Key`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=FIXED;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Theme Dimension`
--

LOCK TABLES `Theme Dimension` WRITE;
/*!40000 ALTER TABLE `Theme Dimension` DISABLE KEYS */;
INSERT INTO `Theme Dimension` VALUES (1,'clear','Clear Purple');
/*!40000 ALTER TABLE `Theme Dimension` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Upload Content Dimension`
--

DROP TABLE IF EXISTS `Upload Content Dimension`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Upload Content Dimension` (
  `Upload Key` mediumint(8) unsigned NOT NULL,
  `Upload Content` longblob NOT NULL,
  KEY `Upload Key` (`Upload Key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Upload Content Dimension`
--

LOCK TABLES `Upload Content Dimension` WRITE;
/*!40000 ALTER TABLE `Upload Content Dimension` DISABLE KEYS */;
/*!40000 ALTER TABLE `Upload Content Dimension` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Upload Dimension`
--

DROP TABLE IF EXISTS `Upload Dimension`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Upload Dimension` (
  `Upload Key` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `Upload Status` enum('Uploaded','Processed') NOT NULL DEFAULT 'Uploaded',
  `Upload Date` datetime NOT NULL,
  `Processed Date` datetime DEFAULT NULL,
  `Upload User Key` mediumint(8) unsigned NOT NULL,
  `Upload Checksum` varchar(64) NOT NULL,
  `Upload Filesize` int(10) unsigned NOT NULL,
  `Upload Filename` varchar(512) NOT NULL,
  `Upload File Type` varchar(256) NOT NULL,
  PRIMARY KEY (`Upload Key`),
  KEY `Upload Status` (`Upload Status`),
  KEY `Upload Checksum` (`Upload Checksum`),
  KEY `Upload User Key` (`Upload User Key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Upload Dimension`
--

LOCK TABLES `Upload Dimension` WRITE;
/*!40000 ALTER TABLE `Upload Dimension` DISABLE KEYS */;
/*!40000 ALTER TABLE `Upload Dimension` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User Dimension`
--

DROP TABLE IF EXISTS `User Dimension`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User Dimension` (
  `User Key` mediumint(6) unsigned NOT NULL AUTO_INCREMENT,
  `User Handle` varchar(255) NOT NULL,
  `User Password` varchar(128) DEFAULT NULL,
  `User Active` enum('Yes','No') NOT NULL DEFAULT 'No',
  `User Alias` varchar(120) DEFAULT NULL,
  `User Type` enum('Visitor') NOT NULL DEFAULT 'Visitor',
  `User Preferred Locale` varchar(12) NOT NULL DEFAULT 'en_GB.UTF-8',
  `User Has Login` enum('Yes','No') NOT NULL DEFAULT 'No',
  `User Login Count` smallint(6) NOT NULL DEFAULT '0',
  `User Last Login` datetime DEFAULT NULL,
  `User Last Login IP` varchar(64) DEFAULT NULL,
  `User Failed Login Count` smallint(6) unsigned NOT NULL DEFAULT '0',
  `User Last Failed Login IP` varchar(64) DEFAULT NULL,
  `User Last Failed Login` datetime DEFAULT NULL,
  `User Sessions Count` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `User Requests Count` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `User Last Request` datetime DEFAULT NULL,
  `User Created` datetime NOT NULL,
  `User Verified` enum('Yes','No') NOT NULL DEFAULT 'No',
  `User Main Image Key` mediumint(8) DEFAULT NULL,
  `User Inactive Note` varchar(1024) NOT NULL DEFAULT '',
  PRIMARY KEY (`User Key`),
  UNIQUE KEY `User Handle` (`User Handle`,`User Type`),
  KEY `h` (`User Handle`),
  KEY `User Password` (`User Password`),
  KEY `User Type` (`User Type`),
  KEY `User Login Count` (`User Login Count`),
  KEY `User Has Login` (`User Has Login`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User Dimension`
--

LOCK TABLES `User Dimension` WRITE;
/*!40000 ALTER TABLE `User Dimension` DISABLE KEYS */;
/*!40000 ALTER TABLE `User Dimension` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User Request Dimension`
--

DROP TABLE IF EXISTS `User Request Dimension`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User Request Dimension` (
  `User Request Key` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Session Key` mediumint(10) NOT NULL,
  `User Key` mediumint(8) unsigned NOT NULL,
  `Date` datetime NOT NULL,
  `URL` varchar(1024) NOT NULL,
  `Previous URL` varchar(1024) DEFAULT NULL,
  `IP` varchar(64) NOT NULL,
  `OS` varchar(64) DEFAULT NULL,
  `Browser` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`User Request Key`,`Date`),
  KEY `Date` (`Date`),
  KEY `Is User` (`User Key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8
/*!50100 PARTITION BY RANGE (to_days(`Date`))
(PARTITION p0 VALUES LESS THAN (734503) ENGINE = MyISAM,
 PARTITION p1 VALUES LESS THAN (734868) ENGINE = MyISAM,
 PARTITION p2 VALUES LESS THAN (735234) ENGINE = MyISAM,
 PARTITION p3 VALUES LESS THAN (735385) ENGINE = MyISAM,
 PARTITION p4 VALUES LESS THAN (735599) ENGINE = MyISAM,
 PARTITION p5 VALUES LESS THAN MAXVALUE ENGINE = MyISAM) */;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User Request Dimension`
--

LOCK TABLES `User Request Dimension` WRITE;
/*!40000 ALTER TABLE `User Request Dimension` DISABLE KEYS */;
/*!40000 ALTER TABLE `User Request Dimension` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `debug`
--

DROP TABLE IF EXISTS `debug`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `debug` (
  `key` mediumint(9) NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `message` text NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `debug`
--

LOCK TABLES `debug` WRITE;
/*!40000 ALTER TABLE `debug` DISABLE KEYS */;
/*!40000 ALTER TABLE `debug` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-09-24 13:49:39
