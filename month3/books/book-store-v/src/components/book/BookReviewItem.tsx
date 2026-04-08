import type { BookReviewItem as IBookReviewItem } from "@/models/book.model";
import { formatDate } from "@/utils/format";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

interface Props {
  review: IBookReviewItem;
}

const Star = (props: Pick<IBookReviewItem, "score">) => {
  return (
    <span className="star">
      {Array.from({ length: props.score }).map(() => (
        <FaStar />
      ))}
    </span>
  );
};

function BookReviewItem({ review }: Props) {
  return (
    <BookReviewItemStyle>
      <header className="header">
        <div>
          <span>{review.userName}</span>
          <Star score={review.score}/>
        </div>
        <div>{formatDate(review.createdAt)}</div>
      </header>
      <div className="content">
        <p>{review.content}</p>
      </div>
    </BookReviewItemStyle>
  );
}

const BookReviewItemStyle = styled.div``;

export default BookReviewItem;