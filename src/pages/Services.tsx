import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, alpha } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext.tsx";
import { CheckCircle, Target, BarChart, Users, Globe, MessageSquare } from "lucide-react";

const Services = () => {
    const {  muiTheme } = useTheme();
    const primaryColor = muiTheme.palette.primary.main;
    const secondaryColor = muiTheme.palette.secondary.main;
    const backgroundColor = muiTheme.palette.background.default;
    const paperColor = muiTheme.palette.background.paper;
    const textPrimary = muiTheme.palette.text.primary;
    const textSecondary = muiTheme.palette.text.secondary;

    const services = [
        {
            title: "Strategic Media Relations",
            icon: <MessageSquare />,
            features: [
                "Press release writing & distribution",
                "Media outreach & pitching",
                "Press conference management",
                "Media training & spokesperson prep"
            ]
        },
        {
            title: "Crisis Communications",
            icon: <Target />,
            features: [
                "24/7 crisis response team",
                "Crisis communication planning",
                "Reputation management",
                "Stakeholder communication"
            ]
        },
        {
            title: "Digital PR & Social Media",
            icon: <Globe />,
            features: [
                "Social media strategy",
                "Content creation & distribution",
                "Influencer partnerships",
                "Online reputation monitoring"
            ]
        },
        {
            title: "Corporate Communications",
            icon: <Users />,
            features: [
                "Internal communications",
                "Executive positioning",
                "Stakeholder engagement",
                "CSR communication"
            ]
        },
        {
            title: "Brand Development",
            icon: <BarChart />,
            features: [
                "Brand positioning & messaging",
                "Market research & analysis",
                "Competitive intelligence",
                "Brand audit & strategy"
            ]
        },
        {
            title: "Content Strategy",
            icon: <CheckCircle />,
            features: [
                "Content marketing strategy",
                "Thought leadership programs",
                "White papers & case studies",
                "Blog & article writing"
            ]
        }
    ];

    return (
        <Box sx={{ 
            pt: 10, 
            pb: 8,
            bgcolor: backgroundColor 
        }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography 
                        variant="h1" 
                        fontWeight={800} 
                        sx={{ 
                            mb: 2,
                            color: textPrimary 
                        }}
                    >
                        Comprehensive <Box component="span" sx={{ color: primaryColor }}>PR Services</Box>
                    </Typography>
                    <Typography 
                        variant="h5" 
                        color={textSecondary} 
                        sx={{ maxWidth: 800, mx: 'auto' }}
                    >
                        End-to-end public relations solutions designed to elevate your brand, manage your reputation, 
                        and drive measurable results
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid size={{xs:12, md:6, lg:4}} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    backgroundColor: paperColor,
                                    border: `2px solid ${alpha(primaryColor, 0.1)}`,
                                    borderRadius: 3,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        borderColor: primaryColor,
                                        transform: 'translateY(-4px)',
                                        boxShadow: `0 15px 40px ${alpha(primaryColor, 0.15)}`
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: `linear-gradient(135deg, ${alpha(primaryColor, 0.1)} 0%, ${alpha(secondaryColor, 0.1)} 100%)`,
                                            color: primaryColor,
                                            mb: 3
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                    
                                    <Typography 
                                        variant="h5" 
                                        fontWeight={600} 
                                        sx={{ 
                                            mb: 2,
                                            color: textPrimary 
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    
                                    <List dense>
                                        {service.features.map((feature, idx) => (
                                            <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <CheckCircle size={18} color={primaryColor} />
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={feature} 
                                                    primaryTypographyProps={{
                                                        color: textSecondary
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;