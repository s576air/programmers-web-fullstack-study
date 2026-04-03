import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { type Book } from "../models/book.model";
import { type Pagination } from "../models/pagination.model";
import { fetchBooks } from "../api/books.api";
import { QUERYSTRINGS } from "../constants/querystring";
import { LIMIT } from "../constants/pagination";

export const useBooks = () => {
    const location = useLocation();

    const [books, setBooks] = useState<Book[]>([]);
    const [pagination, setPagination] = useState<Pagination>({
        totalCount: 0,
        currentPage: 1,
    })
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        fetchBooks({
            category_id: params.get(QUERYSTRINGS.CATEGORY_ID) ?
            Number(params.get(QUERYSTRINGS.CATEGORY_ID)) :
            undefined,
            news:Boolean(params.get(QUERYSTRINGS.NEWS)),
            currentPage: params.get(QUERYSTRINGS.PAGE) ?
            Number(params.get(QUERYSTRINGS.PAGE)) : 1,
            limit: LIMIT,
        }).then((res) => {
            setBooks(res.books);
            setPagination(res.pagination)
            setIsEmpty(!res.books.length)
        })
    }, [location.search])

    return { books, pagination, isEmpty }
}