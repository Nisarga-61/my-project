import React, { useState, useRef } from 'react';
import '../styles/OTPVerificationPage.css';

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleOTPChange = (index, value) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if digit is entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    // Move to next input on arrow right
    if (e.key === 'ArrowRight' && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Move to previous input on arrow left
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    // No functional behavior, UI only
  };

  const handleResendOTP = (e) => {
    e.preventDefault();
    // No functional behavior, UI only
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h1 className="otp-title">Verify Your OTP</h1>
        <p className="otp-subtitle">
          Enter the 6-digit code sent to your registered email
        </p>

        <form className="otp-form" onSubmit={handleVerifyOTP}>
          <div className="otp-inputs-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="otp-input"
                placeholder="0"
                required
              />
            ))}
          </div>

          {/* Verify OTP Button */}
          <button type="submit" className="verify-button">
            Verify OTP
          </button>
        </form>

        {/* Resend OTP Link */}
        <div className="resend-container">
          <p className="resend-text">
            Didn't receive the code?{' '}
            <span className="resend-link" onClick={handleResendOTP}>
              Resend OTP
            </span>
          </p>
        </div>

        {/* Timer (Optional) */}
        <p className="otp-timer">
          <span className="timer-icon">⏱️</span> Expires in 2:00
        </p>
      </div>
    </div>
  );
};

export default OTPVerificationPage;
