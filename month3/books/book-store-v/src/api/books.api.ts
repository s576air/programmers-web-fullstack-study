import { generatePath } from "react-router-dom";
import type { Book, BookDetail } from "../models/book.model";
import type { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
    category_id?: number;
    news: boolean;
    currentPage?: number;
    limit: number;
}

interface FetchBooksResponse {
    books: Book[];
    pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams): Promise<FetchBooksResponse> => {
    
    try {
        const response = await httpClient.get<FetchBooksResponse>("/books", {
            params
        })

        return response.data;
    } catch (error) {
        return {
            books: [],
            pagination: {
                totalCount: 0,
                currentPage: 1,
            }
        }
    }
}

export const fetchBook = async (bookId: string) => {
    const url = generatePath('/books/:bookId', { bookId });
    const response = await httpClient.get<BookDetail>(url);
    return response.data;
}

export const likeBook = async (bookId: string) => {
    const url = generatePath('/books/:bookId', { bookId });
    const response = await httpClient.post<BookDetail>(url);
    return response.data;
}

export const unlikeBook = async (bookId: string) => {
    const url = generatePath('/books/:bookId', { bookId });
    const response = await httpClient.delete<BookDetail>(url);
    return response.data;
}