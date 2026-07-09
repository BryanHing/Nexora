import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Mail,
  Video,
  FileText,
  CheckSquare,
  Settings,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Home', href: '/dashboard', id: 'home' },
  { icon: Mail, label: 'Emails', href: '/emails', id: 'emails' },
  { icon: Video, label: 'Meetings', href: '/meetings', id: 'meetings' },
  { icon: FileText, label: 'Docs', href: '/documents', id: 'documents' },
  { icon: CheckSquare, label: 'Tasks', href: '/tasks', id: 'tasks' },
  { icon: Settings, label: 'Settings', href: '/settings', id: 'settings' },
];

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 z-40">
      <div className="flex justify-around items-center h-20 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.id}
              to={item.href}
              className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
