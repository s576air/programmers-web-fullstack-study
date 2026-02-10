let express = require('express');
let router = express.Router();
let conn = require('../mariadb');
const expressValidator = require('express-validator');
const {body, param, validationResult} = expressValidator;

function notFoundChannels(res) {
    res.status(404).json({
        message: "채널 정보를 찾을 수 없습니다."
    })
}

const validate = (req, res, next) => {
    const err = validationResult(req);

    if (err.isEmpty()) {
        return next();
    }
    
    res.status(400).json(err.array());
}

router.route('/')
    .get([
        body('userId').notEmpty().isInt().withMessage('숫자 입력 필요'),
        validate
    ], (req, res) => { // 채널 전체 조회
        // validate(req, res);
        let {userId} = req.body;

        let sql = 'SELECT * FROM channels WHERE user_id = ?';
        if (userId) {
            conn.query(sql, userId, function(err, results) {
                if (results.length) {
                    res.status(200).json(results);
                } else {
                    notFoundChannels(res);
                }
            })
        } else {
            res.status(400).end();
        }
    })
    .post([
        body('userId').notEmpty().isInt().withMessage('숫자 입력 필요'),
        body('name').notEmpty().isString().withMessage('문자 입력 필요'),
        validate
    ],
    (req, res) => { // 채널 개별 생성
        const {name, userId} = req.body;

        const sql = 'INSERT INTO channels(name, user_id) VALUES(?, ?)';
        const values = [name, userId];
        conn.query(sql, values,
            function(err, results) {
                if (err) {
                    console.log(err);
                    return res.status(400).end();
                }
                res.status(201).json(results);
            }
        )
    })
;

router.route('/:id')
    .get([
        param('id').notEmpty().withMessage('채널 id 필요'),
        validate
        ], (req, res) => { // 채널 개별 조회

        let id = req.params.id;
        id = parseInt(id);

        const sql = 'SELECT * FROM channels WHERE id = ?';
        conn.query(sql, id,
            function(err, results) {
                if (err) {
                    console.log(err);
                    return res.status(400).end();
                }

                if (results.length) {
                    res.status(200).json(results);
                } else {
                    notFoundChannels(res);
                }
            }
        )
    })
    .put([
        param('id').notEmpty().withMessage('채널 id 필요'),
        validate
    ],
        (req, res) => { // 채널 개별 수정
        let id = req.params.id;
        id = parseInt(id);
        let name = req.body.name;
        
        const sql = 'UPDATE channels SET name=? WHERE id = ?';
        conn.query(sql, [name, id],
            function(err, results) {
                if (err) {
                    console.log(err);
                    return res.status(400).end();
                }

                if (results.affectedRows) {
                    return res.status(200).json(results);
                }

                notFoundChannels(res);
            }
        )
    })
    .delete([
        param('id').notEmpty().withMessage('채널 id 필요'),
        validate
    ],
        (req, res) => { // 채널 개별 삭제

        let id = req.params.id;
        id = parseInt(id);

        const sql = 'DELETE FROM channels WHERE id = ?';
        conn.query(sql, id,
            function(err, results) {
                if (err) {
                    console.log(err);
                    return res.status(400).end();
                }

                return res.status(200).json(results);
            }
        );
    })
;

module.exports = router;