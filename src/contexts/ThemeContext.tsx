import React, { createContext, useEffect, useState, useContext } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { getThemePalette } from "../utils/ThemePalettes";
import type { Theme as MuiTheme } from "@mui/material";
import { responsiveTypography } from "../utils/TypographyConf";

export type Theme = "light" | "dark";
export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
    muiTheme: MuiTheme;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
    // Optional: specify if this is for admin portal (more compact) or website
    variant?: "website" | "admin";
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        const newTheme: Theme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") {
            setTheme(stored);
        }
    }, []);

    // Choose typography based on variant
    const typography = responsiveTypography; // Use responsiveTypography for all

    const muiTheme = createTheme({
        palette: getThemePalette(theme),
        typography,
    });

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, muiTheme }}>
            <MuiThemeProvider theme={muiTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const ctx = useContext(ThemeContext);
    if (ctx === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return ctx;
};