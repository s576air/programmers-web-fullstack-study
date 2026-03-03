const decodeJwt = require('../auth');
const jwt = require('jsonwebtoken');
const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');

// 장바구니 담기
const addToCart = (req, res) => {
    const {bookId, quantity} = req.body;

    let token = decodeJwt(req);

    // 자동완성으로 앞에 jwt.이 붙었다..? 붙이는게 맞았다.
    if (token instanceof jwt.TokenExpiredError) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
        });
    } else if (token instanceof jwt.JsonWebTokenError) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "잘못된 토큰입니다."
        });
    }
    let {userId} = token;
    // return이 있으니 else는 필요없을 것 같아 생략

    const sql = "INSERT INTO cart_items(book_id, quantity, user_id) VALUES(?, ?, ?)";
    let values = [bookId, quantity, userId];
    conn.query(sql, values, (err, results) => {
        if(err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        return res.status(StatusCodes.OK).json(results);
    })
};

// 장바구니 아이템 목록 조회
const getCartItems = (req, res) => {
    const {selected} = req.body;

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

    let {userId} = token;
    
    let sql = `
    SELECT c.id, c.book_id, c.quantity, b.title, b.summary, b.price
    FROM cart_items c
    LEFT JOIN books b ON cart_items.book_id = books.id
    WHERE b.user_id = ?`;
    values = [userId];

    if (selected) {
        sql += ' AND c.id IN (?)';
        values.push(selected);
    }

    conn.query(sql, values, (err, results) => {
        if(err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        return res.status(StatusCodes.OK).json(results);
    })
};

// 장바구니 아이템 삭제
const removeCartItem = (req, res) => {
    const cartItemId = req.params.id;

    const sql = 'DELETE FROM cart_items WHERE id = ?';
    conn.query(sql, cartItemId, (err, results) => {
        if(err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        return res.status(StatusCodes.OK).json(results);
    })
};

module.exports = {
    addToCart,
    getCartItems,
    removeCartItem
}