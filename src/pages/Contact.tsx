import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
  Divider,
  alpha,
  Alert,
  Snackbar,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Chip,
} from "@mui/material";
import { useTheme } from "../contexts/ThemeContext.tsx";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  Building,
  Globe,
  CheckCircle,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const { muiTheme } = useTheme();
  const primaryColor = muiTheme.palette.primary.main;
  const secondaryColor = muiTheme.palette.secondary.main;
  const backgroundColor = muiTheme.palette.background.default;
  const paperColor = muiTheme.palette.background.paper;
  const textPrimary = muiTheme.palette.text.primary;
  const textSecondary = muiTheme.palette.text.secondary;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["hello@prismpr.com", "careers@prismpr.com"],
      color: primaryColor,
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+1 (555) 789-0123", "+1 (555) 789-4567"],
      color: secondaryColor,
    },
    {
      icon: <MapPin size={24} />,
      title: "Office",
      details: ["123 Madison Ave", "New York, NY 10016"],
      color: primaryColor,
    },
    {
      icon: <Clock size={24} />,
      title: "Hours",
      details: ["Mon-Fri: 9am-6pm EST", "24/7 Crisis Support"],
      color: secondaryColor,
    },
  ];

  const services = [
    "Media Relations",
    "Crisis Management",
    "Digital PR",
    "Brand Strategy",
    "Content Creation",
    "Executive Positioning",
    "Other",
  ];

  const budgetRanges = [
    "$5,000 - $15,000",
    "$15,000 - $30,000",
    "$30,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Not Sure",
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      label: "Facebook",
      href: "https://facebook.com",
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      href: "https://twitter.com",
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log("Form submitted:", formData);

    setSnackbar({
      open: true,
      message: "Thank you for your inquiry! We'll contact you within 24 hours.",
      severity: "success",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        pt: 10,
        pb: 8,
        bgcolor: backgroundColor,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            icon={<MessageSquare size={16} />}
            label="Get in Touch"
            sx={{
              backgroundColor: alpha(primaryColor, 0.1),
              color: primaryColor,
              fontWeight: 600,
              mb: 3,
            }}
          />

          <Typography
            variant="h1"
            fontWeight={800}
            sx={{
              mb: 3,
              color: textPrimary,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Let's{" "}
            <Box component="span" sx={{ color: primaryColor }}>
              Connect
            </Box>{" "}
            and Create Something{" "}
            <Box component="span" sx={{ color: secondaryColor }}>
              Remarkable
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: textSecondary,
              maxWidth: 700,
              mx: "auto",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Ready to elevate your brand? Schedule a free consultation with our
            team to discuss your PR goals and discover how we can help you
            achieve extraordinary results.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Form Column */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Card
              sx={{
                borderRadius: 4,
                backgroundColor: paperColor,
                border: `1px solid ${alpha(primaryColor, 0.1)}`,
                boxShadow: `0 20px 60px ${alpha(primaryColor, 0.1)}`,
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Send size={28} color={primaryColor} />
                  <Typography
                    variant="h5"
                    sx={{ ml: 2, fontWeight: 700, color: textPrimary }}
                  >
                    Send us a Message
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  color={textSecondary}
                  sx={{ mb: 4 }}
                >
                  Fill out the form below and one of our PR specialists will
                  contact you within 24 hours to discuss your project.
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        name="firstName"
                        label="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <User
                              size={20}
                              style={{ marginRight: 8, color: textSecondary }}
                            />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            backgroundColor: alpha(primaryColor, 0.03),
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        name="lastName"
                        label="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            backgroundColor: alpha(primaryColor, 0.03),
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        name="email"
                        type="email"
                        label="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <Mail
                              size={20}
                              style={{ marginRight: 8, color: textSecondary }}
                            />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            backgroundColor: alpha(primaryColor, 0.03),
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <Phone
                              size={20}
                              style={{ marginRight: 8, color: textSecondary }}
                            />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            backgroundColor: alpha(primaryColor, 0.03),
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        name="company"
                        label="Company"
                        value={formData.company}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <Building
                              size={20}
                              style={{ marginRight: 8, color: textSecondary }}
                            />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            backgroundColor: alpha(primaryColor, 0.03),
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>Service Interest</InputLabel>
                        <Select
                          name="service"
                          value={formData.service}
                          label="Service Interest"
                          onChange={handleSelectChange}
                          sx={{
                            borderRadius: 2,
                            backgroundColor: alpha(primaryColor, 0.03),
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: alpha(primaryColor, 0.2),
                            },
                          }}
                        >
                          <MenuItem value="">
                            <em>Select a service</em>
                          </MenuItem>
                          {services.map((service, index) => (
                            <MenuItem key={index} value={service}>
                              {service}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>Estimated Budget</InputLabel>
                        <Select
                          name="budget"
                          value={formData.budget}
                          label="Estimated Budget"
                          onChange={handleSelectChange}
                          sx={{
                            borderRadius: 2,
                            backgroundColor: alpha(primaryColor, 0.03),
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: alpha(primaryColor, 0.2),
                            },
                          }}
                        >
                          <MenuItem value="">
                            <em>Select budget range</em>
                          </MenuItem>
                          {budgetRanges.map((range, index) => (
                            <MenuItem key={index} value={range}>
                              {range}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        name="message"
                        label="Tell us about your project"
                        value={formData.message}
                        onChange={handleChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            backgroundColor: alpha(primaryColor, 0.03),
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        endIcon={<ArrowRight />}
                        sx={{
                          background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                          color: "white",
                          py: 1.8,
                          borderRadius: 2,
                          textTransform: "none",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          boxShadow: `0 8px 25px ${alpha(primaryColor, 0.3)}`,
                          "&:hover": {
                            boxShadow: `0 12px 35px ${alpha(primaryColor, 0.4)}`,
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        Submit Request
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Info Column */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Stack spacing={4}>
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  sx={{
                    borderRadius: 3,
                    backgroundColor: paperColor,
                    border: `1px solid ${alpha(info.color, 0.1)}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: info.color,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: alpha(info.color, 0.1),
                          color: info.color,
                          flexShrink: 0,
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          sx={{ mb: 1, color: textPrimary }}
                        >
                          {info.title}
                        </Typography>
                        {info.details.map((detail, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            color={textSecondary}
                            sx={{ mb: 0.5 }}
                          >
                            {detail}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card
                sx={{
                  borderRadius: 3,
                  backgroundColor: paperColor,
                  border: `1px solid ${alpha(primaryColor, 0.1)}`,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{ mb: 2, color: textPrimary }}
                  >
                    Connect With Us
                  </Typography>
                  <Typography
                    variant="body2"
                    color={textSecondary}
                    sx={{ mb: 3 }}
                  >
                    Follow us for the latest PR insights, case studies, and
                    industry news.
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: alpha(primaryColor, 0.1),
                          color: primaryColor,
                          "&:hover": {
                            backgroundColor: primaryColor,
                            color: "white",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card
                sx={{
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(primaryColor, 0.1)} 0%, ${alpha(secondaryColor, 0.1)} 100%)`,
                  border: `1px solid ${alpha(primaryColor, 0.2)}`,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Award size={24} color={primaryColor} />
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{ ml: 1.5, color: textPrimary }}
                    >
                      Why Choose mezos
                    </Typography>
                  </Box>

                  <Stack spacing={1.5}>
                    {[
                      "24-Hour Response Time",
                      "Industry-Leading Expertise",
                      "Transparent Pricing",
                      "Customized Strategies",
                      "Measurable Results",
                    ].map((item, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <CheckCircle size={18} color={primaryColor} />
                        <Typography variant="body2" color={textSecondary}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Divider
                    sx={{ my: 2, borderColor: alpha(primaryColor, 0.1) }}
                  />

                  <Typography
                    variant="body2"
                    color={textSecondary}
                    sx={{ fontStyle: "italic" }}
                  >
                    "98% of our clients achieve their PR goals within the first
                    6 months."
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>

        {/* Map/CTA Section */}
        <Box sx={{ mt: 8 }}>
          <Card
            sx={{
              borderRadius: 4,
              backgroundColor: paperColor,
              border: `1px solid ${alpha(primaryColor, 0.1)}`,
              overflow: "hidden",
            }}
          >
            <Grid container>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{ mb: 2, color: textPrimary }}
                  >
                    Visit Our Headquarters
                  </Typography>
                  <Typography variant="body1" color={textSecondary} paragraph>
                    Our New York office is located in the heart of Manhattan's
                    business district. Schedule an in-person meeting to discuss
                    your PR strategy face-to-face.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: alpha(primaryColor, 0.1),
                        color: primaryColor,
                      }}
                    >
                      <Globe size={24} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color={textSecondary}>
                        123 Madison Ave, Floor 15
                      </Typography>
                      <Typography variant="body2" color={textSecondary}>
                        New York, NY 10016
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<MapPin />}
                    sx={{
                      borderColor: primaryColor,
                      color: primaryColor,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: alpha(primaryColor, 0.08),
                        borderColor: secondaryColor,
                      },
                    }}
                  >
                    Get Directions
                  </Button>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    height: "100%",
                    minHeight: 300,
                    backgroundColor: alpha(primaryColor, 0.05),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: textSecondary,
                  }}
                >
                  <Stack spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        backgroundColor: alpha(primaryColor, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: primaryColor,
                      }}
                    >
                      <MapPin size={32} />
                    </Box>
                    <Typography variant="body1" fontWeight={500}>
                      Interactive Map
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="center"
                      sx={{ maxWidth: 200 }}
                    >
                      (In production, this would display a Google Maps embed)
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            backgroundColor:
              snackbar.severity === "success"
                ? alpha(primaryColor, 0.1)
                : alpha(muiTheme.palette.error.main, 0.1),
            color: textPrimary,
            border: `1px solid ${snackbar.severity === "success" ? primaryColor : muiTheme.palette.error.main}`,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
