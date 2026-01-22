import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MobileStepper,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Pagination,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Rating,
  Breadcrumbs,
  Link,
  Stack,
  LinearProgress,
  CircularProgress,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  PhotoLibrary,
  VideoLibrary,
  Book,
  MenuBook,
  Newspaper,
  Podcasts,
  MusicNote,
  Download,
  Share,
  Favorite,
  Bookmark,
  PlayCircle,
  ZoomIn,
  Fullscreen,
  CalendarToday,
  Person,
  Category,
  Search,
  FilterList,
  Sort,
  ArrowForward,
  ArrowBack,
  CloudDownload,
  Print,
  Email,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  WhatsApp,
  VolumeUp,
  Headphones,
  PlaylistPlay,
  AccessTime,
  Visibility,
  ThumbUp,
  Chat,
  Collections,
  Slideshow,
  PictureAsPdf,
  InsertDriveFile,
  Article,
  Description,
  LocalLibrary,
  School,
  Church,
  HealthAndSafety,
  People,
  Nature,
  Architecture,
  Public,
  LocationOn,
  DateRange,
  Timer,
  MoreVert,
  Add,
  Remove,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Close,
  CheckCircle,
  Error,
  GetApp,
  Launch,
  OpenInNew,
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
      id={`media-tabpanel-${index}`}
      aria-labelledby={`media-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const Media = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  
  const [tabValue, setTabValue] = useState(0);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [selectedPublication, setSelectedPublication] = useState<any>(null);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const [publicationDialogOpen, setPublicationDialogOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setPage(1);
  };

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setImageDialogOpen(true);
  };

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video);
    setVideoDialogOpen(true);
  };

  const handlePublicationClick = (publication: any) => {
    setSelectedPublication(publication);
    setPublicationDialogOpen(true);
  };

  const handleCloseImageDialog = () => {
    setImageDialogOpen(false);
    setSelectedImage(null);
  };

  const handleCloseVideoDialog = () => {
    setVideoDialogOpen(false);
    setSelectedVideo(null);
  };

  const handleClosePublicationDialog = () => {
    setPublicationDialogOpen(false);
    setSelectedPublication(null);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleDownload = async (type: string, item: any) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSnackbar({
        open: true,
        message: t('media.download.success', 'Download started successfully!'),
        severity: 'success',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: t('media.download.error', 'Download failed. Please try again.'),
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Photo gallery categories
  const photoCategories = [
    { id: 'all', label: t('media.photos.categories.all', 'All Photos'), icon: <Collections />, count: 1250 },
    { id: 'events', label: t('media.photos.categories.events', 'Events'), icon: <CalendarToday />, count: 320 },
    { id: 'ministry', label: t('media.photos.categories.ministry', 'Ministry'), icon: <Church />, count: 280 },
    { id: 'community', label: t('media.photos.categories.community', 'Community Life'), icon: <People />, count: 240 },
    { id: 'projects', label: t('media.photos.categories.projects', 'Projects'), icon: <Architecture />, count: 210 },
    { id: 'nature', label: t('media.photos.categories.nature', 'Nature'), icon: <Nature />, count: 150 },
    { id: 'schools', label: t('media.photos.categories.schools', 'Schools'), icon: <School />, count: 120 },
    { id: 'healthcare', label: t('media.photos.categories.healthcare', 'Healthcare'), icon: <HealthAndSafety />, count: 90 },
  ];

  // Sample photos for gallery
  const samplePhotos = [
    {
      id: 1,
      title: t('media.photos.samples.vows.title', 'First Vows Ceremony 2024'),
      category: 'events',
      date: '2024-09-15',
      location: t('media.photos.samples.vows.location', 'Mgolole Mother House'),
      description: t('media.photos.samples.vows.description', 'Celebration of first vows for new sisters entering religious life'),
      views: 1250,
      likes: 320,
      featured: true,
    },
    {
      id: 2,
      title: t('media.photos.samples.orphanage.title', 'Orphanage Christmas Party'),
      category: 'ministry',
      date: '2023-12-25',
      location: t('media.photos.samples.orphanage.location', 'Mgolole Orphanage Centre'),
      description: t('media.photos.samples.orphanage.description', 'Christmas celebration with children at our orphanage'),
      views: 980,
      likes: 245,
      featured: true,
    },
    {
      id: 3,
      title: t('media.photos.samples.farm.title', 'Harvest Season 2024'),
      category: 'projects',
      date: '2024-07-20',
      location: t('media.photos.samples.farm.location', 'Mgolole Farms'),
      description: t('media.photos.samples.farm.description', 'Harvesting maize at our agricultural projects'),
      views: 850,
      likes: 180,
      featured: false,
    },
    {
      id: 4,
      title: t('media.photos.samples.school.title', 'School Graduation Day'),
      category: 'schools',
      date: '2024-10-05',
      location: t('media.photos.samples.school.location', 'Bernard Hilhorst Secondary School'),
      description: t('media.photos.samples.school.description', 'Graduation ceremony for Form 6 students'),
      views: 920,
      likes: 210,
      featured: true,
    },
    {
      id: 5,
      title: t('media.photos.samples.retreat.title', 'Annual Sisters Retreat'),
      category: 'community',
      date: '2024-06-15',
      location: t('media.photos.samples.retreat.location', 'Amabilis Conference Centre'),
      description: t('media.photos.samples.retreat.description', 'Spiritual retreat for all sisters of the congregation'),
      views: 760,
      likes: 165,
      featured: false,
    },
    {
      id: 6,
      title: t('media.photos.samples.health.title', 'Health Centre Opening'),
      category: 'healthcare',
      date: '2024-03-10',
      location: t('media.photos.samples.health.location', 'St. Peter Clavery Health Centre'),
      description: t('media.photos.samples.health.description', 'Inauguration of new health facility in Mwanza'),
      views: 1100,
      likes: 290,
      featured: true,
    },
    {
      id: 7,
      title: t('media.photos.samples.nature.title', 'Mgolole Landscape'),
      category: 'nature',
      date: '2024-05-22',
      location: t('media.photos.samples.nature.location', 'Mgolole Mountains'),
      description: t('media.photos.samples.nature.description', 'Beautiful landscape views around our mother house'),
      views: 680,
      likes: 140,
      featured: false,
    },
    {
      id: 8,
      title: t('media.photos.samples.construction.title', 'School Construction'),
      category: 'projects',
      date: '2024-08-30',
      location: t('media.photos.samples.construction.location', 'St. Theresa School Site'),
      description: t('media.photos.samples.construction.description', 'Progress on new classroom construction'),
      views: 590,
      likes: 125,
      featured: false,
    },
  ];

  // Video gallery categories
  const videoCategories = [
    { id: 'all', label: t('media.videos.categories.all', 'All Videos'), icon: <VideoLibrary />, count: 85 },
    { id: 'testimonies', label: t('media.videos.categories.testimonies', 'Testimonies'), icon: <Person />, count: 25 },
    { id: 'documentary', label: t('media.videos.categories.documentary', 'Documentaries'), icon: <Slideshow />, count: 15 },
    { id: 'events', label: t('media.videos.categories.events', 'Events'), icon: <CalendarToday />, count: 20 },
    { id: 'ministry', label: t('media.videos.categories.ministry', 'Ministry'), icon: <Church />, count: 12 },
    { id: 'education', label: t('media.videos.categories.education', 'Education'), icon: <School />, count: 8 },
    { id: 'music', label: t('media.videos.categories.music', 'Music & Choir'), icon: <MusicNote />, count: 5 },
  ];

  // Sample videos
  const sampleVideos = [
    {
      id: 1,
      title: t('media.videos.samples.founding.title', 'Our Founding Story'),
      category: 'documentary',
      duration: '25:30',
      views: 12500,
      likes: 1250,
      date: '2023-12-08',
      description: t('media.videos.samples.founding.description', 'Documentary about the founding of our congregation in 1937'),
      featured: true,
    },
    {
      id: 2,
      title: t('media.videos.samples.vocation.title', 'A Day in Religious Life'),
      category: 'testimonies',
      duration: '18:45',
      views: 9800,
      likes: 890,
      date: '2024-02-15',
      description: t('media.videos.samples.vocation.description', 'Personal testimony from a sister about her vocation journey'),
      featured: true,
    },
    {
      id: 3,
      title: t('media.videos.samples.retreat.title', 'Annual Retreat Highlights'),
      category: 'events',
      duration: '32:10',
      views: 7600,
      likes: 650,
      date: '2024-06-30',
      description: t('media.videos.samples.retreat.description', 'Highlights from our annual spiritual retreat'),
      featured: true,
    },
    {
      id: 4,
      title: t('media.videos.samples.orphanage.title', 'Hope for Orphans'),
      category: 'ministry',
      duration: '22:15',
      views: 11500,
      likes: 1050,
      date: '2024-04-10',
      description: t('media.videos.samples.orphanage.description', 'Documentary about our orphanage ministry'),
      featured: false,
    },
    {
      id: 5,
      title: t('media.videos.samples.choir.title', 'Easter Choir Performance'),
      category: 'music',
      duration: '15:20',
      views: 5200,
      likes: 480,
      date: '2024-04-05',
      description: t('media.videos.samples.choir.description', 'Special choir performance during Easter celebrations'),
      featured: false,
    },
    {
      id: 6,
      title: t('media.videos.samples.school.title', 'Education Transforming Lives'),
      category: 'education',
      duration: '28:40',
      views: 8900,
      likes: 720,
      date: '2024-03-22',
      description: t('media.videos.samples.school.description', 'Impact of our education ministry in rural communities'),
      featured: true,
    },
  ];

  // Publication categories
  const publicationCategories = [
    { id: 'all', label: t('media.publications.categories.all', 'All Publications'), icon: <MenuBook />, count: 65 },
    { id: 'newsletter', label: t('media.publications.categories.newsletter', 'Newsletters'), icon: <Newspaper />, count: 24 },
    { id: 'annual', label: t('media.publications.categories.annual', 'Annual Reports'), icon: <Description />, count: 15 },
    { id: 'spiritual', label: t('media.publications.categories.spiritual', 'Spiritual Resources'), icon: <LocalLibrary />, count: 18 },
    { id: 'research', label: t('media.publications.categories.research', 'Research Papers'), icon: <Article />, count: 8 },
  ];

  // Sample publications
  const samplePublications = [
    {
      id: 1,
      title: t('media.publications.samples.annual2023.title', 'Annual Report 2023'),
      category: 'annual',
      type: 'pdf',
      pages: 48,
      size: '4.2 MB',
      date: '2024-01-15',
      description: t('media.publications.samples.annual2023.description', 'Comprehensive report on our activities, finances, and impact for 2023'),
      downloads: 1250,
      featured: true,
    },
    {
      id: 2,
      title: t('media.publications.samples.newsletter.title', 'CICM Newsletter - June 2024'),
      category: 'newsletter',
      type: 'pdf',
      pages: 12,
      size: '1.8 MB',
      date: '2024-06-10',
      description: t('media.publications.samples.newsletter.description', 'Latest news and updates from our congregation'),
      downloads: 890,
      featured: true,
    },
    {
      id: 3,
      title: t('media.publications.samples.prayer.title', 'Daily Prayer Guide'),
      category: 'spiritual',
      type: 'pdf',
      pages: 36,
      size: '2.5 MB',
      date: '2024-03-05',
      description: t('media.publications.samples.prayer.description', 'Guide for daily prayers and reflections'),
      downloads: 2100,
      featured: true,
    },
    {
      id: 4,
      title: t('media.publications.samples.research.title', 'Impact of Catholic Education'),
      category: 'research',
      type: 'pdf',
      pages: 28,
      size: '3.1 MB',
      date: '2024-02-20',
      description: t('media.publications.samples.research.description', 'Research on the impact of Catholic education in rural Tanzania'),
      downloads: 560,
      featured: false,
    },
    {
      id: 5,
      title: t('media.publications.samples.vocations.title', 'Vocations Discernment Guide'),
      category: 'spiritual',
      type: 'pdf',
      pages: 24,
      size: '1.9 MB',
      date: '2024-05-12',
      description: t('media.publications.samples.vocations.description', 'Guide for young women discerning religious life'),
      downloads: 1450,
      featured: true,
    },
    {
      id: 6,
      title: t('media.publications.samples.financial.title', 'Financial Transparency Report 2023'),
      category: 'annual',
      type: 'pdf',
      pages: 32,
      size: '2.8 MB',
      date: '2024-01-30',
      description: t('media.publications.samples.financial.description', 'Detailed financial report and audit results'),
      downloads: 720,
      featured: false,
    },
  ];

  // Prayer resources
  const prayerResources = [
    {
      id: 1,
      title: t('media.prayer.daily.title', 'Daily Prayers'),
      type: 'pdf',
      description: t('media.prayer.daily.description', 'Collection of daily prayers for morning, noon, and evening'),
      downloads: 3250,
    },
    {
      id: 2,
      title: t('media.prayer.rosary.title', 'Rosary Guide'),
      type: 'pdf',
      description: t('media.prayer.rosary.description', 'Complete guide to praying the rosary with meditations'),
      downloads: 2850,
    },
    {
      id: 3,
      title: t('media.prayer.novena.title', 'Novena to Our Lady'),
      type: 'pdf',
      description: t('media.prayer.novena.description', 'Nine-day prayer to the Immaculate Heart of Mary'),
      downloads: 2100,
    },
    {
      id: 4,
      title: t('media.prayer.liturgy.title', 'Liturgy of the Hours'),
      type: 'pdf',
      description: t('media.prayer.liturgy.description', 'Simplified version for personal or community prayer'),
      downloads: 1800,
    },
    {
      id: 5,
      title: t('media.prayer.reflections.title', 'Daily Gospel Reflections'),
      type: 'pdf',
      description: t('media.prayer.reflections.description', 'Reflections on daily Gospel readings'),
      downloads: 2450,
    },
    {
      id: 6,
      title: t('media.prayer.songs.title', 'Prayer Songs & Hymns'),
      type: 'audio',
      description: t('media.prayer.songs.description', 'Collection of traditional and modern prayer songs'),
      downloads: 1650,
    },
  ];

  // Get category icon
  const getCategoryIcon = (categoryId: string) => {
    const category = [...photoCategories, ...videoCategories, ...publicationCategories]
      .find(cat => cat.id === categoryId);
    return category?.icon || <Category />;
  };

  // Get category color
  const getCategoryColor = (categoryId: string) => {
    const colors: Record<string, string> = {
      events: theme.palette.primary.main,
      ministry: theme.palette.secondary.main,
      community: theme.palette.info.main,
      projects: theme.palette.warning.main,
      nature: theme.palette.success.main,
      schools: theme.palette.error.main,
      healthcare: '#9C27B0',
      testimonies: '#00BCD4',
      documentary: '#FF9800',
      education: '#795548',
      music: '#E91E63',
      newsletter: '#3F51B5',
      annual: '#009688',
      spiritual: '#673AB7',
      research: '#FF5722',
    };
    return colors[categoryId] || theme.palette.grey[500];
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: 2 }}>
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
            {t('media.hero.title', 'Media & Resources')}
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
            {t('media.hero.subtitle', 'Explore Our Photo Gallery, Videos, Publications, and Prayer Resources')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              label={t('media.hero.tag1', 'Photo Gallery')}
              icon={<PhotoLibrary />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('media.hero.tag2', 'Video Gallery')}
              icon={<VideoLibrary />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('media.hero.tag3', 'Publications')}
              icon={<Book />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('media.hero.tag4', 'Prayer Resources')}
              icon={<MenuBook />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Media Tabs */}
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
              icon={<PhotoLibrary />} 
              label={t('media.tabs.photos', 'Photos')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<VideoLibrary />} 
              label={t('media.tabs.videos', 'Videos')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<Book />} 
              label={t('media.tabs.publications', 'Publications')} 
              iconPosition="start" 
            />
            <Tab 
              icon={<MenuBook />} 
              label={t('media.tabs.prayer', 'Prayer Resources')} 
              iconPosition="start" 
            />
          </Tabs>

          {/* Photos Tab */}
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={4}>
              {/* Categories Sidebar */}
              <Grid size={{ xs: 12, md: 3 }}>
                <Card elevation={2} sx={{ mb: 4 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('media.photos.categories.title', 'Photo Categories')}
                    </Typography>
                    
                    <List>
                      {photoCategories.map((category) => (
                        <ListItem 
                          key={category.id}
                          component="button"
                          sx={{
                            borderRadius: 1,
                            mb: 1,
                            cursor: 'pointer',
                            ...(category.id === 'all' && {
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                            }),
                            '&:hover': {
                              bgcolor: alpha(theme.palette.primary.main, 0.15),
                            }
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 40, color: getCategoryColor(category.id) }}>
                            {category.icon}
                          </ListItemIcon>
                          <ListItemText 
                            primary={category.label}
                            secondary={`${category.count} ${t('media.photos.count', 'photos')}`}
                            secondaryTypographyProps={{ variant: 'caption' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    
                    <Divider sx={{ my: 3 }} />
                    
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                      {t('media.photos.filter', 'Filter Options')}
                    </Typography>
                    
                    <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                      <InputLabel>{t('media.photos.sort', 'Sort By')}</InputLabel>
                      <Select label={t('media.photos.sort', 'Sort By')} defaultValue="newest">
                        <MenuItem value="newest">{t('media.photos.sortNewest', 'Newest First')}</MenuItem>
                        <MenuItem value="oldest">{t('media.photos.sortOldest', 'Oldest First')}</MenuItem>
                        <MenuItem value="popular">{t('media.photos.sortPopular', 'Most Viewed')}</MenuItem>
                        <MenuItem value="featured">{t('media.photos.sortFeatured', 'Featured')}</MenuItem>
                      </Select>
                    </FormControl>
                    
                    <TextField
                      fullWidth
                      placeholder={t('media.photos.search', 'Search photos...')}
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </CardContent>
                </Card>
                
                {/* Statistics */}
                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    {t('media.photos.stats.title', 'Gallery Statistics')}
                  </Typography>
                  
                  <List dense>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary={t('media.photos.stats.total', 'Total Photos')}
                        secondary="1,250"
                        secondaryTypographyProps={{ fontWeight: 600, color: 'primary.main' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary={t('media.photos.stats.categories', 'Categories')}
                        secondary="8"
                        secondaryTypographyProps={{ fontWeight: 600, color: 'primary.main' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary={t('media.photos.stats.views', 'Total Views')}
                        secondary="85,000+"
                        secondaryTypographyProps={{ fontWeight: 600, color: 'primary.main' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary={t('media.photos.stats.updated', 'Last Updated')}
                        secondary="Oct 2024"
                        secondaryTypographyProps={{ fontWeight: 600, color: 'primary.main' }}
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              
              {/* Photo Grid */}
              <Grid size={{ xs: 12, md: 9 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {t('media.photos.gallery', 'Photo Gallery')}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button startIcon={<CloudDownload />} size="small">
                      {t('media.photos.downloadAll', 'Download All')}
                    </Button>
                    <Button startIcon={<Share />} size="small">
                      {t('media.photos.share', 'Share')}
                    </Button>
                  </Box>
                </Box>
                
                {/* Featured Photos */}
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                  {t('media.photos.featured', 'Featured Photos')}
                </Typography>
                
                <Grid container spacing={3} sx={{ mb: 6 }}>
                  {samplePhotos
                    .filter(photo => photo.featured)
                    .map((photo) => (
                      <Grid size={{ xs: 12, md: 6 }} key={photo.id}>
                        <Card 
                          elevation={2}
                          sx={{ 
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: 6,
                            }
                          }}
                          onClick={() => handleImageClick(photo)}
                        >
                          <CardMedia
                            component="div"
                            sx={{
                              height: 200,
                              bgcolor: alpha(getCategoryColor(photo.category), 0.2),
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: getCategoryColor(photo.category),
                            }}
                          >
                            <PhotoLibrary sx={{ fontSize: 60 }} />
                          </CardMedia>
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {photo.title}
                              </Typography>
                              <Chip 
                                label={photo.category}
                                size="small"
                                sx={{ 
                                  bgcolor: alpha(getCategoryColor(photo.category), 0.1),
                                  color: getCategoryColor(photo.category)
                                }}
                              />
                            </Box>
                            
                            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                              {photo.description}
                            </Typography>
                            
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <CalendarToday sx={{ fontSize: 14, color: 'text.secondary', mr: 0.5 }} />
                                  <Typography variant="caption" color="text.secondary">
                                    {photo.date}
                                  </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <LocationOn sx={{ fontSize: 14, color: 'text.secondary', mr: 0.5 }} />
                                  <Typography variant="caption" color="text.secondary">
                                    {photo.location}
                                  </Typography>
                                </Box>
                              </Box>
                              
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Visibility sx={{ fontSize: 14, color: 'text.secondary', mr: 0.5 }} />
                                  <Typography variant="caption" color="text.secondary">
                                    {photo.views}
                                  </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Favorite sx={{ fontSize: 14, color: 'text.secondary', mr: 0.5 }} />
                                  <Typography variant="caption" color="text.secondary">
                                    {photo.likes}
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </CardContent>
                          <CardActions sx={{ p: 2, pt: 0 }}>
                            <Button size="small" color="primary" startIcon={<ZoomIn />}>
                              {t('media.photos.view', 'View Album')}
                            </Button>
                            <Button size="small" startIcon={<Download />}>
                              {t('media.photos.download', 'Download')}
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
                
                {/* All Photos */}
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                  {t('media.photos.all', 'All Photos')}
                </Typography>
                
                <ImageList cols={3} gap={16}>
                  {samplePhotos.map((photo) => (
                    <ImageListItem 
                      key={photo.id}
                      sx={{ 
                        cursor: 'pointer',
                        borderRadius: 2,
                        overflow: 'hidden',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          boxShadow: 4,
                        }
                      }}
                      onClick={() => handleImageClick(photo)}
                    >
                      <Box
                        sx={{
                          height: 200,
                          bgcolor: alpha(getCategoryColor(photo.category), 0.2),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: getCategoryColor(photo.category),
                        }}
                      >
                        <PhotoLibrary sx={{ fontSize: 40 }} />
                      </Box>
                      <ImageListItemBar
                        title={photo.title}
                        subtitle={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CalendarToday sx={{ fontSize: 12 }} />
                            <Typography variant="caption">{photo.date}</Typography>
                          </Box>
                        }
                        actionIcon={
                          <IconButton
                            sx={{ color: 'white' }}
                            aria-label={`info about ${photo.title}`}
                          >
                            <ZoomIn />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                
                {/* Pagination */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                  <Pagination 
                    count={5} 
                    page={page} 
                    onChange={handlePageChange}
                    color="primary"
                    size="large"
                  />
                </Box>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Videos Tab */}
          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={4}>
              {/* Categories Sidebar */}
              <Grid size={{ xs: 12, md: 3 }}>
                <Card elevation={2} sx={{ mb: 4 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('media.videos.categories.title', 'Video Categories')}
                    </Typography>
                    
                    <List>
                      {videoCategories.map((category) => (
                        <ListItem 
                          key={category.id}
                          component="button"
                          sx={{
                            borderRadius: 1,
                            mb: 1,
                            cursor: 'pointer',
                            ...(category.id === 'all' && {
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                            }),
                            '&:hover': {
                              bgcolor: alpha(theme.palette.primary.main, 0.15),
                            }
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 40, color: getCategoryColor(category.id) }}>
                            {category.icon}
                          </ListItemIcon>
                          <ListItemText 
                            primary={category.label}
                            secondary={`${category.count} ${t('media.videos.count', 'videos')}`}
                            secondaryTypographyProps={{ variant: 'caption' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    
                    <Divider sx={{ my: 3 }} />
                    
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                      {t('media.videos.filter', 'Filter Options')}
                    </Typography>
                    
                    <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                      <InputLabel>{t('media.videos.sort', 'Sort By')}</InputLabel>
                      <Select label={t('media.videos.sort', 'Sort By')} defaultValue="newest">
                        <MenuItem value="newest">{t('media.videos.sortNewest', 'Newest First')}</MenuItem>
                        <MenuItem value="oldest">{t('media.videos.sortOldest', 'Oldest First')}</MenuItem>
                        <MenuItem value="views">{t('media.videos.sortViews', 'Most Viewed')}</MenuItem>
                        <MenuItem value="duration">{t('media.videos.sortDuration', 'Duration')}</MenuItem>
                      </Select>
                    </FormControl>
                    
                    <TextField
                      fullWidth
                      placeholder={t('media.videos.search', 'Search videos...')}
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </CardContent>
                </Card>
                
                {/* YouTube Channel */}
                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.error.main, 0.1), borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <YouTube sx={{ color: '#FF0000', mr: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#FF0000' }}>
                      {t('media.videos.youtube.title', 'YouTube Channel')}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                    {t('media.videos.youtube.description', 'Subscribe to our YouTube channel for latest videos and updates.')}
                  </Typography>
                  
                  <Button
                    variant="contained"
                    sx={{ 
                      bgcolor: '#FF0000',
                      color: 'white',
                      '&:hover': { bgcolor: '#CC0000' }
                    }}
                    fullWidth
                    startIcon={<YouTube />}
                    onClick={() => window.open('https://youtube.com/cicm', '_blank')}
                  >
                    {t('media.videos.youtube.subscribe', 'Subscribe')}
                  </Button>
                </Paper>
              </Grid>
              
              {/* Video Grid */}
              <Grid size={{ xs: 12, md: 9 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {t('media.videos.gallery', 'Video Gallery')}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button startIcon={<YouTube />} size="small">
                      {t('media.videos.channel', 'View Channel')}
                    </Button>
                    <Button startIcon={<Podcasts />} size="small">
                      {t('media.videos.podcast', 'Audio Podcast')}
                    </Button>
                  </Box>
                </Box>
                
                {/* Featured Videos */}
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                  {t('media.videos.featured', 'Featured Videos')}
                </Typography>
                
                <Grid container spacing={4} sx={{ mb: 6 }}>
                  {sampleVideos
                    .filter(video => video.featured)
                    .map((video) => (
                      <Grid size={{ xs: 12, md: 6 }} key={video.id}>
                        <Card 
                          elevation={3}
                          sx={{ 
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: 6,
                            }
                          }}
                          onClick={() => handleVideoClick(video)}
                        >
                          <CardMedia
                            component="div"
                            sx={{
                              height: 200,
                              bgcolor: alpha(getCategoryColor(video.category), 0.2),
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: getCategoryColor(video.category),
                              position: 'relative',
                            }}
                          >
                            <PlayCircle sx={{ fontSize: 60 }} />
                            <Chip
                              label={video.duration}
                              size="small"
                              sx={{
                                position: 'absolute',
                                bottom: 10,
                                right: 10,
                                bgcolor: 'rgba(0, 0, 0, 0.7)',
                                color: 'white',
                              }}
                            />
                          </CardMedia>
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {video.title}
                              </Typography>
                              <Chip 
                                label={video.category}
                                size="small"
                                sx={{ 
                                  bgcolor: alpha(getCategoryColor(video.category), 0.1),
                                  color: getCategoryColor(video.category)
                                }}
                              />
                            </Box>
                            
                            <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                              {video.description}
                            </Typography>
                            
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <CalendarToday sx={{ fontSize: 14, color: 'text.secondary', mr: 0.5 }} />
                                  <Typography variant="caption" color="text.secondary">
                                    {video.date}
                                  </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Visibility sx={{ fontSize: 14, color: 'text.secondary', mr: 0.5 }} />
                                  <Typography variant="caption" color="text.secondary">
                                    {video.views.toLocaleString()}
                                  </Typography>
                                </Box>
                              </Box>
                              
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small">
                                  <ThumbUp sx={{ fontSize: 16 }} />
                                </IconButton>
                                <Typography variant="caption" color="text.secondary">
                                  {video.likes}
                                </Typography>
                              </Box>
                            </Box>
                          </CardContent>
                          <CardActions sx={{ p: 2, pt: 0 }}>
                            <Button size="small" color="primary" startIcon={<PlayCircle />}>
                              {t('media.videos.watch', 'Watch Now')}
                            </Button>
                            <Button size="small" startIcon={<Share />}>
                              {t('media.videos.share', 'Share')}
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
                
                {/* All Videos */}
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                  {t('media.videos.all', 'All Videos')}
                </Typography>
                
                <Grid container spacing={3}>
                  {sampleVideos.map((video) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={video.id}>
                      <Card 
                        elevation={1}
                        sx={{ 
                          cursor: 'pointer',
                          transition: 'transform 0.2s',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: 4,
                          }
                        }}
                        onClick={() => handleVideoClick(video)}
                      >
                        <CardMedia
                          component="div"
                          sx={{
                            height: 160,
                            bgcolor: alpha(getCategoryColor(video.category), 0.2),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: getCategoryColor(video.category),
                            position: 'relative',
                          }}
                        >
                          <PlayCircle sx={{ fontSize: 40 }} />
                          <Chip
                            label={video.duration}
                            size="small"
                            sx={{
                              position: 'absolute',
                              bottom: 8,
                              right: 8,
                              bgcolor: 'rgba(0, 0, 0, 0.7)',
                              color: 'white',
                              fontSize: '0.6rem',
                            }}
                          />
                        </CardMedia>
                        <CardContent>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                            {video.title}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                            {video.date}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Chip 
                              label={video.category}
                              size="small"
                              sx={{ 
                                bgcolor: alpha(getCategoryColor(video.category), 0.1),
                                color: getCategoryColor(video.category),
                                fontSize: '0.6rem'
                              }}
                            />
                            <Typography variant="caption" color="text.secondary">
                              {video.views.toLocaleString()} {t('media.videos.views', 'views')}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                
                {/* Pagination */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                  <Pagination 
                    count={3} 
                    page={page} 
                    onChange={handlePageChange}
                    color="primary"
                  />
                </Box>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Publications Tab */}
          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={4}>
              {/* Categories Sidebar */}
              <Grid size={{ xs: 12, md: 3 }}>
                <Card elevation={2} sx={{ mb: 4 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('media.publications.categories.title', 'Publication Types')}
                    </Typography>
                    
                    <List>
                      {publicationCategories.map((category) => (
                        <ListItem 
                          key={category.id}
                          component="button"
                          sx={{
                            borderRadius: 1,
                            mb: 1,
                            cursor: 'pointer',
                            ...(category.id === 'all' && {
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                            }),
                            '&:hover': {
                              bgcolor: alpha(theme.palette.primary.main, 0.15),
                            }
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 40, color: getCategoryColor(category.id) }}>
                            {category.icon}
                          </ListItemIcon>
                          <ListItemText 
                            primary={category.label}
                            secondary={`${category.count} ${t('media.publications.count', 'items')}`}
                            secondaryTypographyProps={{ variant: 'caption' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    
                    <Divider sx={{ my: 3 }} />
                    
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                      {t('media.publications.filter', 'Filter Options')}
                    </Typography>
                    
                    <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                      <InputLabel>{t('media.publications.sort', 'Sort By')}</InputLabel>
                      <Select label={t('media.publications.sort', 'Sort By')} defaultValue="newest">
                        <MenuItem value="newest">{t('media.publications.sortNewest', 'Newest First')}</MenuItem>
                        <MenuItem value="oldest">{t('media.publications.sortOldest', 'Oldest First')}</MenuItem>
                        <MenuItem value="popular">{t('media.publications.sortPopular', 'Most Downloaded')}</MenuItem>
                        <MenuItem value="title">{t('media.publications.sortTitle', 'Title A-Z')}</MenuItem>
                      </Select>
                    </FormControl>
                    
                    <TextField
                      fullWidth
                      placeholder={t('media.publications.search', 'Search publications...')}
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </CardContent>
                </Card>
                
                {/* Download Stats */}
                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.info.main, 0.1), borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'info.main' }}>
                    {t('media.publications.stats.title', 'Download Statistics')}
                  </Typography>
                  
                  <List dense>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary={t('media.publications.stats.total', 'Total Downloads')}
                        secondary="15,250+"
                        secondaryTypographyProps={{ fontWeight: 600, color: 'info.main' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary={t('media.publications.stats.monthly', 'Monthly Average')}
                        secondary="1,200+"
                        secondaryTypographyProps={{ fontWeight: 600, color: 'info.main' }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary={t('media.publications.stats.popular', 'Most Popular')}
                        secondary={t('media.publications.stats.popularFile', 'Daily Prayer Guide')}
                        secondaryTypographyProps={{ fontWeight: 600, color: 'info.main' }}
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              
              {/* Publications Grid */}
              <Grid size={{ xs: 12, md: 9 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {t('media.publications.library', 'Publications Library')}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button startIcon={<CloudDownload />} size="small">
                      {t('media.publications.bulk', 'Bulk Download')}
                    </Button>
                    <Button startIcon={<Print />} size="small">
                      {t('media.publications.print', 'Print Catalog')}
                    </Button>
                  </Box>
                </Box>
                
                {/* Featured Publications */}
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                  {t('media.publications.featured', 'Featured Publications')}
                </Typography>
                
                <Grid container spacing={4} sx={{ mb: 6 }}>
                  {samplePublications
                    .filter(pub => pub.featured)
                    .map((publication) => (
                      <Grid size={{ xs: 12, md: 6 }} key={publication.id}>
                        <Card 
                          elevation={3}
                          sx={{ 
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: 6,
                            }
                          }}
                          onClick={() => handlePublicationClick(publication)}
                        >
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                              <Avatar 
                                sx={{ 
                                  bgcolor: alpha(getCategoryColor(publication.category), 0.1), 
                                  color: getCategoryColor(publication.category),
                                  mr: 2,
                                  width: 56,
                                  height: 56
                                }}
                              >
                                {publication.type === 'pdf' ? <PictureAsPdf /> : <InsertDriveFile />}
                              </Avatar>
                              <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                  {publication.title}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                  <Chip 
                                    label={publication.category}
                                    size="small"
                                    sx={{ 
                                      bgcolor: alpha(getCategoryColor(publication.category), 0.1),
                                      color: getCategoryColor(publication.category)
                                    }}
                                  />
                                  <Typography variant="caption" color="text.secondary">
                                    {publication.pages} {t('media.publications.pages', 'pages')} • {publication.size}
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                            
                            <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                              {publication.description}
                            </Typography>
                            
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <CalendarToday sx={{ fontSize: 14, color: 'text.secondary', mr: 0.5 }} />
                                  <Typography variant="caption" color="text.secondary">
                                    {publication.date}
                                  </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <CloudDownload sx={{ fontSize: 14, color: 'text.secondary', mr: 0.5 }} />
                                  <Typography variant="caption" color="text.secondary">
                                    {publication.downloads}
                                  </Typography>
                                </Box>
                              </Box>
                              
                              <Button 
                                size="small" 
                                color="primary"
                                startIcon={<GetApp />}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDownload('publication', publication);
                                }}
                              >
                                {t('media.publications.download', 'Download')}
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
                
                {/* All Publications */}
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                  {t('media.publications.all', 'All Publications')}
                </Typography>
                
                <Grid container spacing={3}>
                  {samplePublications.map((publication) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={publication.id}>
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
                        onClick={() => handlePublicationClick(publication)}
                      >
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar 
                              sx={{ 
                                bgcolor: alpha(getCategoryColor(publication.category), 0.1), 
                                color: getCategoryColor(publication.category),
                                mr: 2,
                                width: 40,
                                height: 40
                              }}
                            >
                              {publication.type === 'pdf' ? <PictureAsPdf /> : <InsertDriveFile />}
                            </Avatar>
                            <Box>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {publication.title}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {publication.date}
                              </Typography>
                            </Box>
                          </Box>
                          
                          <Chip 
                            label={publication.category}
                            size="small"
                            sx={{ 
                              mb: 2,
                              bgcolor: alpha(getCategoryColor(publication.category), 0.1),
                              color: getCategoryColor(publication.category)
                            }}
                          />
                          
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {publication.description.substring(0, 80)}...
                          </Typography>
                          
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="caption" color="text.secondary">
                              {publication.downloads} {t('media.publications.downloads', 'downloads')}
                            </Typography>
                            <IconButton size="small" onClick={(e) => {
                              e.stopPropagation();
                              handleDownload('publication', publication);
                            }}>
                              <GetApp fontSize="small" />
                            </IconButton>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                
                {/* Pagination */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                  <Pagination 
                    count={3} 
                    page={page} 
                    onChange={handlePageChange}
                    color="primary"
                  />
                </Box>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Prayer Resources Tab */}
          <TabPanel value={tabValue} index={3}>
            <Grid container spacing={4}>
              {/* Prayer Types */}
              <Grid size={{ xs: 12, md: 3 }}>
                <Card elevation={2} sx={{ mb: 4 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                      {t('media.prayer.types.title', 'Prayer Types')}
                    </Typography>
                    
                    <List>
                      {[
                        { type: 'all', label: t('media.prayer.types.all', 'All Prayers'), icon: <MenuBook />, count: 45 },
                        { type: 'daily', label: t('media.prayer.types.daily', 'Daily Prayers'), icon: <CalendarToday />, count: 15 },
                        { type: 'rosary', label: t('media.prayer.types.rosary', 'Rosary'), icon: <Church />, count: 8 },
                        { type: 'novena', label: t('media.prayer.types.novena', 'Novenas'), icon: <LocalLibrary />, count: 12 },
                        { type: 'liturgy', label: t('media.prayer.types.liturgy', 'Liturgy'), icon: <Description />, count: 6 },
                        { type: 'audio', label: t('media.prayer.types.audio', 'Audio Prayers'), icon: <Headphones />, count: 4 },
                      ].map((item) => (
                        <ListItem 
                          key={item.type}
                          component="button"
                          sx={{
                            borderRadius: 1,
                            mb: 1,
                            cursor: 'pointer',
                            ...(item.type === 'all' && {
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                            }),
                            '&:hover': {
                              bgcolor: alpha(theme.palette.primary.main, 0.15),
                            }
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText 
                            primary={item.label}
                            secondary={`${item.count} ${t('media.prayer.types.count', 'resources')}`}
                            secondaryTypographyProps={{ variant: 'caption' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    
                    <Divider sx={{ my: 3 }} />
                    
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                      {t('media.prayer.filter', 'Filter Options')}
                    </Typography>
                    
                    <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                      <InputLabel>{t('media.prayer.format', 'Format')}</InputLabel>
                      <Select label={t('media.prayer.format', 'Format')} defaultValue="all">
                        <MenuItem value="all">{t('media.prayer.formatAll', 'All Formats')}</MenuItem>
                        <MenuItem value="pdf">PDF</MenuItem>
                        <MenuItem value="audio">Audio</MenuItem>
                        <MenuItem value="print">Printable</MenuItem>
                      </Select>
                    </FormControl>
                    
                    <TextField
                      fullWidth
                      placeholder={t('media.prayer.search', 'Search prayers...')}
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </CardContent>
                </Card>
                
                {/* Daily Prayer */}
                <Paper sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    {t('media.prayer.dailyPrayer.title', "Today's Prayer")}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                    {t('media.prayer.dailyPrayer.content', 'Prayer for peace and guidance in our daily work.')}
                  </Typography>
                  
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<MenuBook />}
                  >
                    {t('media.prayer.dailyPrayer.view', 'View Full Prayer')}
                  </Button>
                </Paper>
              </Grid>
              
              {/* Prayer Resources Grid */}
              <Grid size={{ xs: 12, md: 9 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {t('media.prayer.library', 'Prayer Resources')}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button startIcon={<VolumeUp />} size="small">
                      {t('media.prayer.audio', 'Audio Prayers')}
                    </Button>
                    <Button startIcon={<Print />} size="small">
                      {t('media.prayer.printable', 'Printable Versions')}
                    </Button>
                  </Box>
                </Box>
                
                {/* Popular Resources */}
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                  {t('media.prayer.popular', 'Most Popular Resources')}
                </Typography>
                
                <Grid container spacing={4} sx={{ mb: 6 }}>
                  {prayerResources
                    .slice(0, 2)
                    .map((resource) => (
                      <Grid size={{ xs: 12, md: 6 }} key={resource.id}>
                        <Card elevation={3}>
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                              <Avatar 
                                sx={{ 
                                  bgcolor: alpha(theme.palette.primary.main, 0.1), 
                                  color: theme.palette.primary.main,
                                  mr: 2,
                                  width: 56,
                                  height: 56
                                }}
                              >
                                {resource.type === 'pdf' ? <PictureAsPdf /> : <Headphones />}
                              </Avatar>
                              <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                  {resource.title}
                                </Typography>
                                <Chip 
                                  label={resource.type === 'pdf' ? 'PDF' : 'Audio'}
                                  size="small"
                                  sx={{ 
                                    bgcolor: alpha(
                                      resource.type === 'pdf' ? theme.palette.primary.main : theme.palette.secondary.main,
                                      0.1
                                    ),
                                    color: resource.type === 'pdf' ? theme.palette.primary.main : theme.palette.secondary.main
                                  }}
                                />
                              </Box>
                            </Box>
                            
                            <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                              {resource.description}
                            </Typography>
                            
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Typography variant="caption" color="text.secondary">
                                {resource.downloads.toLocaleString()} {t('media.prayer.downloads', 'downloads')}
                              </Typography>
                              
                              <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button 
                                  size="small" 
                                  color="primary"
                                  startIcon={resource.type === 'pdf' ? <GetApp /> : <Headphones />}
                                  onClick={() => handleDownload('prayer', resource)}
                                >
                                  {resource.type === 'pdf' 
                                    ? t('media.prayer.download', 'Download') 
                                    : t('media.prayer.listen', 'Listen')}
                                </Button>
                                <Button size="small" startIcon={<Bookmark />}>
                                  {t('media.prayer.save', 'Save')}
                                </Button>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
                
                {/* All Resources */}
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                  {t('media.prayer.all', 'All Prayer Resources')}
                </Typography>
                
                <Grid container spacing={3}>
                  {prayerResources.map((resource) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={resource.id}>
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
                        onClick={() => handleDownload('prayer', resource)}
                      >
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar 
                              sx={{ 
                                bgcolor: alpha(
                                  resource.type === 'pdf' ? theme.palette.primary.main : theme.palette.secondary.main,
                                  0.1
                                ), 
                                color: resource.type === 'pdf' ? theme.palette.primary.main : theme.palette.secondary.main,
                                mr: 2,
                                width: 40,
                                height: 40
                              }}
                            >
                              {resource.type === 'pdf' ? <PictureAsPdf /> : <Headphones />}
                            </Avatar>
                            <Box>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {resource.title}
                              </Typography>
                              <Chip 
                                label={resource.type === 'pdf' ? 'PDF' : 'Audio'}
                                size="small"
                                sx={{ 
                                  mt: 0.5,
                                  bgcolor: alpha(
                                    resource.type === 'pdf' ? theme.palette.primary.main : theme.palette.secondary.main,
                                    0.1
                                  ),
                                  color: resource.type === 'pdf' ? theme.palette.primary.main : theme.palette.secondary.main,
                                  fontSize: '0.6rem'
                                }}
                              />
                            </Box>
                          </Box>
                          
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {resource.description}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="caption" color="text.secondary">
                              {resource.downloads.toLocaleString()} {t('media.prayer.downloads', 'downloads')}
                            </Typography>
                            <IconButton size="small">
                              {resource.type === 'pdf' ? <GetApp fontSize="small" /> : <Headphones fontSize="small" />}
                            </IconButton>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                
                {/* Prayer Request */}
                <Paper sx={{ mt: 6, p: 4, borderRadius: 3, bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                    {t('media.prayer.request.title', 'Submit Prayer Request')}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    {t('media.prayer.request.description', 'We are praying for you. Share your prayer intentions with our community.')}
                  </Typography>
                  
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<Church />}
                    onClick={() => window.location.href = '/support?tab=prayer'}
                  >
                    {t('media.prayer.request.button', 'Submit Prayer Request')}
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>
        </Paper>

        {/* Newsletter Subscription */}
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
            {t('media.newsletter.title', 'Stay Updated')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
            {t('media.newsletter.description', 'Subscribe to our newsletter to receive latest photos, videos, publications, and prayer resources directly in your inbox.')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', maxWidth: '600px', mx: 'auto' }}>
            <TextField
              placeholder={t('media.newsletter.placeholder', 'Enter your email address')}
              variant="outlined"
              size="small"
              sx={{ flexGrow: 1 }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<Email />}
            >
              {t('media.newsletter.subscribe', 'Subscribe')}
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Image Dialog */}
      <Dialog 
        open={imageDialogOpen} 
        onClose={handleCloseImageDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedImage && (
          <>
            <DialogTitle>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {selectedImage.title}
              </Typography>
            </DialogTitle>
            
            <DialogContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box
                  sx={{
                    height: 400,
                    bgcolor: alpha(getCategoryColor(selectedImage.category), 0.2),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: getCategoryColor(selectedImage.category),
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <PhotoLibrary sx={{ fontSize: 80 }} />
                </Box>
                
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {t('media.dialog.description', 'Description')}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {selectedImage.description}
                  </Typography>
                </Box>
                
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('media.dialog.date', 'Date')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedImage.date}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('media.dialog.location', 'Location')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedImage.location}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('media.dialog.views', 'Views')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedImage.views}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('media.dialog.likes', 'Likes')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedImage.likes}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>
            
            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button onClick={handleCloseImageDialog} color="inherit">
                {t('media.dialog.close', 'Close')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Download />}
                onClick={() => handleDownload('image', selectedImage)}
                disabled={loading}
              >
                {loading ? t('media.dialog.downloading', 'Downloading...') : t('media.dialog.download', 'Download Image')}
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<Share />}
              >
                {t('media.dialog.share', 'Share')}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Video Dialog */}
      <Dialog 
        open={videoDialogOpen} 
        onClose={handleCloseVideoDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedVideo && (
          <>
            <DialogTitle>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {selectedVideo.title}
              </Typography>
            </DialogTitle>
            
            <DialogContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box
                  sx={{
                    height: 400,
                    bgcolor: alpha(getCategoryColor(selectedVideo.category), 0.2),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: getCategoryColor(selectedVideo.category),
                    borderRadius: 2,
                    mb: 2,
                    position: 'relative',
                  }}
                >
                  <PlayCircle sx={{ fontSize: 80 }} />
                  <Chip
                    label={selectedVideo.duration}
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                    }}
                  />
                </Box>
                
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {t('media.dialog.description', 'Description')}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {selectedVideo.description}
                  </Typography>
                </Box>
                
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('media.dialog.date', 'Date')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedVideo.date}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('media.dialog.views', 'Views')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedVideo.views.toLocaleString()}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('media.dialog.likes', 'Likes')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedVideo.likes}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>
            
            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button onClick={handleCloseVideoDialog} color="inherit">
                {t('media.dialog.close', 'Close')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<PlayCircle />}
                onClick={() => window.open('https://youtube.com/watch?v=sample', '_blank')}
              >
                {t('media.dialog.watch', 'Watch on YouTube')}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Publication Dialog */}
      <Dialog 
        open={publicationDialogOpen} 
        onClose={handleClosePublicationDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedPublication && (
          <>
            <DialogTitle>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {selectedPublication.title}
              </Typography>
            </DialogTitle>
            
            <DialogContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: alpha(getCategoryColor(selectedPublication.category), 0.1), 
                      color: getCategoryColor(selectedPublication.category),
                      width: 80,
                      height: 80
                    }}
                  >
                    {selectedPublication.type === 'pdf' ? <PictureAsPdf sx={{ fontSize: 40 }} /> : <InsertDriveFile sx={{ fontSize: 40 }} />}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {selectedPublication.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Chip 
                        label={selectedPublication.category}
                        sx={{ 
                          bgcolor: alpha(getCategoryColor(selectedPublication.category), 0.1),
                          color: getCategoryColor(selectedPublication.category)
                        }}
                      />
                      <Chip 
                        label={selectedPublication.type.toUpperCase()}
                        size="small"
                        sx={{ 
                          bgcolor: alpha(theme.palette.info.main, 0.1),
                          color: theme.palette.info.main
                        }}
                      />
                      <Chip 
                        label={`${selectedPublication.pages} ${t('media.publications.pages', 'pages')}`}
                        size="small"
                      />
                    </Box>
                  </Box>
                </Box>
                
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {t('media.dialog.description', 'Description')}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {selectedPublication.description}
                  </Typography>
                </Box>
                
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('media.dialog.date', 'Date')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedPublication.date}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('media.dialog.size', 'File Size')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedPublication.size}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('media.dialog.downloads', 'Downloads')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedPublication.downloads}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>
            
            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button onClick={handleClosePublicationDialog} color="inherit">
                {t('media.dialog.close', 'Close')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<GetApp />}
                onClick={() => handleDownload('publication', selectedPublication)}
                disabled={loading}
              >
                {loading ? t('media.dialog.downloading', 'Downloading...') : t('media.dialog.download', 'Download PDF')}
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<Print />}
              >
                {t('media.dialog.print', 'Print')}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

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

export default Media;