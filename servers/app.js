// 加入環境變數
require('dotenv').config()
// 載入express、設置port
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// 設置node內建path模組
const path = require('path')

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
    }
)
