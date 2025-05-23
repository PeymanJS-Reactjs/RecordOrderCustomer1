-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: registersell
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `registersell`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `registersell` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `registersell`;

--
-- Table structure for table `catgoryproduct`
--

DROP TABLE IF EXISTS `catgoryproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catgoryproduct` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameCotegoryProduct` varchar(15) DEFAULT NULL,
  `subCotegoryProduct` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `subCotegoryProduct` (`subCotegoryProduct`),
  CONSTRAINT `catgoryproduct_ibfk_1` FOREIGN KEY (`subCotegoryProduct`) REFERENCES `catgoryproduct` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catgoryproduct`
--

LOCK TABLES `catgoryproduct` WRITE;
/*!40000 ALTER TABLE `catgoryproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `catgoryproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `family` varchar(15) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `number` varchar(12) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(10) NOT NULL,
  `codeNational` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userName` (`userName`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `password` (`password`),
  UNIQUE KEY `codeNational` (`codeNational`)
) ENGINE=InnoDB AUTO_INCREMENT=203 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detailorder`
--

DROP TABLE IF EXISTS `detailorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detailorder` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codeOrder` int DEFAULT NULL,
  `codeProduct` int DEFAULT NULL,
  `number` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `codeOrder` (`codeOrder`),
  KEY `codeProduct` (`codeProduct`),
  CONSTRAINT `detailorder_ibfk_1` FOREIGN KEY (`codeOrder`) REFERENCES `orderbuy` (`id`),
  CONSTRAINT `detailorder_ibfk_2` FOREIGN KEY (`codeProduct`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detailorder`
--

LOCK TABLES `detailorder` WRITE;
/*!40000 ALTER TABLE `detailorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `detailorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factorsell`
--

DROP TABLE IF EXISTS `factorsell`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factorsell` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dateExportFactor` timestamp NOT NULL,
  `datePay` date NOT NULL,
  `tax` float NOT NULL,
  `off` float NOT NULL,
  `wholePay` float NOT NULL,
  `codeOrder` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `codeOrder` (`codeOrder`),
  CONSTRAINT `factorsell_ibfk_1` FOREIGN KEY (`codeOrder`) REFERENCES `orderbuy` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factorsell`
--

LOCK TABLES `factorsell` WRITE;
/*!40000 ALTER TABLE `factorsell` DISABLE KEYS */;
/*!40000 ALTER TABLE `factorsell` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `featureproduct`
--

DROP TABLE IF EXISTS `featureproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `featureproduct` (
  `id` int NOT NULL AUTO_INCREMENT,
  `featureName` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `featureproduct`
--

LOCK TABLES `featureproduct` WRITE;
/*!40000 ALTER TABLE `featureproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `featureproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imageproduct`
--

DROP TABLE IF EXISTS `imageproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imageproduct` (
  `id` int NOT NULL AUTO_INCREMENT,
  `addressPicture` varchar(255) NOT NULL,
  `describePicture` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imageproduct`
--

LOCK TABLES `imageproduct` WRITE;
/*!40000 ALTER TABLE `imageproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `imageproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderbuy`
--

DROP TABLE IF EXISTS `orderbuy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderbuy` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codeCustomer` int DEFAULT NULL,
  `orderDate` timestamp NOT NULL,
  `wholePriceOrder` float NOT NULL,
  `statusOrder` varchar(15) NOT NULL,
  `codeDetailOrder` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderbuy`
--

LOCK TABLES `orderbuy` WRITE;
/*!40000 ALTER TABLE `orderbuy` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderbuy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codeFactor` int DEFAULT NULL,
  `methodOfPayment` varchar(15) NOT NULL,
  `statusPayment` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `codeFactor` (`codeFactor`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`codeFactor`) REFERENCES `factorsell` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codeProduct` int NOT NULL,
  `describeProduct` varchar(150) NOT NULL,
  `price` float NOT NULL,
  `weigth` float NOT NULL,
  `createDate` date NOT NULL,
  `codeSupportProduct` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `codeProduct` (`codeProduct`),
  KEY `fk_suppoertProduct` (`codeSupportProduct`),
  CONSTRAINT `fk_suppoertProduct` FOREIGN KEY (`codeSupportProduct`) REFERENCES `supplier` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `returnfactor`
--

DROP TABLE IF EXISTS `returnfactor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `returnfactor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codeFactor` int DEFAULT NULL,
  `reasonReturn` varchar(100) NOT NULL,
  `statusReturn` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `codeFactor` (`codeFactor`),
  CONSTRAINT `returnfactor_ibfk_1` FOREIGN KEY (`codeFactor`) REFERENCES `factorsell` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `returnfactor`
--

LOCK TABLES `returnfactor` WRITE;
/*!40000 ALTER TABLE `returnfactor` DISABLE KEYS */;
/*!40000 ALTER TABLE `returnfactor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `number` varchar(15) NOT NULL,
  `address` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kind_of_transaction` varchar(15) NOT NULL,
  `dateTransaction` timestamp NOT NULL,
  `codeProduct` int DEFAULT NULL,
  `number` int NOT NULL,
  `codeWareHouse` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `codeProduct` (`codeProduct`),
  KEY `codeWareHouse` (`codeWareHouse`),
  CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`codeProduct`) REFERENCES `product` (`id`),
  CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`codeWareHouse`) REFERENCES `warehouse` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouse`
--

DROP TABLE IF EXISTS `warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warehouse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `whole` int NOT NULL,
  `address` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `address` (`address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouse`
--

LOCK TABLES `warehouse` WRITE;
/*!40000 ALTER TABLE `warehouse` DISABLE KEYS */;
/*!40000 ALTER TABLE `warehouse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouseman`
--

DROP TABLE IF EXISTS `warehouseman`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warehouseman` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `password` varchar(10) NOT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userName` (`userName`),
  UNIQUE KEY `password` (`password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouseman`
--

LOCK TABLES `warehouseman` WRITE;
/*!40000 ALTER TABLE `warehouseman` DISABLE KEYS */;
/*!40000 ALTER TABLE `warehouseman` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wholewarehouse`
--

DROP TABLE IF EXISTS `wholewarehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wholewarehouse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codeWareHouse` int DEFAULT NULL,
  `codeProduct` int DEFAULT NULL,
  `numberWhole` int NOT NULL,
  `lastUpdate` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `codeProduct` (`codeProduct`),
  KEY `codeWareHouse` (`codeWareHouse`),
  CONSTRAINT `wholewarehouse_ibfk_1` FOREIGN KEY (`codeProduct`) REFERENCES `product` (`id`),
  CONSTRAINT `wholewarehouse_ibfk_2` FOREIGN KEY (`codeWareHouse`) REFERENCES `warehouse` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wholewarehouse`
--

LOCK TABLES `wholewarehouse` WRITE;
/*!40000 ALTER TABLE `wholewarehouse` DISABLE KEYS */;
/*!40000 ALTER TABLE `wholewarehouse` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-23 16:20:18
