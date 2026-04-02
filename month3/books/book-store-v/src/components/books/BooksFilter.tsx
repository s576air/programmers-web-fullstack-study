import styled from 'styled-components'
import { useCategory } from '../../hooks/useCategory';
import Button from '../common/Button';

const BooksFilter = () => {
  const { category } = useCategory();

  return (
    <BooksFilterStyle>
      <div className='category'>
        {category.map((item) => (
          <Button size='medium' scheme='normal' key={item.id}>
            {item.name}
          </Button>
        ))}
      </div>
      <div className='new'>
        <Button size='medium' scheme='normal'>신간</Button>
      </div>
    </BooksFilterStyle>
  )
}

const BooksFilterStyle = styled.div``;

export default BooksFilter