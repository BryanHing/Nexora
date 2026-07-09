import React from 'react';
import { Plus } from 'lucide-react';
import { MobileHeader } from '@components/mobile/MobileHeader';
import { MobileContainer } from '@components/mobile/MobileContainer';
import { MobileCard, MobileCardBody, MobileCardHeader } from '@components/mobile/MobileCard';
import { MobileButton } from '@components/mobile/MobileButton';

export const MobileDashboard: React.FC = () => {
  const stats = [
    { label: 'Emails', value: '24', icon: '📧' },
    { label: 'Tasks', value: '12', icon: '✓' },
    { label: 'Meetings', value: '3', icon: '🎥' },
    { label: 'Documents', value: '8', icon: '📄' },
  ];

  return (
    <>
      <MobileHeader title="Nexora" />
      <MobileContainer>
        {/* Welcome Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome back!</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Here's your daily summary</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {stats.map((stat) => (
            <MobileCard key={stat.label}>
              <MobileCardBody>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </MobileCardBody>
            </MobileCard>
          ))}
        </div>

        {/* Recent Items */}
        <MobileCard>
          <MobileCardHeader>Recent Emails</MobileCardHeader>
          <MobileCardBody>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-slate-200 dark:border-slate-700 last:border-0 last:pb-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 dark:text-white text-sm truncate">
                      sender@example.com
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 truncate mt-0.5">
                      Email subject line
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MobileCardBody>
        </MobileCard>

        {/* Pending Tasks */}
        <MobileCard>
          <MobileCardHeader>Today's Tasks</MobileCardHeader>
          <MobileCardBody>
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      Task {i + 1}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Due today</p>
                  </div>
                </div>
              ))}
            </div>
          </MobileCardBody>
        </MobileCard>
      </MobileContainer>
    </>
  );
};
