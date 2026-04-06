import { useLocation } from "react-router-dom";
import { fetchBooks } from "../api/books.api";
import { LIMIT } from "../constants/pagination";
import { QUERYSTRINGS } from "@/constants/querystring";
import { useQuery } from "@tanstack/react-query";

export const useBooks = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // react query v4 문법
  // const { data: booksData } = useQuery(["books", location.search], () =>
  //   fetchBooks({
  //     categoryId: params.get(QUERYSTRINGS.CATEGORY_ID)
  //       ? Number(params.get(QUERYSTRINGS.CATEGORY_ID))
  //       : undefined,
  //     news: params.get(QUERYSTRINGS.NEWS) ? true : undefined,
  //     currentPage: params.get(QUERYSTRINGS.PAGE)
  //       ? Number(params.get(QUERYSTRINGS.PAGE))
  //       : 1,
  //     limit: LIMIT,
  //   })
  // );

  // react query v5 문법
  const { data: booksData, isLoading: isBooksLoading } = useQuery({
    queryKey: ["books", location.search],
    queryFn: () =>
      fetchBooks({
        categoryId: params.get(QUERYSTRINGS.CATEGORY_ID)
          ? Number(params.get(QUERYSTRINGS.CATEGORY_ID))
          : undefined,
        news: params.get(QUERYSTRINGS.NEWS) ? true : undefined,
        currentPage: params.get(QUERYSTRINGS.PAGE)
          ? Number(params.get(QUERYSTRINGS.PAGE))
          : 1,
        limit: LIMIT,
      }),
  });

  return {
    books: booksData?.books,
    pagination: booksData?.pagination,
    isEmpty: booksData?.books.length === 0,
    isBooksLoading
  };

  /*
  이러면 되는거 아닌가
  return booksData ? {
      books: booksData.books,
      ..
  } : {}
  */
};