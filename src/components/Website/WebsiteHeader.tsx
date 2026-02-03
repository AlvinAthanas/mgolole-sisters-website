import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  Divider,
  Chip,
  alpha,
  useTheme as useMuiTheme,
  Switch,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Church, ChevronDown } from 'lucide-react';
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTranslation } from "react-i18next";

// Navigation items for the header
const navItems = [
  { label: "home", href: "/", exact: true },
  { 
    label: "about", 
    href: "/about", 
    submenu: [
      { key: "overview", href: "/about" },
      { key: "history", href: "/about#history" },
      { key: "mission", href: "/about#mission" },
      { key: "leadership", href: "/about#leadership" },
      { key: "where-we-serve", href: "/about#where-we-serve" }
    ] 
  },
  { label: "vocations", href: "/vocations" },
  { label: "ministries", href: "/ministries" },
  { label: "projects", href: "/projects" },
  { 
    label: "media", 
    href: "/media", 
    submenu: [
      { key: "overview", href: "/media" },
      { key: "photos", href: "/media#photos" },
      { key: "videos", href: "/media#videos" },
      { key: "publications", href: "/media#publications" }
    ] 
  },
  { label: "events", href: "/events" },
  { label: "support", href: "/support" },
  { label: "contact", href: "/contact" },
];

// Types for navigation
interface SubMenuItem {
  key: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  exact?: boolean;
  submenu?: SubMenuItem[];
}

// Custom styled Switch for language toggle
const LanguageSwitch = styled(Switch)(({ theme }) => ({
      width: 62,
      height: 32,
  padding: 0,
  margin: theme.spacing(0.5),
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(30px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: "#fff",
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      outline: "none",
      boxShadow: "none",
    },
  },
  "& .MuiSwitch-thumb": {
        width: 28,
        height: 28,
    backgroundColor: "#fff",
    border: `1px solid ${theme.palette.grey[400]}`,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  "& .MuiSwitch-track": {
    borderRadius: 16,
    backgroundColor: theme.palette.grey[300],
    opacity: 1,
    position: "relative",
    overflow: "hidden",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: 11,
        fontWeight: 600,
      color: theme.palette.text.primary,
      letterSpacing: 0.5,
    },
    "&:before": {
      content: '"EN"',
      left: 10,
      color: "#fff",
    },
    "&:after": {
      content: '"SW"',
      right: 10,
      color: theme.palette.text.primary,
    },
  },
}));

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const WebsiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | {
    el: HTMLElement;
    menu: string;
    href: string;
    submenu?: SubMenuItem[];
  }>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const themeMui = useMuiTheme();

  // Check if current route matches or is child of given path
  const isActive = (path: string, exact: boolean = false) => {
    if (exact) {
      return location.pathname === path;
    }
    // Handle anchor links (remove hash for comparison)
    const currentPath = location.pathname + location.hash;
    const targetPath = path.includes('#') ? path : path;
    return currentPath.startsWith(targetPath.replace(/#.*$/, ''));
  };

  // Get current page label for display in mobile menu
  const getCurrentPageLabel = () => {
    const currentItem = navItems.find(item => 
      isActive(item.href, item.exact) || 
      (item.submenu && item.submenu.some(sub => 
        isActive(sub.href)
      ))
    );
    
    if (currentItem) {
      return t(`header.nav.${currentItem.label}`, currentItem.label.charAt(0).toUpperCase() + currentItem.label.slice(1));
    }
    
    // Fallback to parsing URL
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length > 0) {
      return pathParts[0].charAt(0).toUpperCase() + pathParts[0].slice(1);
    }
    
    return t('header.nav.home', 'Home');
  };

  const handleLanguageToggle = () => {
    const newLang = language === "en" ? "sw" : "en";
    setLanguage(newLang);
  };

  const handleNavigation = (href: string) => {
    if (href.includes('#') && href.startsWith('/about')) {
      // For anchor links on about page
      const [path, hash] = href.split('#');
      navigate(path);
      // Scroll to section after navigation
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(href);
    }
    setMobileMenuAnchor(null);
    setAnchorEl(null);
  };

  // Handle nav item click - for items with submenu
  const handleNavItemClick = (item: NavItem, event: React.MouseEvent<HTMLElement>) => {
    if (item.submenu) {
      // Show dropdown and navigate to main page
      setAnchorEl({ 
        el: event.currentTarget, 
        menu: item.label,
        href: item.href,
        submenu: item.submenu 
      });
      if (!isActive(item.href, true)) {
        navigate(item.href);
      }
    } else {
      // Regular navigation for items without submenu
      handleNavigation(item.href);
    }
  };

  // Active style for buttons
  const getButtonStyle = (item: NavItem) => {
    const active = isActive(item.href, item.exact);
    
    return {
      color: active ? 'primary.main' : 'text.primary',
      backgroundColor: active ? alpha(themeMui.palette.primary.main, 0.1) : 'transparent',
      borderBottom: active ? `2px solid ${themeMui.palette.primary.main}` : '2px solid transparent',
      '&:hover': {
        color: 'primary.main',
        backgroundColor: active ? alpha(themeMui.palette.primary.main, 0.15) : 'action.hover',
        borderBottom: `2px solid ${themeMui.palette.primary.main}`,
      }
    };
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="sticky" 
        sx={{ 
          bgcolor: 'background.paper', 
          color: 'text.primary', 
          boxShadow: 2,
          zIndex: 1300,
        }}
      >
        <Toolbar>
          {/* Logo Section */}
          <Box 
            component={Link}
            to="/"
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            {/* Logo with fallback to Church icon */}
            <Box sx={{ position: 'relative', mr: 2 }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Mgolole Sisters Logo"
                sx={{
                  height: 50,
                  width: 'auto',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Fallback icon (hidden if logo loads successfully) */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'none',
                  color: 'primary.main'
                }}
                className="logo-fallback"
              >
                <Church size={40} />
              </Box>
            </Box>
            
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  lineHeight: 1.2, 
                  color: 'primary.main' 
                }}
              >
                {t('header.logo.title', 'CICM SISTERS')}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary',
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                {t('header.logo.subtitle', 'Mgolole, Morogoro')}
              </Typography>
            </Box>
          </Box>

          {/* Language Switch for Desktop */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            alignItems: 'center', 
            mr: 2,
            gap: 1 
          }}>
            <LanguageSwitch
              checked={language === "sw"}
              onChange={handleLanguageToggle}
            />
          </Box>

          {/* Theme Toggle */}
          <IconButton
            onClick={toggleTheme}
            sx={{
              mr: 2,
              color: 'text.primary',
              display: { xs: 'none', md: 'block' }
            }}
          >
            {theme === 'dark' ? <LightModeIcon sx={{ fontSize: { xs: 20, sm: 24 } }}/> : <DarkModeOutlinedIcon sx={{ fontSize: { xs: 20, sm: 24 } }}/>}
          </IconButton>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {navItems.map((item: NavItem) => (
              <Box key={item.label} sx={{ position: 'relative' }}>
                <Button
                  onClick={(e) => handleNavItemClick(item, e)}
                  sx={{
                    ...getButtonStyle(item),
                    display: 'flex',
                    alignItems: 'center',
                    gap: item.submenu ? 0.5 : 0,
                  }}
                >
                  {t(`header.nav.${item.label}`, item.label.charAt(0).toUpperCase() + item.label.slice(1))}
                  {item.submenu && (
                    <ChevronDown size={16} style={{ 
                      transition: 'transform 0.2s',
                      transform: anchorEl?.menu === item.label ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} />
                  )}
                  {isActive(item.href, item.exact) && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: '3px',
                        bgcolor: 'primary.main',
                        borderRadius: '3px 3px 0 0',
                      }}
                    />
                  )}
                </Button>
              </Box>
            ))}
            <Button 
              variant="contained" 
              color="secondary" 
              sx={{ 
                ml: 1,
                '&:hover': {
                  backgroundColor: 'secondary.dark'
                }
              }}
              onClick={() => handleNavigation('/support')}
            >
              {t('header.nav.donate', 'Donate')}
            </Button>
          </Box>

          {/* Mobile Menu Button with Current Page Indicator */}
          <Box sx={{ 
            display: { md: 'none' }, 
            alignItems: 'center',
            gap: 1 
          }}>
            {/* Current Page Badge */}
            <Chip
              label={getCurrentPageLabel()}
              size="small"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 600,
                display: { xs: 'flex', sm: 'none' }
              }}
            />
            <IconButton
              sx={{ 
                color: 'text.primary'
              }}
              onClick={(e) => setMobileMenuAnchor(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Dropdown Menu for Desktop */}
        {anchorEl && (
          <Menu
            anchorEl={anchorEl.el}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            PaperProps={{
              sx: {
                mt: 1.5,
                minWidth: 200,
                bgcolor: 'background.paper',
                boxShadow: 3,
                border: '1px solid',
                borderColor: 'divider'
              }
            }}
          >
            {/* Main page link */}
            <MenuItem 
              onClick={() => {
                handleNavigation(anchorEl.href);
                setAnchorEl(null);
              }}
              selected={location.pathname === anchorEl.href}
              sx={{
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'action.hover'
                },
                '&.Mui-selected': {
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                  '&:hover': {
                    bgcolor: 'primary.main',
                  }
                }
              }}
            >
              {anchorEl.menu === 'about' 
                ? t('header.nav.aboutOverview', 'About Overview')
                : t('header.nav.mediaOverview', 'Media Overview')}
            </MenuItem>
            
            <Divider />
            
            {/* Submenu items */}
            {anchorEl.submenu?.map((subItem: SubMenuItem, index: number) => {
              if (subItem.key === 'overview') return null; // Skip overview since it's already shown
              
              const isSubActive = isActive(subItem.href);
              
              return (
                <MenuItem 
                  key={index}
                  onClick={() => {
                    handleNavigation(subItem.href);
                    setAnchorEl(null);
                  }}
                  selected={isSubActive}
                  sx={{
                    '&:hover': {
                      bgcolor: 'action.hover'
                    },
                    '&.Mui-selected': {
                      bgcolor: 'primary.light',
                      color: 'primary.contrastText',
                      '&:hover': {
                        bgcolor: 'primary.main',
                      }
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                      {t(`header.nav.${subItem.key}`, subItem.key.charAt(0).toUpperCase() + subItem.key.slice(1))}
                    </Box>
                    {isSubActive && (
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          ml: 1
                        }}
                      />
                    )}
                  </Box>
                </MenuItem>
              );
            })}
          </Menu>
        )}

        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={() => setMobileMenuAnchor(null)}
          PaperProps={{
            sx: {
              mt: 1,
              width: 280,
              bgcolor: 'background.paper',
              boxShadow: 3,
              maxHeight: '80vh',
              overflow: 'auto'
            }
          }}
        >
          {/* Current Page Header */}
          <Box sx={{ 
            p: 2, 
            borderBottom: 1, 
            borderColor: 'divider',
            bgcolor: 'primary.light',
            color: 'primary.contrastText'
          }}>
            <Typography variant="subtitle1" fontWeight={600}>
              {t('header.mobile.currentPage', 'Current Page')}: {getCurrentPageLabel()}
            </Typography>
          </Box>

          {/* Theme Toggle for Mobile */}
          <MenuItem 
            onClick={toggleTheme}
            sx={{ 
              py: 1.5,
              borderBottom: 1,
              borderColor: 'divider'
            }}
          >
            <IconButton sx={{ mr: 1, color: 'primary.main' }}>
              {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <Typography sx={{ flexGrow: 1 }}>
              {theme === 'dark' 
                ? t('header.theme.lightMode', 'Light Mode')
                : t('header.theme.darkMode', 'Dark Mode')}
            </Typography>
          </MenuItem>

          {/* Language Switch for Mobile */}
          <MenuItem 
            sx={{ 
              py: 1.5,
              borderBottom: 1,
              borderColor: 'divider'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
              <Typography sx={{ flexGrow: 1 }}>
                {t('header.language.title', 'Language')}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="caption">
                  {t('header.language.english', 'EN')}
                </Typography>
                <LanguageSwitch
                  checked={language === "sw"}
                  onChange={handleLanguageToggle}
                  size="small"
                />
                <Typography variant="caption">
                  {t('header.language.swahili', 'SW')}
                </Typography>
              </Box>
            </Box>
          </MenuItem>

          <Divider />

          {/* Navigation Items */}
          <Box sx={{ py: 1 }}>
            {navItems.map((item: NavItem) => {
              const isItemActive = isActive(item.href, item.exact);
              
              return (
                <React.Fragment key={item.label}>
                  <MenuItem 
                    onClick={() => handleNavigation(item.href)}
                    selected={isItemActive}
                    sx={{
                      py: 1.5,
                      '&.Mui-selected': {
                        bgcolor: 'primary.light',
                        color: 'primary.contrastText',
                        '&:hover': {
                          bgcolor: 'primary.main',
                        }
                      }
                    }}
                  >
                    <Typography sx={{ flexGrow: 1 }}>
                      {t(`header.nav.${item.label}`, item.label.charAt(0).toUpperCase() + item.label.slice(1))}
                    </Typography>
                    {isItemActive && (
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          ml: 1
                        }}
                      />
                    )}
                    {item.submenu && (
                      <ChevronDown size={16} style={{ marginLeft: 8 }} />
                    )}
                  </MenuItem>
                  
                  {/* Submenu items if active */}
                  {isItemActive && item.submenu && (
                    <Box sx={{ pl: 3, py: 0.5 }}>
                      {item.submenu.map((subItem: SubMenuItem, index: number) => {
                        const isSubActive = isActive(subItem.href);
                        
                        return (
                          <MenuItem 
                            key={index}
                            onClick={() => handleNavigation(subItem.href)}
                            selected={isSubActive}
                            sx={{
                              py: 1,
                              fontSize: '0.9rem',
                              '&.Mui-selected': {
                                bgcolor: 'action.selected',
                                color: 'primary.main',
                                fontWeight: 600
                              }
                            }}
                          >
                            <Typography sx={{ flexGrow:1 }}>
                              {t(`header.nav.${subItem.key}`, subItem.key.charAt(0).toUpperCase() + subItem.key.slice(1))}
                            </Typography>
                            {isSubActive && (
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  bgcolor: 'primary.main',
                                  ml: 1
                                }}
                              />
                            )}
                          </MenuItem>
                        );
                      })}
                    </Box>
                  )}
                </React.Fragment>
              );
            })}
          </Box>

          <Divider sx={{ my: 1 }} />
          
          {/* Donate Button */}
          <Box sx={{ p: 2 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              fullWidth
              sx={{ 
                '&:hover': {
                  backgroundColor: 'secondary.dark'
                }
              }}
              onClick={() => handleNavigation('/support')}
            >
              {t('header.nav.donate', 'Donate')}
            </Button>
          </Box>
        </Menu>
      </AppBar>
    </HideOnScroll>
  );
};

export default WebsiteHeader;