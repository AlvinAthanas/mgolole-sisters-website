import { Box, Typography } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext'; // Adjust the import path as needed
import { useState } from 'react';

const ProgressLoader = () => {
    const { theme, muiTheme } = useTheme();
    const [logoError, setLogoError] = useState(false);
    
    // Colors based on theme
    const isDark = theme === 'dark';
    
    // Theme-aware colors
    const primaryColor = muiTheme.palette.primary.main;
    const primaryLight = muiTheme.palette.primary.light;
    const textColor = muiTheme.palette.text.primary;
    
    // Gradient backgrounds for different themes
    const lightGradient = 'linear-gradient(135deg, #f8fafc 0%, #e8f5e9 100%)';
    const darkGradient = 'linear-gradient(135deg, #121212 0%, #263238 100%)';
    
    // Religious-themed colors
    const religiousColors = {
        blue: '#1976d2',      // Marian blue
        gold: '#D4AF37',      // Religious gold
        white: '#FFFFFF',     // Purity
        green: '#2E7D32',     // Growth/life
        purple: '#7B1FA2'     // Spirituality
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isDark ? darkGradient : lightGradient,
                minHeight: '100vh',
                transition: 'background 0.3s ease',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    padding: 4,
                    maxWidth: '400px',
                    width: '100%',
                }}
            >
                {/* Logo with sacred heart motif */}
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    {/* Outer sacred heart ring */}
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        style={{ 
                            animation: 'heartbeat 2s ease-in-out infinite',
                            filter: `drop-shadow(0 4px 12px ${isDark ? 'rgba(66, 165, 245, 0.3)' : 'rgba(25, 118, 210, 0.3)'})`
                        }}
                    >
                        {/* Sacred heart outer shape */}
                        <path
                            d="M60,30 C70,15 90,20 90,35 C90,50 75,65 60,80 C45,65 30,50 30,35 C30,20 50,15 60,30 Z"
                            fill="none"
                            stroke={primaryColor}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        
                        {/* Animated flame/glow effect */}
                        <circle
                            cx="60"
                            cy="35"
                            r="15"
                            fill="none"
                            stroke={primaryLight}
                            strokeWidth="2"
                            opacity="0.6"
                            style={{ animation: 'pulseGlow 1.5s ease-in-out infinite' }}
                        />
                        
                        {/* Spinning ring */}
                        <circle
                            cx="60"
                            cy="60"
                            r="45"
                            stroke={primaryLight}
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="282.74"
                            strokeDashoffset="70.69"
                            strokeLinecap="round"
                            opacity="0.4"
                            style={{ animation: 'spin 3s linear infinite' }}
                        />
                        
                        {/* Inner ring */}
                        <circle
                            cx="60"
                            cy="60"
                            r="40"
                            stroke={primaryColor}
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="251.33"
                            strokeDashoffset="62.83"
                            strokeLinecap="round"
                            style={{ animation: 'dashRotate 2s ease-in-out infinite' }}
                        />
                    </svg>

                    {/* Center Logo or Cross */}
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {logoError ? (
                            // Fallback cross when logo fails to load
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ animation: 'gentleFloat 3s ease-in-out infinite' }}
                            >
                                <path
                                    d="M12 2L12 22M2 12L22 12"
                                    stroke={primaryColor}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke={primaryLight}
                                    strokeWidth="1"
                                    fill="none"
                                    opacity="0.5"
                                />
                            </svg>
                        ) : (
                            // Congregation Logo
                            <Box
                                component="img"
                                src="/logo.png"
                                alt="Immaculate Heart of Mary Sisters Logo"
                                onError={() => setLogoError(true)}
                                sx={{
                                    width: '48px',
                                    height: '48px',
                                    animation: 'gentleFloat 3s ease-in-out infinite',
                                    filter: `brightness(${isDark ? '1.2' : '1'})`,
                                }}
                            />
                        )}
                    </Box>
                </Box>

                {/* Loading Text with Typography */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: primaryColor,
                            fontWeight: 600,
                            marginBottom: 1,
                            animation: 'fadeInOut 2s ease-in-out infinite',
                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                        }}
                    >
                        Immaculate Heart of Mary Sisters
                    </Typography>
                    
                    <Typography
                        sx={{
                            color: textColor,
                            fontWeight: 400,
                            fontSize: '0.95rem',
                            opacity: 0.8,
                            marginBottom: 2,
                        }}
                    >
                        Loading God's blessings...
                    </Typography>
                </Box>

                {/* Rosary bead inspired loader */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    {[0, 1, 2, 3, 4].map((i) => (
                        <Box
                            key={i}
                            sx={{
                                position: 'relative',
                                width: i === 2 ? '16px' : '12px',
                                height: i === 2 ? '16px' : '12px',
                                backgroundColor: i === 2 ? religiousColors.gold : primaryColor,
                                borderRadius: '50%',
                                animation: `beadPulse 1.6s ease-in-out ${i * 0.2}s infinite`,
                                '&::before': i === 2 ? {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-4px',
                                    left: '-4px',
                                    right: '-4px',
                                    bottom: '-4px',
                                    border: `2px solid ${religiousColors.gold}`,
                                    borderRadius: '50%',
                                    opacity: 0.3,
                                    animation: 'beadGlow 2s ease-in-out infinite',
                                } : {},
                                boxShadow: `0 2px 8px ${isDark ? 'rgba(66, 165, 245, 0.4)' : 'rgba(25, 118, 210, 0.2)'}`,
                            }}
                        />
                    ))}
                </Box>

                {/* Subtle progress indicator */}
                <Box sx={{ width: '200px', marginTop: 2 }}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '3px',
                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                            borderRadius: '3px',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            sx={{
                                width: '60%',
                                height: '100%',
                                background: `linear-gradient(90deg, ${primaryLight}, ${primaryColor})`,
                                borderRadius: '3px',
                                animation: 'progressSlide 2s ease-in-out infinite',
                            }}
                        />
                    </Box>
                </Box>

                {/* Quote or verse */}
                <Typography
                    variant="caption"
                    sx={{
                        color: muiTheme.palette.text.secondary,
                        fontStyle: 'italic',
                        textAlign: 'center',
                        maxWidth: '300px',
                        marginTop: 2,
                        animation: 'fadeVerse 6s ease-in-out infinite',
                        opacity: 0.7,
                    }}
                >
                    "Behold, I am the handmaid of the Lord"
                </Typography>

                {/* CSS Animations */}
                <style>{`
                    @keyframes heartbeat {
                        0%, 100% { 
                            transform: scale(1); 
                        }
                        50% { 
                            transform: scale(1.05); 
                        }
                    }
                    
                    @keyframes gentleFloat {
                        0%, 100% { 
                            transform: translateY(0); 
                        }
                        50% { 
                            transform: translateY(-5px); 
                        }
                    }
                    
                    @keyframes pulseGlow {
                        0%, 100% { 
                            opacity: 0.3;
                            transform: scale(1);
                        }
                        50% { 
                            opacity: 0.8;
                            transform: scale(1.2);
                        }
                    }
                    
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    
                    @keyframes dashRotate {
                        0% { 
                            stroke-dashoffset: 251.33;
                            transform: rotate(0deg);
                        }
                        50% { 
                            stroke-dashoffset: 62.83;
                            transform: rotate(180deg);
                        }
                        100% { 
                            stroke-dashoffset: 251.33;
                            transform: rotate(360deg);
                        }
                    }
                    
                    @keyframes beadPulse {
                        0%, 100% { 
                            transform: scale(1); 
                            opacity: 0.8;
                        }
                        50% { 
                            transform: scale(${isDark ? '1.3' : '1.2'}); 
                            opacity: 1;
                        }
                    }
                    
                    @keyframes beadGlow {
                        0%, 100% { 
                            opacity: 0.2;
                            transform: scale(1);
                        }
                        50% { 
                            opacity: 0.5;
                            transform: scale(1.3);
                        }
                    }
                    
                    @keyframes progressSlide {
                        0% { 
                            transform: translateX(-100%); 
                        }
                        50% { 
                            transform: translateX(100%); 
                        }
                        100% { 
                            transform: translateX(200%); 
                        }
                    }
                    
                    @keyframes fadeInOut {
                        0%, 100% { 
                            opacity: 1; 
                        }
                        50% { 
                            opacity: 0.7; 
                        }
                    }
                    
                    @keyframes fadeVerse {
                        0%, 70%, 100% { 
                            opacity: 0.3; 
                        }
                        35% { 
                            opacity: 0.7; 
                        }
                    }
                `}</style>
            </Box>
        </Box>
    );
};

export default ProgressLoader;