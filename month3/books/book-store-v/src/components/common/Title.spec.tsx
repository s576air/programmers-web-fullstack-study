import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Title from "./title";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Title 컴포넌트 테스트", () => {
    it("렌더를 확인", () => {
        // 1. 렌더
        const { container } = render(
            <BookStoreThemeProvider>
                <Title size="large">제목</Title>
            </BookStoreThemeProvider>
        );

        // 2. 확인
        expect(screen.getByText("제목")).toBeInTheDocument();
        expect(container?.firstChild).toHaveStyle({ fontSize: "2rem" });
    })
});