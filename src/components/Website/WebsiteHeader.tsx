import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  alpha,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../contexts/AuthContext.tsx";
import { useTheme } from "../../contexts/ThemeContext.tsx";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { useState } from "react";

const WebsiteHeader = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthentication();
  const { theme, toggleTheme, muiTheme } = useTheme();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const primaryColor = muiTheme.palette.primary.main;
  const secondaryColor = muiTheme.palette.secondary.main;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "About", path: "/about" },
    { label: "Team", path: "/team" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          backgroundColor:
            theme === "light"
              ? "rgba(255, 255, 255, 0.85)"
              : "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(20px) saturate(180%)",
          borderBottom: `1px solid ${alpha(primaryColor, 0.08)}`,
          transition: "all 0.3s ease",
          boxShadow:
            theme === "light"
              ? `0 4px 20px ${alpha("#000", 0.05)}`
              : `0 4px 20px ${alpha("#000", 0.3)}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ py: 1.5, minHeight: { xs: 64, md: 70 } }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
              onClick={() => navigate("/")}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 900,
                  fontSize: "1.3rem",
                  boxShadow: `0 4px 16px ${alpha(primaryColor, 0.35)}`,
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    width: "200%",
                    height: "200%",
                    background: `radial-gradient(circle, ${alpha("#fff", 0.2)} 0%, transparent 70%)`,
                    animation: "shimmer 3s ease-in-out infinite",
                  },
                  "@keyframes shimmer": {
                    "0%, 100%": { transform: "translate(-50%, -50%)" },
                    "50%": { transform: "translate(0%, 0%)" },
                  },
                }}
              >
                PR
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    letterSpacing: "-0.5px",
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1,
                  }}
                >
                  mezos
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontSize: "0.65rem",
                  }}
                >
                  Strategic Solutions
                </Typography>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
                sx={{ mr: 2 }}
              >
                {navItems.map((item, index) => (
                  <Button
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    sx={{
                      color: "text.primary",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      px: 2.5,
                      py: 1,
                      borderRadius: 2,
                      position: "relative",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: "3px",
                        borderRadius: "2px 2px 0 0",
                        background: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                        transition: "width 0.3s ease",
                      },
                      "&:hover": {
                        color: primaryColor,
                        backgroundColor: alpha(primaryColor, 0.05),
                        "&::before": {
                          width: "70%",
                        },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            )}

            {/* Right Side Actions */}
            <Stack direction="row" spacing={1.5} alignItems="center">
              {/* Theme Toggle */}
              <IconButton
                onClick={toggleTheme}
                sx={{
                  width: 44,
                  height: 44,
                  backgroundColor: alpha(primaryColor, 0.08),
                  color: primaryColor,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: alpha(primaryColor, 0.15),
                    transform: "rotate(180deg) scale(1.05)",
                    boxShadow: `0 4px 12px ${alpha(primaryColor, 0.2)}`,
                  },
                }}
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </IconButton>

              {/* CTA Button - Desktop */}
              {!isMobile && (
                <Button
                  variant="contained"
                  onClick={() =>
                    isAuthenticated
                      ? navigate("/admin/dashboard")
                      : navigate("/signin")
                  }
                  startIcon={<Sparkles size={18} />}
                  sx={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                    color: "white",
                    px: 3,
                    py: 1.2,
                    borderRadius: 2.5,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    boxShadow: `0 4px 16px ${alpha(primaryColor, 0.35)}`,
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      transition: "left 0.5s ease",
                    },
                    "&:hover": {
                      boxShadow: `0 6px 24px ${alpha(primaryColor, 0.45)}`,
                      transform: "translateY(-2px)",
                      "&::before": {
                        left: "100%",
                      },
                    },
                  }}
                >
                  {isAuthenticated ? "Dashboard" : "Client Portal"}
                </Button>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  onClick={toggleDrawer(true)}
                  sx={{
                    width: 44,
                    height: 44,
                    backgroundColor: alpha(primaryColor, 0.08),
                    color: primaryColor,
                    "&:hover": {
                      backgroundColor: alpha(primaryColor, 0.15),
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Menu size={22} />
                </IconButton>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 320,
            backgroundColor: "background.paper",
            backgroundImage:
              theme === "light"
                ? `linear-gradient(135deg, ${alpha(primaryColor, 0.02)} 0%, ${alpha(secondaryColor, 0.02)} 100%)`
                : `linear-gradient(135deg, ${alpha(primaryColor, 0.05)} 0%, ${alpha(secondaryColor, 0.05)} 100%)`,
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${alpha(primaryColor, 0.1)}`,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight={900}
              sx={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.5px",
              }}
            >
              Menu
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={600}
            >
              Navigate your journey
            </Typography>
          </Box>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{
              backgroundColor: alpha(primaryColor, 0.08),
              "&:hover": {
                backgroundColor: alpha(primaryColor, 0.15),
                transform: "rotate(90deg)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <X size={20} />
          </IconButton>
        </Box>

        {/* Navigation Items */}
        <List sx={{ pt: 2, px: 2 }}>
          {navItems.map((item, index) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                  setDrawerOpen(false);
                }}
                sx={{
                  py: 1.8,
                  px: 2.5,
                  borderRadius: 2.5,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: alpha(primaryColor, 0.08),
                    transform: "translateX(8px)",
                    boxShadow: `0 4px 12px ${alpha(primaryColor, 0.1)}`,
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          {/* CTA Button */}
          <ListItem disablePadding sx={{ mt: 3 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                navigate(isAuthenticated ? "/admin/dashboard" : "/signin");
                setDrawerOpen(false);
              }}
              startIcon={<Sparkles size={20} />}
              sx={{
                py: 1.8,
                borderRadius: 2.5,
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: `0 6px 20px ${alpha(primaryColor, 0.35)}`,
                "&:hover": {
                  boxShadow: `0 8px 28px ${alpha(primaryColor, 0.45)}`,
                  transform: "translateY(-2px)",
                },
              }}
            >
              {isAuthenticated ? "Dashboard" : "Client Portal"}
            </Button>
          </ListItem>
        </List>

        {/* Drawer Footer */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: 3,
            borderTop: `1px solid ${alpha(primaryColor, 0.1)}`,
            background: alpha(primaryColor, 0.03),
          }}
        >
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", textAlign: "center", mb: 0.5 }}
          >
            © 2024 mezos
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", textAlign: "center", fontWeight: 600 }}
          >
            Strategic PR Solutions
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default WebsiteHeader;
