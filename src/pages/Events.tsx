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
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Alert,
  Snackbar,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  CalendarToday,
  Event,
  EventAvailable,
  LocationOn,
  People,
  Bookmark,
  Share,
  Download,
  ArrowForward,
  CheckCircle,
  Error,
  Favorite,
  Notifications,
  Hotel,
  Restaurant,
  Wifi,
  School,
  HealthAndSafety,
  Church,
  EmojiEvents,
  Cake,
  Groups,
  Payment,
  Today,
  ViewWeek,
  CalendarViewMonth,
  ContactPhone,
  ContactMail,
  Map,
  FilterList,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

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
      id={`events-tabpanel-${index}`}
      aria-labelledby={`events-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const Events = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  
  const [tabValue, setTabValue] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [eventDialogOpen, setEventDialogOpen] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: '1',
    dietary: '',
    accommodation: 'no',
    paymentMethod: 'mobile',
    comments: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setEventDialogOpen(true);
  };

  const handleCloseEventDialog = () => {
    setEventDialogOpen(false);
    setSelectedEvent(null);
  };

  const handleRegistrationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRegistrationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitRegistration = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSnackbar({
        open: true,
        message: t('events.registration.success', 'Registration successful! Confirmation email sent.'),
        severity: 'success',
      });
      setRegistrationForm({
        name: '',
        email: '',
        phone: '',
        attendees: '1',
        dietary: '',
        accommodation: 'no',
        paymentMethod: 'mobile',
        comments: '',
      });
      handleCloseEventDialog();
    } catch (error) {
      setSnackbar({
        open: true,
        message: t('events.registration.error', 'Registration failed. Please try again.'),
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Calendar events data
  const calendarEvents = [
    {
      id: 1,
      title: t('events.calendar.juneRetreat.title', 'Annual Retreat'),
      date: t('events.calendar.juneRetreat.date', 'June 2-27, 2025'),
      type: t('events.calendar.juneRetreat.type', 'Spiritual'),
      location: t('events.calendar.juneRetreat.location', 'Mgolole Mother House'),
      description: t('events.calendar.juneRetreat.description', 'Annual spiritual retreat for all sisters focusing on prayer, reflection, and renewal.'),
      capacity: t('events.calendar.juneRetreat.capacity', '85 Sisters'),
      status: 'upcoming',
      registrationOpen: true,
      fee: 'Free',
      organizer: t('events.calendar.juneRetreat.organizer', 'Spiritual Formation Office'),
      contact: 'retreat@cicm.or.tz',
    },
    {
      id: 2,
      title: t('events.calendar.augustVows.title', 'Perpetual Vows & Jubilee'),
      date: t('events.calendar.augustVows.date', 'August 22, 2025'),
      type: t('events.calendar.augustVows.type', 'Celebration'),
      location: t('events.calendar.augustVows.location', 'St. Joseph Cathedral, Morogoro'),
      description: t('events.calendar.augustVows.description', 'Celebration of perpetual vows and jubilee anniversaries of our sisters.'),
      capacity: t('events.calendar.augustVows.capacity', '300 Guests'),
      status: 'upcoming',
      registrationOpen: true,
      fee: 'Free',
      organizer: t('events.calendar.augustVows.organizer', 'Vocations Office'),
      contact: 'vocations@cicm.or.tz',
    },
    {
      id: 3,
      title: t('events.calendar.septemberVows.title', 'First Vows Ceremony'),
      date: t('events.calendar.septemberVows.date', 'September 12, 2025'),
      type: t('events.calendar.septemberVows.type', 'Formation'),
      location: t('events.calendar.septemberVows.location', 'Mgolole Mother House'),
      description: t('events.calendar.septemberVows.description', 'First profession of vows for new sisters entering religious life.'),
      capacity: t('events.calendar.septemberVows.capacity', '200 Guests'),
      status: 'upcoming',
      registrationOpen: true,
      fee: 'Free',
      organizer: t('events.calendar.septemberVows.organizer', 'Formation Team'),
      contact: 'formation@cicm.or.tz',
    },
    {
      id: 4,
      title: t('events.calendar.octoberMemorial.title', 'St. Theresa Memorial Day'),
      date: t('events.calendar.octoberMemorial.date', 'October 1, 2025'),
      type: t('events.calendar.octoberMemorial.type', 'Memorial'),
      location: t('events.calendar.octoberMemorial.location', 'St. Theresa School, Mgolole'),
      description: t('events.calendar.octoberMemorial.description', 'Memorial celebration for St. Theresa of the Child Jesus, patron of our school.'),
      capacity: t('events.calendar.octoberMemorial.capacity', '500+'),
      status: 'upcoming',
      registrationOpen: false,
      fee: 'Free',
      organizer: t('events.calendar.octoberMemorial.organizer', 'Education Ministry'),
      contact: 'education@cicm.or.tz',
    },
    {
      id: 5,
      title: t('events.calendar.decemberChristmas.title', 'Christmas Celebration'),
      date: t('events.calendar.decemberChristmas.date', 'December 25, 2025'),
      type: t('events.calendar.decemberChristmas.type', 'Holiday'),
      location: t('events.calendar.decemberChristmas.location', 'All Communities'),
      description: t('events.calendar.decemberChristmas.description', 'Christmas celebrations across all our communities with orphans and elderly.'),
      capacity: t('events.calendar.decemberChristmas.capacity', 'All Welcome'),
      status: 'upcoming',
      registrationOpen: false,
      fee: 'Free',
      organizer: t('events.calendar.decemberChristmas.organizer', 'Community Life'),
      contact: 'info@cicm.or.tz',
    },
    {
      id: 6,
      title: t('events.calendar.aprilEaster.title', 'Easter Triduum'),
      date: t('events.calendar.aprilEaster.date', 'April 17-20, 2025'),
      type: t('events.calendar.aprilEaster.type', 'Liturgical'),
      location: t('events.calendar.aprilEaster.location', 'All Parishes'),
      description: t('events.calendar.aprilEaster.description', 'Holy Week services and Easter celebrations in our parishes.'),
      capacity: t('events.calendar.aprilEaster.capacity', 'All Welcome'),
      status: 'past',
      registrationOpen: false,
      fee: 'Free',
      organizer: t('events.calendar.aprilEaster.organizer', 'Liturgy Office'),
      contact: 'liturgy@cicm.or.tz',
    },
  ];

  // Event types for filtering
  const eventTypes = [
    { type: 'all', label: t('events.filter.all', 'All Events'), icon: <Event /> },
    { type: 'spiritual', label: t('events.filter.spiritual', 'Spiritual'), icon: <Church /> },
    { type: 'celebration', label: t('events.filter.celebration', 'Celebration'), icon: <Cake /> },
    { type: 'formation', label: t('events.filter.formation', 'Formation'), icon: <School /> },
    { type: 'liturgical', label: t('events.filter.liturgical', 'Liturgical'), icon: <EmojiEvents /> },
    { type: 'community', label: t('events.filter.community', 'Community'), icon: <Groups /> },
    { type: 'education', label: t('events.filter.education', 'Education'), icon: <School /> },
    { type: 'healthcare', label: t('events.filter.healthcare', 'Healthcare'), icon: <HealthAndSafety /> },
  ];

  // Monthly calendar view data
  const currentMonth = t('events.calendar.months.june', 'June 2025');
  const calendarDays = [
    { day: 1, events: [] },
    { day: 2, events: [{ id: 1, title: t('events.calendar.day2', 'Retreat Begins'), type: 'spiritual' }] },
    { day: 3, events: [] },
    { day: 4, events: [] },
    { day: 5, events: [] },
    { day: 6, events: [] },
    { day: 7, events: [] },
    { day: 8, events: [] },
    { day: 9, events: [] },
    { day: 10, events: [] },
    { day: 11, events: [] },
    { day: 12, events: [] },
    { day: 13, events: [] },
    { day: 14, events: [] },
    { day: 15, events: [] },
    { day: 16, events: [] },
    { day: 17, events: [] },
    { day: 18, events: [] },
    { day: 19, events: [] },
    { day: 20, events: [] },
    { day: 21, events: [] },
    { day: 22, events: [{ id: 2, title: t('events.calendar.day22', 'Vows & Jubilee'), type: 'celebration' }] },
    { day: 23, events: [] },
    { day: 24, events: [] },
    { day: 25, events: [] },
    { day: 26, events: [] },
    { day: 27, events: [{ id: 1, title: t('events.calendar.day27', 'Retreat Ends'), type: 'spiritual' }] },
    { day: 28, events: [] },
    { day: 29, events: [] },
    { day: 30, events: [] },
  ];

  // Upcoming retreats & workshops
  const retreatsWorkshops = [
    {
      title: t('events.retreats.youth.title', 'Youth Leadership Retreat'),
      date: t('events.retreats.youth.date', 'July 15-20, 2025'),
      location: t('events.retreats.youth.location', 'Amabilis Conference Centre'),
      fee: t('events.retreats.youth.fee', 'TZS 50,000'),
      description: t('events.retreats.youth.description', 'Leadership development retreat for Catholic youth leaders ages 18-30.'),
      capacity: t('events.retreats.youth.capacity', '50 participants'),
      deadline: t('events.retreats.youth.deadline', 'July 1, 2025'),
    },
    {
      title: t('events.retreats.marriage.title', 'Marriage Enrichment Workshop'),
      date: t('events.retreats.marriage.date', 'August 5-7, 2025'),
      location: t('events.retreats.marriage.location', 'Mgolole Mother House'),
      fee: t('events.retreats.marriage.fee', 'TZS 30,000/couple'),
      description: t('events.retreats.marriage.description', 'Workshop for married couples focusing on communication and spiritual growth.'),
      capacity: t('events.retreats.marriage.capacity', '25 couples'),
      deadline: t('events.retreats.marriage.deadline', 'July 25, 2025'),
    },
    {
      title: t('events.retreats.teachers.title', 'Teachers\' Spiritual Retreat'),
      date: t('events.retreats.teachers.date', 'September 20-22, 2025'),
      location: t('events.retreats.teachers.location', 'St. Theresa School'),
      fee: t('events.retreats.teachers.fee', 'TZS 20,000'),
      description: t('events.retreats.teachers.description', 'Retreat for teachers from Catholic schools focusing on vocation and service.'),
      capacity: t('events.retreats.teachers.capacity', '40 teachers'),
      deadline: t('events.retreats.teachers.deadline', 'September 10, 2025'),
    },
  ];

  // Anniversaries & celebrations
  const anniversaries = [
    {
      title: t('events.anniversaries.foundation.title', '88th Foundation Anniversary'),
      date: t('events.anniversaries.foundation.date', 'December 8, 2025'),
      years: '88',
      description: t('events.anniversaries.foundation.description', 'Celebrating 88 years since the founding of our congregation in 1937.'),
      type: 'congregation',
    },
    {
      title: t('events.anniversaries.motherGeneral.title', 'Mother General\'s Jubilee'),
      date: t('events.anniversaries.motherGeneral.date', 'August 22, 2025'),
      years: '25',
      description: t('events.anniversaries.motherGeneral.description', '25 years of religious life for our Mother General, Sr. Pudensiana Kibena.'),
      type: 'personal',
    },
    {
      title: t('events.anniversaries.school.title', '50th School Anniversary'),
      date: t('events.anniversaries.school.date', 'October 15, 2025'),
      years: '50',
      description: t('events.anniversaries.school.description', '50 years of Bernard Hilhorst Secondary School serving the community.'),
      type: 'institution',
    },
    {
      title: t('events.anniversaries.healthcentre.title', '40th Health Centre Anniversary'),
      date: t('events.anniversaries.healthcentre.date', 'November 3, 2025'),
      years: '40',
      description: t('events.anniversaries.healthcentre.description', '40 years of Mgolole Health Centre providing healthcare services.'),
      type: 'institution',
    },
  ];

  // Event categories for quick filtering
  const getEventColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'spiritual': return theme.palette.primary.main;
      case 'celebration': return theme.palette.secondary.main;
      case 'formation': return theme.palette.info.main;
      case 'liturgical': return theme.palette.warning.main;
      case 'community': return theme.palette.success.main;
      case 'education': return '#9C27B0';
      case 'healthcare': return '#00BCD4';
      default: return theme.palette.grey[500];
    }
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
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
            {t('events.hero.title', 'Events & Calendar')}
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
            {t('events.hero.subtitle', 'Join Us in Celebration, Prayer, and Community Building')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              label={t('events.hero.tag1', 'Upcoming Events')}
              icon={<EventAvailable />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('events.hero.tag2', 'Retreats & Workshops')}
              icon={<School />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('events.hero.tag3', 'Anniversaries')}
              icon={<Cake />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('events.hero.tag4', 'Community Events')}
              icon={<Groups />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Event Filter Tabs */}
        <Paper elevation={2} sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              bgcolor: 'background.paper',
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTab-root': {
                fontWeight: 600,
                py: 2,
                minHeight: 64
              }
            }}
          >
            <Tab 
              icon={<CalendarToday />} 
              label={t('events.tabs.calendar', 'Calendar')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<Event />} 
              label={t('events.tabs.upcoming', 'Upcoming')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<School />} 
              label={t('events.tabs.retreats', 'Retreats')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<Cake />} 
              label={t('events.tabs.anniversaries', 'Anniversaries')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<Groups />} 
              label={t('events.tabs.community', 'Community')} 
              iconPosition="start" 
            />
          </Tabs>

          {/* Calendar View Tab */}
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {currentMonth}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button startIcon={<Today />} size="small">
                      {t('events.calendar.today', 'Today')}
                    </Button>
                    <Button startIcon={<CalendarViewMonth />} size="small">
                      {t('events.calendar.month', 'Month')}
                    </Button>
                    <Button startIcon={<ViewWeek />} size="small">
                      {t('events.calendar.week', 'Week')}
                    </Button>
                  </Box>
                </Box>

                {/* Calendar Grid */}
                <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                  <Grid container sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <Grid size={{ xs: 1.714 }} key={day} sx={{ py: 2, textAlign: 'center' }}>
                        <Typography variant="body2" fontWeight={600}>
                          {t(`events.calendar.days.${day.toLowerCase()}`, day)}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Grid container>
                    {calendarDays.map((dayObj) => (
                      <Grid 
                        size={{ xs: 1.714 }} 
                        key={dayObj.day}
                        sx={{
                          minHeight: 100,
                          borderRight: 1,
                          borderBottom: 1,
                          borderColor: 'divider',
                          p: 1,
                          position: 'relative',
                          '&:nth-of-type(7n)': {
                            borderRight: 0
                          }
                        }}
                      >
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          {dayObj.day}
                        </Typography>
                        {dayObj.events.map((event: any) => (
                          <Chip
                            key={event.id}
                            label={event.title}
                            size="small"
                            sx={{
                              width: '100%',
                              mb: 0.5,
                              bgcolor: alpha(getEventColor(event.type), 0.1),
                              color: getEventColor(event.type),
                              fontSize: '0.7rem',
                              height: 'auto',
                              py: 0.5,
                              '& .MuiChip-label': {
                                whiteSpace: 'normal',
                                textAlign: 'left'
                              }
                            }}
                          />
                        ))}
                      </Grid>
                    ))}
                  </Grid>
                </Paper>

                {/* Upcoming Events List */}
                <Typography variant="h5" sx={{ fontWeight: 700, mt: 6, mb: 3, color: 'primary.main' }}>
                  {t('events.calendar.upcoming', 'Upcoming Events This Month')}
                </Typography>
                
                <Grid container spacing={3}>
                  {calendarEvents
                    .filter(event => event.status === 'upcoming')
                    .slice(0, 3)
                    .map((event) => (
                      <Grid size={{ xs: 12, md: 4 }} key={event.id}>
                        <Card 
                          elevation={1}
                          sx={{ 
                            height: '100%',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: 4,
                            }
                          }}
                          onClick={() => handleEventClick(event)}
                        >
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                              <Avatar sx={{ bgcolor: alpha(getEventColor(event.type), 0.1), color: getEventColor(event.type), mr: 2 }}>
                                <Event />
                              </Avatar>
                              <Box>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                  {event.title}
                                </Typography>
                                <Chip 
                                  label={event.type}
                                  size="small"
                                  sx={{ 
                                    bgcolor: alpha(getEventColor(event.type), 0.1),
                                    color: getEventColor(event.type)
                                  }}
                                />
                              </Box>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <CalendarToday sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                              <Typography variant="body2" color="text.secondary">
                                {event.date}
                              </Typography>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                              <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                              <Typography variant="body2" color="text.secondary">
                                {event.location}
                              </Typography>
                            </Box>
                            
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                              {event.description.substring(0, 80)}...
                            </Typography>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <People sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                              <Typography variant="caption" color="text.secondary">
                                {event.capacity}
                              </Typography>
                            </Box>
                          </CardContent>
                          <CardActions sx={{ p: 2, pt: 0 }}>
                            <Button size="small" color="primary" fullWidth>
                              {t('events.calendar.viewDetails', 'View Details')}
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
              </Grid>
              
              <Grid size={{ xs: 12, md: 4 }}>
                {/* Event Filters */}
                <Card elevation={3} sx={{ mb: 4 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('events.filter.title', 'Filter Events')}
                    </Typography>
                    
                    <TextField
                      fullWidth
                      placeholder={t('events.filter.search', 'Search events...')}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ mb: 3 }}
                    />
                    
                    <FormControl component="fieldset" sx={{ mb: 3 }}>
                      <FormLabel component="legend">
                        {t('events.filter.eventType', 'Event Type')}
                      </FormLabel>
                      <RadioGroup defaultValue="all">
                        {eventTypes.map((type) => (
                          <FormControlLabel
                            key={type.type}
                            value={type.type}
                            control={<Radio size="small" />}
                            label={
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {type.icon}
                                <Typography variant="body2">{type.label}</Typography>
                              </Box>
                            }
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                    
                    <FormControl component="fieldset" sx={{ mb: 3 }}>
                      <FormLabel component="legend">
                        {t('events.filter.status', 'Event Status')}
                      </FormLabel>
                      <RadioGroup defaultValue="upcoming">
                        <FormControlLabel
                          value="upcoming"
                          control={<Radio size="small" />}
                          label={t('events.filter.upcoming', 'Upcoming')}
                        />
                        <FormControlLabel
                          value="past"
                          control={<Radio size="small" />}
                          label={t('events.filter.past', 'Past Events')}
                        />
                        <FormControlLabel
                          value="all"
                          control={<Radio size="small" />}
                          label={t('events.filter.allEvents', 'All Events')}
                        />
                      </RadioGroup>
                    </FormControl>
                    
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      startIcon={<FilterList />}
                    >
                      {t('events.filter.apply', 'Apply Filters')}
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Subscribe to Calendar */}
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      {t('events.subscribe.title', 'Stay Updated')}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                      {t('events.subscribe.description', 'Subscribe to our calendar to get event updates and reminders.')}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<CalendarToday />}
                      >
                        {t('events.subscribe.google', 'Add to Google Calendar')}
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<Download />}
                      >
                        {t('events.subscribe.ical', 'Download iCal File')}
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Notifications />}
                      >
                        {t('events.subscribe.notify', 'Get Notifications')}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Upcoming Events Tab */}
          <TabPanel value={tabValue} index={1}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
              {t('events.upcoming.title', 'Upcoming Events')}
            </Typography>
            
            <Grid container spacing={4}>
              {calendarEvents
                .filter(event => event.status === 'upcoming')
                .map((event) => (
                  <Grid size={{ xs: 12, md: 6 }} key={event.id}>
                    <Card 
                      elevation={2}
                      sx={{ 
                        height: '100%',
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 6,
                        }
                      }}
                      onClick={() => handleEventClick(event)}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                          <Box>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
                              {event.title}
                            </Typography>
                            <Chip 
                              label={event.type}
                              sx={{ 
                                bgcolor: alpha(getEventColor(event.type), 0.1),
                                color: getEventColor(event.type)
                              }}
                            />
                          </Box>
                          {event.registrationOpen && (
                            <Chip 
                              label={t('events.upcoming.registrationOpen', 'Registration Open')}
                              color="success"
                              size="small"
                            />
                          )}
                        </Box>
                        
                        <Grid container spacing={2} sx={{ mb: 3 }}>
                          <Grid size={{ xs: 6 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <CalendarToday sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                              <Typography variant="body2" color="text.secondary">
                                {event.date}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid size={{ xs: 6 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                              <Typography variant="body2" color="text.secondary">
                                {event.location}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid size={{ xs: 6 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <People sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                              <Typography variant="body2" color="text.secondary">
                                {event.capacity}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid size={{ xs: 6 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Payment sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                              <Typography variant="body2" color="text.secondary">
                                {event.fee}
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                        
                        <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                          {event.description}
                        </Typography>
                        
                        <Divider sx={{ my: 2 }} />
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="caption" color="text.secondary">
                            {t('events.upcoming.organizedBy', 'Organized by')}: {event.organizer}
                          </Typography>
                          <Button 
                            size="small" 
                            color="primary"
                            endIcon={<ArrowForward />}
                          >
                            {t('events.upcoming.register', 'Register Now')}
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
            
            {/* Past Events */}
            <Typography variant="h4" sx={{ fontWeight: 700, mt: 8, mb: 4, color: 'primary.main' }}>
              {t('events.past.title', 'Past Events')}
            </Typography>
            
            <Grid container spacing={3}>
              {calendarEvents
                .filter(event => event.status === 'past')
                .map((event) => (
                  <Grid size={{ xs: 12, md: 4 }} key={event.id}>
                    <Card elevation={1}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {event.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                          {event.date} • {event.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {event.description.substring(0, 100)}...
                        </Typography>
                        <Button 
                          size="small" 
                          color="primary"
                          startIcon={<Bookmark />}
                        >
                          {t('events.past.viewPhotos', 'View Photos')}
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </TabPanel>

          {/* Retreats & Workshops Tab */}
          <TabPanel value={tabValue} index={2}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
              {t('events.retreats.title', 'Retreats & Workshops')}
            </Typography>
            
            <Grid container spacing={4}>
              {retreatsWorkshops.map((retreat, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                  <Card elevation={3} sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                        {retreat.title}
                      </Typography>
                      
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <CalendarToday sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {retreat.date}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {retreat.location}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <People sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {retreat.capacity}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Payment sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {retreat.fee}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                        {retreat.description}
                      </Typography>
                      
                      <Box sx={{ p: 2, bgcolor: alpha(theme.palette.warning.main, 0.1), borderRadius: 2, mb: 3 }}>
                        <Typography variant="body2" sx={{ color: 'warning.dark', textAlign: 'center' }}>
                          {t('events.retreats.deadline', 'Registration Deadline')}: {retreat.deadline}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button variant="contained" color="primary" fullWidth>
                        {t('events.retreats.register', 'Register Now')}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            {/* Retreat Facilities */}
            <Paper sx={{ mt: 6, p: 4, borderRadius: 3, bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                {t('events.retreats.facilities.title', 'Our Retreat Facilities')}
              </Typography>
              
              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                    {t('events.retreats.facilities.description', 'We offer excellent facilities for retreats, workshops, and conferences at our Amabilis Conference Centre and other locations.')}
                  </Typography>
                  
                  <List>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Hotel sx={{ color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={t('events.retreats.facilities.accommodation', 'Comfortable Accommodation')}
                        secondary={t('events.retreats.facilities.accommodationDesc', 'Single & double rooms with private bathrooms')}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Restaurant sx={{ color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={t('events.retreats.facilities.catering', 'Full Catering Services')}
                        secondary={t('events.retreats.facilities.cateringDesc', 'Delicious meals with dietary options available')}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Wifi sx={{ color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={t('events.retreats.facilities.amenities', 'Modern Amenities')}
                        secondary={t('events.retreats.facilities.amenitiesDesc', 'WiFi, audio-visual equipment, transportation')}
                      />
                    </ListItem>
                  </List>
                </Grid>
                
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card elevation={2}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                        {t('events.retreats.facilities.booking', 'Book a Retreat')}
                      </Typography>
                      
                      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                        {t('events.retreats.facilities.bookingDesc', 'Interested in booking our facilities for your group retreat or workshop? Contact us for availability and rates.')}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<ContactMail />}
                          onClick={() => window.location.href = 'mailto:conference@cicm.or.tz'}
                        >
                          {t('events.retreats.facilities.email', 'Email for Booking')}
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<ContactPhone />}
                          onClick={() => window.location.href = 'tel:+255123456700'}
                        >
                          {t('events.retreats.facilities.call', 'Call for Information')}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </TabPanel>

          {/* Anniversaries Tab */}
          <TabPanel value={tabValue} index={3}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
              {t('events.anniversaries.title', 'Anniversaries & Celebrations')}
            </Typography>
            
            <Grid container spacing={4}>
              {anniversaries.map((anniversary, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <Card elevation={2}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar sx={{ 
                          bgcolor: alpha(theme.palette.secondary.main, 0.1), 
                          color: 'secondary.main',
                          width: 60,
                          height: 60,
                          mr: 2
                        }}>
                          <Typography variant="h5" fontWeight={700}>
                            {anniversary.years}
                          </Typography>
                        </Avatar>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            {anniversary.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {anniversary.date}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                        {anniversary.description}
                      </Typography>
                      
                      <Chip 
                        label={
                          anniversary.type === 'congregation' 
                            ? t('events.anniversaries.type.congregation', 'Congregation') 
                            : anniversary.type === 'personal'
                            ? t('events.anniversaries.type.personal', 'Personal')
                            : t('events.anniversaries.type.institution', 'Institution')
                        }
                        sx={{ 
                          bgcolor: alpha(
                            anniversary.type === 'congregation' 
                              ? theme.palette.primary.main
                              : anniversary.type === 'personal'
                              ? theme.palette.secondary.main
                              : theme.palette.info.main,
                            0.1
                          ),
                          color: 
                            anniversary.type === 'congregation' 
                              ? theme.palette.primary.main
                              : anniversary.type === 'personal'
                              ? theme.palette.secondary.main
                              : theme.palette.info.main
                        }}
                      />
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button size="small" color="primary" startIcon={<Favorite />}>
                        {t('events.anniversaries.sendGreeting', 'Send Greeting')}
                      </Button>
                      <Button size="small" color="secondary" startIcon={<Share />}>
                        {t('events.anniversaries.share', 'Share')}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            {/* Milestone Timeline */}
            <Paper sx={{ mt: 6, p: 4, borderRadius: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
                {t('events.anniversaries.timeline.title', 'Congregation Milestones')}
              </Typography>
              
              <Stepper orientation="vertical" sx={{ position: 'relative' }}>
                {[
                  { year: '1937', event: t('events.anniversaries.timeline.founding', 'Congregation Founded') },
                  { year: '1939', event: t('events.anniversaries.timeline.firstVows', 'First Vows Professed') },
                  { year: '1950', event: t('events.anniversaries.timeline.firstSchool', 'First School Opened') },
                  { year: '1960', event: t('events.anniversaries.timeline.healthCentre', 'First Health Centre') },
                  { year: '1975', event: t('events.anniversaries.timeline.secondarySchool', 'Secondary School Established') },
                  { year: '2000', event: t('events.anniversaries.timeline.expansion', 'Expansion to Other Dioceses') },
                  { year: '2012', event: t('events.anniversaries.timeline.conference', 'Conference Centre Built') },
                  { year: '2025', event: t('events.anniversaries.timeline.current', 'Current Year') },
                ].map((milestone, index) => (
                  <Step key={index} active={true}>
                    <StepLabel 
                      StepIconComponent={() => (
                        <Avatar sx={{ bgcolor: 'primary.main', color: 'white' }}>
                          {milestone.year}
                        </Avatar>
                      )}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {milestone.event}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('events.anniversaries.timeline.year', 'Year')}: {milestone.year}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Paper>
          </TabPanel>

          {/* Community Events Tab */}
          <TabPanel value={tabValue} index={4}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
              {t('events.community.title', 'Community Events')}
            </Typography>
            
            <Grid container spacing={4}>
              {/* Regular Community Activities */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                      {t('events.community.regular.title', 'Regular Activities')}
                    </Typography>
                    
                    <List>
                      {[
                        { day: t('events.community.days.sunday', 'Sunday'), activity: t('events.community.activities.mass', 'Community Mass & Fellowship') },
                        { day: t('events.community.days.monday', 'Monday'), activity: t('events.community.activities.prayer', 'Evening Prayer Group') },
                        { day: t('events.community.days.tuesday', 'Tuesday'), activity: t('events.community.activities.bible', 'Bible Study Session') },
                        { day: t('events.community.days.wednesday', 'Wednesday'), activity: t('events.community.activities.youth', 'Youth Gathering') },
                        { day: t('events.community.days.thursday', 'Thursday'), activity: t('events.community.activities.charity', 'Charity Outreach') },
                        { day: t('events.community.days.friday', 'Friday'), activity: t('events.community.activities.adoration', 'Eucharistic Adoration') },
                        { day: t('events.community.days.saturday', 'Saturday'), activity: t('events.community.activities.family', 'Family Day Activities') },
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            <CalendarToday sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={
                              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body1" fontWeight={600}>
                                  {item.day}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {item.activity}
                                </Typography>
                              </Box>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              
              {/* Volunteer Opportunities */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                      {t('events.community.volunteer.title', 'Volunteer Events')}
                    </Typography>
                    
                    <Grid container spacing={3}>
                      {[
                        {
                          title: t('events.community.volunteer.orphanage', 'Orphanage Visit Day'),
                          date: t('events.community.volunteer.orphanageDate', 'Every 2nd Saturday'),
                          description: t('events.community.volunteer.orphanageDesc', 'Spend time with children at our orphanage'),
                        },
                        {
                          title: t('events.community.volunteer.elderly', 'Elderly Care Day'),
                          date: t('events.community.volunteer.elderlyDate', 'Monthly'),
                          description: t('events.community.volunteer.elderlyDesc', 'Visit and assist elderly in our care homes'),
                        },
                        {
                          title: t('events.community.volunteer.farming', 'Community Farming'),
                          date: t('events.community.volunteer.farmingDate', 'Seasonal'),
                          description: t('events.community.volunteer.farmingDesc', 'Help with farming activities at our projects'),
                        },
                        {
                          title: t('events.community.volunteer.cleanup', 'Environmental Cleanup'),
                          date: t('events.community.volunteer.cleanupDate', 'Quarterly'),
                          description: t('events.community.volunteer.cleanupDesc', 'Community environmental conservation activities'),
                        },
                      ].map((event, index) => (
                        <Grid size={{ xs: 12 }} key={index}>
                          <Paper sx={{ p: 2, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                              {event.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                              {event.date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {event.description}
                            </Typography>
                            <Button size="small" color="primary" sx={{ mt: 1 }}>
                              {t('events.community.volunteer.join', 'Join')}
                            </Button>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
            {/* Community Impact */}
            <Paper sx={{ mt: 6, p: 4, borderRadius: 3, bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                {t('events.community.impact.title', 'Community Impact')}
              </Typography>
              
              <Grid container spacing={4}>
                {[
                  { value: '500+', label: t('events.community.impact.monthly', 'Monthly Participants') },
                  { value: '50', label: t('events.community.impact.events', 'Annual Events') },
                  { value: '15', label: t('events.community.impact.communities', 'Communities Served') },
                  { value: '1000+', label: t('events.community.impact.volunteers', 'Active Volunteers') },
                ].map((stat, index) => (
                  <Grid size={{ xs: 6, md: 3 }} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h2" sx={{ fontWeight: 900, color: 'primary.main' }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </TabPanel>
        </Paper>

        {/* Event Registration Dialog */}
        <Dialog 
          open={eventDialogOpen} 
          onClose={handleCloseEventDialog}
          maxWidth="md"
          fullWidth
        >
          {selectedEvent && (
            <>
              <DialogTitle>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  {selectedEvent.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {selectedEvent.date} • {selectedEvent.location}
                </Typography>
              </DialogTitle>
              
              <DialogContent>
                <Grid container spacing={4}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      {t('events.registration.details', 'Event Details')}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                      {selectedEvent.description}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <People sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {t('events.registration.capacity', 'Capacity')}: {selectedEvent.capacity}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Payment sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {t('events.registration.fee', 'Fee')}: {selectedEvent.fee}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <ContactMail sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {t('events.registration.contact', 'Contact')}: {selectedEvent.contact}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {selectedEvent.location}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<Map />}
                      fullWidth
                      sx={{ mb: 2 }}
                      onClick={() => window.open(`https://maps.google.com/?q=${selectedEvent.location}`, '_blank')}
                    >
                      {t('events.registration.getDirections', 'Get Directions')}
                    </Button>
                  </Grid>
                  
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('events.registration.form', 'Registration Form')}
                    </Typography>
                    
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label={t('events.registration.name', 'Full Name')}
                          name="name"
                          value={registrationForm.name}
                          onChange={handleRegistrationChange}
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label={t('events.registration.email', 'Email')}
                          name="email"
                          type="email"
                          value={registrationForm.email}
                          onChange={handleRegistrationChange}
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label={t('events.registration.phone', 'Phone')}
                          name="phone"
                          value={registrationForm.phone}
                          onChange={handleRegistrationChange}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label={t('events.registration.attendees', 'Number of Attendees')}
                          name="attendees"
                          type="number"
                          value={registrationForm.attendees}
                          onChange={handleRegistrationChange}
                          InputProps={{
                            inputProps: { min: 1, max: 10 }
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label={t('events.registration.dietary', 'Dietary Requirements (if any)')}
                          name="dietary"
                          value={registrationForm.dietary}
                          onChange={handleRegistrationChange}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <FormControl component="fieldset" sx={{ width: '100%' }}>
                          <FormLabel component="legend">
                            {t('events.registration.accommodation', 'Need Accommodation?')}
                          </FormLabel>
                          <RadioGroup
                            row
                            name="accommodation"
                            value={registrationForm.accommodation}
                            onChange={handleRegistrationChange}
                          >
                            <FormControlLabel value="yes" control={<Radio />} label={t('events.registration.yes', 'Yes')} />
                            <FormControlLabel value="no" control={<Radio />} label={t('events.registration.no', 'No')} />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label={t('events.registration.comments', 'Additional Comments')}
                          name="comments"
                          value={registrationForm.comments}
                          onChange={handleRegistrationChange}
                          multiline
                          rows={3}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
              
              <DialogActions sx={{ p: 3, pt: 0 }}>
                <Button onClick={handleCloseEventDialog} color="inherit">
                  {t('events.registration.cancel', 'Cancel')}
                </Button>
                <Button
                  onClick={handleSubmitRegistration}
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <CheckCircle />}
                >
                  {loading 
                    ? t('events.registration.processing', 'Processing...') 
                    : t('events.registration.submit', 'Submit Registration')}
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Download Calendar */}
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
            {t('events.download.title', 'Stay Connected')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
            {t('events.download.description', 'Download our event calendar or subscribe to stay updated with all our activities.')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<Download />}
            >
              {t('events.download.calendar', 'Download Calendar')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<Notifications />}
            >
              {t('events.download.notify', 'Get Notifications')}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<Share />}
            >
              {t('events.download.share', 'Share Calendar')}
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

export default Events;