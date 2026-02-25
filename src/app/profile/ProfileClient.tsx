'use client';
import { useState, useRef } from 'react';
import { Edit2, Camera, User, Mail, Phone, BadgeCheck, Shield } from 'lucide-react';
import './profile.css';
import Sidebar from '@/components/Sidebar';
import mockUser from '@/app/api/test/mock/user.json';

export default function ProfileClient() {
  const { user } = mockUser;
  
  // State for editable images
  const [avatar, setAvatar] = useState(user.avatar);
  const [cover, setCover] = useState(''); // Empty cover string will show default SVG pattern
  
  // Hidden inputs references
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  // Handlers for local file loading
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCover(URL.createObjectURL(file));
    }
  };

  return (
    <div className="profile-page-wrapper">
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
            {/* Hidden inputs */}
            <input type="file" accept="image/*" ref={coverInputRef} onChange={handleCoverChange} style={{ display: 'none' }} />
            <input type="file" accept="image/*" ref={avatarInputRef} onChange={handleAvatarChange} style={{ display: 'none' }} />

            <div 
              className="details-cover editable-cover" 
              onClick={() => coverInputRef.current?.click()}
              style={cover ? { backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            >
              {!cover && (
                <svg className="cover-pattern" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" fill="none" r="40" stroke="white" strokeWidth="1"></circle>
                  <circle cx="10" cy="10" fill="none" r="20" stroke="white" strokeWidth="1"></circle>
                  <circle cx="90" cy="90" fill="none" r="30" stroke="white" strokeWidth="1"></circle>
                </svg>
              )}
              <div className="edit-overlay"><Edit2 size={18} /> Change Cover</div>
            </div>

            <div className="details-body">
              <div className="avatar-wrapper">
                <div className="avatar-img editable-avatar" onClick={() => avatarInputRef.current?.click()}>
                  <img src={avatar} alt={user.name} />
                  <div className="edit-overlay-avatar"><Camera size={32} /></div>
                </div>
              </div>

              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Full Name</span>
                  <div className="detail-value">
                    <User size={20} className="detail-icon" />
                    <span className="detail-text">{user.name}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Email Address</span>
                  <div className="detail-value">
                    <Mail size={20} className="detail-icon" />
                    <span className="detail-text">{user.email}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Phone Number</span>
                  <div className="detail-value">
                    <Phone size={20} className="detail-icon" />
                    <span className="detail-text">{user.phone}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Account Status</span>
                  <div className="detail-value">
                    <BadgeCheck size={20} className="detail-icon success" />
                    <span className="detail-text">{user.membership.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="security-card">
            <h2 className="section-title">
              <Shield size={24} className="section-icon" />
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
    </div>
  );
}
