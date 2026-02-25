'use client';
import './addresses.css';
import '@/app/profile/profile.css'; // Reuse generic layout styles
import Sidebar from '@/components/Sidebar';
import mockUser from '@/app/api/test/mock/user.json';
import { Pencil, Trash2, MapPin, MapPinned, Home, PlusCircle } from 'lucide-react';

export default function AddressesClient() {
  const { addresses } = mockUser;

  return (
    <div className="profile-page-wrapper">
      <main className="profile-layout">
        <Sidebar />

      <section className="addresses-content">
        <div className="addresses-header">
          <div>
            <h1 className="addresses-title">Your Addresses</h1>
            <p className="addresses-subtitle">Manage your shipping and service locations.</p>
          </div>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPinned size={18} />
            Add New Address
          </button>
        </div>

        <div className="addresses-grid">
          {addresses.map((address) => (
            <div key={address.id} className="address-card">
              <div className="address-card-header">
                {address.isDefault ? (
                  <span className="badge-default">DEFAULT ADDRESS</span>
                ) : <div></div>}
                <div className="address-card-actions">
                  <button className="icon-btn"><Pencil size={18} /></button>
                  <button className="icon-btn"><Trash2 size={18} /></button>
                </div>
              </div>

              <div className="address-card-body">
                <h3 className="address-name">{address.fullName}</h3>
                <div className="address-lines">
                  <div className="address-line">
                    <MapPin size={16} className="address-icon" />
                    <span>{address.street}</span>
                  </div>
                  <div className="address-line no-icon">
                    <span>{address.city}, {address.state} {address.zipCode}</span>
                  </div>
                  <div className="address-line no-icon" style={{ fontWeight: 600, marginTop: '0.4rem', color: '#1f2937' }}>
                    <span>{address.country}</span>
                  </div>
                </div>
              </div>

              <div className="address-map-container" style={{ backgroundImage: `url(${address.mapThumbnail})` }}>
                <div className="map-overlay">
                  <span className="map-city-name">{address.city}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Add New Address Card */}
          <div className="address-card add-new-card">
            <div className="add-new-content">
              <div className="add-new-icon-wrapper" style={{ position: 'relative', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Home size={32} strokeWidth={1.5} />
                <div style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'white', borderRadius: '50%' }}>
                  <PlusCircle size={20} fill="white" color="#94a3b8" />
                </div>
              </div>
              <h3 className="add-new-title">Add New Address</h3>
              <p className="add-new-subtitle">Register a new shipping or service location</p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
