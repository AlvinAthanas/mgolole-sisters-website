import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  TextField,
  Button,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  MessageSquare,
  Users,
  Award,
} from "lucide-react";
import { useAuthentication } from "../../contexts/AuthContext.tsx";

const WebsiteFooter = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { isAuthenticated } = useAuthentication();
  const currentYear = new Date().getFullYear();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const backgroundColor = theme.palette.background.default;
  const paperColor = theme.palette.background.paper;
  const textPrimary = theme.palette.text.primary;
  const textSecondary = theme.palette.text.secondary;

  const footerLinks = {
    company: [
      { label: "About Us", path: "/about" },
      { label: "Our Team", path: "/team" },
      { label: "Careers", path: "/careers" },
      { label: "Press Kit", path: "/press" },
      { label: "Blog", path: "/blog" },
    ],
    services: [
      { label: "Media Relations", path: "/services#media" },
      { label: "Crisis Management", path: "/services#crisis" },
      { label: "Digital PR", path: "/services#digital" },
      { label: "Brand Strategy", path: "/services#strategy" },
      { label: "Content Creation", path: "/services#content" },
    ],
    resources: [
      { label: "Case Studies", path: "/case-studies" },
      { label: "PR Insights", path: "/insights" },
      { label: "Industry Reports", path: "/reports" },
      { label: "Media Coverage", path: "/coverage" },
      { label: "FAQs", path: "/faq" },
    ],
    contact: [
      { label: "Get a Quote", path: "/contact#quote" },
      { label: "Book a Consultation", path: "/contact#consultation" },
      { label: "Media Inquiries", path: "/contact#media" },
      { label: "Partnerships", path: "/contact#partnerships" },
    ],
  };

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

  const contactInfo = [
    { icon: <Mail size={18} />, text: "hello@prismpr.com" },
    { icon: <Phone size={18} />, text: "+1 (555) 789-0123" },
    { icon: <MapPin size={18} />, text: "123 Madison Ave, New York, NY 10016" },
  ];

  const stats = [
    { value: "150+", label: "Successful Campaigns" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "500M+", label: "Media Reach" },
    { value: "24/7", label: "Crisis Support" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription");
  };

  return (
    <Box
      component="footer"
      sx={(theme) => {
        const isLight = theme.palette.mode === "light";

        return {
          position: "relative",
          overflow: "hidden",

          /* TRUE glass base (neutral, not tinted) */
          backgroundColor: alpha(
            isLight
              ? theme.palette.background.paper
              : theme.palette.background.default,
            isLight ? 0.75 : 0.55,
          ),

          backdropFilter: "blur(22px) saturate(160%)",
          WebkitBackdropFilter: "blur(22px) saturate(160%)",

          /* Glass edge */
          borderTop: `1px solid ${alpha(
            isLight ? "#ffffff" : "#ffffff",
            isLight ? 0.6 : 0.15,
          )}`,

          /* Depth without darkening */
          boxShadow: isLight
            ? `
          inset 0 1px 0 ${alpha("#ffffff", 0.7)},
          0 -20px 40px ${alpha(theme.palette.primary.main, 0.08)}
        `
            : `
          inset 0 1px 0 ${alpha("#ffffff", 0.12)},
          0 -20px 40px ${alpha("#000", 0.35)}
        `,

          py: 8,
          mt: "auto",

          /* Liquid highlights layer */
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: isLight
              ? `
            radial-gradient(
              circle at 15% 25%,
              ${alpha(theme.palette.primary.light, 0.25)},
              transparent 40%
            ),
            radial-gradient(
              circle at 85% 70%,
              ${alpha(theme.palette.secondary.light, 0.2)},
              transparent 45%
            )
          `
              : `
            radial-gradient(
              circle at 20% 30%,
              ${alpha(theme.palette.primary.main, 0.18)},
              transparent 45%
            ),
            radial-gradient(
              circle at 80% 75%,
              ${alpha(theme.palette.secondary.main, 0.14)},
              transparent 50%
            )
          `,
          },
        };
      }}
    >
      <Container maxWidth="xl">
        {/* Stats Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  fontWeight={800}
                  sx={{
                    mb: 1,
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" color={textSecondary}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mb: 6, borderColor: alpha(primaryColor, 0.1) }} />

        <Grid container spacing={4}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  m
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  mezos
                </Typography>
              </Box>
              <Typography variant="body2" color={textSecondary} paragraph>
                We craft compelling narratives that resonate with your audience
                and drive meaningful results. Strategic PR solutions for modern
                brands.
              </Typography>
            </Box>

            {/* Social Links */}
            <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  size="small"
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

            {/* Contact Info */}
            <Stack spacing={1.5}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                >
                  <Box sx={{ color: primaryColor }}>{info.icon}</Box>
                  <Typography variant="body2" color={textSecondary}>
                    {info.text}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography
              variant="subtitle1"
              fontWeight="600"
              sx={{ mb: 2, color: textPrimary }}
            >
              Company
            </Typography>
            <Stack spacing={1}>
              {footerLinks.company.map((link, index) => (
                <Link
                  key={index}
                  component="button"
                  onClick={() => navigate(link.path)}
                  sx={{
                    textAlign: "left",
                    color: textSecondary,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    "&:hover": {
                      color: primaryColor,
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography
              variant="subtitle1"
              fontWeight="600"
              sx={{ mb: 2, color: textPrimary }}
            >
              Services
            </Typography>
            <Stack spacing={1}>
              {footerLinks.services.map((link, index) => (
                <Link
                  key={index}
                  component="button"
                  onClick={() => navigate(link.path)}
                  sx={{
                    textAlign: "left",
                    color: textSecondary,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    "&:hover": {
                      color: primaryColor,
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography
              variant="subtitle1"
              fontWeight="600"
              sx={{ mb: 2, color: textPrimary }}
            >
              Resources
            </Typography>
            <Stack spacing={1}>
              {footerLinks.resources.map((link, index) => (
                <Link
                  key={index}
                  component="button"
                  onClick={() => navigate(link.path)}
                  sx={{
                    textAlign: "left",
                    color: textSecondary,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    "&:hover": {
                      color: primaryColor,
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography
              variant="subtitle1"
              fontWeight="600"
              sx={{ mb: 2, color: textPrimary }}
            >
              Contact
            </Typography>
            <Stack spacing={1}>
              {footerLinks.contact.map((link, index) => (
                <Link
                  key={index}
                  component="button"
                  onClick={() => navigate(link.path)}
                  sx={{
                    textAlign: "left",
                    color: textSecondary,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    "&:hover": {
                      color: primaryColor,
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: alpha(primaryColor, 0.1) }} />

        {/* Newsletter Section */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Award size={48} style={{ marginBottom: 16, color: primaryColor }} />
          <Typography
            variant="h5"
            fontWeight="700"
            sx={{ mb: 1, color: textPrimary }}
          >
            PR Insights Newsletter
          </Typography>
          <Typography
            variant="body2"
            color={textSecondary}
            sx={{ mb: 3, maxWidth: 600, mx: "auto" }}
          >
            Get the latest PR trends, case studies, and industry insights
            delivered to your inbox
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubscribe}
            sx={{ display: "flex", gap: 2, maxWidth: 500, mx: "auto" }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Enter your email"
              type="email"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: paperColor,
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<Send size={18} />}
              sx={{
                borderRadius: 2,
                px: 3,
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                color: "white",
                "&:hover": {
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                  opacity: 0.9,
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        <Divider sx={{ mb: 4, borderColor: alpha(primaryColor, 0.1) }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" color={textSecondary}>
            © {currentYear} mezos. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Link
              component="button"
              onClick={() => navigate("/privacy")}
              sx={{
                color: textSecondary,
                fontSize: "0.875rem",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": { color: primaryColor },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              component="button"
              onClick={() => navigate("/terms")}
              sx={{
                color: textSecondary,
                fontSize: "0.875rem",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": { color: primaryColor },
              }}
            >
              Terms of Service
            </Link>
            <Button
              variant="text"
              size="small"
              endIcon={<ArrowRight size={16} />}
              onClick={() =>
                navigate(isAuthenticated ? "/admin/dashboard" : "/signin")
              }
              sx={{
                color: primaryColor,
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: alpha(primaryColor, 0.1),
                },
              }}
            >
              {isAuthenticated ? "Client Portal" : "Client Login"}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WebsiteFooter;
