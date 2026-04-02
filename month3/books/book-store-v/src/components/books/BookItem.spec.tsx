// npm run test를 통해서 테스트 진행 가능
// npm test BookItem
import BookItem from "./BookItem";
import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import { describe, expect, it } from "vitest";

const dummyBook = {
  id: 1,
  title: "dummy",
  img: 5,
  category_id: 1,
  summary: "summary",
  author: "author",
  price: 10000,
  likes: 1,
  form: "paper",
  isbn: "ISBN",
  detail: "detail",
  pages: 100,
  contents: "contents",
  pubDate: "2025-01-23",
};

describe("BookItem 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>,
    );
    expect(screen.getByText(dummyBook.title)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.summary)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.author)).toBeInTheDocument();
    expect(screen.getByText("10,000")).toBeInTheDocument();
    expect(screen.getByText(dummyBook.likes)).toBeInTheDocument();
  });
});