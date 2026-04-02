import { FaSmileWink } from 'react-icons/fa';
import styled from 'styled-components'
import Title from '../common/title';
import { Link } from 'react-router-dom';

const BooksEmpty = () => {
  return (
    <BooksEmptyStyle>
      <div className='icon'>
        <FaSmileWink />
      </div>
      <Title size='large' color='secondary'>
        검색 결과가 없습니다.
      </Title>
      <p>
        <Link to='/books'>전체 검색 결과로 이동</Link>
      </p>
    </BooksEmptyStyle>
  )
}

const BooksEmptyStyle = styled.div``;

export default BooksEmpty