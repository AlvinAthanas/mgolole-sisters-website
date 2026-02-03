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
  Agriculture,
  Pets,
  BusinessCenter,
  Print,
  Carpenter,
  Nightlight,
  LocationOn,
  Phone,
  Email,
  AccessTime,
  People,
  LocalFlorist,
  ShoppingCart,
  Factory,
  Chair,
  Store,
  Apartment,
  Map,
  Call,
  Star,
  Nature,
  Grass,
  Settings,
  Build,
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
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const Projects = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };



  // Farming projects data
  const farmLocations = [
    {
      name: t('projects.farming.locations.mgolole.name', 'Mgolole'),
      crops: [
        t('projects.farming.locations.mgolole.crop1', 'Maize'),
        t('projects.farming.locations.mgolole.crop2', 'Beans'),
        t('projects.farming.locations.mgolole.crop3', 'Sweet Potatoes'),
      ],
      size: t('projects.farming.locations.mgolole.size', '50 hectares'),
      established: '1950',
    },
    {
      name: t('projects.farming.locations.milama.name', 'Milama'),
      crops: [
        t('projects.farming.locations.milama.crop1', 'Rice'),
        t('projects.farming.locations.milama.crop2', 'Cornflower'),
      ],
      size: t('projects.farming.locations.milama.size', '30 hectares'),
      established: '1965',
    },
    {
      name: t('projects.farming.locations.msowero.name', 'Msowero'),
      crops: [
        t('projects.farming.locations.msowero.crop1', 'Bananas'),
        t('projects.farming.locations.msowero.crop2', 'Maize'),
      ],
      size: t('projects.farming.locations.msowero.size', '25 hectares'),
      established: '1972',
    },
    {
      name: t('projects.farming.locations.lugono.name', 'Lugono'),
      crops: [
        t('projects.farming.locations.lugono.crop1', 'Beans'),
        t('projects.farming.locations.lugono.crop2', 'Sweet Potatoes'),
      ],
      size: t('projects.farming.locations.lugono.size', '20 hectares'),
      established: '1980',
    },
    {
      name: t('projects.farming.locations.kiroka.name', 'Kiroka'),
      crops: [
        t('projects.farming.locations.kiroka.crop1', 'Maize'),
        t('projects.farming.locations.kiroka.crop2', 'Vegetables'),
      ],
      size: t('projects.farming.locations.kiroka.size', '15 hectares'),
      established: '1985',
    },
    {
      name: t('projects.farming.locations.mululu.name', 'Mululu'),
      crops: [
        t('projects.farming.locations.mululu.crop1', 'Beans'),
        t('projects.farming.locations.mululu.crop2', 'Maize'),
      ],
      size: t('projects.farming.locations.mululu.size', '18 hectares'),
      established: '1990',
    },
    {
      name: t('projects.farming.locations.pangawe.name', 'Pangawe'),
      crops: [
        t('projects.farming.locations.pangawe.crop1', 'Rice'),
        t('projects.farming.locations.pangawe.crop2', 'Vegetables'),
      ],
      size: t('projects.farming.locations.pangawe.size', '22 hectares'),
      established: '1995',
    },
    {
      name: t('projects.farming.locations.matambiko.name', 'Matambiko'),
      crops: [
        t('projects.farming.locations.matambiko.crop1', 'Bananas'),
        t('projects.farming.locations.matambiko.crop2', 'Sweet Potatoes'),
      ],
      size: t('projects.farming.locations.matambiko.size', '12 hectares'),
      established: '2000',
    },
    {
      name: t('projects.farming.locations.luhindo.name', 'Luhindo'),
      crops: [
        t('projects.farming.locations.luhindo.crop1', 'Maize'),
        t('projects.farming.locations.luhindo.crop2', 'Beans'),
      ],
      size: t('projects.farming.locations.luhindo.size', '16 hectares'),
      established: '2005',
    },
    {
      name: t('projects.farming.locations.vituli.name', 'Vituli'),
      crops: [
        t('projects.farming.locations.vituli.crop1', 'Vegetables'),
        t('projects.farming.locations.vituli.crop2', 'Cornflower'),
      ],
      size: t('projects.farming.locations.vituli.size', '10 hectares'),
      established: '2010',
    },
  ];

  // Livestock projects data
  const livestockLocations = [
    {
      name: t('projects.livestock.locations.mgolole.name', 'Mgolole'),
      animals: [
        t('projects.livestock.locations.mgolole.animal1', 'Dairy Cows'),
        t('projects.livestock.locations.mgolole.animal2', 'Chicken'),
        t('projects.livestock.locations.mgolole.animal3', 'Rabbits'),
      ],
      products: [
        t('projects.livestock.locations.mgolole.product1', 'Milk'),
        t('projects.livestock.locations.mgolole.product2', 'Eggs'),
        t('projects.livestock.locations.mgolole.product3', 'Meat'),
      ],
      established: '1960',
    },
    {
      name: t('projects.livestock.locations.melela.name', 'Melela'),
      animals: [
        t('projects.livestock.locations.melela.animal1', 'Goats'),
        t('projects.livestock.locations.melela.animal2', 'Pigs'),
      ],
      products: [
        t('projects.livestock.locations.melela.product1', 'Meat'),
        t('projects.livestock.locations.melela.product2', 'Manure'),
      ],
      established: '1975',
    },
    {
      name: t('projects.livestock.locations.milama.name', 'Milama'),
      animals: [
        t('projects.livestock.locations.milama.animal1', 'Dairy Cows'),
        t('projects.livestock.locations.milama.animal2', 'Chicken'),
      ],
      products: [
        t('projects.livestock.locations.milama.product1', 'Milk'),
        t('projects.livestock.locations.milama.product2', 'Eggs'),
      ],
      established: '1982',
    },
    {
      name: t('projects.livestock.locations.msowero.name', 'Msowero'),
      animals: [
        t('projects.livestock.locations.msowero.animal1', 'Pigs'),
        t('projects.livestock.locations.msowero.animal2', 'Rabbits'),
      ],
      products: [
        t('projects.livestock.locations.msowero.product1', 'Meat'),
        t('projects.livestock.locations.msowero.product2', 'Breeding Stock'),
      ],
      established: '1990',
    },
  ];

  // Conference Centre services
  const conferenceServices = [
    t('projects.conference.services.service1', 'Conference Rooms (50-300 capacity)'),
    t('projects.conference.services.service2', 'Seminar & Workshop Facilities'),
    t('projects.conference.services.service3', 'Accommodation (Single & Double Rooms)'),
    t('projects.conference.services.service4', 'Catering Services'),
    t('projects.conference.services.service5', 'Audio-Visual Equipment'),
    t('projects.conference.services.service6', 'Transport Services'),
    t('projects.conference.services.service7', 'Prayer & Meditation Spaces'),
    t('projects.conference.services.service8', 'Sports & Recreation Facilities'),
  ];

  // Printing Press products
  const printingProducts = [
    t('projects.printing.products.product1', 'Exercise Books'),
    t('projects.printing.products.product2', 'Receipt Books'),
    t('projects.printing.products.product3', 'Envelopes'),
    t('projects.printing.products.product4', 'BIM Cards'),
    t('projects.printing.products.product5', 'MTUA Books'),
    t('projects.printing.products.product6', 'Register Books'),
    t('projects.printing.products.product7', 'Book Binding Services'),
    t('projects.printing.products.product8', 'Custom Printing'),
    t('projects.printing.products.product9', 'Stationery Supplies'),
  ];

  // Carpentry products
  const carpentryProducts = [
    t('projects.carpentry.products.product1', 'Wooden Doors & Windows'),
    t('projects.carpentry.products.product2', 'Wooden Cupboards'),
    t('projects.carpentry.products.product3', 'Wooden Sofa Sets'),
    t('projects.carpentry.products.product4', 'Wooden Chairs'),
    t('projects.carpentry.products.product5', 'Office Tables'),
    t('projects.carpentry.products.product6', 'Coffee Tables'),
    t('projects.carpentry.products.product7', 'Bed Frames'),
    t('projects.carpentry.products.product8', 'Custom Furniture'),
    t('projects.carpentry.products.product9', 'Church Furnishings'),
  ];

  // Candle making products
  const candleProducts = [
    t('projects.candles.products.product1', 'Church Candles'),
    t('projects.candles.products.product2', 'Decorative Candles'),
    t('projects.candles.products.product3', 'Scented Candles'),
    t('projects.candles.products.product4', 'Emergency Candles'),
    t('projects.candles.products.product5', 'Special Occasion Candles'),
    t('projects.candles.products.product6', 'Bulk Orders'),
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
            {t('projects.hero.title', 'Our Projects')}
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
            {t('projects.hero.subtitle', 'Sustainable Projects Supporting Our Mission and Local Communities')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              label={t('projects.hero.tag1', '10 Farms')}
              icon={<Agriculture />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('projects.hero.tag2', 'Livestock')}
              icon={<Pets />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('projects.hero.tag3', 'Conference Centre')}
              icon={<BusinessCenter />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('projects.hero.tag4', 'Printing Press')}
              icon={<Print />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('projects.hero.tag5', 'Carpentry')}
              icon={<Carpenter />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('projects.hero.tag6', 'Candle Making')}
              icon={<Nightlight />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Tabs for Project Sections */}
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
              icon={<Agriculture />} 
              label={t('projects.tabs.farming', 'Farming')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<Pets />} 
              label={t('projects.tabs.livestock', 'Livestock')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<BusinessCenter />} 
              label={t('projects.tabs.conference', 'Conference Centre')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<Print />} 
              label={t('projects.tabs.printing', 'Printing Press')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<Carpenter />} 
              label={t('projects.tabs.carpentry', 'Carpentry')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<Nightlight />} 
              label={t('projects.tabs.candles', 'Candle Making')} 
              iconPosition="start" 
            />
          </Tabs>

          {/* Farming Tab */}
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('projects.farming.title', 'Agricultural Projects')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                  {t('projects.farming.description', 'We operate 10 farms across Morogoro region, producing various crops to support our mission and local communities. Our farms employ sustainable agricultural practices while providing food security and economic opportunities.')}
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                    {t('projects.farming.production', 'Main Crops Produced:')}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {[
                      t('projects.farming.crops.crop1', 'Maize'),
                      t('projects.farming.crops.crop2', 'Rice'),
                      t('projects.farming.crops.crop3', 'Bananas'),
                      t('projects.farming.crops.crop4', 'Beans'),
                      t('projects.farming.crops.crop5', 'Cornflower'),
                      t('projects.farming.crops.crop6', 'Sweet Potatoes'),
                      t('projects.farming.crops.crop7', 'Vegetables'),
                    ].map((crop, index) => (
                      <Chip 
                        key={index}
                        label={crop}
                        icon={<LocalFlorist />}
                        size="small"
                        sx={{ 
                          bgcolor: alpha(theme.palette.success.main, 0.1),
                          color: 'success.dark'
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    {t('projects.farming.impact', 'Agricultural Impact')}
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      { value: '250+', label: t('projects.farming.impact1', 'Hectares Cultivated') },
                      { value: '50+', label: t('projects.farming.impact2', 'Farm Workers') },
                      { value: '10', label: t('projects.farming.impact3', 'Farm Locations') },
                      { value: '70+', label: t('projects.farming.impact4', 'Years Experience') },
                    ].map((item, index) => (
                      <Grid size={{ xs: 6 }} key={index}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            {item.value}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {item.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                  {t('projects.farming.locationsTitle', 'Farm Locations')}
                </Typography>
                <Grid container spacing={3}>
                  {farmLocations.map((farm, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                      <Card elevation={1} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar sx={{ bgcolor: 'success.main', color: 'white', mr: 2 }}>
                              <Nature />
                            </Avatar>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {farm.name}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Grass sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              {farm.size}
                            </Typography>
                          </Box>

                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                            {t('projects.farming.crops', 'Crops:')}
                          </Typography>
                          <Box sx={{ mb: 2 }}>
                            {farm.crops.map((crop, idx) => (
                              <Chip 
                                key={idx}
                                label={crop}
                                size="small"
                                sx={{ 
                                  mr: 0.5, 
                                  mb: 0.5,
                                  bgcolor: alpha(theme.palette.success.main, 0.1),
                                  color: 'success.dark'
                                }}
                              />
                            ))}
                          </Box>

                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTime sx={{ fontSize: 14, color: 'text.secondary', mr: 1 }} />
                            <Typography variant="caption" color="text.secondary">
                              {t('projects.farming.established', 'Est.')} {farm.established}
                            </Typography>
                          </Box>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary" endIcon={<Map />}>
                            {t('common.viewMap', 'View Map')}
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Livestock Tab */}
          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('projects.livestock.title', 'Livestock Keeping')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                  {t('projects.livestock.description', 'Our livestock projects at four strategic locations provide dairy products, meat, and other animal products. We practice modern animal husbandry techniques while maintaining traditional, sustainable approaches.')}
                </Typography>
                
                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2, mb: 4 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    {t('projects.livestock.benefits', 'Project Benefits')}
                  </Typography>
                  <List dense>
                    {[
                      t('projects.livestock.benefit1', 'Provides food for our institutions'),
                      t('projects.livestock.benefit2', 'Generates income for mission support'),
                      t('projects.livestock.benefit3', 'Creates employment opportunities'),
                      t('projects.livestock.benefit4', 'Supports agricultural training'),
                      t('projects.livestock.benefit5', 'Produces organic manure for farms'),
                    ].map((benefit, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Star sx={{ fontSize: 16, color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Pets sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {t('projects.livestock.stats.animals', 'Total Animals:')}
                      </Typography>
                      <Typography variant="h5" color="primary.main" fontWeight={700}>
                        500+
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Factory sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {t('projects.livestock.stats.production', 'Daily Production:')}
                      </Typography>
                      <Typography variant="h5" color="primary.main" fontWeight={700}>
                        200L Milk
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                  {t('projects.livestock.locationsTitle', 'Livestock Farms')}
                </Typography>
                <Grid container spacing={3}>
                  {livestockLocations.map((farm, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                      <Card elevation={2}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar sx={{ bgcolor: 'warning.main', color: 'white', mr: 2 }}>
                              <Pets />
                            </Avatar>
                            <Box sx={{ flexGrow: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {farm.name}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {t('projects.livestock.established', 'Est.')} {farm.established}
                              </Typography>
                            </Box>
                          </Box>

                          <Divider sx={{ my: 2 }} />

                          <Grid container spacing={2}>
                            <Grid size={{ xs: 6 }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                                {t('projects.livestock.animals', 'Animals:')}
                              </Typography>
                              <Stack spacing={1}>
                                {farm.animals.map((animal, idx) => (
                                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Pets sx={{ fontSize: 14, color: 'text.secondary', mr: 1 }} />
                                    <Typography variant="body2">{animal}</Typography>
                                  </Box>
                                ))}
                              </Stack>
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                                {t('projects.livestock.products', 'Products:')}
                              </Typography>
                              <Stack spacing={1}>
                                {farm.products.map((product, idx) => (
                                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <ShoppingCart sx={{ fontSize: 14, color: 'text.secondary', mr: 1 }} />
                                    <Typography variant="body2">{product}</Typography>
                                  </Box>
                                ))}
                              </Stack>
                            </Grid>
                          </Grid>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            {t('common.visit', 'Visit Farm')}
                          </Button>
                          <Button size="small" color="secondary">
                            {t('common.products', 'View Products')}
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Conference Centre Tab */}
          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('projects.conference.title', 'Amabilis Conference Centre')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                  {t('projects.conference.description', 'Located in Morogoro, our modern conference centre provides excellent facilities for conferences, seminars, workshops, and retreats. We host organizations from both public and private sectors, as well as religious groups.')}
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                    {t('projects.conference.features', 'Key Features:')}
                  </Typography>
                  <Grid container spacing={2}>
                    {conferenceServices.map((service, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <BusinessCenter sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                          <Typography variant="body2">{service}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    {t('projects.conference.contact', 'Booking & Contact:')}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body2">
                      {t('projects.conference.address', 'Amabilis Conference Centre, Morogoro, Tanzania')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Phone sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body2">+255 123 456 700</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Email sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body2">conference@cicm.or.tz</Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<BusinessCenter />}
                  >
                    {t('projects.conference.bookButton', 'Book Now')}
                  </Button>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('projects.conference.capacity', 'Facility Capacity')}
                    </Typography>
                    <Grid container spacing={3}>
                      {[
                        { icon: <People />, label: t('projects.conference.capacity1', 'Main Hall'), value: '300' },
                        { icon: <Apartment />, label: t('projects.conference.capacity2', 'Meeting Rooms'), value: '8' },
                        { icon: <Chair />, label: t('projects.conference.capacity3', 'Guest Rooms'), value: '50' },
                        { icon: <Store />, label: t('projects.conference.capacity4', 'Dining Capacity'), value: '200' },
                      ].map((item, index) => (
                        <Grid size={{ xs: 6 }} key={index}>
                          <Box sx={{ textAlign: 'center', p: 2 }}>
                            <Box sx={{ color: 'primary.main', mb: 1 }}>
                              {item.icon}
                            </Box>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                              {item.value}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {item.label}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    <Box sx={{ mt: 3, p: 2, bgcolor: alpha(theme.palette.success.main, 0.1), borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ textAlign: 'center', color: 'success.dark' }}>
                        {t('projects.conference.availability', 'Available for both religious and corporate events')}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Printing Press Tab */}
          <TabPanel value={tabValue} index={3}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
              {t('projects.printing.title', 'Mgolole Printing Press')}
            </Typography>
            
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
                  {t('projects.printing.description', 'Our modern printing press provides high-quality printing services for educational materials, office supplies, and custom printing needs. We serve schools, churches, businesses, and individuals with reliable and affordable printing solutions.')}
                </Typography>

                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                    {t('projects.printing.productsTitle', 'Products & Services')}
                  </Typography>
                  <Grid container spacing={2}>
                    {printingProducts.map((product, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Print sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                          <Typography variant="body2">{product}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('projects.printing.contact', 'Contact & Ordering')}
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocationOn sx={{ fontSize: 16, color: 'primary.main', mr: 2 }} />
                        <Typography variant="body1">
                          {t('projects.printing.address', 'Mgolole Printing Press, Mgolole, Morogoro')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Phone sx={{ fontSize: 16, color: 'primary.main', mr: 2 }} />
                        <Typography variant="body1">+255 123 456 710</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Email sx={{ fontSize: 16, color: 'primary.main', mr: 2 }} />
                        <Typography variant="body1">printing@cicm.or.tz</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTime sx={{ fontSize: 16, color: 'primary.main', mr: 2 }} />
                        <Typography variant="body1">
                          {t('projects.printing.hours', 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 1:00 PM')}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      {t('projects.printing.clientele', 'Our Clientele')}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {[
                        t('projects.printing.clients.client1', 'Schools'),
                        t('projects.printing.clients.client2', 'Churches'),
                        t('projects.printing.clients.client3', 'Businesses'),
                        t('projects.printing.clients.client4', 'Government'),
                        t('projects.printing.clients.client5', 'NGOs'),
                        t('projects.printing.clients.client6', 'Individuals'),
                      ].map((client, index) => (
                        <Chip 
                          key={index}
                          label={client}
                          sx={{ 
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            color: 'primary.main'
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button variant="contained" color="primary" fullWidth startIcon={<Print />}>
                      {t('projects.printing.orderButton', 'Request Quote')}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Carpentry Tab */}
          <TabPanel value={tabValue} index={4}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('projects.carpentry.title', 'Mgolole Carpentry')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
                  {t('projects.carpentry.description', 'Our carpentry workshop specializes in hardwood furniture and custom wood products. We combine traditional craftsmanship with modern techniques to create durable, beautiful furniture for homes, offices, and churches.')}
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                    {t('projects.carpentry.specialties', 'Our Specialties:')}
                  </Typography>
                  <Grid container spacing={2}>
                    {carpentryProducts.map((product, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Carpenter sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                          <Typography variant="body2">{product}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    {t('projects.carpentry.woodTypes', 'Wood Types We Use:')}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {[
                      t('projects.carpentry.woods.wood1', 'Mvule (Iroko)'),
                      t('projects.carpentry.woods.wood2', 'Mninga (African Teak)'),
                      t('projects.carpentry.woods.wood3', 'Mkongo'),
                      t('projects.carpentry.woods.wood4', 'Mpingo (African Blackwood)'),
                      t('projects.carpentry.woods.wood5', 'Mahogany'),
                    ].map((wood, index) => (
                      <Chip 
                        key={index}
                        label={wood}
                        sx={{ 
                          bgcolor: alpha(theme.palette.warning.main, 0.1),
                          color: 'warning.dark'
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('projects.carpentry.workshop', 'Our Workshop')}
                    </Typography>
                    
                    <Grid container spacing={3} sx={{ mb: 3 }}>
                      {[
                        { label: t('projects.carpentry.stats.stat1', 'Years Experience'), value: '40+' },
                        { label: t('projects.carpentry.stats.stat2', 'Craftsmen'), value: '15' },
                        { label: t('projects.carpentry.stats.stat3', 'Apprentices'), value: '8' },
                        { label: t('projects.carpentry.stats.stat4', 'Projects/Year'), value: '200+' },
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

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      {t('projects.carpentry.services', 'Additional Services:')}
                    </Typography>
                    <List dense>
                      {[
                        t('projects.carpentry.service1', 'Custom Furniture Design'),
                        t('projects.carpentry.service2', 'Furniture Repair & Restoration'),
                        t('projects.carpentry.service3', 'Church Altar & Pew Making'),
                        t('projects.carpentry.service4', 'Wood Carving & Decoration'),
                        t('projects.carpentry.service5', 'Installation Services'),
                      ].map((service, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Build sx={{ fontSize: 16, color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={service} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      fullWidth 
                      startIcon={<Carpenter />}
                      sx={{ mb: 1 }}
                    >
                      {t('projects.carpentry.orderButton', 'Request Custom Work')}
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      fullWidth 
                      startIcon={<Chair />}
                    >
                      {t('projects.carpentry.catalogButton', 'View Product Catalog')}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Candle Making Tab */}
          <TabPanel value={tabValue} index={5}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                  {t('projects.candles.title', 'Mgolole Candle Making Factory')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
                  {t('projects.candles.description', 'Our candle factory produces high-quality candles for various purposes, including church use, home decoration, and special occasions. We use natural materials and traditional methods to create beautiful, long-lasting candles.')}
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                    {t('projects.candles.productsTitle', 'Our Candle Products:')}
                  </Typography>
                  <Grid container spacing={2}>
                    {candleProducts.map((product, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Nightlight sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                          <Typography variant="body2">{product}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    {t('projects.candles.contact', 'Ordering Information:')}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body2">
                      {t('projects.candles.address', 'Mgolole Candle Factory, Mgolole, Morogoro')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Phone sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body2">+255 123 456 720</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Email sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body2">candles@cicm.or.tz</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="contained" color="primary" startIcon={<Nightlight />}>
                      {t('projects.candles.orderButton', 'Place Order')}
                    </Button>
                    <Button variant="outlined" color="primary" startIcon={<ShoppingCart />}>
                      {t('projects.candles.catalogButton', 'View Catalog')}
                    </Button>
                  </Box>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('projects.candles.production', 'Production Details')}
                    </Typography>
                    
                    <Grid container spacing={3} sx={{ mb: 3 }}>
                      {[
                        { label: t('projects.candles.stats.stat1', 'Daily Production'), value: '500+' },
                        { label: t('projects.candles.stats.stat2', 'Candle Types'), value: '25+' },
                        { label: t('projects.candles.stats.stat3', 'Workers'), value: '12' },
                        { label: t('projects.candles.stats.stat4', 'Years Operating'), value: '30+' },
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

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      {t('projects.candles.materials', 'Materials We Use:')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {[
                        t('projects.candles.material1', 'Beeswax'),
                        t('projects.candles.material2', 'Paraffin Wax'),
                        t('projects.candles.material3', 'Soy Wax'),
                        t('projects.candles.material4', 'Natural Scents'),
                        t('projects.candles.material5', 'Cotton Wicks'),
                        t('projects.candles.material6', 'Natural Dyes'),
                      ].map((material, index) => (
                        <Chip 
                          key={index}
                          label={material}
                          size="small"
                          sx={{ 
                            bgcolor: alpha(theme.palette.info.main, 0.1),
                            color: 'info.dark'
                          }}
                        />
                      ))}
                    </Box>

                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      {t('projects.candles.customization', 'Customization Options:')}
                    </Typography>
                    <List dense>
                      {[
                        t('projects.candles.custom1', 'Custom Sizes & Shapes'),
                        t('projects.candles.custom2', 'Church & Parish Logos'),
                        t('projects.candles.custom3', 'Special Event Colors'),
                        t('projects.candles.custom4', 'Bulk Order Discounts'),
                        t('projects.candles.custom5', 'Delivery Services'),
                      ].map((option, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Settings sx={{ fontSize: 16, color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={option} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </Paper>

        {/* Impact Summary */}
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
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
            {t('projects.impact.title', 'Our Projects Impact')}
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {[
              { value: '100+', label: t('projects.impact.impact1', 'Jobs Created') },
              { value: '10', label: t('projects.impact.impact2', 'Project Locations') },
              { value: '60+', label: t('projects.impact.impact3', 'Years of Operation') },
              { value: '500+', label: t('projects.impact.impact4', 'Clients Served') },
            ].map((item, index) => (
              <Grid size={{ xs: 6, sm: 3 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ fontWeight: 900 }}>
                    {item.value}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography variant="body1" sx={{ mt: 4, maxWidth: '800px', mx: 'auto', opacity: 0.9 }}>
            {t('projects.impact.description', 'Our projects not only support our religious mission but also contribute to local economic development, provide employment, and serve communities across Tanzania.')}
          </Typography>
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
            {t('projects.cta.title', 'Support Our Projects')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
            {t('projects.cta.description', 'Your partnership helps us sustain these important projects that support our mission and serve local communities. Consider investing in our work or purchasing our products.')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ShoppingCart />}
            >
              {t('projects.cta.button1', 'Buy Our Products')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<BusinessCenter />}
            >
              {t('projects.cta.button2', 'Partner With Us')}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<Call />}
            >
              {t('projects.cta.button3', 'Contact Sales')}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Projects;