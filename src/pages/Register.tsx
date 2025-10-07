import React, { useState } from "react";
import {
    Box,
    Button,
    Divider,
    InputAdornment,
    TextField,
    Typography,
    Link as MuiLink,
    IconButton,
} from "@mui/material";
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import { useTheme } from "@mui/material";
import { useSnackbar } from "../contexts/SnackbarAlertContext";
import { Link, useNavigate } from "react-router-dom";
import postData from "../utils/AxioPost";
import { BASE_URL } from "../utils/BaseUrl";
import FormWrapper from "./FormWrapper";
import { useToken } from "../contexts/TokenContext.tsx";
import { useAuthentication } from "../contexts/AuthContext.tsx";

const Register: React.FC = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { token, setToken, setBearerToken } = useToken();
    const { setAuthenticated } = useAuthentication();
    const { showSnackbar } = useSnackbar();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone_number: "",
        password: "",
        password2: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [field]: e.target.value });
        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors({ ...errors, [field]: "" });
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.username.trim()) {
            newErrors.username = "Username is required";
        } else if (formData.username.length < 3) {
            newErrors.username = "Username must be at least 3 characters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (!formData.password2) {
            newErrors.password2 = "Please confirm your password";
        } else if (formData.password !== formData.password2) {
            newErrors.password2 = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async () => {
        if (!validateForm()) {
            showSnackbar("Please fix the errors in the form", "warning");
            return;
        }

        setLoading(true);

        try {
            const response = await postData(
                `${BASE_URL}/register-user`,
                formData,
                token,
                null,
                setAuthenticated,
                setToken,
                setBearerToken
            );

            if (response?.status) {
                showSnackbar(
                    "Registration successful! Please login.",
                    "success"
                );
                // Clear form
                setFormData({
                    username: "",
                    email: "",
                    phone_number: "",
                    password: "",
                    password2: "",
                });
                // Redirect to login page after a short delay
                setTimeout(() => {
                    navigate("/signin");
                }, 1500);
            } else {
                // Handle backend validation errors
                if (response?.error) {
                    if (typeof response.error === "object") {
                        const backendErrors: { [key: string]: string } = {};
                        Object.keys(response.error).forEach((key) => {
                            const errorArray = response.error[key];
                            backendErrors[key] = Array.isArray(errorArray)
                                ? errorArray.join(", ")
                                : errorArray;
                        });
                        setErrors(backendErrors);
                        showSnackbar("Please fix the errors in the form", "error");
                    } else {
                        showSnackbar(response.error, "error");
                    }
                } else {
                    showSnackbar("Registration failed. Please try again.", "error");
                }
            }
        } catch (error) {
            showSnackbar("Something went wrong. Please try again later.", "error");
        }

        setLoading(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    return (
        <FormWrapper
            title="Create Your Account"
            description="Join us today and start managing your retail business efficiently."
        >
            {/* Header */}
            <Box sx={{ textAlign: "center", mb: 3 }}>
                <Typography
                    variant="h4"
                    fontWeight="700"
                    sx={{ color: theme.palette.text.primary, mb: 1 }}
                >
                    Sign Up
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Create an account to get started
                </Typography>
            </Box>

            {/* Username Field */}
            <TextField
                fullWidth
                placeholder="Username"
                label="Username"
                type="text"
                value={formData.username}
                onChange={handleChange("username")}
                onKeyPress={handleKeyPress}
                error={!!errors.username}
                helperText={errors.username}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <User size={20} color={theme.palette.text.secondary} />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                        },
                    },
                }}
            />

            {/* Email Field */}
            <TextField
                fullWidth
                placeholder="Email address"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                onKeyPress={handleKeyPress}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Mail size={20} color={theme.palette.text.secondary} />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                        },
                    },
                }}
            />

            {/* Phone Number Field */}
            <TextField
                fullWidth
                placeholder="Phone number (optional)"
                label="Phone Number"
                type="tel"
                value={formData.phone_number}
                onChange={handleChange("phone_number")}
                onKeyPress={handleKeyPress}
                error={!!errors.phone_number}
                helperText={errors.phone_number}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Phone size={20} color={theme.palette.text.secondary} />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                        },
                    },
                }}
            />

            {/* Password Field */}
            <TextField
                fullWidth
                placeholder="Password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange("password")}
                onKeyPress={handleKeyPress}
                error={!!errors.password}
                helperText={errors.password || "Must be at least 8 characters"}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Lock size={20} color={theme.palette.text.secondary} />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                                size="small"
                            >
                                {showPassword ? (
                                    <EyeOff size={20} color={theme.palette.text.secondary} />
                                ) : (
                                    <Eye size={20} color={theme.palette.text.secondary} />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                        },
                    },
                }}
            />

            {/* Confirm Password Field */}
            <TextField
                fullWidth
                placeholder="Confirm password"
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.password2}
                onChange={handleChange("password2")}
                onKeyPress={handleKeyPress}
                error={!!errors.password2}
                helperText={errors.password2}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Lock size={20} color={theme.palette.text.secondary} />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                edge="end"
                                size="small"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff size={20} color={theme.palette.text.secondary} />
                                ) : (
                                    <Eye size={20} color={theme.palette.text.secondary} />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                        },
                    },
                }}
            />

            {/* Register Button */}
            <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={onSubmit}
                disabled={loading}
                sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: theme.palette.primary.contrastText,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    boxShadow: `0 4px 15px ${
                        theme.palette.mode === "light"
                            ? "rgba(46, 125, 50, 0.3)"
                            : "rgba(102, 187, 106, 0.3)"
                    }`,
                    "&:hover": {
                        boxShadow: `0 6px 20px ${
                            theme.palette.mode === "light"
                                ? "rgba(46, 125, 50, 0.4)"
                                : "rgba(102, 187, 106, 0.4)"
                        }`,
                        transform: "translateY(-2px)",
                    },
                    "&:disabled": {
                        background: theme.palette.action.disabledBackground,
                    },
                }}
            >
                {loading ? "Creating Account..." : "Create Account"}
            </Button>

            {/* Divider */}
            <Divider sx={{ my: 2 }}>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    OR
                </Typography>
            </Divider>

            {/* Login Link */}
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Already have an account?{" "}
                    <MuiLink
                        component={Link}
                        to="/signin"
                        sx={{
                            color: theme.palette.primary.main,
                            textDecoration: "none",
                            fontWeight: 600,
                            "&:hover": { textDecoration: "underline" },
                        }}
                    >
                        Sign In
                    </MuiLink>
                </Typography>
            </Box>

            {/* Terms and Privacy */}
            <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography
                    variant="caption"
                    sx={{ color: theme.palette.text.secondary, fontSize: "0.75rem" }}
                >
                    By creating an account, you agree to our{" "}
                    <MuiLink
                        href="#"
                        sx={{
                            color: theme.palette.primary.main,
                            textDecoration: "none",
                            "&:hover": { textDecoration: "underline" },
                        }}
                    >
                        Terms of Service
                    </MuiLink>{" "}
                    and{" "}
                    <MuiLink
                        href="#"
                        sx={{
                            color: theme.palette.primary.main,
                            textDecoration: "none",
                            "&:hover": { textDecoration: "underline" },
                        }}
                    >
                        Privacy Policy
                    </MuiLink>
                </Typography>
            </Box>
        </FormWrapper>
    );
};

export default Register;