import styled from "styled-components";
import Title from "../components/common/title";
import BooksEmpty from "../components/books/BooksEmpty";
import BooksList from "../components/books/BooksList";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import BooksFilter from "../components/books/BooksFilter";
import Pagination from "../components/books/Pagination";
import { useBooks } from "../hooks/useBooks";
import Loading from "@/components/common/Loading";


function Books() {
    const {books, pagination, isEmpty, isBooksLoading } = useBooks();

    if (isEmpty) {
        return <BooksEmpty />
    }

    if (!books || !pagination || isBooksLoading) {
        return <Loading />
    }

    return (
        <>
            <Title size="large">도서 검색 결과</Title>
            <BooksStyle>
                <div className="filter">
                    <BooksFilter />
                    <BooksViewSwitcher />
                </div>
                <BooksList books={books}/>
                <Pagination pagination={pagination}/>
            </BooksStyle>
        </>
    );
}

const BooksStyle = styled.div``;

export default Books;