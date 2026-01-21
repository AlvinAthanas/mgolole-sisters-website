import type { PaletteOptions } from "@mui/material/styles";

/* =========================
   LIGHT MODE PALETTE (Updated to match your website)
========================= */
export const lightPalette: PaletteOptions = {
    mode: "light",

    primary: {
        main: "#1976d2",      // Blue from your header/buttons
        light: "#42a5f5",     // Lighter blue from CTA section
        dark: "#1565c0",      // Darker blue for hover states
        contrastText: "#ffffff", // White text on blue buttons
    },

    secondary: {
        main: "#d32f2f",      // Red from your "Donate" button
        light: "#ef5350",
        dark: "#c62828",
        contrastText: "#ffffff",
    },

    success: {
        main: "#2E7D32",
        light: "#4CAF50",
        dark: "#1B5E20",
    },

    error: {
        main: "#C62828",
        light: "#EF5350",
        dark: "#8E0000",
    },

    warning: {
        main: "#ED6C02",
        light: "#FF9800",
        dark: "#E65100",
    },

    info: {
        main: "#0288D1",
        light: "#4FC3F7",
        dark: "#01579B",
    },

    background: {
        default: "#f5f5f5",   // Light gray from page background
        paper: "#FFFFFF",     // White for cards/paper components
    },

    text: {
        primary: "#212121",   // Dark gray from footer background
        secondary: "#666666", // Gray for secondary text
        disabled: "#9e9e9e",
    },

    divider: "rgba(0, 0, 0, 0.12)",
};

/* =========================
   DARK MODE PALETTE (Updated to match your website's dark footer)
========================= */
export const darkPalette: PaletteOptions = {
    mode: "dark",

    primary: {
        main: "#42a5f5",      // Lighter blue for dark mode
        light: "#64b5f6",
        dark: "#1976d2",
        contrastText: "#ffffff",
    },

    secondary: {
        main: "#ef5350",      // Lighter red for dark mode
        light: "#ff8a80",
        dark: "#d32f2f",
        contrastText: "#ffffff",
    },

    success: {
        main: "#66BB6A",
        light: "#81C784",
        dark: "#388E3C",
    },

    error: {
        main: "#EF5350",
        light: "#E57373",
        dark: "#C62828",
    },

    warning: {
        main: "#FFB74D",
        light: "#FFD54F",
        dark: "#F57C00",
    },

    info: {
        main: "#4FC3F7",
        light: "#81D4FA",
        dark: "#0288D1",
    },

    background: {
        default: "#121212",   // Dark background
        paper: "#212121",     // Matches your footer dark color
    },

    text: {
        primary: "#ffffff",   // White text for dark mode
        secondary: "#b0b0b0", // Light gray for secondary text
        disabled: "#666666",
    },

    divider: "rgba(255, 255, 255, 0.12)",
};

/* =========================
   PALETTE SWITCHER
========================= */
export const getThemePalette = (mode: "light" | "dark") => {
    return mode === "light" ? lightPalette : darkPalette;
};