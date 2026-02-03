import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  alpha,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  ExpandMore,
  Person,
  ContactMail,
  Phone,
  Mail,
  LocationOn,
  CalendarToday,
  QuestionAnswer,
  Send,
  AccessTime,
  People,
  HistoryEdu,
  Favorite,
  Book,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Vocations = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    location: '',
    message: '',
    heardAbout: '',
  });

  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);

  // Formation stages data
  const formationStages = [
    {
      stage: t('vocations.stages.aspirant.stage', 'Aspirant'),
      duration: t('vocations.stages.aspirant.duration', '1 year'),
      location: t('vocations.stages.aspirant.location', 'Home Parish'),
      description: t('vocations.stages.aspirant.description', 'Initial discernment period where young women explore religious life while living in their home parish under spiritual guidance.'),
      requirements: t('vocations.stages.aspirant.requirements', 'Age 17-20, Catholic faith, recommendation from parish priest'),
    },
    {
      stage: t('vocations.stages.candidate.stage', 'Candidate'),
      duration: t('vocations.stages.candidate.duration', '1 year'),
      location: t('vocations.stages.candidate.location', 'CICM Formation Centre'),
      description: t('vocations.stages.candidate.description', 'Intensive period of spiritual formation and community life at our formation center. Focus on prayer, study, and community living.'),
      requirements: t('vocations.stages.candidate.requirements', 'Successful completion of aspirancy, medical clearance, psychological assessment'),
    },
    {
      stage: t('vocations.stages.postulant.stage', 'Postulant'),
      duration: t('vocations.stages.postulant.duration', '2 years'),
      location: t('vocations.stages.postulant.location', 'CICM Formation Centre'),
      description: t('vocations.stages.postulant.description', 'Deepening of spiritual life and understanding of religious vows. Intensive study of scripture, theology, and CICM charism.'),
      requirements: t('vocations.stages.postulant.requirements', 'Formal acceptance into the congregation, commitment to formation program'),
    },
    {
      stage: t('vocations.stages.novitiate.stage', 'Novitiate'),
      duration: t('vocations.stages.novitiate.duration', '2 years'),
      location: t('vocations.stages.novitiate.location', 'CICM Formation Centre'),
      description: t('vocations.stages.novitiate.description', 'Canonical year dedicated to prayer, study, and preparation for religious vows. Focus on spiritual maturation and discernment.'),
      requirements: t('vocations.stages.novitiate.requirements', 'Completion of postulancy, readiness for canonical year'),
    },
    {
      stage: t('vocations.stages.firstVows.stage', 'First Vows'),
      duration: t('vocations.stages.firstVows.duration', 'Temporary'),
      location: t('vocations.stages.firstVows.location', 'CICM Mgolole Mother House'),
      description: t('vocations.stages.firstVows.description', 'Profession of temporary vows of chastity, poverty, and obedience. Beginning of active apostolic work in community.'),
      requirements: t('vocations.stages.firstVows.requirements', 'Successful completion of novitiate, approval by formation team and congregation leadership'),
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: t('vocations.faqs.q1.question', 'What age is appropriate to consider religious life?'),
      answer: t('vocations.faqs.q1.answer', 'Our congregation welcomes young women ages 17-20 who feel called to serve God. This is the ideal age to begin discernment as it allows for proper formation and spiritual growth.'),
    },
    {
      question: t('vocations.faqs.q2.question', 'What educational requirements are needed?'),
      answer: t('vocations.faqs.q2.answer', 'Minimum educational requirement is completion of secondary education (Form 4). Higher education is beneficial but not mandatory. What matters most is a sincere desire to serve God and His people.'),
    },
    {
      question: t('vocations.faqs.q3.question', 'Can I visit the convent before making a decision?'),
      answer: t('vocations.faqs.q3.answer', 'Yes! We encourage vocation inquiries to visit our mother house in Mgolole. You can participate in our "Come and See" weekends to experience community life firsthand. Contact the Vocation Director to arrange a visit.'),
    },
    {
      question: t('vocations.faqs.q4.question', 'What is the duration of formation?'),
      answer: t('vocations.faqs.q4.answer', 'The complete formation process takes approximately 6-7 years: 1 year as aspirant, 1 year as candidate, 2 years as postulant, and 2 years as novice before first vows. This ensures thorough spiritual and practical preparation.'),
    },
    {
      question: t('vocations.faqs.q5.question', 'What kind of support is provided during formation?'),
      answer: t('vocations.faqs.q5.answer', 'Formation includes spiritual direction, academic studies, psychological support, medical care, and all material needs. The congregation provides full support so you can focus on your spiritual growth.'),
    },
    {
      question: t('vocations.faqs.q6.question', 'Can I continue my education during formation?'),
      answer: t('vocations.faqs.q6.answer', 'Yes, our formation program includes continuing education opportunities. Many sisters pursue degrees in theology, education, healthcare, or social work while in formation, depending on their interests and community needs.'),
    },
  ];

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      age: '',
      email: '',
      phone: '',
      location: '',
      message: '',
      heardAbout: '',
    });
  };

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
            {t('vocations.hero.title', 'Discover Your Calling')}
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
            {t('vocations.hero.subtitle', 'Join the Immaculate Heart of Mary Sisters in Service to God and His People')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              label={t('vocations.hero.tag1', 'Ages 17-20')}
              icon={<Person />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('vocations.hero.tag2', 'Diocesan Congregation')}
              icon={<People />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
            <Chip
              label={t('vocations.hero.tag3', 'Since 1937')}
              icon={<HistoryEdu />}
              sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600 }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Discernment Process Section */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
              {t('vocations.discernment.title', 'Discernment Process')}
            </Typography>
            
            <Paper elevation={2} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                {t('vocations.discernment.subtitle', 'God has a purpose for your life')}
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                {t('vocations.discernment.content1', 'Maybe this is the first time you\'ve thought about what your vocation is - What is God calling you to do with your life.')}
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                {t('vocations.discernment.content2', 'The good news is, He has planned your vocation from all eternity! God chooses to reveal each person\'s vocation through specific circumstances. You are not choosing, you\'re trying to discover, with grace, His beautiful mystery for your life.')}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, p: 3, bgcolor: alpha(theme.palette.primary.main, 0.1), borderRadius: 2 }}>
                <Favorite sx={{ color: 'primary.main', mr: 2 }} />
                <Typography variant="body2" sx={{ color: 'primary.main', fontStyle: 'italic' }}>
                  {t('vocations.discernment.quote', 'Our congregation welcomes young girls from the age of 17-20 years who feel called to serve God through this congregation.')}
                </Typography>
              </Box>
            </Paper>

            {/* Steps to Begin */}
            <Paper elevation={1} sx={{ p: 4, borderRadius: 3, borderLeft: '4px solid', borderColor: 'primary.main' }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                {t('vocations.discernment.stepsTitle', 'How to Begin Your Journey')}
              </Typography>
              
              <List>
                {[1, 2, 3, 4].map((step) => (
                  <ListItem key={step} sx={{ py: 2 }}>
                    <ListItemIcon>
                      <Avatar sx={{ bgcolor: 'primary.main', color: 'white' }}>
                        {step}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={t(`vocations.discernment.step${step}.title`, `Step ${step}`)}
                      secondary={t(`vocations.discernment.step${step}.description`, 'Step description')}
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                {t('vocations.contactForm.title', 'Contact Our Vocation Director')}
              </Typography>
              
              <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
                {t('vocations.contactForm.subtitle', 'If you feel called to serve God through our congregation, write a letter to your Parish Priest to the following address:')}
              </Typography>

              <Box sx={{ mb: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.secondary' }}>
                  {t('vocations.contactForm.mailTitle', 'Mail to:')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>{t('vocations.contactForm.addressLine1', 'Vocation Directress,')}</strong>
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {t('vocations.contactForm.addressLine2', 'Immaculate Heart of Mary Sisters,')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {t('vocations.contactForm.addressLine3', 'P. O. Box 1049,')}
                </Typography>
                <Typography variant="body1">
                  {t('vocations.contactForm.addressLine4', 'Morogoro, Tanzania')}
                </Typography>
              </Box>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t('vocations.contactForm.name', 'Full Name')}
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t('vocations.contactForm.age', 'Age')}
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleFormChange}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t('vocations.contactForm.email', 'Email Address')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t('vocations.contactForm.phone', 'Phone Number')}
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label={t('vocations.contactForm.location', 'Location/Parish')}
                      name="location"
                      value={formData.location}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label={t('vocations.contactForm.heardAbout', 'How did you hear about us?')}
                      name="heardAbout"
                      value={formData.heardAbout}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label={t('vocations.contactForm.message', 'Your Message/Call Story')}
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      startIcon={<Send />}
                      sx={{ py: 1.5 }}
                    >
                      {t('vocations.contactForm.submit', 'Submit Inquiry')}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>

        {/* Formation Stages Section */}
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, color: 'text.primary', textAlign: 'center' }}>
          {t('vocations.formation.title', 'Formation Journey')}
        </Typography>
        
        {/* Timeline View */}
        <Box sx={{ mb: 8 }}>
          <Stepper orientation="vertical" sx={{ position: 'relative' }}>
            {formationStages.map((stage, index) => (
              <Step key={index} active={true} sx={{ position: 'relative' }}>
                <StepLabel 
                  StepIconComponent={() => (
                    <Avatar sx={{ bgcolor: 'primary.main', color: 'white' }}>
                      {index + 1}
                    </Avatar>
                  )}
                  sx={{ 
                    '& .MuiStepLabel-label': { 
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'text.primary'
                    } 
                  }}
                >
                  {stage.stage}
                </StepLabel>
                <StepContent>
                  <Paper 
                    elevation={2} 
                    sx={{ 
                      p: 3, 
                      ml: 4, 
                      borderRadius: 2,
                      borderLeft: '4px solid',
                      borderColor: 'primary.main'
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <AccessTime sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                          <Typography variant="body2" fontWeight={600}>
                            {t('vocations.formation.duration', 'Duration:')} {stage.duration}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, md: 8 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <LocationOn sx={{ fontSize: 16, color: 'primary.main', mr: 1 }} />
                          <Typography variant="body2" fontWeight={600}>
                            {t('vocations.formation.location', 'Location:')} {stage.location}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                          {stage.description}
                        </Typography>
                        <Chip 
                          label={stage.requirements}
                          size="small"
                          sx={{ 
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            color: 'primary.main',
                            fontWeight: 500
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Table View for Larger Screens */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, mb: 8 }}>
          <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 2 }}>
            <Table>
              <TableHead sx={{ bgcolor: 'primary.main' }}>
                <TableRow>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>
                    {t('vocations.table.stage', 'Stage')}
                  </TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>
                    {t('vocations.table.duration', 'Duration')}
                  </TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>
                    {t('vocations.table.location', 'Location')}
                  </TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>
                    {t('vocations.table.description', 'Description')}
                  </TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>
                    {t('vocations.table.requirements', 'Requirements')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formationStages.map((stage, index) => (
                  <TableRow 
                    key={index}
                    sx={{ 
                      '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.05) },
                      '&:nth-of-type(odd)': { bgcolor: 'action.hover' }
                    }}
                  >
                    <TableCell sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {stage.stage}
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={stage.duration}
                        size="small"
                        icon={<AccessTime />}
                        sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} />
                        {stage.location}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>
                      {stage.description}
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                        {stage.requirements}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* FAQ Section */}
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, color: 'text.primary', textAlign: 'center' }}>
          {t('vocations.faq.title', 'Frequently Asked Questions')}
        </Typography>
        
        <Box sx={{ mb: 8 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedAccordion === `panel${index}`}
              onChange={handleAccordionChange(`panel${index}`)}
              sx={{
                mb: 2,
                borderRadius: '8px !important',
                overflow: 'hidden',
                '&:before': { display: 'none' }
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <QuestionAnswer sx={{ color: 'primary.main' }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: 'background.paper' }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Contact Information Section */}
        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 3,
            bgcolor: 'primary.main',
            color: 'white',
            textAlign: 'center',
            mb: 8
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
            {t('vocations.contactInfo.title', 'Contact Our Vocation Director')}
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'white', color: 'primary.main', width: 60, height: 60 }}>
                  <ContactMail sx={{ fontSize: 30 }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {t('vocations.contactInfo.director', 'Vocation Directress')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('vocations.contactInfo.directorName', 'Sr. Flora Chuma (CICM)')}
                </Typography>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Phone sx={{ color: 'white' }} />
                    <Typography>
                      {t('vocations.contactInfo.phone', '+255 XXX XXX XXX')}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Mail sx={{ color: 'white' }} />
                    <Typography>
                      {t('vocations.contactInfo.email', 'vocations@cicm.or.tz')}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
                    <LocationOn sx={{ color: 'white' }} />
                    <Typography align="center">
                      {t('vocations.contactInfo.address', 'Immaculate Heart of Mary Sisters, P.O. Box 1049, Morogoro, Tanzania')}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              
              <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<Send />}
                >
                  {t('vocations.contactInfo.contactButton', 'Send Email')}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'white' }}
                  size="large"
                  startIcon={<Phone />}
                >
                  {t('vocations.contactInfo.callButton', 'Call Now')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Call to Action */}
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            border: '2px dashed',
            borderColor: 'primary.main',
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
            {t('vocations.cta.title', 'Take the First Step')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
            {t('vocations.cta.description', 'If you feel God might be calling you to religious life, don\'t hesitate to reach out. Our vocation team is ready to walk with you on this journey of discovery.')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<Book />}
            >
              {t('vocations.cta.button1', 'Download Vocation Guide')}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<CalendarToday />}
            >
              {t('vocations.cta.button2', 'Schedule a Visit')}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Vocations;