import { useEffect, useState } from "react"
import type { BookDetail, BookReviewItem, BookReviewItemWrite } from "../models/book.model";
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addBookReview, fetchBookReview } from "@/api/review.api";

export const useBook = (bookId: string) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const { isLoggedIn } = useAuthStore();
    const { showAlert } = useAlert();
    const [reviews, setReviews] = useState<BookReviewItem[]>([]);

    const likeToggle = () => {
        // 권한 확인
        if (!isLoggedIn) {
            showAlert("로그인이 필요합니다.");
            return;
        }
        
        if (!book) return;

        if (book.liked) {
            // 라이크 -> 언라이크
            unlikeBook(book.id.toString()).then(() => {
                setBook({
                    ...book,
                    liked: false,
                    likes: book.likes - 1
                })
            })
        } else {
            // 언라이크 -> 라이크
            likeBook(book.id.toString()).then(() => {
                // 성공 처리, 낙관적 업데이트
                setBook({
                    ...book,
                    liked: true,
                    likes: book.likes + 1
                })
            })
        }
    }
    useEffect(() => {
        if (!bookId) return;

        fetchBook(bookId).then((book) => {
            setBook(book);
        });

        fetchBookReview(bookId).then((reviews) => {
            setReviews(reviews);
        });
    }, [bookId]);

    const addReview = (data: BookReviewItemWrite) => {
        if (!book) return;

        addBookReview(book.id.toString(), data).then(() => {
            fetchBookReview(book.id.toString()).then((reviews) => {
                setReviews(reviews);
            });
        });
    };

    return { book, likeToggle, reviews, addReview };
}