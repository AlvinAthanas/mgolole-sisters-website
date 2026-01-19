import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Card,
  CardContent,
  alpha,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.tsx";
import {
  TrendingUp,
  MessageSquare,
  Users,
  Globe,
  Award,
  BarChart,
  ArrowRight,
  PlayCircle,
  Quote,
  Sparkles,
} from "lucide-react";

function Home() {
  const navigate = useNavigate();
  const { theme, muiTheme } = useTheme();
  const primaryColor = muiTheme.palette.primary.main;
  const secondaryColor = muiTheme.palette.secondary.main;
  const backgroundColor = muiTheme.palette.background.default;
  const paperColor = muiTheme.palette.background.paper;
  const textPrimary = muiTheme.palette.text.primary;
  const textSecondary = muiTheme.palette.text.secondary;

  const services = [
    {
      icon: <MessageSquare size={32} />,
      title: "Media Relations",
      description:
        "Strategic media outreach and press release distribution to amplify your message",
    },
    {
      icon: <Globe size={32} />,
      title: "Digital PR",
      description:
        "Online reputation management and compelling digital storytelling",
    },
    {
      icon: <Users size={32} />,
      title: "Crisis Management",
      description:
        "24/7 crisis communication and proactive reputation protection",
    },
    {
      icon: <BarChart size={32} />,
      title: "Brand Strategy",
      description:
        "Data-driven brand positioning and comprehensive market analysis",
    },
  ];

  const clients = [
    { name: "TechCorp", logo: "TC", industry: "Technology" },
    { name: "GreenLife", logo: "GL", industry: "Sustainability" },
    { name: "Fashionista", logo: "FS", industry: "Retail" },
    { name: "HealthFirst", logo: "HF", industry: "Healthcare" },
    { name: "EduFuture", logo: "EF", industry: "Education" },
    { name: "FinSecure", logo: "FN", industry: "Finance" },
  ];

  return (
    <Box
      sx={{
        pt: 10,
        bgcolor: backgroundColor, // Ensure page uses theme background
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(backgroundColor, 1)} 0%, ${alpha(paperColor, 0.8)} 100%)`,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 20% 50%, ${alpha(primaryColor, 0.08)} 0%, transparent 50%),
                                   radial-gradient(circle at 80% 80%, ${alpha(secondaryColor, 0.08)} 0%, transparent 50%)`,
            pointerEvents: "none",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ py: { xs: 10, md: 14 }, position: "relative", zIndex: 1 }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Sparkles size={20} style={{ color: primaryColor }} />
                  <Typography
                    variant="overline"
                    sx={{
                      color: primaryColor,
                      fontWeight: 700,
                      letterSpacing: 1.5,
                    }}
                  >
                    STRATEGIC PR SOLUTIONS
                  </Typography>
                </Box>

                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1.1,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    mb: 2,
                    color: textPrimary,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline",
                    }}
                  >
                    Amplify
                  </Box>{" "}
                  Your Message,
                  <br />
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(135deg, ${secondaryColor} 0%, ${primaryColor} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline",
                    }}
                  >
                    Elevate
                  </Box>{" "}
                  Your Brand
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: textSecondary,
                    fontWeight: 400,
                    lineHeight: 1.7,
                    mb: 3,
                    maxWidth: "90%",
                  }}
                >
                  We craft compelling narratives that resonate with your
                  audience and drive meaningful results. Strategic PR solutions
                  for modern brands.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 2 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight />}
                    onClick={() => navigate("/contact")}
                    sx={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                      color: "white",
                      px: 4,
                      py: 1.8,
                      borderRadius: 3,
                      textTransform: "none",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      boxShadow: `0 8px 32px ${alpha(primaryColor, 0.25)}`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: `0 12px 40px ${alpha(primaryColor, 0.35)}`,
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    Start Your Campaign
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayCircle />}
                    onClick={() => navigate("/case-studies")}
                    sx={{
                      borderWidth: 2,
                      borderColor: primaryColor,
                      color: primaryColor,
                      px: 4,
                      py: 1.8,
                      borderRadius: 3,
                      textTransform: "none",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderWidth: 2,
                        backgroundColor: alpha(primaryColor, 0.08),
                        borderColor: secondaryColor,
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    View Case Studies
                  </Button>
                </Stack>

                <Stack direction="row" spacing={4} sx={{ mt: 5 }}>
                  <Box>
                    <Typography
                      variant="h3"
                      fontWeight={800}
                      sx={{
                        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      150+
                    </Typography>
                    <Typography
                      variant="body2"
                      color={textSecondary}
                      fontWeight={500}
                    >
                      Successful Campaigns
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h3"
                      fontWeight={800}
                      sx={{
                        background: `linear-gradient(135deg, ${secondaryColor} 0%, ${primaryColor} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      98%
                    </Typography>
                    <Typography
                      variant="body2"
                      color={textSecondary}
                      fontWeight={500}
                    >
                      Client Retention
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h3"
                      fontWeight={800}
                      sx={{
                        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      500M+
                    </Typography>
                    <Typography
                      variant="body2"
                      color={textSecondary}
                      fontWeight={500}
                    >
                      Media Reach
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  height: 500,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Animated Background Elements */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "350px",
                    height: "350px",
                    background: `radial-gradient(circle, ${alpha(primaryColor, 0.15)} 0%, transparent 70%)`,
                    borderRadius: "50%",
                    top: "5%",
                    right: "5%",
                    animation: "float 8s ease-in-out infinite",
                    "@keyframes float": {
                      "0%, 100%": { transform: "translateY(0px) scale(1)" },
                      "50%": { transform: "translateY(-30px) scale(1.05)" },
                    },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    width: "250px",
                    height: "250px",
                    background: `radial-gradient(circle, ${alpha(secondaryColor, 0.12)} 0%, transparent 70%)`,
                    borderRadius: "50%",
                    bottom: "15%",
                    left: "5%",
                    animation: "float 6s ease-in-out infinite reverse",
                  }}
                />

                {/* Hero Card */}
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 420,
                    borderRadius: 5,
                    overflow: "hidden",
                    position: "relative",
                    bgcolor: paperColor,
                    boxShadow: `0 30px 60px ${theme === "light" ? alpha(primaryColor, 0.15) : alpha("#000", 0.5)}`,
                    border: `1px solid ${alpha(primaryColor, 0.15)}`,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 140,
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "-50%",
                        right: "-50%",
                        width: "200%",
                        height: "200%",
                        background: `radial-gradient(circle, ${alpha("#fff", 0.1)} 0%, transparent 70%)`,
                        animation: "pulse 4s ease-in-out infinite",
                      },
                      "@keyframes pulse": {
                        "0%, 100%": { transform: "scale(1)" },
                        "50%": { transform: "scale(1.1)" },
                      },
                    }}
                  >
                    <TrendingUp size={56} color="white" strokeWidth={2.5} />
                  </Box>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Quote size={24} style={{ color: primaryColor }} />
                      <Typography
                        variant="h6"
                        sx={{ ml: 1, fontWeight: 700, color: textPrimary }}
                      >
                        Client Success Story
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color={textSecondary}
                      paragraph
                      sx={{ lineHeight: 1.7 }}
                    >
                      "mezos transformed our brand perception, resulting in a
                      300% increase in positive media coverage and a 40% boost
                      in customer engagement."
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      sx={{
                        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      - Sarah Chen, CMO at TechCorp
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 10, bgcolor: backgroundColor }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: secondaryColor,
              fontWeight: 700,
              letterSpacing: 1.5,
              mb: 2,
              display: "block",
            }}
          >
            WHAT WE DO
          </Typography>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              mb: 2,
              fontSize: { xs: "2rem", md: "2.75rem" },
              color: textPrimary,
            }}
          >
            Our{" "}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline",
              }}
            >
              Expertise
            </Box>
          </Typography>
          <Typography
            variant="h6"
            color={textSecondary}
            sx={{ maxWidth: 700, mx: "auto", fontWeight: 400 }}
          >
            Comprehensive PR solutions tailored to your brand's unique needs and
            objectives
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: paperColor,
                  border: `1px solid ${alpha(primaryColor, 0.1)}`,
                  borderRadius: 4,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: `0 20px 50px ${alpha(primaryColor, 0.18)}`,
                    borderColor: alpha(primaryColor, 0.4),
                    "& .service-icon": {
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                      color: "white",
                      transform: "scale(1.1) rotate(5deg)",
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Box
                    className="service-icon"
                    sx={{
                      width: 90,
                      height: 90,
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `linear-gradient(135deg, ${alpha(primaryColor, 0.1)} 0%, ${alpha(secondaryColor, 0.1)} 100%)`,
                      color: primaryColor,
                      mx: "auto",
                      mb: 3,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ mb: 1.5, color: textPrimary }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={textSecondary}
                    sx={{ lineHeight: 1.6 }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Client Showcase */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(primaryColor, 0.04)} 0%, ${alpha(secondaryColor, 0.04)} 100%)`,
          py: 10,
          bgcolor: backgroundColor,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: secondaryColor,
                fontWeight: 700,
                letterSpacing: 1.5,
                mb: 2,
                display: "block",
              }}
            >
              OUR CLIENTS
            </Typography>
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                mb: 2,
                fontSize: { xs: "2rem", md: "2.75rem" },
                color: textPrimary,
              }}
            >
              Trusted by{" "}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline",
                }}
              >
                Industry Leaders
              </Box>
            </Typography>
            <Typography
              variant="h6"
              color={textSecondary}
              sx={{ maxWidth: 700, mx: "auto", fontWeight: 400 }}
            >
              We partner with innovative brands across diverse sectors
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {clients.map((client, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                <Card
                  sx={{
                    height: 140,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: paperColor,
                    border: `1px solid ${alpha(primaryColor, 0.1)}`,
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: primaryColor,
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 30px ${alpha(primaryColor, 0.15)}`,
                      "& .client-logo": {
                        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                        color: "white",
                        transform: "scale(1.15)",
                      },
                    },
                  }}
                >
                  <Box
                    className="client-logo"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `linear-gradient(135deg, ${alpha(primaryColor, 0.1)} 0%, ${alpha(secondaryColor, 0.1)} 100%)`,
                      color: primaryColor,
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      mb: 1.5,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {client.logo}
                  </Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    color={textPrimary}
                  >
                    {client.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    color={textSecondary}
                    fontWeight={500}
                  >
                    {client.industry}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 10, bgcolor: backgroundColor }}>
        <Card
          sx={{
            p: { xs: 5, md: 8 },
            textAlign: "center",
            borderRadius: 5,
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
            color: "white",
            boxShadow: `0 30px 70px ${alpha(primaryColor, 0.3)}`,
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-50%",
              right: "-50%",
              width: "200%",
              height: "200%",
              background: `radial-gradient(circle, ${alpha("#fff", 0.1)} 0%, transparent 70%)`,
              animation: "rotate 20s linear infinite",
            },
            "@keyframes rotate": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          }}
        >
          <Award
            size={90}
            style={{
              position: "absolute",
              top: "30px",
              right: "30px",
              opacity: 0.08,
            }}
          />

          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              mb: 2,
              position: "relative",
              zIndex: 1,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Ready to Transform Your Brand Story?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 5,
              opacity: 0.95,
              position: "relative",
              zIndex: 1,
              fontWeight: 400,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Let's create something extraordinary together. Schedule a free
            consultation today.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
            sx={{ position: "relative", zIndex: 1 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/contact")}
              sx={{
                backgroundColor: "white",
                color: primaryColor,
                px: 5,
                py: 2,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 700,
                boxShadow: `0 8px 25px ${alpha("#000", 0.2)}`,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  transform: "translateY(-3px)",
                  boxShadow: `0 12px 35px ${alpha("#000", 0.3)}`,
                },
              }}
            >
              Schedule a Consultation
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/services")}
              sx={{
                borderWidth: 2,
                borderColor: "white",
                color: "white",
                px: 5,
                py: 2,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 700,
                "&:hover": {
                  borderWidth: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.9)",
                  transform: "translateY(-3px)",
                },
              }}
            >
              Explore Services
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}

export default Home;
