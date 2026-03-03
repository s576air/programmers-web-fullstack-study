const decodeJwt = require('../auth');
const jwt = require('jsonwebtoken');
const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');

const addLike = async (req, res) => {
    const bookId = req.params.id;

    let token = decodeJwt(req);
    
    if (token instanceof jwt.TokenExpiredError) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
        });
    } else if (token instanceof jwt.JsonWebTokenError) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "잘못된 토큰입니다."
        });
    }
    let userId = token.id;

    const sql = "INSERT INTO likes(user_id, liked_book_id) VALUES(?, ?)";
    let values = [userId, bookId];
    let [results] = await conn.query(sql, values);
    return res.status(StatusCodes.OK).json(results);
};

const removeLike = (req, res) => {
    const bookId = req.params.id;

    let token = decodeJwt(req);
    
    if (token instanceof jwt.TokenExpiredError) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
        });
    } else if (token instanceof jwt.JsonWebTokenError) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "잘못된 토큰입니다."
        });
    }
    let userId = token.id;

    const sql = "DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?";
    let values = [userId, bookId];
    conn.query(sql, values, (err, results) => {
        if(err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        return res.status(StatusCodes.OK).json(results);
    })
};

module.exports = {
    addLike,
    removeLike
};