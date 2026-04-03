import styled from 'styled-components'
import { useCategory } from '../../hooks/useCategory';
import Button from '../common/Button';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRINGS } from '../../constants/querystring';

const BooksFilter = () => {
  const { category } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (id === null) {
      newSearchParams.delete(QUERYSTRINGS.CATEGORY_ID);
    } else {
      newSearchParams.set(QUERYSTRINGS.CATEGORY_ID, id.toString());
    }

    setSearchParams(newSearchParams);
  }

  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.get(QUERYSTRINGS.NEWS)) {
      newSearchParams.delete(QUERYSTRINGS.NEWS);
    } else {
      newSearchParams.set(QUERYSTRINGS.NEWS, 'true');
    }

    setSearchParams(newSearchParams);
  }

  return (
    <BooksFilterStyle>
      <div className='category'>
        {category.map((item) => (
          <Button
            size='medium'
            scheme={item.isActive ? 'primary' : 'normal'}
            key={item.id}
            onClick={() => handleCategory(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className='new'>
        <Button
          size='medium'
          scheme={searchParams.get(QUERYSTRINGS.NEWS) ? 'primary' : 'normal'}
          onClick={handleNews}
        >
          신간
        </Button>
      </div>
    </BooksFilterStyle>
  )
}

const BooksFilterStyle = styled.div``;

export default BooksFilter