/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hotel

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-08-01 11:54:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `orderCode` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `hotelName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `roomType` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `total` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `phoneArea` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `person` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `roomNum` int(11) DEFAULT NULL,
  `starData` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `endData` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `saveUntil` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=64 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('7', '226722580', '空客酒店AIRBUSHOTEL(广州白云机场人和店)', '商务双床房', '288', '288', '+886', '加法', '+88618765342565', '1', 'undefined', 'undefined', '00:00', 'aaa', '//pavo.elongstatic.com/i/mobile220_220/0003mw1q.jpg');
INSERT INTO `orders` VALUES ('4', '466405968', '空客酒店AIRBUSHOTEL(广州白云机场人和店)', '豪华套房', '768', '768', '+86', '你几号', '+8617625437658', '1', 'undefined', 'undefined', '00:00', 'aaa', '//pavo.elongstatic.com/i/mobile220_220/0003mw1q.jpg');
INSERT INTO `orders` VALUES ('5', '216722587', '空客酒店AIRBUSHOTEL(广州白云机场人和店)', '商务双床房', '288', '288', '+886', '加法', '+88618765342565', '1', 'undefined', 'undefined', '00:00', 'aaa', '//pavo.elongstatic.com/i/mobile220_220/0003mw1q.jpg');
INSERT INTO `orders` VALUES ('1', '206722580', '空客酒店AIRBUSHOTEL(广州白云机场人和店)', '商务双床房', '288', '288', '+886', '加法', '+88618765342565', '1', 'undefined', 'undefined', '00:00', 'aaa', '//pavo.elongstatic.com/i/mobile220_220/0003mw1q.jpg');
INSERT INTO `orders` VALUES ('2', '466405989', '空客酒店AIRBUSHOTEL(广州白云机场人和店)', '豪华套房', '768', '768', '+86', '你几号', '+8617625437658', '1', 'undefined', 'undefined', '00:00', 'aaa', '//pavo.elongstatic.com/i/mobile220_220/0003mw1q.jpg');
