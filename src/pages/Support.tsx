import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
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
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import {
  Favorite,
  VolunteerActivism,
  Favorite as PrayerTimes,
  AccountBalance,
  PhoneAndroid,
  QrCode2,
  CreditCard,
  Share,
  Download,
  Print,
  ArrowForward,
  CheckCircle,
  People,
  School,
  HealthAndSafety,
  Home,
  FoodBank,
  Build,
  MonetizationOn,
  Schedule,
  LocationOn,
  Email,
  Phone,
  Security,
  VerifiedUser,
  ReceiptLong,
  History,
  Diversity3,
  EmojiPeople,
  Work,
  Handshake,
  Groups,
  AutoAwesome,
  Send,
  AttachMoney,
  AccountBalanceWallet,
  ErrorOutline,
  WhatsApp,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`support-tabpanel-${index}`}
      aria-labelledby={`support-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const SupportPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  
  const [tabValue, setTabValue] = useState(0);
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    interests: '',
    availability: '',
    message: '',
  });
  const [prayerRequest, setPrayerRequest] = useState({
    name: '',
    request: '',
    isAnonymous: false,
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleDonationAmount = (amount: string) => {
    setDonationAmount(amount);
  };

  const handleDonationTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDonationType((event.target as HTMLInputElement).value);
  };

  const handleVolunteerFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVolunteerForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePrayerRequestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPrayerRequest(prev => ({ ...prev, [name]: value }));
  };

  const handlePrayerAnonymousChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrayerRequest(prev => ({ ...prev, isAnonymous: e.target.checked }));
  };

  const handleSubmitDonation = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSnackbar({
        open: true,
        message: t('support.donation.success', 'Thank you for your generous donation!'),
        severity: 'success',
      });
      setDonationAmount('');
    } catch (error) {
      setSnackbar({
        open: true,
        message: t('support.donation.error', 'Failed to process donation. Please try again.'),
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitVolunteer = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSnackbar({
        open: true,
        message: t('support.volunteer.success', 'Thank you for your interest! We will contact you soon.'),
        severity: 'success',
      });
      setVolunteerForm({
        name: '',
        email: '',
        phone: '',
        skills: '',
        interests: '',
        availability: '',
        message: '',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: t('support.volunteer.error', 'Failed to submit form. Please try again.'),
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitPrayer = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSnackbar({
        open: true,
        message: t('support.prayer.success', 'Your prayer request has been received. We will pray for you.'),
        severity: 'success',
      });
      setPrayerRequest({
        name: '',
        request: '',
        isAnonymous: false,
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: t('support.prayer.error', 'Failed to submit prayer request. Please try again.'),
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Quick donation amounts
  const quickAmounts = ['5000', '10000', '25000', '50000', '100000'];

  // Bank account information
  const bankAccounts = [
    {
      bank: t('support.donation.banks.crdb.name', 'CRDB Bank'),
      accountName: t('support.donation.banks.crdb.accountName', 'IMMACULATE HEART OF MARY SISTERS'),
      accountNumber: t('support.donation.banks.crdb.accountNumber', '01J1078505900'),
      branch: t('support.donation.banks.crdb.branch', 'Morogoro Branch'),
      swift: 'CORUTZTZ',
    },
    {
      bank: t('support.donation.banks.nmb.name', 'National Microfinance Bank (NMB)'),
      accountName: t('support.donation.banks.nmb.accountName', 'IMMACULATE HEART OF MARY SISTERS'),
      accountNumber: t('support.donation.banks.nmb.accountNumber', '22110037715'),
      branch: t('support.donation.banks.nmb.branch', 'Morogoro Branch'),
      swift: 'NMIBTZTZ',
    },
  ];

  // Mobile money options
  const mobileMoney = [
    {
      provider: t('support.donation.mobile.mpesa.name', 'M-Pesa'),
      number: t('support.donation.mobile.mpesa.number', '0754 123 456'),
      name: t('support.donation.mobile.mpesa.accountName', 'CICM Sisters'),
    },
    {
      provider: t('support.donation.mobile.airtel.name', 'Airtel Money'),
      number: t('support.donation.mobile.airtel.number', '0684 123 456'),
      name: t('support.donation.mobile.airtel.accountName', 'CICM Sisters'),
    },
    {
      provider: t('support.donation.mobile.tigo.name', 'Tigo Pesa'),
      number: t('support.donation.mobile.tigo.number', '0713 123 456'),
      name: t('support.donation.mobile.tigo.accountName', 'CICM Sisters'),
    },
  ];

  // Where donations go
  const donationAreas = [
    {
      icon: <School />,
      title: t('support.donation.areas.education.title', 'Education'),
      description: t('support.donation.areas.education.description', 'Support our 4 schools serving 2000+ students'),
    },
    {
      icon: <HealthAndSafety />,
      title: t('support.donation.areas.healthcare.title', 'Healthcare'),
      description: t('support.donation.areas.healthcare.description', 'Fund medical care at our 6 health facilities'),
    },
    {
      icon: <Home />,
      title: t('support.donation.areas.orphanage.title', 'Orphanage'),
      description: t('support.donation.areas.orphanage.description', 'Care for 45+ orphaned children at Mgolole'),
    },
    {
      icon: <FoodBank />,
      title: t('support.donation.areas.food.title', 'Food Security'),
      description: t('support.donation.areas.food.description', 'Provide meals through our farming projects'),
    },
    {
      icon: <Build />,
      title: t('support.donation.areas.projects.title', 'Community Projects'),
      description: t('support.donation.areas.projects.description', 'Support sustainable development initiatives'),
    },
    {
      icon: <People />,
      title: t('support.donation.areas.formation.title', 'Sister Formation'),
      description: t('support.donation.areas.formation.description', 'Train future sisters for ministry'),
    },
  ];

  // Volunteer opportunities
  const volunteerOpportunities = [
    {
      title: t('support.volunteer.opportunities.teaching.title', 'Teaching Assistant'),
      location: t('support.volunteer.opportunities.teaching.location', 'Our Schools'),
      commitment: t('support.volunteer.opportunities.teaching.commitment', '3-6 months'),
      skills: t('support.volunteer.opportunities.teaching.skills', 'Education background, Patience, Creativity'),
    },
    {
      title: t('support.volunteer.opportunities.medical.title', 'Medical Volunteer'),
      location: t('support.volunteer.opportunities.medical.location', 'Health Centers'),
      commitment: t('support.volunteer.opportunities.medical.commitment', '1-12 months'),
      skills: t('support.volunteer.opportunities.medical.skills', 'Medical training, Compassion, Teamwork'),
    },
    {
      title: t('support.volunteer.opportunities.orphanage.title', 'Orphanage Caregiver'),
      location: t('support.volunteer.opportunities.orphanage.location', 'Mgolole Orphanage'),
      commitment: t('support.volunteer.opportunities.orphanage.commitment', '2-6 months'),
      skills: t('support.volunteer.opportunities.orphanage.skills', 'Childcare experience, Empathy, Energy'),
    },
    {
      title: t('support.volunteer.opportunities.farming.title', 'Agricultural Volunteer'),
      location: t('support.volunteer.opportunities.farming.location', 'Our Farms'),
      commitment: t('support.volunteer.opportunities.farming.commitment', '1-3 months'),
      skills: t('support.volunteer.opportunities.farming.skills', 'Farming knowledge, Physical stamina, Teamwork'),
    },
    {
      title: t('support.volunteer.opportunities.construction.title', 'Construction Volunteer'),
      location: t('support.volunteer.opportunities.construction.location', 'Various Projects'),
      commitment: t('support.volunteer.opportunities.construction.commitment', '2-8 weeks'),
      skills: t('support.volunteer.opportunities.construction.skills', 'Construction skills, Safety awareness, Physical fitness'),
    },
    {
      title: t('support.volunteer.opportunities.admin.title', 'Administrative Support'),
      location: t('support.volunteer.opportunities.admin.location', 'Main Office'),
      commitment: t('support.volunteer.opportunities.admin.commitment', 'Flexible'),
      skills: t('support.volunteer.opportunities.admin.skills', 'Computer skills, Organization, Communication'),
    },
  ];

  // Volunteer process steps
  const volunteerSteps = [
    t('support.volunteer.process.step1', 'Submit Application'),
    t('support.volunteer.process.step2', 'Interview & Screening'),
    t('support.volunteer.process.step3', 'Background Check'),
    t('support.volunteer.process.step4', 'Orientation & Training'),
    t('support.volunteer.process.step5', 'Begin Service'),
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
            {t('support.hero.title', 'Support Our Mission')}
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
            {t('support.hero.subtitle', 'Join Us in Serving God\'s People Through Your Generosity and Service')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              label={t('support.hero.tag1', 'Make a Donation')}
              icon={<Favorite />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('support.hero.tag2', 'Volunteer')}
              icon={<VolunteerActivism />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('support.hero.tag3', 'Prayer Support')}
              icon={<PrayerTimes />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Tabs for Support Options */}
        <Paper elevation={2} sx={{ mb: 6, borderRadius: 2, overflow: 'hidden' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              bgcolor: 'background.paper',
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTab-root': {
                fontWeight: 600,
                py: 3,
                fontSize: '1rem'
              }
            }}
          >
            <Tab 
              icon={<Favorite />} 
              label={t('support.tabs.donate', 'Donate')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<VolunteerActivism />} 
              label={t('support.tabs.volunteer', 'Volunteer')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<PrayerTimes />} 
              label={t('support.tabs.prayer', 'Prayer Support')} 
              iconPosition="start" 
            />
          </Tabs>

          {/* Donation Tab */}
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('support.donation.title', 'Make a Donation')}
                </Typography>
                
                <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                    {t('support.donation.amount.title', 'Select Donation Amount')}
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                      {t('support.donation.amount.quick', 'Quick Select:')}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      {quickAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={donationAmount === amount ? 'contained' : 'outlined'}
                          color="primary"
                          onClick={() => handleDonationAmount(amount)}
                          sx={{ minWidth: '100px' }}
                        >
                          TZS {parseInt(amount).toLocaleString()}
                        </Button>
                      ))}
                    </Box>
                  </Box>
                  
                  <TextField
                    fullWidth
                    label={t('support.donation.amount.custom', 'Custom Amount')}
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">TZS</InputAdornment>
                      ),
                    }}
                    sx={{ mb: 4 }}
                  />
                  
                  <FormControl component="fieldset" sx={{ mb: 4 }}>
                    <FormLabel component="legend">
                      {t('support.donation.type.title', 'Donation Type')}
                    </FormLabel>
                    <RadioGroup
                      row
                      value={donationType}
                      onChange={handleDonationTypeChange}
                    >
                      <FormControlLabel
                        value="one-time"
                        control={<Radio />}
                        label={t('support.donation.type.oneTime', 'One-time Donation')}
                      />
                      <FormControlLabel
                        value="monthly"
                        control={<Radio />}
                        label={t('support.donation.type.monthly', 'Monthly Recurring')}
                      />
                    </RadioGroup>
                  </FormControl>
                  
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    disabled={!donationAmount || loading}
                    onClick={handleSubmitDonation}
                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <AttachMoney />}
                    sx={{ py: 1.5 }}
                  >
                    {loading 
                      ? t('support.donation.processing', 'Processing...') 
                      : t('support.donation.donateNow', 'Donate Now')}
                  </Button>
                </Paper>
                
                {/* Where Your Donation Goes */}
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('support.donation.impact.title', 'Where Your Donation Goes')}
                </Typography>
                <Grid container spacing={3}>
                  {donationAreas.map((area, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                      <Card elevation={1} sx={{ height: '100%' }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                          <Box sx={{ color: 'primary.main', mb: 2 }}>
                            {area.icon}
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                            {area.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {area.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              
              <Grid size={{ xs: 12, md: 5 }}>
                {/* Bank Transfer Information */}
                <Card elevation={3} sx={{ mb: 4 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <AccountBalance sx={{ color: 'primary.main', mr: 2 }} />
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {t('support.donation.bank.title', 'Bank Transfer')}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                      {t('support.donation.bank.description', 'Transfer directly to our bank accounts:')}
                    </Typography>
                    
                    <TableContainer>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>{t('support.donation.bank.bank', 'Bank')}</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>{t('support.donation.bank.account', 'Account')}</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {bankAccounts.map((account, index) => (
                            <TableRow key={index}>
                              <TableCell>
                                <Typography variant="body2" fontWeight={600}>
                                  {account.bank}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  {account.branch}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant="body2">
                                  {account.accountName}
                                </Typography>
                                <Typography variant="body2" fontWeight={600}>
                                  {account.accountNumber}
                                </Typography>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      sx={{ mt: 3 }}
                      startIcon={<Download />}
                    >
                      {t('support.donation.bank.download', 'Download Bank Details')}
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Mobile Money */}
                <Card elevation={3} sx={{ mb: 4 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <PhoneAndroid sx={{ color: 'primary.main', mr: 2 }} />
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {t('support.donation.mobile.title', 'Mobile Money')}
                      </Typography>
                    </Box>
                    
                    <List>
                      {mobileMoney.map((service, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            <PhoneAndroid sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={service.provider}
                            secondary={
                              <>
                                <Typography variant="body2">{service.name}</Typography>
                                <Typography variant="body2" fontWeight={600}>
                                  {service.number}
                                </Typography>
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                    
                    <Box sx={{ mt: 3, p: 2, bgcolor: alpha(theme.palette.info.main, 0.1), borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ color: 'info.dark', textAlign: 'center' }}>
                        {t('support.donation.mobile.note', 'Send payment and email receipt to donations@cicm.or.tz')}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                
                {/* Security & Transparency */}
                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.success.main, 0.1), borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <VerifiedUser sx={{ color: 'success.main', mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
                      {t('support.donation.security.title', 'Secure & Transparent')}
                    </Typography>
                  </Box>
                  
                  <List dense>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Security sx={{ fontSize: 16, color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={t('support.donation.security.secure', 'Secure SSL Encryption')}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <ReceiptLong sx={{ fontSize: 16, color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={t('support.donation.security.receipt', 'Instant Tax Receipt')}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <History sx={{ fontSize: 16, color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={t('support.donation.security.report', 'Annual Impact Reports')}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Volunteer Tab */}
          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('support.volunteer.title', 'Volunteer With Us')}
                </Typography>
                
                <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                    {t('support.volunteer.form.title', 'Volunteer Application Form')}
                  </Typography>
                  
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('support.volunteer.form.name', 'Full Name')}
                        name="name"
                        value={volunteerForm.name}
                        onChange={handleVolunteerFormChange}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('support.volunteer.form.email', 'Email Address')}
                        name="email"
                        type="email"
                        value={volunteerForm.email}
                        onChange={handleVolunteerFormChange}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('support.volunteer.form.phone', 'Phone Number')}
                        name="phone"
                        value={volunteerForm.phone}
                        onChange={handleVolunteerFormChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('support.volunteer.form.availability', 'Availability (Months)')}
                        name="availability"
                        value={volunteerForm.availability}
                        onChange={handleVolunteerFormChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label={t('support.volunteer.form.skills', 'Skills & Qualifications')}
                        name="skills"
                        value={volunteerForm.skills}
                        onChange={handleVolunteerFormChange}
                        multiline
                        rows={2}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label={t('support.volunteer.form.interests', 'Areas of Interest')}
                        name="interests"
                        value={volunteerForm.interests}
                        onChange={handleVolunteerFormChange}
                        multiline
                        rows={2}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label={t('support.volunteer.form.message', 'Why do you want to volunteer with us?')}
                        name="message"
                        value={volunteerForm.message}
                        onChange={handleVolunteerFormChange}
                        multiline
                        rows={4}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        disabled={loading}
                        onClick={handleSubmitVolunteer}
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                        sx={{ py: 1.5 }}
                      >
                        {loading 
                          ? t('support.volunteer.form.submitting', 'Submitting...') 
                          : t('support.volunteer.form.submit', 'Submit Application')}
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
                
                {/* Volunteer Process */}
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('support.volunteer.process.title', 'Volunteer Process')}
                </Typography>
                <Stepper activeStep={-1} alternativeLabel sx={{ mb: 4 }}>
                  {volunteerSteps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
              
              <Grid size={{ xs: 12, md: 5 }}>
                {/* Volunteer Opportunities */}
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('support.volunteer.opportunities.title', 'Current Opportunities')}
                </Typography>
                
                <Grid container spacing={3}>
                  {volunteerOpportunities.map((opportunity, index) => (
                    <Grid size={{ xs: 12 }} key={index}>
                      <Card elevation={1}>
                        <CardContent>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                            {opportunity.title}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              {opportunity.location}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Schedule sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              {t('support.volunteer.opportunities.commitment', 'Commitment:')} {opportunity.commitment}
                            </Typography>
                          </Box>
                          
                          <Typography variant="body2" color="text.secondary">
                            <strong>{t('support.volunteer.opportunities.skills', 'Skills:')}</strong> {opportunity.skills}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            {t('support.volunteer.opportunities.apply', 'Apply Now')}
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                
                {/* Volunteer Benefits */}
                <Paper sx={{ mt: 4, p: 3, bgcolor: alpha(theme.palette.primary.main, 0.1), borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    {t('support.volunteer.benefits.title', 'Volunteer Benefits')}
                  </Typography>
                  
                  <List dense>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <EmojiPeople sx={{ fontSize: 16, color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={t('support.volunteer.benefits.meaningful', 'Meaningful Service Experience')}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Work sx={{ fontSize: 16, color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={t('support.volunteer.benefits.training', 'Professional Training & Skills')}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Handshake sx={{ fontSize: 16, color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={t('support.volunteer.benefits.certificate', 'Certificate of Service')}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Groups sx={{ fontSize: 16, color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={t('support.volunteer.benefits.community', 'Community Living Experience')}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <AutoAwesome sx={{ fontSize: 16, color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={t('support.volunteer.benefits.accommodation', 'Accommodation & Meals Provided')}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Prayer Support Tab */}
          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('support.prayer.title', 'Prayer Support')}
                </Typography>
                
                <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                    {t('support.prayer.form.title', 'Submit Prayer Request')}
                  </Typography>
                  
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label={t('support.prayer.form.name', 'Your Name (Optional)')}
                        name="name"
                        value={prayerRequest.name}
                        onChange={handlePrayerRequestChange}
                        disabled={prayerRequest.isAnonymous}
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={prayerRequest.isAnonymous}
                            onChange={handlePrayerAnonymousChange}
                          />
                        }
                        label={t('support.prayer.form.anonymous', 'Submit anonymously')}
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label={t('support.prayer.form.request', 'Prayer Request')}
                        name="request"
                        value={prayerRequest.request}
                        onChange={handlePrayerRequestChange}
                        multiline
                        rows={6}
                        required
                        placeholder={t('support.prayer.form.placeholder', 'Please share your prayer intention...')}
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        disabled={!prayerRequest.request || loading}
                        onClick={handleSubmitPrayer}
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <PrayerTimes />}
                        sx={{ py: 1.5 }}
                      >
                        {loading 
                          ? t('support.prayer.form.submitting', 'Submitting...') 
                          : t('support.prayer.form.submit', 'Submit Prayer Request')}
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
                
                {/* Prayer Community */}
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('support.prayer.community.title', 'Join Our Prayer Community')}
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        500+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('support.prayer.community.weekly', 'Weekly Prayer Partners')}
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        24/7
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('support.prayer.community.adoration', 'Adoration Chapel')}
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        85+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('support.prayer.community.sisters', 'Sisters Praying Daily')}
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        1937
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('support.prayer.community.tradition', 'Years of Prayer Tradition')}
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid size={{ xs: 12, md: 5 }}>
                {/* Daily Prayer Schedule */}
                <Card elevation={3} sx={{ mb: 4 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Schedule sx={{ color: 'primary.main', mr: 2 }} />
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {t('support.prayer.schedule.title', 'Daily Prayer Schedule')}
                      </Typography>
                    </Box>
                    
                    <List>
                      {[
                        { time: '5:30 AM', prayer: t('support.prayer.schedule.morning', 'Morning Prayer & Meditation') },
                        { time: '7:00 AM', prayer: t('support.prayer.schedule.mass', 'Holy Mass') },
                        { time: '12:00 PM', prayer: t('support.prayer.schedule.angelus', 'Angelus & Midday Prayer') },
                        { time: '3:00 PM', prayer: t('support.prayer.schedule.divine', 'Divine Mercy Chaplet') },
                        { time: '6:00 PM', prayer: t('support.prayer.schedule.evening', 'Evening Prayer & Rosary') },
                        { time: '8:00 PM', prayer: t('support.prayer.schedule.night', 'Night Prayer') },
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            <PrayerTimes sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body1" fontWeight={600}>
                                  {item.time}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {item.prayer}
                                </Typography>
                              </Box>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                    
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                      startIcon={<Download />}
                    >
                      {t('support.prayer.schedule.download', 'Download Prayer Schedule')}
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Prayer Intentions */}
                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    {t('support.prayer.intentions.title', 'Current Prayer Intentions')}
                  </Typography>
                  
                  <List dense>
                    {[
                      t('support.prayer.intentions.intention1', 'For our students preparing for exams'),
                      t('support.prayer.intentions.intention2', 'For the sick in our health centers'),
                      t('support.prayer.intentions.intention3', 'For vocations to religious life'),
                      t('support.prayer.intentions.intention4', 'For peace in our communities'),
                      t('support.prayer.intentions.intention5', 'For our benefactors and donors'),
                    ].map((intention, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Favorite sx={{ fontSize: 16, color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={intention}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Button
                    variant="text"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    endIcon={<ArrowForward />}
                  >
                    {t('support.prayer.intentions.viewAll', 'View All Prayer Intentions')}
                  </Button>
                </Paper>
                
                {/* Become a Prayer Partner */}
                <Card elevation={2} sx={{ mt: 4 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      {t('support.prayer.partner.title', 'Become a Prayer Partner')}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                      {t('support.prayer.partner.description', 'Join our community of prayer partners who commit to pray for our mission regularly.')}
                    </Typography>
                    
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<Diversity3 />}
                    >
                      {t('support.prayer.partner.join', 'Join Prayer Partners')}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </Paper>

        {/* Impact Report */}
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            bgcolor: 'primary.main',
            color: 'white',
            mb: 8
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                {t('support.impact.title', 'Your Support Makes a Difference')}
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                {t('support.impact.description', 'Last year, with the help of generous supporters like you, we were able to:')}
              </Typography>
              
              <Grid container spacing={3}>
                {[
                  { value: '2,000+', label: t('support.impact.stat1', 'Students Educated') },
                  { value: '50,000+', label: t('support.impact.stat2', 'Patients Treated') },
                  { value: '45', label: t('support.impact.stat3', 'Orphans Cared For') },
                  { value: '100+', label: t('support.impact.stat4', 'Jobs Created') },
                ].map((stat, index) => (
                  <Grid size={{ xs: 6 }} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h3" sx={{ fontWeight: 900 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                    {t('support.impact.report', 'Download Annual Report')}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                    {t('support.impact.reportDescription', 'See how your contributions are transforming lives through our detailed annual impact report.')}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: 'white', color: 'primary.main' }}
                      startIcon={<Download />}
                    >
                      {t('support.impact.download', 'Download Report')}
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ color: 'white', borderColor: 'white' }}
                      startIcon={<Share />}
                    >
                      {t('support.impact.share', 'Share')}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Contact for More Information */}
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            border: '2px dashed',
            borderColor: 'primary.main',
            textAlign: 'center',
            mb: 8
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
            {t('support.contact.title', 'Have Questions?')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
            {t('support.contact.description', 'Contact our support team for more information about donations, volunteering, or prayer support.')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<Email />}
              onClick={() => window.location.href = 'mailto:support@cicm.or.tz'}
            >
              {t('support.contact.email', 'Email Support')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<Phone />}
              onClick={() => window.location.href = 'tel:+255754123456'}
            >
              {t('support.contact.call', 'Call Support')}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<WhatsApp />}
              onClick={() => window.open('https://wa.me/255754123456', '_blank')}
            >
              {t('support.contact.whatsapp', 'WhatsApp')}
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
          icon={snackbar.severity === 'success' ? <CheckCircle /> : <ErrorOutline />}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SupportPage;