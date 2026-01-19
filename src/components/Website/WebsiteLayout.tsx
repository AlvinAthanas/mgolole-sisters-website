import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import WebsiteFooter from "./WebsiteFooter.tsx";
import WebsiteHeader from "./WebsiteHeader.tsx";

const WebsiteLayout = () => {
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <WebsiteHeader />
            <Box sx={{ flex: 1 }}>
                <Outlet />
            </Box>
            <WebsiteFooter />
        </Box>
    );
};

export default WebsiteLayout;