const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const port = '3922';

const options = {
    swaggerDefinition: {
        info: {
            title: 'Test API',
            version: '1.0.0',
            description: 'Test API with express',
        },
        host: 'localhost:' + port,
        basePath: '/',
        components: {
            schemas: {}
        }
    },
    apis: ['./*.js', './test/*.js']
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
    port
};

// https://swagger.io/docs/specification/v2_0/basic-structure/
// https://swagger.io/docs/specification/v2_0/describing-parameters/

/**
 * @swagger
 * /pet:
 *   post:
 *     summary: 요약
 *     description: 설명
 *     parameters:
 *       - in: path
 *         name: name1
 *       - in: path
 *         name: name2
 *     responses:
 *       200:
 *         description: OK
 *   get:
 *     summary: 요약2
 */
/**
 * @swagger
 * /boards:
 *   summary: borad summary
 *   description: board des
 *   get:
 *     summary: uploads an image
 *     description: 한푸들 테스트
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
 */

/**
 * @swagger
 * /pet/{petId}/uploadImage:
 *   post:
 *     summary: uploads an image
 *     description: 한푸들 테스트
 *     tags:
 *       - product
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
 */

/**
 * @swagger
 * /pet2/{petId}/uploadImage:
 *   get:
 *     summary: uploads an image
 *     description: 한푸들 테스트
 *     tags:
 *       - product
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
 */

/**
 *
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
 *
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