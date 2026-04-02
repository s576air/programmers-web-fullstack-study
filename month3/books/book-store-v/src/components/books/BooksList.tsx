import styled from 'styled-components'
import BookItem from './BookItem';
import type { Book } from '../../models/book.model';

const dummyBook: Book = {
    id: 1,
    title: "title!",
    img: 5,
    category_id: 1,
    form: "form!",
    isbn: "isbn!",
    summary: "summary!",
    detail: "detail!",
    author: "author!",
    pages: 1,
    contents: "contents!",
    price: 15000,
    likes: 12,
    pubDate: "pubDate!",
}

const BooksList = () => {
  return (
    <BooksListStyle>
      <BookItem book={dummyBook}/>
    </BooksListStyle>
  )
}

const BooksListStyle = styled.div``;

export default BooksList