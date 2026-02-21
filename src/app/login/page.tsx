'use client';
import './login.css';

export default function Login() {
  return (
    <>

      {/* Main Content Area */}
      <main className="auth-layout">
        <div className="auth-bg-shape-1"></div>
        <div className="auth-bg-shape-2"></div>

        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h2 className="auth-title">Welcome Back</h2>
              <p className="auth-subtitle">Login to your TechFix-It account to manage your repairs and track progress.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <span className="material-symbols-outlined input-icon">mail</span>
                  <input className="form-input" id="email" name="email" placeholder="name@company.com" type="email" />
                </div>
              </div>

              <div className="form-group">
                <div className="form-label-row">
                  <label className="form-label" htmlFor="password">Password</label>
                  <a className="forgot-password" href="#">Forgot Password?</a>
                </div>
                <div className="input-wrapper">
                  <span className="material-symbols-outlined input-icon">lock</span>
                  <input className="form-input" id="password" name="password" placeholder="••••••••" type="password" />
                  <button className="input-icon-right" type="button">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>

              <div className="form-group form-checkbox-group">
                <input className="form-checkbox" id="remember" type="checkbox" />
                <label className="form-checkbox-label" htmlFor="remember">Remember this device</label>
              </div>

              <button className="btn-primary" type="submit">
                Login
              </button>

              <div className="divider">
                <div className="divider-line"></div>
                <div className="divider-text">
                  <span>Or continue with</span>
                </div>
              </div>

              <div className="social-buttons">
                <button className="btn-social">
                  <div className="social-icon-wrapper">
                    <span className="material-symbols-outlined">google</span>
                  </div>
                  <span className="social-text">Google</span>
                </button>
                <button className="btn-social">
                  <div className="social-icon-wrapper">
                    <span className="material-symbols-outlined">ios</span>
                  </div>
                  <span className="social-text">Apple</span>
                </button>
              </div>
            </form>

            <div className="auth-footer">
              <p>
                Don't have an account yet? 
                <a href="#">Sign up for free</a>
              </p>
            </div>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <span className="material-symbols-outlined">verified_user</span>
              <span>Secure Login</span>
            </div>
            <div className="trust-badge">
              <span className="material-symbols-outlined">privacy_tip</span>
              <span>GDPR Ready</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
