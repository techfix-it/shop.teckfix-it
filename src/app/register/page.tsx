'use client';
import { User, Mail, Lock, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';
import '../login/login.css';

export default function Register() {
  return (
    <>
      <main className="auth-layout">
        <div className="auth-bg-shape-1"></div>
        <div className="auth-bg-shape-2"></div>

        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h2 className="auth-title">Create an Account</h2>
              <p className="auth-subtitle">Join TechFix-It to manage your repairs and track progress.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <div className="input-wrapper">
                  <User className="input-icon" size={20} />
                  <input className="form-input" id="name" name="name" placeholder="John Doe" type="text" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={20} />
                  <input className="form-input" id="email" name="email" placeholder="name@company.com" type="email" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={20} />
                  <input className="form-input" id="password" name="password" placeholder="••••••••" type="password" />
                  <button className="input-icon-right" type="button">
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              <div className="form-group form-checkbox-group">
                <input className="form-checkbox" id="terms" type="checkbox" />
                <label className="form-checkbox-label" htmlFor="terms">I agree to the Terms & Conditions</label>
              </div>

              <button className="btn-primary" type="submit">
                Sign Up
              </button>

              <div className="divider">
                <div className="divider-line"></div>
                <div className="divider-text">
                  <span>Or continue with</span>
                </div>
              </div>

              <div className="social-buttons">
                <button className="btn-social">
                  <div className="social-icon-wrapper" style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <span className="social-text">Google</span>
                </button>
                <button className="btn-social">
                  <div className="social-icon-wrapper" style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.34-.85 3.73-.78 1.6.01 2.92.73 3.71 1.8-3.16 1.89-2.61 5.92.51 7.07-.68 1.63-1.57 3.25-3.03 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.38-1.85 4.35-3.74 4.25z"/>
                    </svg>
                  </div>
                  <span className="social-text">Apple</span>
                </button>
              </div>
            </form>

            <div className="auth-footer">
              <p>
                Already have an account? 
                <a href="/login">Login here</a>
              </p>
            </div>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <CheckCircle2 size={16} />
              <span>Secure Registration</span>
            </div>
            <div className="trust-badge">
              <ShieldCheck size={16} />
              <span>GDPR Ready</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
