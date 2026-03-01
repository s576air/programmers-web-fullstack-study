const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');

/*
delivery: {
    address: string,
    receiver: string,
    contact: string
}
*/
const order = async (req, res) => {
    // 책 제목을 바로 body로 받는건..
    const {items, delivery, totalQuantity, totalPrice, userId, firstBookTitle} = req.body;

    // 배달 추가
    let sql = "INSERT INTO delivery(address, receiver, contact) VALUES(?, ?, ?)";
    let values = [delivery.address, delivery.receiver, delivery.contact];
    let [results] = await conn.execute(sql, values);
    let delivery_id = results.insertId;

    // 주문 추가
    sql =
    `INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id) 
    VALUES (?, ?, ?, ?, ?)`;
    values = [firstBookTitle, totalQuantity, totalPrice, userId, delivery_id];
    [results] = await conn.execute(sql, values);
    let order_id = results.insertId;

    sql = 'SELECT book_id, quantity FROM cartItems WHERE IN (?)';
    let [orderItems] = await conn.query(sql, [items]);

    // 주문한 책 추가
    sql = 'INSERT INTO orderedBook(order_id, book_id, quantity) VALUES ?';
    
    values = []
    orderItems.forEach((item) => {
        values.push([order_id, item.book_id, item.quantity])
    })
    results = await conn.query(sql, [values]); // 다중 insert는 최근 문법이라
    
    result = await deleteCartItems(conn, items);

    return res.status(StatusCodes.OK).json(results[0]); 
}

const deleteCartItems = async (conn, items) => {
    let sql = 'DELETE FROM cartItems WHERE id IN (?)';

    let result = await conn.query(sql, items);
    return result;
}

const getOrders = async (req, res) => {
    let sql =
    `SELECT o.id, o.book_title, o.total_quantity, o.total_price, o.create_at, d.address, d.receiver, d.contact
    FROM orders o
    LEFT JOIN delivery d ON o.delivery_id = d.id`;
    let [rows] = await conn.query(sql);
    return res.status(StatusCodes.OK).json(rows);
}

const getOrderDetail = async (req, res) => {
    let {id} = req.params;
    let sql = 
    `SELECT ob.book_id, b.title, b.author, b.price, ob.quantity
    FROM orderedBook ob
    LEFT JOIN books b ON ob.book_id = b.id
    WHERE order_id = ?`;
    let [rows] = await conn.query(sql, [id]);
    return res.status(StatusCodes.OK).json(rows);
}

module.exports = {
    order,
    getOrders,
    getOrderDetail
}