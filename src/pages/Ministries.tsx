import React from 'react';
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  alpha,
  useTheme,
  Divider,
  Stack,
  Tab,
  Tabs,
} from '@mui/material';
import {
  ExpandMore,
  School,
  HealthAndSafety,
  FamilyRestroom,
  Church,
  LocationOn,
  Phone,
  Email,
  AccessTime,
  People,
  Book,
  MedicalServices,
  ChildCare,
  Group,
  ArrowForward,
  Map,
  Call,
  Public,
  Star,
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
      id={`ministry-tabpanel-${index}`}
      aria-labelledby={`ministry-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const Ministries = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [tabValue, setTabValue] = React.useState(0);
  const [expandedAccordion, setExpandedAccordion] = React.useState<string | false>(false);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  // Evangelization activities
  const evangelizationActivities = [
    {
      title: t('ministries.evangelization.activities.catechism.title', 'Catechism Teaching'),
      description: t('ministries.evangelization.activities.catechism.description', 'Teaching Catholic catechism to primary and secondary school students in various schools across our service areas.'),
      icon: <Book />,
      details: [
        t('ministries.evangelization.activities.catechism.detail1', 'Age-appropriate curriculum'),
        t('ministries.evangelization.activities.catechism.detail2', 'Interactive teaching methods'),
        t('ministries.evangelization.activities.catechism.detail3', 'Preparation for sacraments'),
      ],
    },
    {
      title: t('ministries.evangelization.activities.baptism.title', 'Baptism Preparation'),
      description: t('ministries.evangelization.activities.baptism.description', 'Providing comprehensive baptism teachings for catechumens in parishes, preparing them for the sacrament of initiation.'),
      icon: <Church />,
      details: [
        t('ministries.evangelization.activities.baptism.detail1', 'Scripture-based instruction'),
        t('ministries.evangelization.activities.baptism.detail2', 'Sacramental theology'),
        t('ministries.evangelization.activities.baptism.detail3', 'Practical guidance for godparents'),
      ],
    },
    {
      title: t('ministries.evangelization.activities.sacraments.title', 'Sacramental Preparation'),
      description: t('ministries.evangelization.activities.sacraments.description', 'Teaching first communion and confirmation preparation in parishes, guiding candidates through their spiritual journey.'),
      icon: <Group />,
      details: [
        t('ministries.evangelization.activities.sacraments.detail1', 'First Communion classes'),
        t('ministries.evangelization.activities.sacraments.detail2', 'Confirmation retreats'),
        t('ministries.evangelization.activities.sacraments.detail3', 'Ongoing spiritual formation'),
      ],
    },
  ];

  // Schools data
  const schools = [
    {
      name: t('ministries.education.schools.bernardHilhorst.name', 'Bernard Hilhorst Secondary School'),
      location: t('ministries.education.schools.bernardHilhorst.location', 'Mgolole, Morogoro'),
      level: t('ministries.education.schools.bernardHilhorst.level', 'Secondary School'),
      founded: '1975',
      students: '850+',
      programs: [
        t('ministries.education.schools.bernardHilhorst.program1', 'Form 1-6 Education'),
        t('ministries.education.schools.bernardHilhorst.program2', 'Science & Arts Streams'),
        t('ministries.education.schools.bernardHilhorst.program3', 'Vocational Training'),
      ],
      contact: '+255 123 456 789',
    },
    {
      name: t('ministries.education.schools.stPeterClavery.name', 'St. Peter Clavery Pre and Primary School'),
      location: t('ministries.education.schools.stPeterClavery.location', 'Mikumi, Morogoro'),
      level: t('ministries.education.schools.stPeterClavery.level', 'Pre & Primary School'),
      founded: '1982',
      students: '600+',
      programs: [
        t('ministries.education.schools.stPeterClavery.program1', 'Nursery Education'),
        t('ministries.education.schools.stPeterClavery.program2', 'Standard 1-7'),
        t('ministries.education.schools.stPeterClavery.program3', 'After-school Programs'),
      ],
      contact: '+255 123 456 790',
    },
    {
      name: t('ministries.education.schools.stTheresa.name', 'St. Theresa of the Child Jesus Secondary School'),
      location: t('ministries.education.schools.stTheresa.location', 'Mgolole, Morogoro'),
      level: t('ministries.education.schools.stTheresa.level', 'Girls Secondary School'),
      founded: '1995',
      students: '720+',
      programs: [
        t('ministries.education.schools.stTheresa.program1', 'All-girls Education'),
        t('ministries.education.schools.stTheresa.program2', 'STEM Focus'),
        t('ministries.education.schools.stTheresa.program3', 'Leadership Development'),
      ],
      contact: '+255 123 456 791',
    },
    {
      name: t('ministries.education.schools.stAnthony.name', 'St. Anthonio De Padova Pre and Primary School'),
      location: t('ministries.education.schools.stAnthony.location', 'Mzumbe, Morogoro'),
      level: t('ministries.education.schools.stAnthony.level', 'Pre & Primary School'),
      founded: '2000',
      students: '550+',
      programs: [
        t('ministries.education.schools.stAnthony.program1', 'Early Childhood Education'),
        t('ministries.education.schools.stAnthony.program2', 'Primary Education'),
        t('ministries.education.schools.stAnthony.program3', 'Special Needs Support'),
      ],
      contact: '+255 123 456 792',
    },
  ];

  // Healthcare facilities
  const healthcareFacilities = [
    {
      name: t('ministries.healthcare.facilities.mgolole.name', 'Mgolole Health Centre'),
      location: t('ministries.healthcare.facilities.mgolole.location', 'Mgolole, Morogoro'),
      type: t('ministries.healthcare.facilities.mgolole.type', 'Health Centre'),
      services: [
        t('ministries.healthcare.facilities.mgolole.service1', 'Outpatient Services'),
        t('ministries.healthcare.facilities.mgolole.service2', 'Maternal & Child Health'),
        t('ministries.healthcare.facilities.mgolole.service3', 'Laboratory Services'),
        t('ministries.healthcare.facilities.mgolole.service4', 'Pharmacy'),
      ],
      hours: t('ministries.healthcare.facilities.mgolole.hours', '24/7 Emergency Services'),
      contact: '+255 123 456 793',
    },
    {
      name: t('ministries.healthcare.facilities.milama.name', 'Milama Health Centre'),
      location: t('ministries.healthcare.facilities.milama.location', 'Mvomero, Morogoro'),
      type: t('ministries.healthcare.facilities.milama.type', 'Health Centre'),
      services: [
        t('ministries.healthcare.facilities.milama.service1', 'General Medicine'),
        t('ministries.healthcare.facilities.milama.service2', 'HIV/AIDS Care'),
        t('ministries.healthcare.facilities.milama.service3', 'Nutrition Services'),
      ],
      hours: t('ministries.healthcare.facilities.milama.hours', 'Mon-Sat: 8AM-6PM'),
      contact: '+255 123 456 794',
    },
    {
      name: t('ministries.healthcare.facilities.stCarol.name', 'St. Carol Lwanga Dispensary'),
      location: t('ministries.healthcare.facilities.stCarol.location', 'Area 5 Kichangani, Morogoro'),
      type: t('ministries.healthcare.facilities.stCarol.type', 'Dispensary'),
      services: [
        t('ministries.healthcare.facilities.stCarol.service1', 'Primary Healthcare'),
        t('ministries.healthcare.facilities.stCarol.service2', 'Immunization'),
        t('ministries.healthcare.facilities.stCarol.service3', 'Health Education'),
      ],
      hours: t('ministries.healthcare.facilities.stCarol.hours', 'Mon-Fri: 8AM-4PM'),
      contact: '+255 123 456 795',
    },
    {
      name: t('ministries.healthcare.facilities.stMathias.name', 'St. Mathias Dispensary'),
      location: t('ministries.healthcare.facilities.stMathias.location', 'Kiloka, Morogoro'),
      type: t('ministries.healthcare.facilities.stMathias.type', 'Dispensary'),
      services: [
        t('ministries.healthcare.facilities.stMathias.service1', 'Basic Medical Care'),
        t('ministries.healthcare.facilities.stMathias.service2', 'Antenatal Care'),
        t('ministries.healthcare.facilities.stMathias.service3', 'TB Treatment'),
      ],
      hours: t('ministries.healthcare.facilities.stMathias.hours', 'Mon-Fri: 8AM-4PM'),
      contact: '+255 123 456 796',
    },
    {
      name: t('ministries.healthcare.facilities.stAgnes.name', 'St. Agnes Dispensary'),
      location: t('ministries.healthcare.facilities.stAgnes.location', 'Lugono, Morogoro'),
      type: t('ministries.healthcare.facilities.stAgnes.type', 'Dispensary'),
      services: [
        t('ministries.healthcare.facilities.stAgnes.service1', 'Outpatient Care'),
        t('ministries.healthcare.facilities.stAgnes.service2', 'Family Planning'),
        t('ministries.healthcare.facilities.stAgnes.service3', 'Malaria Treatment'),
      ],
      hours: t('ministries.healthcare.facilities.stAgnes.hours', 'Mon-Fri: 8AM-4PM'),
      contact: '+255 123 456 797',
    },
    {
      name: t('ministries.healthcare.facilities.stPeterClaveryHC.name', 'St. Peter Clavery Health Centre'),
      location: t('ministries.healthcare.facilities.stPeterClaveryHC.location', 'Kisesa, Magu, Mwanza'),
      type: t('ministries.healthcare.facilities.stPeterClaveryHC.type', 'Health Centre'),
      services: [
        t('ministries.healthcare.facilities.stPeterClaveryHC.service1', 'Comprehensive Healthcare'),
        t('ministries.healthcare.facilities.stPeterClaveryHC.service2', 'Minor Surgery'),
        t('ministries.healthcare.facilities.stPeterClaveryHC.service3', 'Community Outreach'),
      ],
      hours: t('ministries.healthcare.facilities.stPeterClaveryHC.hours', '24/7 Services'),
      contact: '+255 123 456 798',
    },
  ];

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
            {t('ministries.hero.title', 'Our Ministries')}
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
            {t('ministries.hero.subtitle', 'Serving God and His People Through Education, Healthcare, and Evangelization')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              label={t('ministries.hero.tag1', '4 Schools')}
              icon={<School />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('ministries.hero.tag2', '6 Health Facilities')}
              icon={<HealthAndSafety />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('ministries.hero.tag3', 'Orphan Care')}
              icon={<FamilyRestroom />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('ministries.hero.tag4', 'Evangelization')}
              icon={<Church />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Tabs for Ministry Sections */}
        <Paper elevation={2} sx={{ mb: 6, borderRadius: 2, overflow: 'hidden' }}>
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
              icon={<Church />} 
              label={t('ministries.tabs.evangelization', 'Evangelization')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<FamilyRestroom />} 
              label={t('ministries.tabs.orphanage', 'Orphanage')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<School />} 
              label={t('ministries.tabs.education', 'Education')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<HealthAndSafety />} 
              label={t('ministries.tabs.healthcare', 'Healthcare')} 
              iconPosition="start" 
            />
          </Tabs>

          {/* Evangelization Tab */}
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('ministries.evangelization.title', 'Evangelization Ministry')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                  {t('ministries.evangelization.description', 'Our evangelization ministry focuses on spreading the Gospel through teaching, sacramental preparation, and community outreach. We serve parishes and schools across Tanzania, bringing the light of Christ to all we encounter.')}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Chip 
                    label={t('ministries.evangelization.stats.parishes', '15+ Parishes')}
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.main' }}
                  />
                  <Chip 
                    label={t('ministries.evangelization.stats.students', '2000+ Students')}
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.main' }}
                  />
                  <Chip 
                    label={t('ministries.evangelization.stats.since', 'Since 1937')}
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.main' }}
                  />
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 8 }}>
                <Grid container spacing={3}>
                  {evangelizationActivities.map((activity, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Card elevation={1} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar sx={{ bgcolor: 'primary.main', color: 'white', mr: 2 }}>
                              {activity.icon}
                            </Avatar>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {activity.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                            {activity.description}
                          </Typography>
                          <List dense>
                            {activity.details.map((detail, idx) => (
                              <ListItem key={idx} sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                  <Star sx={{ fontSize: 16, color: 'primary.main' }} />
                                </ListItemIcon>
                                <ListItemText primary={detail} />
                              </ListItem>
                            ))}
                          </List>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary" endIcon={<ArrowForward />}>
                            {t('common.buttons.learnMore', 'Learn More')}
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Orphanage Tab */}
          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('ministries.orphanage.title', 'Mgolole Orphanage Centre')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                  {t('ministries.orphanage.description', 'Our orphanage in Mgolole provides a loving home, education, healthcare, and spiritual guidance to orphaned and vulnerable children. We believe every child deserves a chance to thrive in a nurturing Christian environment.')}
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                    {t('ministries.orphanage.services', 'Our Services:')}
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      t('ministries.orphanage.service1', 'Residential Care'),
                      t('ministries.orphanage.service2', 'Education Support'),
                      t('ministries.orphanage.service3', 'Healthcare & Nutrition'),
                      t('ministries.orphanage.service4', 'Counseling & Trauma Care'),
                      t('ministries.orphanage.service5', 'Spiritual Formation'),
                      t('ministries.orphanage.service6', 'Life Skills Training'),
                    ].map((service, index) => (
                      <Grid size={{ xs: 6 }} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <ChildCare sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                          <Typography variant="body2">{service}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                    {t('ministries.orphanage.contact', 'Contact the Orphanage:')}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body2">
                      {t('ministries.orphanage.location', 'Mgolole Orphanage Centre, Mgolole, Morogoro')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Phone sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body2">+255 123 456 800</Typography>
                  </Box>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('ministries.orphanage.stats', 'Orphanage Statistics')}
                    </Typography>
                    <Grid container spacing={3}>
                      {[
                        { label: t('ministries.orphanage.stat1.label', 'Children Currently'), value: '45' },
                        { label: t('ministries.orphanage.stat2.label', 'Years of Service'), value: '40+' },
                        { label: t('ministries.orphanage.stat3.label', 'Staff Members'), value: '12' },
                        { label: t('ministries.orphanage.stat4.label', 'Volunteers'), value: '25+' },
                      ].map((stat, index) => (
                        <Grid size={{ xs: 6 }} key={index}>
                          <Box sx={{ textAlign: 'center', p: 2 }}>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                              {stat.value}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {stat.label}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 3 }}
                      startIcon={<ChildCare />}
                    >
                      {t('ministries.orphanage.supportButton', 'Support Our Orphanage')}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Education Tab */}
          <TabPanel value={tabValue} index={2}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
              {t('ministries.education.title', 'Education Services')}
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              {t('ministries.education.description', 'We operate four educational institutions that provide quality Catholic education from pre-school through secondary school. Our schools focus on academic excellence, moral formation, and holistic development.')}
            </Typography>

            <Grid container spacing={4}>
              {schools.map((school, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
                            {school.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              {school.location}
                            </Typography>
                          </Box>
                        </Box>
                        <Chip 
                          label={school.level}
                          size="small"
                          sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.main' }}
                        />
                      </Box>

                      <Divider sx={{ my: 2 }} />

                      <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid size={{ xs: 6 }}>
                          <Typography variant="caption" color="text.secondary">
                            {t('ministries.education.founded', 'Founded')}
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {school.founded}
                          </Typography>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                          <Typography variant="caption" color="text.secondary">
                            {t('ministries.education.students', 'Students')}
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {school.students}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                        {t('ministries.education.programs', 'Programs Offered:')}
                      </Typography>
                      <Stack spacing={1}>
                        {school.programs.map((program, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                            <School sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                            <Typography variant="body2">{program}</Typography>
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button 
                        size="small" 
                        startIcon={<Call />}
                        onClick={() => window.location.href = `tel:${school.contact}`}
                      >
                        {t('ministries.common.call', 'Call')}
                      </Button>
                      <Button 
                        size="small" 
                        startIcon={<Map />}
                      >
                        {t('ministries.common.directions', 'Directions')}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Paper sx={{ mt: 4, p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                {t('ministries.education.philosophy', 'Our Educational Philosophy')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                {t('ministries.education.philosophyText', 'We believe in educating the whole person - mind, body, and spirit. Our schools integrate faith formation with academic excellence, character development, and service to the community. We aim to form future leaders who are academically competent, morally upright, and spiritually grounded.')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip label={t('ministries.education.values.faith', 'Faith-Based')} />
                <Chip label={t('ministries.education.values.excellence', 'Academic Excellence')} />
                <Chip label={t('ministries.education.values.character', 'Character Formation')} />
                <Chip label={t('ministries.education.values.service', 'Service Learning')} />
                <Chip label={t('ministries.education.values.inclusion', 'Inclusive Education')} />
              </Box>
            </Paper>
          </TabPanel>

          {/* Healthcare Tab */}
          <TabPanel value={tabValue} index={3}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
              {t('ministries.healthcare.title', 'Healthcare Services')}
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              {t('ministries.healthcare.description', 'Our six healthcare facilities serve communities across Tanzania, providing affordable, quality medical care with compassion and dignity. We serve all people regardless of their ability to pay, following Christ\'s example of healing and mercy.')}
            </Typography>

            <Box sx={{ mb: 4 }}>
              {healthcareFacilities.map((facility, index) => (
                <Accordion
                  key={index}
                  expanded={expandedAccordion === `health-${index}`}
                  onChange={handleAccordionChange(`health-${index}`)}
                  sx={{
                    mb: 2,
                    borderRadius: '8px !important',
                    overflow: 'hidden',
                    '&:before': { display: 'none' }
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                      <MedicalServices sx={{ color: 'primary.main' }} />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {facility.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Chip 
                            label={facility.type}
                            size="small"
                            sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.main' }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {facility.location}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: 'background.paper' }}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, md: 8 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                          {t('ministries.healthcare.services', 'Services Offered:')}
                        </Typography>
                        <Grid container spacing={1}>
                          {facility.services.map((service, idx) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <HealthAndSafety sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                                <Typography variant="body2">{service}</Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Paper sx={{ p: 2, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <AccessTime sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                            <Typography variant="body2" fontWeight={600}>
                              {facility.hours}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Phone sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                            <Typography variant="body2">{facility.contact}</Typography>
                          </Box>
                          <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            fullWidth
                            sx={{ mt: 2 }}
                            startIcon={<Call />}
                          >
                            {t('ministries.common.callNow', 'Call Now')}
                          </Button>
                        </Paper>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>

            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('ministries.healthcare.mission', 'Our Healthcare Mission')}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                      {t('ministries.healthcare.missionText', 'We provide compassionate healthcare services that respect the dignity of every person. Our facilities serve as centers of healing where physical, emotional, and spiritual needs are addressed in the spirit of Christian love and service.')}
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <People sx={{ color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={t('ministries.healthcare.mission1', 'Serve all people regardless of faith or financial status')}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <HealthAndSafety sx={{ color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={t('ministries.healthcare.mission2', 'Provide affordable, quality medical care')}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Public sx={{ color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={t('ministries.healthcare.mission3', 'Engage in community health education and prevention')}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('ministries.healthcare.stats', 'Healthcare Impact')}
                    </Typography>
                    <Grid container spacing={3}>
                      {[
                        { label: t('ministries.healthcare.stat1.label', 'Patients Annually'), value: '50,000+' },
                        { label: t('ministries.healthcare.stat2.label', 'Health Facilities'), value: '6' },
                        { label: t('ministries.healthcare.stat3.label', 'Medical Staff'), value: '85+' },
                        { label: t('ministries.healthcare.stat4.label', 'Communities Served'), value: '25+' },
                      ].map((stat, index) => (
                        <Grid size={{ xs: 6 }} key={index}>
                          <Box sx={{ textAlign: 'center', p: 1 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                              {stat.value}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              {stat.label}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 3 }}
                      startIcon={<HealthAndSafety />}
                    >
                      {t('ministries.healthcare.supportButton', 'Support Healthcare Ministry')}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </Paper>

        {/* Call to Action */}
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
            {t('ministries.cta.title', 'Partner With Our Ministries')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
            {t('ministries.cta.description', 'Join us in serving God\'s people through education, healthcare, orphan care, and evangelization. Your support makes a difference in countless lives.')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<People />}
            >
              {t('ministries.cta.button1', 'Volunteer')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<HealthAndSafety />}
            >
              {t('ministries.cta.button2', 'Donate')}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<Email />}
            >
              {t('ministries.cta.button3', 'Contact Us')}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Ministries;