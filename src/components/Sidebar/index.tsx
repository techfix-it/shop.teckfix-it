import './Sidebar.css';
import UserQuickInfo from './UserQuickInfo';
import SidebarNav from './SidebarNav';
import SidebarSupportCard from './SidebarSupportCard';

export default function Sidebar() {
  return (
    <aside className="profile-sidebar">
      <div className="sidebar-card">
        <UserQuickInfo />
        <SidebarNav />
      </div>
      <SidebarSupportCard />
    </aside>
  );
}
