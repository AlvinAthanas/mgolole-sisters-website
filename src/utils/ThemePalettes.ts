import type { PaletteOptions } from "@mui/material/styles";

/* =========================
   LIGHT MODE PALETTE
========================= */
export const lightPalette: PaletteOptions = {
    mode: "light",

    primary: {
        main: "#D4AF37",      // Gold – prestige & excellence
        light: "#E6C866",
        dark: "#B8962E",
        contrastText: "#063C5A", // Dark blue for readability
    },

    secondary: {
        main: "#063C5A",      // Deep Ocean Blue – authority & trust
        light: "#0A567F",
        dark: "#042B41",
        contrastText: "#ffffff",
    },

    success: {
        main: "#2E7D32",
        light: "#60AD5E",
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
        default: "#F9FAFB",   // Soft neutral, keeps gold clean
        paper: "#FFFFFF",
    },

    text: {
        primary: "#063C5A",   // Brand-consistent text color
        secondary: "#475569",
        disabled: "#94A3B8",
    },

    divider: "rgba(6, 60, 90, 0.12)",
};

/* =========================
   DARK MODE PALETTE
========================= */
export const darkPalette: PaletteOptions = {
    mode: "dark",

    primary: {
        main: "#E6C866",      // Softer gold for dark mode
        light: "#F1DA8A",
        dark: "#D4AF37",
        contrastText: "#020617",
    },

    secondary: {
        main: "#0A567F",      // Lifted ocean blue for dark UI
        light: "#1377A8",
        dark: "#063C5A",
        contrastText: "#F8FAFC",
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
        default: "#020617",   // Near-black navy
        paper: "#071F2F",     // Blue-tinted surface (brand aligned)
    },

    text: {
        primary: "#F8FAFC",
        secondary: "#CBD5E1",
        disabled: "#64748B",
    },

    divider: "rgba(203, 213, 225, 0.14)",
};


/* =========================
   PALETTE SWITCHER
========================= */
export const getThemePalette = (mode: "light" | "dark") => {
    return mode === "light" ? lightPalette : darkPalette;
};
