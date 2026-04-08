import type { BookReviewItemWrite } from "@/models/book.model";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../common/Button";

interface Props {
  onAdd: (data: BookReviewItemWrite) => void;
}

function BookReviewAdd({ onAdd }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookReviewItemWrite>();

  return (
    <BookReviewAddStyle>
      <form onSubmit={handleSubmit(onAdd)}>
        <fieldset>
          <textarea {...register("content", { required: true })}></textarea>
          {errors.content && <p className="error-text">리뷰 내용을 입력해 주세요.</p>}
        </fieldset>
        <fieldset>
          <select {...register("score", { required: true, valueAsNumber: true })}>
            <option value="1">1점</option>
            <option value="2">2점</option>
            <option value="3">3점</option>
            <option value="4">4점</option>
            <option value="5">5점</option>
          </select>
        </fieldset>
        <Button size="medium" scheme="primary">
          작성하기
        </Button>
      </form>
    </BookReviewAddStyle>
  );
}

const BookReviewAddStyle = styled.div``;

export default BookReviewAdd;