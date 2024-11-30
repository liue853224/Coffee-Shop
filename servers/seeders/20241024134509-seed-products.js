"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [];

    for (let i = 1; i <= 50; i++) {
      products.push({
        name: `產品名稱 ${i}`,
        type: i % 2 === 0 ? "coffee-beans" : "drip-coffee", // 交替插入不同類型
        roastLevel: ["light", "medium", "dark"][Math.floor(Math.random() * 3)], // 隨機選擇焙度
        flavor: `風味描述 ${i}`,
        price: Math.floor(Math.random() * 100) + 300, // 隨機價格在300到400之間
        description: `這是第 ${i} 個產品的描述`,
        rating: (Math.random() * 5).toFixed(1), // 隨機評分 0~5之間的小數點一位
        imageUrl: "/upload/cofe-bean.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
