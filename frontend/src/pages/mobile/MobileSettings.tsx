import React from 'react';
import { LogOut, Bell, Lock, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { MobileHeader } from '@components/mobile/MobileHeader';
import { MobileContainer } from '@components/mobile/MobileContainer';
import { MobileCard, MobileCardBody, MobileCardHeader } from '@components/mobile/MobileCard';
import { MobileButton } from '@components/mobile/MobileButton';

export const MobileSettings: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [darkMode, setDarkMode] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <MobileHeader title="Settings" />
      <MobileContainer>
        {/* Account Section */}
        <MobileCard>
          <MobileCardHeader>Account</MobileCardHeader>
          <MobileCardBody>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white text-sm">
                      User Name
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">user@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </MobileCardBody>
        </MobileCard>

        {/* Preferences */}
        <MobileCard>
          <MobileCardHeader>Preferences</MobileCardHeader>
          <MobileCardBody>
            <div className="space-y-3">
              {/* Dark Mode */}
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <div className="flex items-center gap-2">
                  {darkMode ? (
                    <Moon className="w-4 h-4 text-slate-600" />
                  ) : (
                    <Sun className="w-4 h-4 text-slate-600" />
                  )}
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    Dark Mode
                  </span>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-6 rounded-full transition ${
                    darkMode
                      ? 'bg-blue-500'
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition transform ${
                      darkMode ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>

              {/* Notifications */}
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-slate-600" />
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    Notifications
                  </span>
                </div>
                <button className="w-12 h-6 bg-blue-500 rounded-full transition" />
              </div>
            </div>
          </MobileCardBody>
        </MobileCard>

        {/* Security */}
        <MobileCard>
          <MobileCardHeader>Security</MobileCardHeader>
          <MobileCardBody>
            <button className="w-full flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Change Password
                </span>
              </div>
            </button>
          </MobileCardBody>
        </MobileCard>

        {/* Logout */}
        <div className="mt-6">
          <MobileButton
            variant="danger"
            fullWidth
            size="lg"
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </MobileButton>
        </div>
      </MobileContainer>
    </>
  );
};
