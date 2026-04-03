import { Link, useParams } from "react-router-dom";
import styled from "styled-components"
import { getImgSrc } from "../utils/image";
import Title from "../components/common/title";
import { useBook } from "../hooks/useBook";
import type { BookDetail as IBookDetail } from "../models/book.model";
import { formatDate, formatNumber } from "../utils/format";
import EllipsisBox from "../components/common/EllipsisBox";

const bookInfoList: {
  label: string,
  key: keyof IBookDetail,
  filter?: (book: IBookDetail) => string,
}[] = [
  {
    label: "카테고리",
    key: "categoryName",
    // filter: (book: IBookDetail) =>
    //   <Link to={`/books?category_id=${book.category_id}`}>
    //     {book.categoryName}
    //   </Link>
  },
  {
    label: "포맷",
    key: "form"
  },
  {
    label: "페이지",
    key: "pages"
  },
  {
    label: "ISBN",
    key: "isbn"
  },
  {
    label: "출간일",
    key: "pubDate",
    filter: (book: IBookDetail) => {
      return `${formatDate(book.pubDate)}`
    }
  },
  {
    label: "가격",
    key: "price",
    filter: (book: IBookDetail) => {
      return `${formatNumber(book.price)}원`
    }
  },
];

function BookDetail() {
  const { bookId } = useParams();
  const { book } = useBook(bookId ?? "");

  if (!book) return null;

  return (
    <BookDetailStyle>
      <header className="header">
        <div className="img">
          <img src={getImgSrc(book.img)} />
        </div>
        <div className="info">
          <Title size="large" color="text">
            {book.title}
          </Title>
          {
            bookInfoList.map((item) => (
              <dl>
                <dt>{item.label}</dt>
                <dd>{item.filter ? item.filter(book): book[item.key]}</dd>
              </dl>
            ))
          }
          <p className="summary">{book.summary}</p>
          <div className="like">라이크</div>
          <div className="add-cart">장바구니 넣기</div>
        </div>
      </header>
      <div className="content">
        <Title size="medium">상세 설명</Title>
        <EllipsisBox lineLimit={4}>{book.detail}</EllipsisBox>
        <Title size="medium">목차</Title>
        <p className="index">
          {book.contents}
        </p>
      </div>
    </BookDetailStyle>
  )
}

const BookDetailStyle = styled.div`
`;

export default BookDetail