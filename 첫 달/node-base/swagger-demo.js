const { swaggerUi, specs } = require('./swagger');

let express = require("express");
let app = express();

app.get('/', function(req, res) {
    res.send('a');
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen('3800');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product123:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: 제품 고유 번호
 *           example: 1
 *         title:
 *           type: string
 *           description: 제품 이름
 *           example: 한푸들
 *         main_image:
 *           type: string
 *           description: 제품 메인 이미지
 *           example: https://example.com/image.png
 *         discount:
 *           type: integer
 *           description: 할인 내역
 *           example: 1000
 *       required:
 *         - id
 *         - title
 */

/**
 * @swagger
 * /product:
 *   get:
 *     tags:
 *       - product
 *     description: 제품 조회 및 한푸들 테스트
 *     parameters:
 *       - in: query
 *         name: category
 *         required: false
 *         schema:
 *           type: integer
 *           description: 카테고리
 *     responses:
 *       200:
 *         description: 제품 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product123'
 */