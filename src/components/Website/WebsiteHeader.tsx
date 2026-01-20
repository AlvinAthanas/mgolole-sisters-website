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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Church,
} from 'lucide-react';

// Navigation items for the header
const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "About Us",
    submenu: ["History", "Mission & Vows", "Leadership", "Where We Serve"],
  },
  { label: "Vocations", href: "#vocations" },
  { label: "Ministries", href: "#ministries" },
  { label: "Projects", href: "#projects" },
  { label: "Media", submenu: ["Photo Gallery", "Videos", "Publications"] },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

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
  }>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(
    null,
  );

  return (
      <HideOnScroll>
        <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'text.primary', boxShadow: 2 }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Church size={40} color="#1976d2" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2, color: '#1976d2' }}>
                  CICM SISTERS
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Mgolole, Morogoro
                </Typography>
              </Box>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                item.submenu ? (
                  <Button
                    key={item.label}
                    onClick={(e) => setAnchorEl({ el: e.currentTarget, menu: item.label })}
                    sx={{ color: 'text.primary' }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button key={item.label} href={item.href} sx={{ color: 'text.primary' }}>
                    {item.label}
                  </Button>
                )
              ))}
              <Button variant="contained" color="error" sx={{ ml: 1 }}>
                Donate
              </Button>
            </Box>

            {/* Mobile Menu */}
            <IconButton
              sx={{ display: { md: 'none' } }}
              onClick={(e) => setMobileMenuAnchor(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
  );
};

export default WebsiteHeader;
