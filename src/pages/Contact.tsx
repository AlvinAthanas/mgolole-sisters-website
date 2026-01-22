import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  alpha,
  useTheme,
  Divider,
  IconButton,
  Snackbar,
  Alert,
  Stack,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Send,
  Map,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  WhatsApp,
  Schedule,
  Language,
  MailOutline,
  PhoneInTalk,
  CheckCircle,
  Error,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      setSnackbar({
        open: true,
        message: t('contact.form.success', 'Message sent successfully! We will respond soon.'),
        severity: 'success',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: t('contact.form.error', 'Failed to send message. Please try again.'),
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Contact information
  const contactInfo = {
    address: t('contact.info.address', 'Immaculate Heart of Mary Sisters, P. O. Box 1049, Morogoro, Tanzania'),
    email: t('contact.info.email', 'info@cicm.or.tz'),
    phone: t('contact.info.phone', '+255 23 261 0000'),
    mobile: t('contact.info.mobile', '+255 754 123 456'),
    hours: t('contact.info.hours', 'Monday - Friday: 8:00 AM - 5:00 PM'),
    emergency: t('contact.info.emergency', '24/7 Emergency Contact Available'),
  };

  // Department contacts
  const departments = [
    {
      title: t('contact.departments.vocations.title', 'Vocations Office'),
      contact: t('contact.departments.vocations.contact', 'Sr. Flora Chuma'),
      email: 'vocations@cicm.or.tz',
      phone: '+255 754 123 457',
      description: t('contact.departments.vocations.description', 'For inquiries about religious life and formation process'),
    },
    {
      title: t('contact.departments.donations.title', 'Donations & Support'),
      contact: t('contact.departments.donations.contact', 'Sr. Caroline Nguzo'),
      email: 'donations@cicm.or.tz',
      phone: '+255 754 123 458',
      description: t('contact.departments.donations.description', 'For financial contributions and material support'),
    },
    {
      title: t('contact.departments.volunteer.title', 'Volunteer Program'),
      contact: t('contact.departments.volunteer.contact', 'Sr. Queenbeth Berege'),
      email: 'volunteer@cicm.or.tz',
      phone: '+255 754 123 459',
      description: t('contact.departments.volunteer.description', 'For volunteering opportunities and service programs'),
    },
    {
      title: t('contact.departments.projects.title', 'Projects & Business'),
      contact: t('contact.departments.projects.contact', 'Sr. Julieth Makonde'),
      email: 'projects@cicm.or.tz',
      phone: '+255 754 123 460',
      description: t('contact.departments.projects.description', 'For business inquiries and project partnerships'),
    },
  ];

  // Social media links
  const socialMedia = [
    { platform: 'Facebook', icon: <Facebook />, color: '#1877F2', link: 'https://facebook.com/cicm' },
    { platform: 'Twitter', icon: <Twitter />, color: '#1DA1F2', link: 'https://twitter.com/cicm' },
    { platform: 'Instagram', icon: <Instagram />, color: '#E4405F', link: 'https://instagram.com/cicm' },
    { platform: 'YouTube', icon: <YouTube />, color: '#FF0000', link: 'https://youtube.com/cicm' },
    { platform: 'WhatsApp', icon: <WhatsApp />, color: '#25D366', link: 'https://wa.me/255754123456' },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh'}}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 2,
              textAlign: 'center'
            }}
          >
            {t('contact.hero.title', 'Contact Us')}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              opacity: 0.9,
              mb: 4
            }}
          >
            {t('contact.hero.subtitle', 'Get in Touch with the Immaculate Heart of Mary Sisters')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              label={t('contact.hero.tag1', '24/7 Support')}
              icon={<Phone />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('contact.hero.tag2', 'Multiple Locations')}
              icon={<LocationOn />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('contact.hero.tag3', 'Quick Response')}
              icon={<Send />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Contact Information Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Main Contact Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: 'primary.main',
                      color: 'white',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <MailOutline sx={{ fontSize: 40 }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {t('contact.main.title', 'General Inquiries')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('contact.main.description', 'For all general questions and information')}
                  </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <LocationOn sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={t('contact.main.address', 'Address')}
                      secondary={contactInfo.address}
                      secondaryTypographyProps={{ sx: { wordBreak: 'break-word' } }}
                    />
                  </ListItem>
                  
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Email sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={t('contact.main.email', 'Email')}
                      secondary={
                        <a 
                          href={`mailto:${contactInfo.email}`} 
                          style={{ color: theme.palette.primary.main, textDecoration: 'none' }}
                        >
                          {contactInfo.email}
                        </a>
                      }
                    />
                  </ListItem>
                  
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Phone sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={t('contact.main.phone', 'Phone')}
                      secondary={
                        <a 
                          href={`tel:${contactInfo.phone}`} 
                          style={{ color: theme.palette.primary.main, textDecoration: 'none' }}
                        >
                          {contactInfo.phone}
                        </a>
                      }
                    />
                  </ListItem>
                  
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <PhoneInTalk sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={t('contact.main.mobile', 'Mobile')}
                      secondary={
                        <a 
                          href={`tel:${contactInfo.mobile}`} 
                          style={{ color: theme.palette.primary.main, textDecoration: 'none' }}
                        >
                          {contactInfo.mobile}
                        </a>
                      }
                    />
                  </ListItem>
                  
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Schedule sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={t('contact.main.hours', 'Office Hours')}
                      secondary={contactInfo.hours}
                    />
                  </ListItem>
                </List>

                <Box sx={{ mt: 4, p: 2, bgcolor: alpha(theme.palette.warning.main, 0.1), borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ color: 'warning.dark', textAlign: 'center' }}>
                    {contactInfo.emergency}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                {t('contact.form.title', 'Send Us a Message')}
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t('contact.form.name', 'Full Name')}
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutline color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t('contact.form.email', 'Email Address')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t('contact.form.phone', 'Phone Number')}
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t('contact.form.subject', 'Subject')}
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Language color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label={t('contact.form.message', 'Your Message')}
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      multiline
                      rows={6}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                            <Send color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      disabled={loading}
                      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                      sx={{ py: 1.5 }}
                    >
                      {loading ? t('contact.form.sending', 'Sending...') : t('contact.form.send', 'Send Message')}
                    </Button>
                  </Grid>
                  
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                      {t('contact.form.privacy', 'By submitting this form, you agree to our privacy policy. We will never share your information with third parties.')}
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>

        {/* Department Contacts */}
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, color: 'text.primary', textAlign: 'center' }}>
          {t('contact.departments.title', 'Department Contacts')}
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {departments.map((dept, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card 
                elevation={2} 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                    {dept.title}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', minHeight: '40px' }}>
                    {dept.description}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {t('contact.departments.contactPerson', 'Contact Person:')}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      {dept.contact}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {t('contact.departments.email', 'Email:')}
                    </Typography>
                    <a 
                      href={`mailto:${dept.email}`} 
                      style={{ 
                        color: theme.palette.primary.main, 
                        textDecoration: 'none',
                        fontSize: '0.875rem'
                      }}
                    >
                      {dept.email}
                    </a>
                  </Box>
                  
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {t('contact.departments.phone', 'Phone:')}
                    </Typography>
                    <a 
                      href={`tel:${dept.phone}`} 
                      style={{ 
                        color: theme.palette.primary.main, 
                        textDecoration: 'none',
                        fontSize: '0.875rem'
                      }}
                    >
                      {dept.phone}
                    </a>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    size="small" 
                    color="primary" 
                    fullWidth
                    startIcon={<Email />}
                    onClick={() => window.location.href = `mailto:${dept.email}`}
                  >
                    {t('contact.departments.emailButton', 'Email')}
                  </Button>
                  <Button 
                    size="small" 
                    color="secondary" 
                    fullWidth
                    startIcon={<Phone />}
                    onClick={() => window.location.href = `tel:${dept.phone}`}
                  >
                    {t('contact.departments.callButton', 'Call')}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Map & Location Section */}
        <Paper elevation={2} sx={{ p: 4, borderRadius: 3, mb: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                {t('contact.location.title', 'Find Us')}
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                {t('contact.location.description', 'Our Mother House is located in Mgolole, Morogoro. We also serve in multiple dioceses across Tanzania and in Verona, Italy.')}
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                  {t('contact.location.mainAddress', 'Main Address:')}
                </Typography>
                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <LocationOn sx={{ color: 'primary.main', mt: 0.5, mr: 2 }} />
                    <Box>
                      <Typography variant="body1" fontWeight={600}>
                        {t('contact.location.motherHouse', 'Immaculate Heart of Mary Sisters Mother House')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('contact.location.fullAddress', 'Mgolole Village, Morogoro District, Morogoro Region, Tanzania')}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button 
                      variant="outlined" 
                      size="small" 
                      startIcon={<Map />}
                      onClick={() => window.open('https://maps.google.com/?q=Mgolole+Morogoro+Tanzania', '_blank')}
                    >
                      {t('contact.location.openMaps', 'Open in Google Maps')}
                    </Button>
                    <Button 
                      variant="outlined" 
                      size="small" 
                      startIcon={<Directions />}
                      onClick={() => window.open('https://maps.google.com/?daddr=Mgolole+Morogoro+Tanzania', '_blank')}
                    >
                      {t('contact.location.getDirections', 'Get Directions')}
                    </Button>
                  </Box>
                </Paper>
              </Box>
              
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                  {t('contact.location.otherLocations', 'Other Service Areas:')}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {[
                    t('contact.location.dar', 'Dar es Salaam'),
                    t('contact.location.bagamoyo', 'Bagamoyo'),
                    t('contact.location.mwanza', 'Mwanza'),
                    t('contact.location.mbeya', 'Mbeya'),
                    t('contact.location.mtwara', 'Mtwara'),
                    t('contact.location.arusha', 'Arusha'),
                    t('contact.location.verona', 'Verona, Italy'),
                  ].map((location, index) => (
                    <Chip 
                      key={index}
                      label={location}
                      sx={{ 
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: 'primary.main'
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={3}>
                <CardContent sx={{ p: 0, position: 'relative', height: '400px' }}>
                  {/* Map Placeholder */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Map sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h6" color="primary.main" sx={{ mb: 1 }}>
                      {t('contact.location.mapTitle', 'Mgolole, Morogoro')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ px: 4 }}>
                      {t('contact.location.mapDescription', 'Interactive map showing our location in Morogoro, Tanzania')}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 3 }}
                      startIcon={<Map />}
                      onClick={() => window.open('https://maps.google.com/?q=Mgolole+Morogoro+Tanzania', '_blank')}
                    >
                      {t('contact.location.viewMap', 'View on Google Maps')}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Social Media & Newsletter */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={2} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                {t('contact.social.title', 'Connect With Us')}
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                {t('contact.social.description', 'Follow us on social media for updates, news, and spiritual inspiration.')}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                {socialMedia.map((social, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: social.color,
                      color: 'white',
                      '&:hover': {
                        bgcolor: social.color,
                        opacity: 0.9,
                      }
                    }}
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Paper>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={2} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                {t('contact.newsletter.title', 'Subscribe to Newsletter')}
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                {t('contact.newsletter.description', 'Stay updated with our latest news, events, and spiritual reflections.')}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  fullWidth
                  placeholder={t('contact.newsletter.placeholder', 'Enter your email address')}
                  variant="outlined"
                  size="small"
                />
                <Button variant="contained" color="primary">
                  {t('contact.newsletter.subscribe', 'Subscribe')}
                </Button>
              </Box>
              
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
                {t('contact.newsletter.privacy', 'We respect your privacy. Unsubscribe at any time.')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Quick Contact Banner */}
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            bgcolor: 'primary.main',
            color: 'white',
            textAlign: 'center',
            mb: 8
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            {t('contact.banner.title', 'Need Immediate Assistance?')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', mx: 'auto' }}>
            {t('contact.banner.description', 'For urgent matters, please call our emergency line. We are here to help you 24/7.')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<Phone />}
              onClick={() => window.location.href = 'tel:+255754123456'}
              sx={{ minWidth: '200px' }}
            >
              {t('contact.banner.callButton', 'Call Emergency Line')}
            </Button>
            <Button
              variant="outlined"
              sx={{ 
                color: 'white', 
                borderColor: 'white',
                minWidth: '200px'
              }}
              size="large"
              startIcon={<WhatsApp />}
              onClick={() => window.open('https://wa.me/255754123456', '_blank')}
            >
              {t('contact.banner.whatsappButton', 'Message on WhatsApp')}
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          icon={snackbar.severity === 'success' ? <CheckCircle /> : <Error />}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

// Directions icon component
const Directions = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export default Contact;