import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
  Paper,
  Divider,
  Link as MuiLink
} from '@mui/material';
import {
  Menu as MenuIcon,
  Church,
  School,
  Heart,
  Activity,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';



export default function CICMHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | { el: HTMLButtonElement; menu: string }>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=600&fit=crop',
      title: 'Welcome to the Immaculate Heart of Mary Sisters',
      subtitle: 'Serving with Faith, Hope, and Love since 1937'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop',
      title: 'Called to Serve',
      subtitle: 'Evangelization • Education • Healthcare • Orphan Care'
    },
    {
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=600&fit=crop',
      title: 'Join Our Mission',
      subtitle: 'Discover your vocation with the CICM Sisters'
    }
  ];

  const ministries = [
    {
      icon: <Church size={48} />,
      title: 'Evangelization',
      description: 'Teaching catechism, providing baptism teachings, and preparing faithful for first communion and confirmation in parishes across Tanzania.',
      color: '#1976d2'
    },
    {
      icon: <Heart size={48} />,
      title: 'Orphanage',
      description: 'Caring for orphaned children with love and compassion at our Mgolole Orphanage Centre in Morogoro.',
      color: '#d32f2f'
    },
    {
      icon: <School size={48} />,
      title: 'Education',
      description: 'Providing quality education through four schools including Bernard Hilhorst Secondary School and St. Peter Clavery Primary School.',
      color: '#388e3c'
    },
    {
      icon: <Activity size={48} />,
      title: 'Health Care',
      description: 'Operating health centers and dispensaries across Morogoro and Mwanza, bringing healing to communities in need.',
      color: '#f57c00'
    }
  ];

  const events = [
    {
      date: '2-27 June 2025',
      title: 'Annual Retreat',
      description: 'Join us for our annual spiritual retreat'
    },
    {
      date: '22 August 2025',
      title: 'Perpetual Vows & Jubilee',
      description: 'Celebration of perpetual vows and jubilee'
    },
    {
      date: '12 September 2025',
      title: 'First Vows Ceremony',
      description: 'Witness our novices take their first vows'
    }
  ];

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', submenu: ['History', 'Mission & Vows', 'Leadership', 'Where We Serve'] },
    { label: 'Vocations', href: '#vocations' },
    { label: 'Ministries', href: '#ministries' },
    { label: 'Projects', href: '#projects' },
    { label: 'Media', submenu: ['Photo Gallery', 'Videos', 'Publications'] },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>

      {/* Dropdown Menus */}
      <Menu
        anchorEl={anchorEl?.el}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {anchorEl && navItems.find(i => i.label === anchorEl.menu)?.submenu?.map((sub) => (
          <MenuItem key={sub} onClick={() => setAnchorEl(null)}>
            {sub}
          </MenuItem>
        ))}
      </Menu>

      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={() => setMobileMenuAnchor(null)}
      >
        {navItems.map((item) => (
          <MenuItem key={item.label} onClick={() => setMobileMenuAnchor(null)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Hero Section with Image Slider */}
      <Box sx={{ position: 'relative', height: { xs: '400px', md: '600px' }, overflow: 'hidden' }}>
        {heroSlides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Container maxWidth="md">
              <Typography
                variant="h2"
                align="center"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                sx={{
                  color: 'white',
                  mb: 4,
                  fontSize: { xs: '1rem', md: '1.5rem' },
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                {slide.subtitle}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" size="large" color="primary">
                  Learn More
                </Button>
                <Button variant="outlined" size="large" sx={{ color: 'white', borderColor: 'white' }}>
                  Contact Us
                </Button>
              </Box>
            </Container>
          </Box>
        ))}

        {/* Slider Controls */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.3)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.5)' }
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.3)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.5)' }
          }}
        >
          <ChevronRight />
        </IconButton>

        {/* Slide Indicators */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1
          }}
        >
          {heroSlides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Ministries Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ mb: 1, fontWeight: 700 }}>
          Our Ministries
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Serving God's people through evangelization, education, healthcare, and compassion
        </Typography>

        <Grid container spacing={4}>
          {ministries.map((ministry, index) => (
            <Grid size={{xs:12, sm:6, md:3}} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ color: ministry.color, mb: 2, display: 'flex', justifyContent: 'center' }}>
                    {ministry.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {ministry.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ministry.description}
                  </Typography>
                  <Button size="small" sx={{ mt: 2 }} color="primary">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Upcoming Events Section */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ mb: 1, fontWeight: 700 }}>
            Upcoming Events
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Join us in celebrating our faith and community
          </Typography>

          <Grid container spacing={3}>
            {events.map((event, index) => (
              <Grid size={{xs:12, md:4}} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s',
                    borderLeft: '4px solid #1976d2',
                    '&:hover': { 
                      boxShadow: 4, 
                      bgcolor: '#f5f5f5',
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  <Typography variant="overline" color="primary" sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
                    {event.date}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1, mb: 1, fontWeight: 600 }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="outlined" size="large">
              View All Events
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Call-to-Action Section */}
      <Box
        sx={{
          backgroundImage: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{xs:12, md:6}}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
                Support Our Mission
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
                Your generous donation helps us continue serving communities through education, healthcare, and spiritual guidance. Every contribution makes a difference in the lives of those we serve.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  fontWeight: 600,
                  '&:hover': { bgcolor: '#f5f5f5' }
                }}
              >
                Donate Now
              </Button>
            </Grid>
            <Grid size={{xs:12, md:6}}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
                Discover Your Calling
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
                Are you called to serve? Learn about religious life with the Immaculate Heart of Mary Sisters and discover if this is your vocation. We welcome young women ages 17-20.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  fontWeight: 600,
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                }}
              >
                Learn About Vocations
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>


    </Box>
  );
}