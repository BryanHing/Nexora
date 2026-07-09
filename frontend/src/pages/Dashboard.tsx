import React from 'react';
import { Mail, Video, FileText, CheckSquare, TrendingUp } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@components/common/Card';
import { Header } from '@components/common/Header';
import { Sidebar } from '@components/common/Sidebar';

export const Dashboard: React.FC = () => {
  const stats = [
    { icon: Mail, label: 'Emails Today', value: '24', trend: '+5%' },
    { icon: Video, label: 'Meetings', value: '3', trend: '+10%' },
    { icon: FileText, label: 'Documents', value: '8', trend: '+2%' },
    { icon: CheckSquare, label: 'Tasks', value: '12', trend: '+15%' },
  ];

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back!</h1>
              <p className="text-slate-600 dark:text-slate-400 mt-2">Here's what's happening with your workspace today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label}>
                    <CardBody>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                            {stat.value}
                          </p>
                          <p className="text-xs text-green-600 dark:text-green-400 mt-2">{stat.trend}</p>
                        </div>
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Emails */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Today's Emails</h2>
                </CardHeader>
                <CardBody>
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-700 last:border-0 last:pb-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full" />
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 dark:text-white">Email Subject</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">sender@example.com</p>
                        </div>
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">New</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>

              {/* Pending Tasks */}
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Pending Tasks</h2>
                </CardHeader>
                <CardBody>
                  <div className="space-y-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 dark:text-white text-sm">Task {i + 1}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Due today</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
