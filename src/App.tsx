// React
import React, {useEffect} from "react";

// Router
import {Outlet, useLocation, useNavigate} from "react-router-dom";

// MUI
import {
    alpha,
    Avatar,
    Box,
    CssBaseline,
    Divider,
    Typography,
    useTheme,
    List
} from "@mui/material";

// MUI Icons
import PaidIcon from "@mui/icons-material/Paid";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import CategoryIcon from "@mui/icons-material/Category";

// Lucide Icons
import {HomeIcon} from "lucide-react";

// Contexts
import {AuthenticationProvider, useAuthentication} from "./contexts/AuthContext.tsx";
import {useRouteProgress} from "./contexts/RouteProgressContext.tsx";
import {UserProvider, useUser} from "./contexts/UserContext.tsx";
import {TokenProvider} from "./contexts/TokenContext.tsx";
import {SnackbarProvider} from "./contexts/SnackbarAlertContext.tsx";
import {ThemeProvider} from "./contexts/ThemeContext.tsx";

// Components
import {Header} from "./components/Header/Header.tsx";
import {NavItem} from "./components/Drawer/NavItem.tsx";
import {SecondaryNavItem} from "./components/Drawer/SecondaryNavItem.tsx";
import ProgressLoader from "./Reusables/ProgressLoader.tsx";

// Utils / Styles
import {Main, StyledDrawer, UserProfile} from "./utils/styles.tsx";
import Groups3Icon from '@mui/icons-material/Groups3';
import {PermissionProvider} from "./contexts/PermissionContext.tsx";
import WebsiteLayout from "./components/Website/WebsiteLayout.tsx";

// Website Layout

function AdminPortal() {
    const theme = useTheme();
    const {isAuthenticated} = useAuthentication();
    const [isMobile, setIsMobile] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const {isMounted} = useRouteProgress();
    const {user} = useUser();
    const location = useLocation();

    const drawerWidthValue = 280;

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= theme.breakpoints.values.md);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, [theme.breakpoints.values.md]);

    useEffect(() => {
        if (isAuthenticated && !isMobile) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [isAuthenticated, isMobile]);

    const handleOverlayClick = () => {
        if (isMobile) handleDrawerClose();
    };

    type NavItem = {
        text: string;
        icon: React.ReactNode;
        path: string;
        roles?: string[];
    }

    const navItems: NavItem[] = [
        {
            text: 'Dashboard',
            icon: <HomeIcon/>,
            path: '/admin/dashboard',
            roles: ['admin', 'user']
        },
        {
            text: 'Website Settings',
            icon: <SettingsIcon/>,
            path: '/admin/website',
            roles: ['admin', 'user']
        },
        {
            text: 'Content Management',
            icon: <CategoryIcon/>,
            path: '/admin/content',
            roles: ['admin']
        },
        {
            text: 'Media Library',
            icon: <Groups3Icon/>,
            path: '/admin/media',
            roles: ['admin']
        },
        {
            text: 'Appearance',
            icon: <PaidIcon/>,
            path: '/admin/appearance',
            roles: ['admin']
        }
    ];
    
    const secondaryNavItems: NavItem[] = [
        {
            text: 'Account Settings',
            icon: <SettingsIcon/>,
            path: '/admin/account',
        },
        {
            text: 'Help & Support',
            icon: <HelpIcon/>,
            path: '/admin/help',
        },
    ];

    const filteredNavItems = navItems.filter(() => true);

    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh", m: 0, p: 0}}>
            <CssBaseline/>
            {isAuthenticated && (
                <>
                    <Header
                        open={open}
                        drawerWidth={drawerWidthValue}
                        handleDrawerOpen={handleDrawerOpen}
                        handleDrawerClose={handleDrawerClose}
                    />
                    <StyledDrawer
                        variant={isMobile ? "temporary" : "persistent"}
                        anchor="left"
                        open={open}
                        onClose={handleDrawerClose}
                        sx={{
                            width: drawerWidthValue,
                            flexShrink: 0,
                            "& .MuiDrawer-paper": {
                                width: drawerWidthValue,
                                boxSizing: "border-box",
                            },
                        }}
                    >
                        <UserProfile>
                            <Avatar
                                sx={{
                                    width: 48,
                                    height: 48,
                                    border: `2px solid ${alpha("#fff", 0.3)}`,
                                    background: alpha("#fff", 0.2),
                                    color: "white",
                                    fontWeight: 600,
                                }}
                                src={user?.username}
                            >
                                {user?.username?.[0]?.toUpperCase()}
                            </Avatar>
                            <Box sx={{display: "flex", flexDirection: "column", minWidth: 0}}>
                                <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{fontWeight: 600, lineHeight: 1.2, color: "white"}}
                                        noWrap
                                    >
                                        {user?.username || "User"}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{opacity: 0.8, lineHeight: 1.2, color: "white"}}
                                        noWrap
                                    >
                                        {user?.email}
                                    </Typography>
                                </Box>
                            </Box>
                        </UserProfile>

                        <List sx={{mt: 2}}>
                            {filteredNavItems.map((item) => (
                                <NavItem
                                    key={item.text}
                                    item={item}
                                    location={location}
                                    onClick={isMobile ? handleDrawerClose : undefined}
                                />
                            ))}
                        </List>

                        <Divider sx={{borderColor: alpha("#fff", 0.1), my: 2, mx: 2}}/>

                        <List>
                            {secondaryNavItems.map((item) => (
                                <SecondaryNavItem
                                    key={item.text}
                                    item={item}
                                    location={location}
                                />
                            ))}
                        </List>
                    </StyledDrawer>
                </>
            )}

            <Box sx={{display: "flex", flex: 1}}>
                <Main
                    open={open}
                    drawerWidth={drawerWidthValue}
                    onClick={isMobile && open ? handleOverlayClick : undefined}
                >
                    {isMounted ? <Outlet/> : <ProgressLoader/>}
                </Main>
            </Box>
        </Box>
    );
}

function App() {
    const { isAuthenticated } = useAuthentication();
    const location = useLocation();
    const navigate = useNavigate();
    
    // Check if we're on an admin route
    const isAdminRoute = location.pathname.startsWith('/admin');
    
    // Redirect authenticated users trying to access public pages to admin dashboard
    useEffect(() => {
        if (isAuthenticated && !isAdminRoute && location.pathname !== '/') {
            navigate('/admin/dashboard');
        }
    }, [isAuthenticated, isAdminRoute, location.pathname, navigate]);
    
    // Show admin portal for authenticated users on admin routes
    if (isAuthenticated && isAdminRoute) {
        return <AdminPortal />;
    }
    
    // Show public website for everyone else
    return <WebsiteLayout />;
}

export function AppWrapper() {
    return (
        <AuthenticationProvider>
            <TokenProvider>
                <UserProvider>
                    <PermissionProvider>
                        <ThemeProvider>
                            <SnackbarProvider>
                                <App/>
                            </SnackbarProvider>
                        </ThemeProvider>
                    </PermissionProvider>
                </UserProvider>
            </TokenProvider>
        </AuthenticationProvider>
    );
}