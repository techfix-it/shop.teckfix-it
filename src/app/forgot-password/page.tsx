'use client';
import { Mail, CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import '../login/login.css';

export default function ForgotPassword() {
  return (
    <>
      <main className="auth-layout">
        <div className="auth-bg-shape-1"></div>
        <div className="auth-bg-shape-2"></div>

        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h2 className="auth-title">Reset Password</h2>
              <p className="auth-subtitle">Enter your email address and we'll send you instructions to reset your password.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label className="form-label" htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={20} />
                  <input className="form-input" id="email" name="email" placeholder="name@company.com" type="email" required />
                </div>
              </div>

              <button className="btn-primary" type="submit">
                Send Reset Link
              </button>
            </form>

            <div className="auth-footer" style={{ marginTop: '2rem' }}>
              <Link href="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-600)', textDecoration: 'none', fontWeight: '500' }}>
                <ArrowLeft size={16} />
                Back to Login
              </Link>
            </div>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <CheckCircle2 size={16} />
              <span>Secure Recovery</span>
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
