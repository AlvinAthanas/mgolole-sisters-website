import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  alpha,
} from '@mui/material';
import {
  ExpandMore,
  History,
  Gavel,
  Flag,
  People,
  LocationOn,
  School,
  Favorite,
  Church,
  MedicalServices,
  Business,
  Timeline,
  Star,
  Home,
  Group,
  AccountBalance,
  SupervisorAccount,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// Type definitions
interface Vow {
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface Charism {
  name: string;
  icon: React.ReactElement;
  color: string;
}

interface MotherGeneral {
  name: string;
  period: string;
  image?: string;
}

interface CurrentLeader {
  role: string;
  name: string;
  icon: React.ReactElement;
  image?: string;
}

interface ServiceLocationRegion {
  region: string;
  locations: string[];
}

const About = () => {
  const muiTheme = useTheme();
  const { t } = useTranslation();

  const normalizeNameKey = (value: string) =>
    value.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();

  const motherGeneralImages: Record<string, string> = {
    'sr maria amabilis kern cps': '/sr.maria_amabilis_kern(1937-1948).jpg',
    'sr maria majellina cps': '/sr.maria_majellina(1951-1966).jpg',
    'sr maria nikoletha cicm': '/sr.maria_nikoletha(1967-1977).jpg',
    'sr constansia nyagatwa cicm': '/sr.constansia_nyagatwa(1977-1987).jpg',
    'sr flora chuma cicm': '/sr.flora_chuma(2012-2018).jpg',
    'sr pudensiana kibena cicm': '/sr.pudensiana_kibena(2018-date).jpg'
  };

  const currentLeaderImages: Record<string, string> = {
    'sr pudensiana kibena': '/sr.pudensiana_kibena_current.jpg',
    'sr violet lengeju': '/sr.violet_lengeju.jpg',
    'sr caroline nguzo': '/sr.caroline_nguzo.jpg',
    'sr queenbeth berege': '/sr.queenbeth_berege.jpg'
  };

  const getImageByName = (name: string, map: Record<string, string>) =>
    map[normalizeNameKey(name)];

  // History data - using translations with fallback
  const historyContent = {
    title: t('about.history.title', 'Our History'),
    content: t('about.history.content', { returnObjects: true }) || [
      "The Immaculate Heart of Mary sisters of Mgolole, Morogoro (C.I.C.M) is a religious congregation founded in 1937 by the late His Lordship Rt.Rev.Bishop Bernard Hilhorst of Holy Ghost Fathers, accompanied with the late Rev.Sr.Amabilis of the Precious Blood Sisters who was also the first Mother General of C.I.C.M. It is a diocesan congregation.",
      "The Mother House of the congregation is located in Morogoro district at village called Mgolole. The first candidates came from Sandawe Mountain in Dodoma Diocese, Uluguru Mountains in Morogoro Diocese.",
      "On 15 August 1939 four novices made their first Vows at Mgolole mother house, Morogoro Tanzania."
    ],
    footnote: t('about.history.footnote', 'Founded: 1937 • First Vows: August 15, 1939 • Mother House: Mgolole, Morogoro')
  };

  // Vows data - using translations with fallback
  const vows: Vow[] = [
    {
      title: t('about.vows.chastity.title', 'Chastity'),
      description: t('about.vows.chastity.description', "Our vow of chastity allows us to live a life for God, for Love alone. Each day, Jesus is at the heart of our work and at the forefront of our minds. We espouse ourselves to God, foregoing an earthly marriage, and begin living the eternal marriage feast here and now."),
      icon: <Favorite />
    },
    {
      title: t('about.vows.poverty.title', 'Poverty'),
      description: t('about.vows.poverty.description', "By vowing to live a life of poverty we make room in our hearts for all God's children. The freer we are from the distractions of the world, the freer we are to live as Jesus did. In imitation of Christ's poor life on earth, we simplify our lives with hopes of being transformed, more and more, into His likeness."),
      icon: <Home />
    },
    {
      title: t('about.vows.obedience.title', 'Obedience'),
      description: t('about.vows.obedience.description', "When we profess a vow of obedience we vow to live by God's will as it is made known to us by our loving Superiors. As Mary did, without worry or questioning, we simply say 'yes'. By our 'yes' we are set free to confidently love God in whatever way He calls us to love Him."),
      icon: <Gavel />
    }
  ];

  // Mission statement
  const missionStatement = t('about.mission.statement', "As Sisters of Immaculate Heart of Mary, we faithfully hold our devotion to chastity, obedience and voluntary poverty. We aspire to live a life rooted in the Gospel, in imitation of Mary-mother of our LORD, expressed by prayer, compassion, and self sacrifice. We devote ourselves to serve others through the apostolates of orphans' care, education, health care and caring for the elderly in need.");
  const missionTagline = t('about.mission.tagline', 'Guided by the Gospel, Inspired by Mary');

  // Charisms - using translations with fallback
  const charisms: Charism[] = [
    { 
      name: t('about.charisms.evangelization', 'Evangelization'), 
      icon: <Church />, 
      color: "primary" 
    },
    { 
      name: t('about.charisms.orphansCare', 'Orphans Care'), 
      icon: <Favorite />, 
      color: "secondary" 
    },
    { 
      name: t('about.charisms.education', 'Education'), 
      icon: <School />, 
      color: "success" 
    },
    { 
      name: t('about.charisms.healthServices', 'Health Services'), 
      icon: <MedicalServices />, 
      color: "error" 
    }
  ];

  // Leadership History - Mother Generals
  const motherGeneralsData = t('about.leadershipHistory.generals', { returnObjects: true });
  const motherGenerals: MotherGeneral[] = Array.isArray(motherGeneralsData) 
    ? motherGeneralsData.map((general: any) => ({
        name: general.name || general,
        period: general.period || '',
        image: general.image || getImageByName(general.name || general, motherGeneralImages)
      }))
    : [
        { name: "Sr. Maria Amabilis Kern (CPS)", period: "1937-1948", image: '/sr.maria_amabilis_kern(1937-1948).jpg' },
        { name: "Sr. Maria Adjuta Neumar (CPS)", period: "1948-1951" },
        { name: "Sr. Maria Majellina (CPS)", period: "1951-1966", image: '/sr.maria_majellina(1951-1966).jpg' },
        { name: "Sr. Maria Nikoletha (CICM)", period: "1967-1977", image: '/sr.maria_nikoletha(1967-1977).jpg' },
        { name: "Sr. Constansia Nyagatwa (CICM)", period: "1977-1987", image: '/sr.constansia_nyagatwa(1977-1987).jpg' },
        { name: "Sr. Veronica Petri (CICM)", period: "1987-2000" },
        { name: "Sr. Pudensiana Kibena (CICM)", period: "2000-2012", image: '/sr.pudensiana_kibena(2018-date).jpg' },
        { name: "Sr. Flora Chuma (CICM)", period: "2012-2018", image: '/sr.flora_chuma(2012-2018).jpg' },
        { name: "Sr. Pudensiana Kibena (CICM)", period: "2018-present", image: '/sr.pudensiana_kibena(2018-date).jpg' }
      ];

  // Current Leadership
  const currentLeadershipData = t('about.currentLeadership.leaders', { returnObjects: true });
  const currentLeadership: CurrentLeader[] = Array.isArray(currentLeadershipData)
    ? currentLeadershipData.map((leader: any) => ({
        role: leader.role || '',
        name: leader.name || leader,
        icon: leader.icon || <Star />,
        image: leader.image || getImageByName(leader.name || leader, currentLeaderImages)
      }))
    : [
        { role: "Mother General", name: "Sr. Pudensiana Kibena", icon: <Star />, image: '/sr.pudensiana_kibena_current.jpg' },
        { role: "Deputy Mother General", name: "Sr. Genorosa Mkwama", icon: <SupervisorAccount /> },
        { role: "Counciler", name: "Sr. Julieth Makonde", icon: <Group /> },
        { role: "Counciler", name: "Sr. Florensia Mkwizu", icon: <Group /> },
        { role: "Counciler", name: "Sr. Violet Lengeju", icon: <Group />, image: '/sr.violet_lengeju.jpg' },
        { role: "Accountant", name: "Sr. Caroline Nguzo", icon: <AccountBalance />, image: '/sr.caroline_nguzo.jpg' },
        { role: "General Secretary", name: "Sr. Queenbeth Berege", icon: <Business />, image: '/sr.queenbeth_berege.jpg' }
      ];

  // Administration Structure
  const adminStructureData = t('about.adminStructure.items', { returnObjects: true });
  const adminStructure: string[] = Array.isArray(adminStructureData) 
    ? adminStructureData 
    : [
        "Bishop",
        "Cashears (Parishes)",
        "Formaters",
        "Secretary General",
        "Chaplain",
        "Mother General",
        "Depute Mother General",
        "Councils",
        "Chief Accountant",
        "Accountants",
        "Superior of Mother House (Mgolole)",
        "Head of Projects",
        "Superior of Each Community (Parishes)",
        "Cashears of the Projects (Projects)",
        "All Members of the Community"
      ];

  // Service Locations
  const serviceLocationsData = t('about.serviceLocations.regions', { returnObjects: true });
  const serviceLocationsRaw = Array.isArray(serviceLocationsData) 
    ? serviceLocationsData 
    : [
        { region: "Main Service Area", locations: ["Morogoro Diocese"] },
        { region: "Other Dioceses in Tanzania", locations: ["Dar es Salaam", "Bagamoyo", "Mwanza", "Mbeya", "Mtwara", "Arusha"] },
        { region: "International", locations: ["Verona, Italy"] }
      ];

  // Process service locations to ensure we always have arrays with proper typing
  const serviceLocations: ServiceLocationRegion[] = serviceLocationsRaw.map((region: any) => ({
    region: typeof region === 'object' ? (region.region || region) : String(region),
    locations: Array.isArray(region.locations) 
      ? region.locations.map((loc: any) => String(loc))
      : [String(region.locations || region)]
  }));

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh'}}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
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
            {t('about.hero.title', 'About Us')}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              opacity: 0.9
            }}
          >
            {t('about.hero.subtitle', 'Immaculate Heart of Mary Sisters of Mgolole, Morogoro')}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'center',
              mt: 2,
              opacity: 0.8,
              fontStyle: 'italic'
            }}
          >
            {t('about.hero.tagline', 'Serving with Faith, Hope, and Love since 1937')}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* History Section */}
        <Card id="history" sx={{ mb: 6, borderRadius: 2, overflow: 'hidden' }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <History sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {historyContent.title}
              </Typography>
            </Box>
            {Array.isArray(historyContent.content) ? (historyContent.content as string[]).map((paragraph: string, index: number) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  fontSize: '1.1rem'
                }}
              >
                {paragraph}
              </Typography>
            )) : (
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  fontSize: '1.1rem'
                }}
              >
                {String(historyContent.content)}
              </Typography>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, pt: 3, borderTop: 1, borderColor: 'divider' }}>
              <Timeline sx={{ color: 'primary.main', mr: 2 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                {historyContent.footnote}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Vows Section */}
        <Typography id="vows" variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
          {t('about.vows.title', 'Our Sacred Vows')}
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {vows.map((vow: Vow, index: number) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                    bgcolor: alpha(muiTheme.palette.primary.main, 0.02)
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: alpha(muiTheme.palette.primary.main, 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}
                  >
                    {React.cloneElement(vow.icon as React.ReactElement<any>, { sx: { fontSize: 30, color: 'primary.main' } })}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {vow.title}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {vow.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Mission & Charisms Section */}
        <Grid id="mission" container spacing={6} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
              {t('about.mission.title', 'Our Mission')}
            </Typography>
            <Paper
              elevation={1}
              sx={{
                p: 4,
                borderRadius: 2,
                borderLeft: '4px solid',
                borderColor: 'primary.main',
                bgcolor: 'background.paper'
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.2rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                  fontStyle: 'italic',
                  mb: 3
                }}
              >
                "{missionStatement}"
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Flag sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {missionTagline}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
              {t('about.charisms.title', 'Our Charisms')}
            </Typography>
            <Grid container spacing={2}>
              {charisms.map((charism: Charism, index: number) => (
                <Grid size={{ xs: 6 }} key={index}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'background.paper'
                    }}
                  >
                    <Box sx={{ mb: 2, color: `${charism.color}.main` }}>
                      {React.cloneElement(charism.icon as React.ReactElement<any>, { sx: { fontSize: 40 } })}
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {charism.name}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Leadership History */}
        <Typography id="leadership" variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
          {t('about.leadershipHistory.title', 'Leadership History')}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4, color: 'text.secondary' }}>
          {t('about.leadershipHistory.subtitle', 'Mother Generals From 1937 to Present')}
        </Typography>
        
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            {motherGenerals.map((general: MotherGeneral, index: number) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 2,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        color: 'white',
                        overflow: 'hidden',
                        border: general.image ? '2px solid' : 'none',
                        borderColor: general.image ? 'primary.light' : 'transparent'
                      }}
                    >
                      {general.image ? (
                        <Box
                          component="img"
                          src={general.image}
                          alt={general.name}
                          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <People sx={{ fontSize: 40 }} />
                      )}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {general.name}
                    </Typography>
                    {general.period && (
                      <Chip
                        label={general.period}
                        size="small"
                        sx={{
                          bgcolor: index === motherGenerals.length - 1 ? 'success.light' : 'primary.light',
                          color: 'white',
                          fontWeight: 600
                        }}
                      />
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Current Leadership */}
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
          {t('about.currentLeadership.title', 'Current Leadership')}
        </Typography>
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {currentLeadership.map((leader: CurrentLeader, index: number) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  bgcolor: 'background.paper'
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    bgcolor: alpha(muiTheme.palette.primary.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    overflow: 'hidden',
                    border: leader.image ? '2px solid' : 'none',
                    borderColor: leader.image ? 'primary.main' : 'transparent'
                  }}
                >
                  {leader.image ? (
                    <Box
                      component="img"
                      src={leader.image}
                      alt={leader.name}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    React.cloneElement(leader.icon as React.ReactElement<any>, { sx: { fontSize: 35, color: 'primary.main' } })
                  )}
                </Box>
                {leader.role && (
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>
                    {leader.role}
                  </Typography>
                )}
                <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center' }}>
                  {leader.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Administration Structure */}
        <Accordion
          defaultExpanded
          sx={{
            mb: 8,
            borderRadius: '8px !important',
            overflow: 'hidden',
            bgcolor: 'background.paper'
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {t('about.adminStructure.title', 'Administration Structure')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
              {t('about.adminStructure.subtitle', 'ADMINISTRATION STRUCTURE OF THE C.I.C.M - MOROGORO')}
            </Typography>
            <Grid container spacing={2}>
              {adminStructure.map((item: string, index: number) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: 1,
                      bgcolor: alpha(muiTheme.palette.primary.main, 0.05),
                      borderLeft: '3px solid',
                      borderColor: 'primary.main'
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* Where We Serve */}
        <Typography id="where-we-serve" variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
          {t('about.serviceLocations.title', 'Where We Serve')}
        </Typography>
        <Paper
          elevation={2}
          sx={{
            p: 4,
            borderRadius: 2,
            mb: 8,
            bgcolor: 'background.paper'
          }}
        >
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            {t('about.serviceLocations.description', 'As a Diocesan congregation the main service area is Morogoro Diocese. However, based on needs the congregation serves in other dioceses within Tanzania and internationally.')}
          </Typography>
          
          <Grid container spacing={4}>
            {serviceLocations.map((region: ServiceLocationRegion, index: number) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider'
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOn sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {region.region}
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <List dense>
                      {region.locations.map((location: string, locIndex: number) => (
                        <ListItem key={locIndex} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={location}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
              "{t('about.serviceLocations.scripture', 'Go into the whole world and proclaim the gospel to every creature.')}" - {t('about.serviceLocations.scriptureReference', 'Mark 16:15')}
            </Typography>
          </Box>
        </Paper>

        {/* Call to Action */}
        <Paper
          sx={{
            p: 4,
            borderRadius: 2,
            bgcolor: alpha(muiTheme.palette.primary.main, 0.1),
            border: '1px solid',
            borderColor: 'primary.light',
            textAlign: 'center'
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
            {t('about.callToAction.title', 'Join Us in Our Mission')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
            {t('about.callToAction.description', 'Discover how you can support our mission through prayer, volunteering, or donations.')}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
