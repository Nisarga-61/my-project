import React from 'react';
import '../Styles/ResetPassword.css';

const ResetPassword = () => {
  return (
    <div className="reset-password-wrapper">
      <div className="reset-password-card">
        <div className="reset-header">
          <div className="reset-icon">
            {/* Key/Lock SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h1 className="reset-title">Reset Password</h1>
          <p className="reset-subtitle">
            Enter your email or phone number and we'll send you an OTP to reset your password.
          </p>
        </div>

        <form className="reset-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="contact">Email or Phone Number</label>
            <div className="input-wrapper">
              <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <input
                type="text"
                id="contact"
                className="input-field"
                placeholder="Enter email or phone number"
              />
            </div>
          </div>

          <button type="button" className="reset-btn" onClick={(e) => e.preventDefault()}>
            Send OTP
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '18px', height: '18px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>

        <div className="reset-footer">
          Remembered your password? <a href="#" onClick={(e) => e.preventDefault()}>Back to Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
