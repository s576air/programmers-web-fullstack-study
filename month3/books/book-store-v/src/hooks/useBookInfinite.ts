import { fetchBooks } from "@/api/books.api";
import { LIMIT } from "@/constants/pagination";
import { QUERYSTRINGS } from "@/constants/querystring";
import { useLocation } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useBooksInfinite = () => {
  const location = useLocation();

  const getBooks = ({ pageParam }: { pageParam: number }) => {
    const params = new URLSearchParams(location.search);
    const category_id = params.get(QUERYSTRINGS.CATEGORY_ID)
      ? Number(params.get(QUERYSTRINGS.CATEGORY_ID))
      : undefined;
    const news = params.get(QUERYSTRINGS.NEWS) ? true : undefined;
    const limit = LIMIT;
    const currentPage = pageParam;

    return fetchBooks({
      category_id,
      news,
      limit,
      currentPage,
    });
  };

  const {
    data,
    isLoading: isBooksLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["books", location.search],
    queryFn: ({ pageParam }) => getBooks({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const isLastPage =
        Math.ceil(lastPage.pagination.totalCount / LIMIT) ===
        lastPage.pagination.currentPage;

      return isLastPage
        ? undefined
        : lastPage.pagination.currentPage + 1;
    },
  });

  const books = data ? data.pages.flatMap((page) => page.books) : [];
  const pagination = data ? data.pages[data.pages.length - 1].pagination : {};
  const isEmpty = books.length === 0;

  return {
    books,
    pagination,
    isEmpty,
    isBooksLoading,
    fetchNextPage,
    hasNextPage
  };
};