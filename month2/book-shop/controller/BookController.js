const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');

const allBooks = (req, res) => {
    let { category_id, news, limit, currentPage } = req.query;
    
    limit = parseInt(limit);
    currentPage = parseInt(currentPage);

    let sql = `
    SELECT *, (
        SELECT count(*) FROM likes WHERE liked_book_id = books.id
    ) AS likes
    FROM books
    WHERE 1=1`;
    let values = [];

    // 강의에서는 3가지 경우를 각각 구현함
    if (category_id) {
        sql += " AND category_id = ?";
        values.push(category_id);
    }
    if (news) {
        sql += " AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";
        values.push(news);
    }

    // limit: page 당 도서 수
    // currentPage: 현재 페이지(1부터 시작)
    // offset: 시작 지점. 0부터 시작. limit * (cp - 1)
    let offset = limit * (currentPage - 1);
    sql += " LIMIT ? OFFSET ?";
    values.push(limit, offset);

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        if (results.length) {
            return res.status(StatusCodes.OK).json(results);
        } else {
            return res.status(StatusCodes.NOT_FOUND).end();
        }
    })    
};

const bookDetail = (req, res) => {
    let {userId} = req.body;
    let bookId = parseInt(req.params.id);

    const sql = `
    SELECT *,
        (SELECT count(*) FROM likes WHERE liked_book_id = books.id) AS likes,
        (SELECT EXISTS (SELECT * FROM likes WHERE user_id = ? AND liked_book_id = ?)) AS liked
    FROM books
    LEFT JOIN category ON books.category_id = category.category_id
    WHERE books.id = ?`;
    const values = [userId, bookId, bookId];
    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        if (results[0]) {
            return res.status(StatusCodes.OK).json(results[0]);
        } else {
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        
    })
};

module.exports = {
    allBooks,
    bookDetail
}