-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: localhost    Database: cms-tem
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `department`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sort` int NOT NULL DEFAULT '0',
  `state` tinyint NOT NULL DEFAULT '1',
  `intro` varchar(5000) DEFAULT NULL,
  `parentId` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `depName` varchar(500) NOT NULL,
  `leader` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `parentId` (`parentId`),
  CONSTRAINT `department_ibfk_1` FOREIGN KEY (`parentId`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (8,0,0,'',NULL,'2023-12-19 05:13:34','2024-01-04 07:14:14','行政部',NULL),(9,0,1,NULL,NULL,'2023-12-19 05:13:34','2023-12-19 05:13:34','技术部',NULL),(10,0,1,NULL,NULL,'2023-12-19 05:13:34','2023-12-19 05:13:34','运营部',NULL),(11,0,1,NULL,8,'2023-12-19 05:17:21','2023-12-19 05:17:21','人力资源部',NULL),(12,0,1,NULL,8,'2023-12-19 05:17:21','2023-12-19 05:17:21','财务部',NULL),(13,0,1,NULL,9,'2023-12-19 05:17:21','2023-12-19 05:17:21','研发部',NULL),(14,0,1,NULL,9,'2023-12-19 05:17:21','2023-12-19 05:17:21','设计部',NULL),(15,0,1,NULL,12,'2023-12-19 05:19:55','2023-12-19 05:19:55','型测部',NULL),(16,0,0,'',11,'2023-12-19 05:19:55','2024-01-04 07:00:00','破事部',NULL),(17,0,1,NULL,11,'2023-12-19 05:19:55','2023-12-19 05:19:55','测试部',NULL),(18,0,1,'测试部门添加',10,'2023-12-25 03:40:06','2023-12-25 06:40:57','运营测试2',NULL),(19,0,1,'',18,'2023-12-25 06:47:01','2023-12-26 04:23:37','测试部门2',NULL);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `menuName` varchar(500) NOT NULL,
  `url` varchar(500) NOT NULL,
  `parentId` int DEFAULT NULL,
  `icon` varchar(500) DEFAULT NULL,
  `sort` int NOT NULL DEFAULT '0',
  `menuType` tinyint NOT NULL DEFAULT '1',
  `isLink` tinyint NOT NULL DEFAULT '0',
  `isIframe` tinyint NOT NULL DEFAULT '1',
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `redirectUrl` varchar(500) DEFAULT NULL,
  `permission` varchar(500) DEFAULT NULL,
  `link` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `menuName` (`menuName`),
  KEY `parentId` (`parentId`),
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`parentId`) REFERENCES `menu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'系统管理','/main/system',NULL,'ant-design:setting-outlined',0,1,0,0,'2023-12-19 07:21:54','2023-12-30 05:30:20','/main/system/user','',''),(3,'用户管理','/main/system/user',1,'',0,1,0,0,'2023-12-19 07:32:04','2023-12-30 05:30:27','','',''),(4,'部门管理','/main/system/department',1,'',0,1,0,0,'2023-12-19 07:33:31','2023-12-30 05:31:06','','',''),(5,'菜单管理','/main/system/menu',1,'',0,1,0,0,'2023-12-19 07:33:44','2023-12-30 05:31:11','','',''),(6,'角色管理','/main/system/role',1,'',0,1,0,0,'2023-12-19 07:34:08','2023-12-30 05:31:16','','',''),(7,'嵌套菜单','/main/menu',NULL,'ant-design:appstore-add-outlined',0,1,0,0,'2023-12-27 07:21:50','2023-12-30 05:31:29','','',''),(8,'菜单1','/main/menu/menu1',7,'raphael:page',0,1,0,0,'2023-12-27 07:25:06','2023-12-30 05:31:36','','',''),(9,'菜单11','/main/menu/menu1/menu11',8,'',0,1,0,0,'2023-12-27 08:11:51','2023-12-30 05:31:45','','',''),(10,'菜单2','/main/menu/menu2',7,'',0,1,0,0,'2023-12-27 12:51:34','2023-12-30 05:31:40','','',''),(11,'外链','',NULL,'ph:link-fill',0,1,1,0,'2023-12-28 05:23:59','2023-12-28 06:59:47','','','http://www.baidu.com'),(12,'内嵌1','/main/display-iframe',NULL,'ph:link-fill',0,1,1,1,'2023-12-28 06:18:26','2023-12-28 07:55:05','','','https://nodejs.org/zh-cn/'),(13,'内嵌2','/main/iframe/two',NULL,'ph:link-fill',0,1,1,1,'2023-12-28 07:55:50','2023-12-29 06:04:29','','','https://ant.design/components/slider-cn/#tooltip'),(14,'用户查询','',3,'',0,2,0,0,'2023-12-29 06:19:09','2023-12-30 06:00:52','','sys:user:query',''),(15,'用户添加','',3,'',0,2,0,0,'2023-12-29 07:12:06','2023-12-30 06:01:00','','sys:user:create',''),(16,'菜单21','',10,'',0,1,0,0,'2023-12-30 04:08:59','2023-12-30 04:08:59','','','');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_select_menu`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_select_menu` (
  `roleId` int NOT NULL,
  `menuId` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`roleId`,`menuId`),
  KEY `menuId` (`menuId`),
  CONSTRAINT `role_select_menu_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `role_select_menu_ibfk_2` FOREIGN KEY (`menuId`) REFERENCES `menu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_select_menu`
--

LOCK TABLES `role_select_menu` WRITE;
/*!40000 ALTER TABLE `role_select_menu` DISABLE KEYS */;
INSERT INTO `role_select_menu` VALUES (1,1,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,3,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,4,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,5,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,6,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,7,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,8,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,9,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,11,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,12,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,13,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,14,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(1,15,'2023-12-30 10:50:49','2023-12-30 10:50:49'),(11,5,'2023-12-26 06:32:16','2023-12-26 06:32:16'),(11,6,'2023-12-26 06:32:16','2023-12-26 06:32:16');
/*!40000 ALTER TABLE `role_select_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roleName` varchar(500) NOT NULL,
  `roleIndex` varchar(100) NOT NULL,
  `sort` int NOT NULL DEFAULT '0',
  `state` tinyint NOT NULL DEFAULT '1',
  `intro` varchar(5000) DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roleName` (`roleName`),
  UNIQUE KEY `roleIndex` (`roleIndex`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'超级管理员','superadmin',0,1,'','2023-12-18 03:42:07','2023-12-27 07:26:42'),(2,'普通用户','normal',10,1,'','2023-12-18 03:42:56','2024-01-04 06:42:23'),(3,'测试角色','testIndex',0,1,NULL,'2023-12-18 04:03:34','2023-12-18 04:10:11'),(10,'测试角色添加','testIndex2',0,1,'','2023-12-25 09:26:50','2023-12-25 09:26:50'),(11,'添加测试角色了','fads',0,0,'','2023-12-25 09:29:34','2023-12-25 09:31:08');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(500) DEFAULT NULL,
  `nickname` varchar(50) DEFAULT NULL,
  `telephone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `intro` varchar(1000) DEFAULT NULL,
  `roleId` int DEFAULT NULL,
  `departmentId` int DEFAULT NULL,
  `state` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `id` (`id`),
  KEY `roleId` (`roleId`),
  KEY `departmentId` (`departmentId`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'superadmin','e10adc3949ba59abbe56e057f20f883e','超级管理员','','','2023-12-16 14:47:03','2023-12-19 10:35:25','拥有所有权限',1,9,1),(5,'testuser','e10adc3949ba59abbe56e057f20f883e','测试用户','','','2023-12-17 12:41:49','2023-12-30 05:59:20','测试接口',2,8,1),(6,'testnewuser','e10adc3949ba59abbe56e057f20f883e','lc','123','test','2023-12-21 06:43:07','2024-01-04 08:19:01','测试',1,18,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'cms-tem'
--

--
-- Dumping routines for database 'cms-tem'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-05 14:52:41
