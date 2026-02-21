'use client';
import './profile.css';
import Sidebar from '@/components/Sidebar';

export default function Profile() {
  return (
    <>

      <main className="profile-layout">
        <Sidebar />

        <section className="profile-content">
          <div className="profile-header">
            <div>
              <h1 className="profile-title">Profile Info</h1>
              <p className="profile-subtitle">Manage your account settings and preferences.</p>
            </div>
            <button className="btn-edit">
              <span className="material-symbols-outlined">edit</span>
              Edit Profile
            </button>
          </div>

          <div className="details-card">
            <div className="details-cover">
              <svg className="cover-pattern" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" fill="none" r="40" stroke="white" strokeWidth="1"></circle>
                <circle cx="10" cy="10" fill="none" r="20" stroke="white" strokeWidth="1"></circle>
                <circle cx="90" cy="90" fill="none" r="30" stroke="white" strokeWidth="1"></circle>
              </svg>
            </div>

            <div className="details-body">
              <div className="avatar-wrapper">
                <div className="avatar-img">
                  <img data-alt="John Doe profile photo large" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkW_VQ4D6dgXabklUnJq005c5ontGXQBksx4Fb0GYq6nLfbLtSDPRo197Hh9c8JQFmViO1HRjBhHO2ceXM9IQo3_Ub7T0yakptNmOEzZ29feg2jS-XRDlP8YAt5vZkrlkGNJjXDB3ylrOcFLFvtsSV7iDKUOfgQRvZe9f2_LJhDUsBLUlasSbFV8h8GRQDRGs1vT1uiE_fAqY6x9KBBDepnz7i5uohKHkfK-1EmtWumJPRmmaZq1asoK0bEP3HTG0b8-NcsytsRJa5" />
                </div>
              </div>

              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Full Name</span>
                  <div className="detail-value">
                    <span className="material-symbols-outlined">person</span>
                    <span className="detail-text">Johnathan Doe</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Email Address</span>
                  <div className="detail-value">
                    <span className="material-symbols-outlined">mail</span>
                    <span className="detail-text">john.doe@techfix.com</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Phone Number</span>
                  <div className="detail-value">
                    <span className="material-symbols-outlined">call</span>
                    <span className="detail-text">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Account Status</span>
                  <div className="detail-value">
                    <span className="material-symbols-outlined success">verified</span>
                    <span className="detail-text">Active Member</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="security-card">
            <h2 className="section-title">
              <span className="material-symbols-outlined">security</span>
              Account Security
            </h2>
            <div className="security-options">
              <div className="security-option">
                <div className="option-info">
                  <h4>Password</h4>
                  <p className="option-desc">Change your password to keep your account secure.</p>
                </div>
                <button className="btn-secondary">Update Password</button>
              </div>
              <div className="security-option">
                <div className="option-info">
                  <h4>Two-Factor Authentication</h4>
                  <p className="option-desc">Add an extra layer of security to your account.</p>
                </div>
                <button className="btn-tertiary">Enable 2FA</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
