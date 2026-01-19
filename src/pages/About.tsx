import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  alpha,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.tsx";
import {
  Award,
  Users,
  Target,
  Heart,
  Globe,
  TrendingUp,
  ArrowRight,
  Quote,
  Star,
  Building,
  Clock,
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();
  const { theme, muiTheme } = useTheme();
  const primaryColor = muiTheme.palette.primary.main;
  const secondaryColor = muiTheme.palette.secondary.main;
  const backgroundColor = muiTheme.palette.background.default;
  const paperColor = muiTheme.palette.background.paper;
  const textPrimary = muiTheme.palette.text.primary;
  const textSecondary = muiTheme.palette.text.secondary;

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former journalist with 15+ years in media relations",
      avatar: "SJ",
      expertise: ["Media Strategy", "Crisis Comms"],
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      bio: "Brand storytelling expert and former agency creative lead",
      avatar: "MC",
      expertise: ["Brand Strategy", "Content"],
    },
    {
      name: "Elena Rodriguez",
      role: "Digital PR Director",
      bio: "Specializes in digital campaigns and social media influence",
      avatar: "ER",
      expertise: ["Digital PR", "Social Media"],
    },
    {
      name: "David Kim",
      role: "Head of Strategy",
      bio: "Data-driven strategist with MBA from Stanford",
      avatar: "DK",
      expertise: ["Analytics", "Planning"],
    },
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: "Strategic Excellence",
      description: "Data-driven approaches that deliver measurable results",
    },
    {
      icon: <Heart size={32} />,
      title: "Client Partnership",
      description: "We work as an extension of your team, not just a vendor",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Perspective",
      description: "International experience with local market expertise",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Continuous Innovation",
      description: "Always evolving with media trends and technology",
    },
  ];

  const milestones = [
    { year: "2018", event: "Founded in New York City", highlight: true },
    { year: "2019", event: "First Fortune 500 client partnership" },
    { year: "2020", event: "Expanded to London office", highlight: true },
    { year: "2021", event: "Won PR Industry Innovation Award" },
    { year: "2022", event: "Launched digital transformation division" },
    { year: "2023", event: "Reached 150+ successful campaigns" },
  ];

  return (
    <Box
      sx={{
        pt: 10,
        bgcolor: backgroundColor,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(primaryColor, 0.05)} 0%, ${alpha(secondaryColor, 0.05)} 100%)`,
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          bgcolor: backgroundColor,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Chip
                  icon={<Building size={16} />}
                  label="About Us"
                  sx={{
                    backgroundColor: alpha(primaryColor, 0.1),
                    color: primaryColor,
                    fontWeight: 600,
                    alignSelf: "flex-start",
                  }}
                />

                <Typography
                  variant="h1"
                  fontWeight={800}
                  sx={{
                    lineHeight: 1.1,
                    mb: 2,
                    color: textPrimary,
                  }}
                >
                  We Shape{" "}
                  <Box component="span" sx={{ color: primaryColor }}>
                    Narratives
                  </Box>{" "}
                  That{" "}
                  <Box component="span" sx={{ color: secondaryColor }}>
                    Define
                  </Box>{" "}
                  Brands
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: textSecondary,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  mezos transforms how brands communicate in today's complex
                  media landscape. We blend strategic thinking with creative
                  execution to build meaningful connections.
                </Typography>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/contact")}
                    sx={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
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
                    Work With Us
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate("/team")}
                    sx={{
                      borderColor: primaryColor,
                      color: primaryColor,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      textTransform: "none",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: alpha(primaryColor, 0.08),
                        borderColor: secondaryColor,
                      },
                    }}
                  >
                    Meet Our Team
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  height: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Decorative Elements */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "200px",
                    height: "200px",
                    background: `radial-gradient(circle, ${alpha(primaryColor, 0.1)} 0%, transparent 70%)`,
                    borderRadius: "50%",
                    top: "10%",
                    right: "10%",
                    animation: "pulse 3s ease-in-out infinite",
                    "@keyframes pulse": {
                      "0%, 100%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.05)" },
                    },
                  }}
                />

                {/* Quote Card */}
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    borderRadius: 4,
                    backgroundColor: paperColor,
                    border: `2px solid ${alpha(primaryColor, 0.2)}`,
                    boxShadow: `0 20px 60px ${alpha(primaryColor, 0.15)}`,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Quote size={32} color={primaryColor} />
                      <Typography
                        variant="h6"
                        sx={{ ml: 2, fontWeight: 700, color: textPrimary }}
                      >
                        Our Philosophy
                      </Typography>
                    </Box>
                    <Typography variant="body1" color={textSecondary} paragraph>
                      "Great PR isn't about making noise—it's about making an
                      impact. We believe in stories that matter, relationships
                      that last, and results that speak for themselves."
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          backgroundColor: primaryColor,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        SJ
                      </Avatar>
                      <Box sx={{ ml: 2 }}>
                        <Typography
                          variant="subtitle2"
                          fontWeight={600}
                          color={textPrimary}
                        >
                          Sarah Johnson
                        </Typography>
                        <Typography variant="caption" color={textSecondary}>
                          CEO & Founder
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container maxWidth="lg" sx={{ py: 8, bgcolor: backgroundColor }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                backgroundColor: paperColor,
                border: `2px solid ${alpha(primaryColor, 0.1)}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: primaryColor,
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, ${alpha(primaryColor, 0.1)} 0%, ${alpha(secondaryColor, 0.1)} 100%)`,
                    color: primaryColor,
                    mb: 3,
                  }}
                >
                  <Target size={28} />
                </Box>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ mb: 2, color: textPrimary }}
                >
                  Our Mission
                </Typography>
                <Typography variant="body1" color={textSecondary} paragraph>
                  To empower brands with strategic communication that builds
                  trust, drives engagement, and creates lasting impact in an
                  ever-evolving media landscape.
                </Typography>
                <Typography variant="body1" color={textSecondary}>
                  We combine data-driven insights with creative storytelling to
                  deliver measurable results that align with your business
                  objectives.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                backgroundColor: paperColor,
                border: `2px solid ${alpha(secondaryColor, 0.1)}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: secondaryColor,
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, ${alpha(secondaryColor, 0.1)} 0%, ${alpha(primaryColor, 0.1)} 100%)`,
                    color: secondaryColor,
                    mb: 3,
                  }}
                >
                  <Globe size={28} />
                </Box>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ mb: 2, color: textPrimary }}
                >
                  Our Vision
                </Typography>
                <Typography variant="body1" color={textSecondary} paragraph>
                  To be the most trusted partner for brands navigating the
                  future of communication, setting new standards for excellence
                  in public relations worldwide.
                </Typography>
                <Typography variant="body1" color={textSecondary}>
                  We envision a world where authentic storytelling drives
                  meaningful connections between brands and their audiences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Our Values */}
      <Box
        sx={{
          backgroundColor: alpha(primaryColor, 0.03),
          py: 8,
          bgcolor: backgroundColor,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{ mb: 2, color: textPrimary }}
            >
              Our{" "}
              <Box component="span" sx={{ color: primaryColor }}>
                Core Values
              </Box>
            </Typography>
            <Typography
              variant="h6"
              color={textSecondary}
              sx={{ maxWidth: 700, mx: "auto" }}
            >
              The principles that guide every decision and action we take
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: paperColor,
                    border: `1px solid ${alpha(primaryColor, 0.1)}`,
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: primaryColor,
                      boxShadow: `0 15px 40px ${alpha(primaryColor, 0.1)}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${alpha(primaryColor, 0.1)} 0%, ${alpha(secondaryColor, 0.1)} 100%)`,
                        color: primaryColor,
                        mx: "auto",
                        mb: 3,
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      sx={{ mb: 2, color: textPrimary }}
                    >
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color={textSecondary}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Team */}
      <Container maxWidth="lg" sx={{ py: 8, bgcolor: backgroundColor }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{ mb: 2, color: textPrimary }}
          >
            Meet Our{" "}
            <Box component="span" sx={{ color: primaryColor }}>
              Leadership
            </Box>
          </Typography>
          <Typography
            variant="h6"
            color={textSecondary}
            sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
          >
            A diverse team of experts with decades of combined experience in PR,
            media, and brand strategy
          </Typography>
          <Button
            variant="outlined"
            endIcon={<ArrowRight />}
            onClick={() => navigate("/team")}
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
            View Full Team
          </Button>
        </Box>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {teamMembers.map((member, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: paperColor,
                  border: `1px solid ${alpha(primaryColor, 0.1)}`,
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: primaryColor,
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      margin: "0 auto 16px",
                      backgroundColor: alpha(primaryColor, 0.1),
                      color: primaryColor,
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {member.avatar}
                  </Avatar>

                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{ mb: 0.5, color: textPrimary }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color={secondaryColor}
                    sx={{ mb: 2, fontWeight: 500 }}
                  >
                    {member.role}
                  </Typography>

                  <Typography
                    variant="body2"
                    color={textSecondary}
                    sx={{ mb: 3 }}
                  >
                    {member.bio}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    flexWrap="wrap"
                    gap={1}
                  >
                    {member.expertise.map((exp, idx) => (
                      <Chip
                        key={idx}
                        label={exp}
                        size="small"
                        sx={{
                          backgroundColor: alpha(primaryColor, 0.1),
                          color: primaryColor,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Timeline */}
      <Box
        sx={{
          backgroundColor: alpha(secondaryColor, 0.03),
          py: 8,
          bgcolor: backgroundColor,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{ mb: 2, color: textPrimary }}
            >
              Our{" "}
              <Box component="span" sx={{ color: secondaryColor }}>
                Journey
              </Box>
            </Typography>
            <Typography
              variant="h6"
              color={textSecondary}
              sx={{ maxWidth: 700, mx: "auto" }}
            >
              Key milestones in our growth and evolution as a leading PR agency
            </Typography>
          </Box>

          <Box sx={{ position: "relative", maxWidth: 800, mx: "auto" }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: "40px", md: "50%" },
                top: 0,
                bottom: 0,
                width: "3px",
                backgroundColor: alpha(primaryColor, 0.2),
                transform: { xs: "none", md: "translateX(-1.5px)" },
              }}
            />

            {milestones.map((milestone, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                  position: "relative",
                  flexDirection: {
                    xs: "row",
                    md: index % 2 === 0 ? "row" : "row-reverse",
                  },
                }}
              >
                {/* Timeline Dot */}
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: milestone.highlight
                      ? primaryColor
                      : secondaryColor,
                    border: `3px solid ${paperColor}`,
                    zIndex: 1,
                    flexShrink: 0,
                    margin: {
                      xs: "0 16px 0 0",
                      md: index % 2 === 0 ? "0 32px 0 0" : "0 0 0 32px",
                    },
                  }}
                />

                {/* Content */}
                <Card
                  sx={{
                    flex: 1,
                    backgroundColor: paperColor,
                    border: `1px solid ${alpha(primaryColor, 0.1)}`,
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: milestone.highlight
                        ? primaryColor
                        : secondaryColor,
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Clock
                        size={18}
                        color={
                          milestone.highlight ? primaryColor : secondaryColor
                        }
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          ml: 1,
                          color: milestone.highlight
                            ? primaryColor
                            : secondaryColor,
                          fontWeight: 700,
                        }}
                      >
                        {milestone.year}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color={textPrimary}>
                      {milestone.event}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Container maxWidth="lg" sx={{ py: 8, bgcolor: backgroundColor }}>
        <Card
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: "center",
            borderRadius: 4,
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
            color: "white",
            boxShadow: `0 20px 60px ${alpha(primaryColor, 0.3)}`,
          }}
        >
          <Award size={48} style={{ marginBottom: 16 }} />

          <Typography variant="h3" fontWeight={800} sx={{ mb: 2 }}>
            Ready to Write Your Success Story?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
            Let's work together to amplify your message and achieve
            extraordinary results
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/contact")}
              sx={{
                backgroundColor: "white",
                color: primaryColor,
                px: 5,
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Get in Touch
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/case-studies")}
              sx={{
                borderColor: "white",
                color: "white",
                px: 5,
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            >
              View Case Studies
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default About;
