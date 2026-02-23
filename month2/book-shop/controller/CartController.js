const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');

// 장바구니 담기
const addToCart = (req, res) => {
    const {bookId, quantity, userId} = req.body;

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
    const {userId, selected} = req.body;

    const sql = `
    SELECT c.id, c.book_id, c.quantity, b.title, b.summary, b.price
    FROM cart_items c
    LEFT JOIN books b ON cart_items.book_id = books.id
    WHERE b.user_id = ? AND c.id IN (?)`;
    conn.query(sql, [userId, selected], (err, results) => {
        if(err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        return res.status(StatusCodes.OK).json(results);
    })
};

// 장바구니 아이템 삭제
const removeCartItem = (req, res) => {
    const {id} = req.params;

    const sql = 'DELETE FROM cart_items WHERE id = ?';
    conn.query(sql, id, (err, results) => {
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