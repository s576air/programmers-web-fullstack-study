const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
공식 홈페이지의 예시
다른 경로는 'Cannot GET /test'같은 느낌으로 응답한다.
돌리는 정식 방법: node app.js

애플리케이션 생성기
npm i express-generator -g
권한이 없어서 오류가 뜯다면 앞에 sudo 붙이기
*/