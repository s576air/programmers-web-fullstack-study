import styled from 'styled-components'
import BookItem from './BookItem';
import type { Book } from '../../models/book.model';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { QUERYSTRINGS } from '../../constants/querystring';
import type { ViewMode } from './BooksViewSwitcher';

interface Props {
  books: Book[];
}

const BooksList = ({ books }: Props) => {
  const [view, setView] = useState<ViewMode>('grid');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get(QUERYSTRINGS.VIEW)) {
      setView(params.get(QUERYSTRINGS.VIEW) as ViewMode);
    }
  }, [location.search])

  return (
    <BooksListStyle view={view}>
      {books?.map((item) => (
        <BookItem key={item.id} book={item} view={view} />
      ))}
    </BooksListStyle>
  )
}

interface BooksListStyleProps {
  view: ViewMode;
}

const BooksListStyle = styled.div<BooksListStyleProps>`
grid-template-columns: ${({ view }) =>
  view === "grid" ?
  "repeat(4, 1fr)" :
  "repeat(1, 1fr)"
}
`;

export default BooksList