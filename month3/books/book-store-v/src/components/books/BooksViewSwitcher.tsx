import styled from 'styled-components'
import Button from '../common/Button';
import { FaList, FaTh } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRINGS } from '../../constants/querystring';
import { useEffect } from 'react';

const viewOptions = [
  {
    value: "list",
    icon: <FaList />
  },
  {
    value: "grid",
    icon: <FaTh />
  },
];

export type ViewMode = "grid" | "list";

function BooksViewSwitcher() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRINGS.VIEW, value);
    setSearchParams(newSearchParams);
  }

  useEffect(() => {
    if (!searchParams.get(QUERYSTRINGS.VIEW)) {
      handleSwitch("grid");
    }
  }, [])
  return (
    <BooksViewSwitcherStyle>
      {viewOptions.map((option) => (
        <Button
          key={option.value}
          size='medium'
          scheme={searchParams.get(QUERYSTRINGS.VIEW) === option.value ? 'primary' : 'normal'}
          onClick={option.value}
        >
          {option.icon}
        </Button>
      ))}
    </BooksViewSwitcherStyle>
  )
}

const BooksViewSwitcherStyle = styled.div``;

export default BooksViewSwitcher