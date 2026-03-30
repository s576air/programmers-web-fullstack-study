type ThemeName = "light" | "dark";
type ColorKey = "primary" | "background" | "secondary" | "third";

interface Theme {
    name: string;
    color: Record<ColorKey, string>;
}

export const light = {
    name: "light",
    colors: {
        primary: "brown",
        background: "lightgray",
        secondary: "blue",
        third: "green"
    }
};

export const dark = {
    name: "dark",
    colors: {
        primary: "coral",
        background: "midnightblue",
        secondary: "darkblue",
        third: "darkgreen"
    }
};