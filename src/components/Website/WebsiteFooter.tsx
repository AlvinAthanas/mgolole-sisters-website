import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Link as MuiLink
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Mail,
  Church,
  Phone,
  MapPin
} from 'lucide-react';

const WebsiteFooter = () => {
  return (
      <Box sx={{ bgcolor: '#212121', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{xs:12, md:4}}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Church size={32} />
                <Typography variant="h6" sx={{ ml: 1, fontWeight: 700 }}>
                  CICM Sisters
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
                Immaculate Heart of Mary Sisters of Mgolole, Morogoro. Serving with faith, hope, and love since 1937.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton size="small" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                  <Facebook size={20} />
                </IconButton>
                <IconButton size="small" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                  <Instagram size={20} />
                </IconButton>
                <IconButton size="small" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                  <Mail size={20} />
                </IconButton>
              </Box>
            </Grid>

            <Grid size={{xs:12, sm:6, md:3}}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <MuiLink href="#about" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  About Us
                </MuiLink>
                <MuiLink href="#ministries" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Our Ministries
                </MuiLink>
                <MuiLink href="#vocations" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Vocations
                </MuiLink>
                <MuiLink href="#projects" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Projects
                </MuiLink>
                <MuiLink href="#events" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Events
                </MuiLink>
              </Box>
            </Grid>

            <Grid size={{xs:12, sm:6, md:3}}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Our Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <MuiLink href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Education
                </MuiLink>
                <MuiLink href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Healthcare
                </MuiLink>
                <MuiLink href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Orphan Care
                </MuiLink>
                <MuiLink href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Evangelization
                </MuiLink>
                <MuiLink href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Media Resources
                </MuiLink>
              </Box>
            </Grid>

            <Grid size={{xs:12, md:2}}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                  <MapPin size={18} style={{ marginTop: 2, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    P.O. Box 1049<br />
                    Mgolole, Morogoro<br />
                    Tanzania
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Mail size={18} style={{ flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    info@cicm.or.tz
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone size={18} style={{ flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    +255 XXX XXX
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © {new Date().getFullYear()} Immaculate Heart of Mary Sisters (CICM). All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <MuiLink href="#" color="inherit" underline="hover" sx={{ opacity: 0.7, '&:hover': { opacity: 1 }, fontSize: '0.875rem' }}>
                Privacy Policy
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover" sx={{ opacity: 0.7, '&:hover': { opacity: 1 }, fontSize: '0.875rem' }}>
                Terms of Use
              </MuiLink>
            </Box>
          </Box>
        </Container>
      </Box>
  );
};

export default WebsiteFooter;