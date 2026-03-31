import { createContext, useEffect, useState } from "react";
import { getTheme, type ThemeName } from "../style/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../style/global";

const DEFAULT_THEME_NAME: ThemeName = "light";
const THEME_LOCALSTORAGE_KEY = "book_store_theme";

interface State {
    themeName: ThemeName,
    toggleTheme: (themeName: ThemeName) => void,
}

export const state: State = {
    themeName: DEFAULT_THEME_NAME,
    toggleTheme: (themeName: ThemeName) => {},
};

export const ThemeContext = createContext<State>(state);

export const BookStoreThemeProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [themeName, setThemeName] = useState<ThemeName>("light");

    const toggleTheme = () => {
        const newThemeName = themeName === "light" ? "dark" : "light";
        setThemeName(newThemeName);
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, newThemeName);
    };

    useEffect(() => {
        //const savedThemeName = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as ThemeName;

        //setThemeName(savedThemeName || DEFAULT_THEME_NAME);
    }, []);

    return (
        <ThemeProvider theme={getTheme(themeName)}>
            <GlobalStyle themeName={themeName} />
            <ThemeContext.Provider value={{ themeName, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}