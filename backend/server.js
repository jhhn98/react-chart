// backend/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// CORS 허용 (프론트엔드가 다른 포트에서 요청할 경우)
app.use(cors());

// API 엔드포인트 : /bar-data
app.get('/bar-data', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');

    // 파일을 읽고 JSON 파싱
    fs.readFile(filePath, 'utf8', (err, raw) => {
        if (err) {
            console.error('data.json 읽기 오류:', err);
            return res.status(500).json({ error: '데이터를 읽어올 수 없습니다.' });
        }

        try {
            const data = JSON.parse(raw);
            res.json(data);               // 클라이언트에 JSON 배열 반환
        } catch (parseErr) {
            console.error('JSON 파싱 오류:', parseErr);
            res.status(500).json({ error: '잘못된 JSON 형식' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 backend 서버가 http://localhost:${PORT} 에서 실행 중`);
});