import { ShieldCheck } from 'lucide-react';
import mockUser from '@/app/api/test/mock/user.json';

export default function UserQuickInfo() {
  const { user } = mockUser;

  return (
    <div className="user-quick-info">
      <div className="user-quick-avatar">
        <ShieldCheck size={24} strokeWidth={2.5} />
      </div>
      <div>
        <h3 className="user-quick-name">{user.name}</h3>
        <p className="user-quick-badge">{user.membership.type} since {user.membership.since}</p>
      </div>
    </div>
  );
}
