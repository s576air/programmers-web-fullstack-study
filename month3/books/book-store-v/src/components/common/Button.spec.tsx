import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Title from "./title";
import { BookStoreThemeProvider } from "../../context/themeContext";
import Button from "./Button";

describe("Button 컴포넌트 테스트", () => {
    it("렌더를 확인", () => {
        render(
            <BookStoreThemeProvider>
                <Button size="large" scheme="primary">
                    버튼
                </Button>
            </BookStoreThemeProvider>
        );

        expect(screen.getByText("버튼")).toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveStyle({fontSize: "1.5rem"});
    })
});