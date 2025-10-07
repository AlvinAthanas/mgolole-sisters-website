import React, { useState } from "react";
import {
    Box,
    Button,
    Divider,
    InputAdornment,
    TextField,
    Typography,
    Link as MuiLink,
} from "@mui/material";
import { Mail, ArrowLeft, Lock, ShieldCheck } from "lucide-react";
import { useTheme } from "@mui/material";
import { useSnackbar } from "../contexts/SnackbarAlertContext";
import { Link } from "react-router-dom";
import postData from "../utils/AxioPost";
import { BASE_URL } from "../utils/BaseUrl";
import FormWrapper from "./FormWrapper";
import { useToken } from "../contexts/TokenContext.tsx";
import { useAuthentication } from "../contexts/AuthContext.tsx";

const PasswdRst: React.FC = () => {
    const theme = useTheme();
    const { token, setToken, setBearerToken } = useToken();
    const { setAuthenticated } = useAuthentication();
    const { showSnackbar } = useSnackbar();

    const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
    const [email, setEmail] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // Step 1: Send OTP to email
    const sendOTP = async () => {
        if (!email) {
            showSnackbar("Please enter your email address", "warning");
            return;
        }

        setLoading(true);

        try {
            const response = await postData(
                `${BASE_URL}/passwd-rst-send-otp`,
                { email },
                token,
                null,
                setAuthenticated,
                setToken,
                setBearerToken
            );

            if (response?.status) {
                showSnackbar("OTP sent to your email!", "success");
                setStep(2);
            } else {
                showSnackbar(response?.error || "Failed to send OTP", "error");
            }
        } catch (error) {
            showSnackbar("Something went wrong. Try again later.", "error");
        }

        setLoading(false);
    };

    // Step 2: Verify OTP code
    const verifyOTP = async () => {
        if (!otpCode || otpCode.length !== 6) {
            showSnackbar("Please enter a valid 6-digit OTP code", "warning");
            return;
        }

        setLoading(true);

        try {
            const response = await postData(
                `${BASE_URL}/verify-reset-code`,
                { email, code: otpCode },
                token,
                null,
                setAuthenticated,
                setToken,
                setBearerToken
            );

            if (response?.status) {
                showSnackbar("OTP verified successfully!", "success");
                setStep(3);
            } else {
                showSnackbar(response?.error || "Invalid or expired OTP", "error");
            }
        } catch (error) {
            showSnackbar("Failed to verify OTP. Try again.", "error");
        }

        setLoading(false);
    };

    // Step 3: Reset password
    const resetPassword = async () => {
        if (!newPassword || !confirmPassword) {
            showSnackbar("Please fill in all fields", "warning");
            return;
        }

        if (newPassword !== confirmPassword) {
            showSnackbar("Passwords do not match", "warning");
            return;
        }

        if (newPassword.length < 8) {
            showSnackbar("Password must be at least 8 characters long", "warning");
            return;
        }

        setLoading(true);

        try {
            const response = await postData(
                `${BASE_URL}/reset-password/confirm`,
                { email, newPassword },
                token,
                null,
                setAuthenticated,
                setToken,
                setBearerToken
            );

            if (response?.status) {
                showSnackbar("Password reset successfully! Please login.", "success");
                // Reset form and go back to step 1
                setEmail("");
                setOtpCode("");
                setNewPassword("");
                setConfirmPassword("");
                setStep(1);
                // Optionally redirect to the login page
                window.location.href = "/signin";
            } else {
                showSnackbar(response?.error || "Failed to reset password", "error");
            }
        } catch (error) {
            showSnackbar("Something went wrong. Try again later.", "error");
        }

        setLoading(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (step === 1) sendOTP();
            else if (step === 2) verifyOTP();
            else if (step === 3) resetPassword();
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <FormWrapper
            title="Reset Your Password"
            description={
                step === 1
                    ? "Enter your email address and we'll send you a verification code."
                    : step === 2
                        ? "Enter the 6-digit code sent to your email."
                        : "Create a new password for your account."
            }
        >
            {/* Header */}
            <Box sx={{ textAlign: "center", mb: 2 }}>
                <Typography
                    variant="h4"
                    fontWeight="700"
                    sx={{ color: theme.palette.text.primary, mb: 1 }}
                >
                    {step === 1 ? "Forgot Password?" : step === 2 ? "Verify Code" : "New Password"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    {step === 1
                        ? "No worries, we'll help you reset it."
                        : step === 2
                            ? "Check your email for the verification code."
                            : "Choose a strong password for your account."}
                </Typography>
            </Box>

            {/* Step 1: Email Input */}
            {step === 1 && (
                <>
                    <TextField
                        fullWidth
                        placeholder="Email address"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={handleKeyPress}
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

                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        onClick={sendOTP}
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
                        {loading ? "Sending..." : "Send Verification Code"}
                    </Button>
                </>
            )}

            {/* Step 2: OTP Verification */}
            {step === 2 && (
                <>
                    <TextField
                        fullWidth
                        placeholder="Enter 6-digit code"
                        label="Verification Code"
                        type="text"
                        value={otpCode}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "").slice(0, 6);
                            setOtpCode(value);
                        }}
                        onKeyPress={handleKeyPress}
                        inputProps={{ maxLength: 6 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <ShieldCheck size={20} color={theme.palette.text.secondary} />
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

                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        onClick={verifyOTP}
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
                        {loading ? "Verifying..." : "Verify Code"}
                    </Button>

                    <Button
                        variant="text"
                        fullWidth
                        size="small"
                        onClick={sendOTP}
                        disabled={loading}
                        sx={{
                            mt: 1,
                            textTransform: "none",
                            color: theme.palette.text.secondary,
                        }}
                    >
                        Resend Code
                    </Button>
                </>
            )}

            {/* Step 3: New Password */}
            {step === 3 && (
                <>
                    <TextField
                        fullWidth
                        placeholder="New password"
                        label="New Password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        onKeyPress={handleKeyPress}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock size={20} color={theme.palette.text.secondary} />
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

                    <TextField
                        fullWidth
                        placeholder="Confirm password"
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onKeyPress={handleKeyPress}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock size={20} color={theme.palette.text.secondary} />
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

                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        onClick={resetPassword}
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
                        {loading ? "Resetting..." : "Reset Password"}
                    </Button>
                </>
            )}

            {/* Divider */}
            <Divider sx={{ my: 1 }}>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    OR
                </Typography>
            </Divider>

            {/* Navigation Links */}
            <Box sx={{ textAlign: "center", display: "flex", justifyContent: "center", gap: 2 }}>
                {step > 1 && (
                    <MuiLink
                        component="button"
                        onClick={handleBack}
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.5,
                            color: theme.palette.text.secondary,
                            textDecoration: "none",
                            fontWeight: 600,
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            "&:hover": { textDecoration: "underline" },
                        }}
                    >
                        <ArrowLeft size={18} /> Back
                    </MuiLink>
                )}
                <MuiLink
                    component={Link}
                    to="/signin"
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                        fontWeight: 600,
                        "&:hover": { textDecoration: "underline" },
                    }}
                >
                    <ArrowLeft size={18} /> Back to Login
                </MuiLink>
            </Box>
        </FormWrapper>
    );
};

export default PasswdRst;