import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Link as MuiLink,
  useTheme,
} from "@mui/material";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useTheme as useAppTheme } from "../../contexts/ThemeContext"; // Adjust import path

const WebsiteFooter = () => {
  const muiTheme = useTheme();
  const { theme: appTheme } = useAppTheme();
  
  // Determine if we're in dark mode
  const isDarkMode = appTheme === 'dark';

  return (
    <Box 
      sx={{ 
        bgcolor: isDarkMode ? 'background.default' : 'grey.900', 
        color: 'white', 
        py: 6 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            {/* Logo Section */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Mgolole Sisters Logo"
                sx={{
                  height: 45,
                  width: "auto",
                  objectFit: "contain",
                  bgcolor: "white",
                  p: 0.5,
                  borderRadius: 1,
                  border: 1,
                  borderColor: isDarkMode ? 'divider' : 'transparent',
                }}
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  ml: 2, 
                  fontWeight: 700,
                  color: 'common.white'
                }}
              >
                CICM Sisters
              </Typography>
            </Box>

            <Typography 
              variant="body2" 
              sx={{ 
                mb: 3, 
                color: 'text.disabled',
                opacity: 0.9
              }}
            >
              Immaculate Heart of Mary Sisters of Mgolole, Morogoro. Serving
              with faith, hope, and love since 1937.
            </Typography>
            
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                size="small"
                sx={{
                  bgcolor: 'action.hover',
                  color: 'common.white',
                  "&:hover": { 
                    bgcolor: 'action.selected',
                    color: 'primary.light' 
                  },
                }}
              >
                <Facebook size={20} />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  bgcolor: 'action.hover',
                  color: 'common.white',
                  "&:hover": { 
                    bgcolor: 'action.selected',
                    color: 'primary.light' 
                  },
                }}
              >
                <Instagram size={20} />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  bgcolor: 'action.hover',
                  color: 'common.white',
                  "&:hover": { 
                    bgcolor: 'action.selected',
                    color: 'primary.light' 
                  },
                }}
              >
                <Mail size={20} />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                fontWeight: 700,
                color: 'common.white'
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink
                href="#about"
                color="inherit"
                underline="hover"
                sx={{ 
                  color: 'text.disabled',
                  "&:hover": { 
                    color: 'primary.light',
                    opacity: 1 
                  }
                }}
              >
                About Us
              </MuiLink>
              <MuiLink
                href="#ministries"
                color="inherit"
                underline="hover"
                sx={{ 
                  color: 'text.disabled',
                  "&:hover": { 
                    color: 'primary.light',
                    opacity: 1 
                  }
                }}
              >
                Our Ministries
              </MuiLink>
              <MuiLink
                href="#vocations"
                color="inherit"
                underline="hover"
                sx={{ 
                  color: 'text.disabled',
                  "&:hover": { 
                    color: 'primary.light',
                    opacity: 1 
                  }
                }}
              >
                Vocations
              </MuiLink>
              <MuiLink
                href="#projects"
                color="inherit"
                underline="hover"
                sx={{ 
                  color: 'text.disabled',
                  "&:hover": { 
                    color: 'primary.light',
                    opacity: 1 
                  }
                }}
              >
                Projects
              </MuiLink>
              <MuiLink
                href="#events"
                color="inherit"
                underline="hover"
                sx={{ 
                  color: 'text.disabled',
                  "&:hover": { 
                    color: 'primary.light',
                    opacity: 1 
                  }
                }}
              >
                Events
              </MuiLink>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                fontWeight: 700,
                color: 'common.white'
              }}
            >
              Our Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{ 
                  color: 'text.disabled',
                  "&:hover": { 
                    color: 'primary.light',
                    opacity: 1 
                  }
                }}
              >
                Education
              </MuiLink>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{ 
                  color: 'text.disabled',
                  "&:hover": { 
                    color: 'primary.light',
                    opacity: 1 
                  }
                }}
              >
                Healthcare
              </MuiLink>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{ 
                  color: 'text.disabled',
                  "&:hover": { 
                    color: 'primary.light',
                    opacity: 1 
                  }
                }}
              >
                Orphan Care
              </MuiLink>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{ 
                  color: 'text.disabled',
                  "&:hover": { 
                    color: 'primary.light',
                    opacity: 1 
                  }
                }}
              >
                Evangelization
              </MuiLink>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{ 
                  color: 'text.disabled',
                  "&:hover": { 
                    color: 'primary.light',
                    opacity: 1 
                  }
                }}
              >
                Media Resources
              </MuiLink>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                fontWeight: 700,
                color: 'common.white'
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "start", gap: 1 }}>
                <MapPin 
                  size={18} 
                  style={{ 
                    marginTop: 2, 
                    flexShrink: 0,
                    color: muiTheme.palette.text.disabled 
                  }} 
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.disabled',
                    lineHeight: 1.4
                  }}
                >
                  P.O. Box 1049
                  <br />
                  Mgolole, Morogoro
                  <br />
                  Tanzania
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Mail 
                  size={18} 
                  style={{ 
                    flexShrink: 0,
                    color: muiTheme.palette.text.disabled 
                  }} 
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.disabled'
                  }}
                >
                  info@cicm.or.tz
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone 
                  size={18} 
                  style={{ 
                    flexShrink: 0,
                    color: muiTheme.palette.text.disabled 
                  }} 
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.disabled'
                  }}
                >
                  +255 XXX XXX
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider 
          sx={{ 
            my: 4, 
            bgcolor: 'divider',
            borderColor: 'divider'
          }} 
        />

        {/* Footer Bottom Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Small Logo Version */}
            <Box
              component="img"
              src="/logo.png"
              alt="Mgolole Sisters Logo"
              sx={{
                height: 30,
                width: 'auto',
                objectFit: 'contain',
                bgcolor: 'white',
                p: 0.5,
                borderRadius: 0.5,
                border: 1,
                borderColor: 'divider',
                opacity: 0.8,
                '&:hover': {
                  opacity: 1
                }
              }}
            />
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.disabled',
                opacity: 0.8
              }}
            >
              © {new Date().getFullYear()} Immaculate Heart of Mary Sisters
              (CICM). All rights reserved.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <MuiLink
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                color: 'text.disabled',
                "&:hover": { 
                  color: 'primary.light',
                  opacity: 1 
                },
                fontSize: "0.875rem",
              }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                color: 'text.disabled',
                "&:hover": { 
                  color: 'primary.light',
                  opacity: 1 
                },
                fontSize: "0.875rem",
              }}
            >
              Terms of Use
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WebsiteFooter;