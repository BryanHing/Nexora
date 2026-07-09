import React from 'react';
import { Mail, Archive, Trash2, Flag } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@components/common/Card';
import { Header } from '@components/common/Header';
import { Sidebar } from '@components/common/Sidebar';
import { Button } from '@components/common/Button';

export const EmailList: React.FC = () => {
  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Emails</h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Manage and organize your inbox</p>
              </div>
              <Button variant="primary">Compose</Button>
            </div>

            {/* Filters */}
            <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium">All</button>
              <button className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700">Unread</button>
              <button className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700">Flagged</button>
              <select className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-sm font-medium">
                <option>All Categories</option>
                <option>Sales</option>
                <option>Finance</option>
                <option>HR</option>
              </select>
            </div>

            {/* Email List */}
            <Card>
              <div className="divide-y divide-slate-200 dark:divide-slate-700">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition cursor-pointer">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" className="rounded" />
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-slate-900 dark:text-white truncate">sender@example.com</p>
                          <span className="text-xs text-slate-500 dark:text-slate-400 flex-shrink-0 ml-4">2 hours ago</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 truncate mt-1">Email subject line goes here</p>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-0.5 rounded">High Priority</span>
                          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">Sales</span>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition">
                          <Flag className="w-4 h-4 text-slate-500" />
                        </button>
                        <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition">
                          <Archive className="w-4 h-4 text-slate-500" />
                        </button>
                        <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition">
                          <Trash2 className="w-4 h-4 text-slate-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};
