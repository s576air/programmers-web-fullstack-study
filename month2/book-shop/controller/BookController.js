const decodeJwt = require('../auth');
const jwt = require('jsonwebtoken');
const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');

/**
 * Response Body
 * {
 *     books: {id, title, img, summary, author, price, likes, pubDate}[],
 *     pagination: {currentPage, totalBooks}
 * }
*/
const allBooks = async (req, res) => {
    let allBookRes = {};
    let { category_id, news, limit, currentPage } = req.query;
    
    limit = parseInt(limit);
    currentPage = parseInt(currentPage);

    let sql = `
    SELECT SQL_CALC_FOUND_ROWS *, (
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

    let [results] = await conn.query(sql, values);
    if (!results.length) return res.status(StatusCodes.BAD_REQUEST).end();
    allBookRes.books = results;

    sql = "SELECT found_rows()";
    let [results2] = await conn.query(sql);
    let pagination = {};
    pagination.currentPage = currentPage;
    pagination.totalCount = results2[0]['found_rows()'];

    allBookRes.pagination = pagination;

    return res.status(StatusCodes.OK).json(allBookRes);
};

const bookDetail = async (req, res) => {
    // 로그인 => liked 추가
    // 비로그인 => liked 빼기
    let bookId = parseInt(req.params.id);

    let token = decodeJwt(req);
    
    if (token instanceof jwt.TokenExpiredError) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
        });
    } else if (token instanceof jwt.JsonWebTokenError) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "잘못된 토큰입니다."
        });
    } else if (token instanceof ReferenceError) {
        const sql = `
        SELECT *, (SELECT count(*) FROM likes WHERE liked_book_id = books.id) AS likes
        FROM books
        LEFT JOIN category ON books.category_id = category.category_id
        WHERE books.id = ?`;
        let results = await conn.query(sql, bookId);
        if (results[0]) {
            return res.status(StatusCodes.OK).json(results[0]);
        } else {
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
    }
    let userId = token.id;

    const sql = `
    SELECT *,
        (SELECT count(*) FROM likes WHERE liked_book_id = books.id) AS likes,
        (SELECT EXISTS (SELECT * FROM likes WHERE user_id = ? AND liked_book_id = ?)) AS liked
    FROM books
    LEFT JOIN category ON books.category_id = category.category_id
    WHERE books.id = ?`;
    const values = [userId, bookId, bookId];
    let results = await conn.query(sql, values);
    if (results[0]) {
        return res.status(StatusCodes.OK).json(results[0]);
    } else {
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
};

module.exports = {
    allBooks,
    bookDetail
}