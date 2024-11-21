# Coffee Shop 網站專案

這是一個線上咖啡購物網站，提供自家烘焙的咖啡豆與掛耳咖啡產品，並包含多樣化的功能讓用戶可以瀏覽、收藏、購物及付款。

---

## 功能說明

1. **主頁**
   - 查看老闆的介紹主頁。
2. **產品瀏覽**
   - 查看目前提供販賣的咖啡豆。
   - 查看目前提供販賣的掛耳咖啡。
   - 依照焙度分類（淺焙、中焙、深焙）查看風味不同的咖啡。
   - 查看產品詳細介紹（品名、焙度、風味特色、單價、介紹）。
   - 查看最受歡迎產品 TOP 10。
3. **聯絡**
   - 查看聯絡方式頁面。
   - 提交問題表單。
4. **會員功能**
   - 使用 Facebook 登入。
   - 儲存喜歡的產品（咖啡豆、掛耳咖啡）。
5. **購物車與付款**
   - 將喜歡的產品加入購物車。
   - 查看購物車內的品項。
   - 使用第三方平台付款。

---

## 使用技術

- 後端：Node.js、Express.js、Sequelize、MySQL
- 前端：React.js、Bootstrap
- 會員登入：Facebook OAuth、JWT

---

## 安裝與啟動

1. **Clone 專案**
   ```bash
   git clone <專案網址>
   cd coffee-shop
   ```
2. **依賴項**

   > #### 後端

   > > - bcryptjs: ^2.4.3,
   > > - body-parser: ^1.20.3,
   > > - cors : ^2.8.5,
   > > - dotenv: ^16.4.5,
   > > - express: ^4.21.1,
   > > - jsonwebtoken: ^9.0.2,
   > > - multer: ^1.4.3,
   > > - mysql2: ^3.11.3,
   > > - nodemon: ^3.1.7,
   > > - passport: ^0.7.0,
   > > - passport-jwt: ^4.0.1,
   > > - sequelize: ^6.37.4,
   > > - sequelize-cli: ^6.6.2

   > #### 前端

   > > - axios: ^1.7.7,
   > > - bootstrap: ^5.3.3,
   > > - react: ^18.3.1,
   > > - react-bootstrap: ^2.10.5,
   > > - react-dom: ^18.3.1,
   > > - react-router-dom: ^6.27.0,
   > > - react-scripts: 5.0.1,
   > > - web-vitals: ^2.1.4
   > > - @testing-library/jest-dom: ^5.17.0,
   > > - @testing-library/react: ^13.4.0,
   > > - @testing-library/user-event: ^13.5.0,
