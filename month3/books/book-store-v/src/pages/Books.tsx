import styled from "styled-components";
import Title from "../components/common/title";
import BooksEmpty from "../components/books/BooksEmpty";
import BooksList from "../components/books/BooksList";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import BooksFilter from "../components/books/BooksFilter";
//import { useBooks } from "../hooks/useBooks";
import Loading from "@/components/common/Loading";
import { useBooksInfinite } from "@/hooks/useBookInfinite";
import Button from "@/components/common/Button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";


function Books() {
    const {books, pagination, isEmpty, isBooksLoading, fetchNextPage, hasNextPage } = useBooksInfinite();
    //const moreRef = useRef(null);

    const moreRef = useIntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            loadMore();
        }
    });

    const loadMore = () => {
        if (!hasNextPage) return;
    }

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
                {/*<Pagination pagination={pagination}/>*/}

                <div className="more" ref={moreRef}>
                    <Button
                        size="medium"
                        scheme="normal"
                        onClick={() => fetchNextPage()}
                        disabled={hasNextPage}
                    >
                        {hasNextPage ? "더보기" : "마지막 페이지"}
                    </Button>
                </div>
            </BooksStyle>
        </>
    );
}

const BooksStyle = styled.div``;

export default Books;