import { Headset } from 'lucide-react';

export default function SidebarSupportCard() {
  return (
    <div className="sidebar-support-card">
      <Headset size={36} className="support-icon" />
      <h4 className="support-title">Need technical help?</h4>
      <p className="support-desc">Our experts are available 24/7 for your tech repairs.</p>
      <button className="btn-support-contact">Contact Support</button>
    </div>
  );
}
