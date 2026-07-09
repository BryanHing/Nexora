import React from 'react';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@components/common/Card';
import { Header } from '@components/common/Header';
import { Sidebar } from '@components/common/Sidebar';
import { Button } from '@components/common/Button';

export const TaskList: React.FC = () => {
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
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Tasks</h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Manage your to-do items</p>
              </div>
              <Button variant="primary">New Task</Button>
            </div>

            {/* Filters */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {['All', 'To Do', 'In Progress', 'Completed'].map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    filter === 'All'
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Task Cards by Status */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {['To Do', 'In Progress', 'Completed'].map((status) => (
                <Card key={status}>
                  <CardHeader>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{status}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">5 tasks</p>
                  </CardHeader>
                  <CardBody>
                    <div className="space-y-3">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition cursor-pointer">
                          <button className="mt-1 flex-shrink-0">
                            {status === 'Completed' ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                            ) : (
                              <Circle className="w-5 h-5 text-slate-400" />
                            )}
                          </button>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-slate-900 dark:text-white">
                              Task Title {i + 1}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Due today</p>
                          </div>
                          <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition flex-shrink-0">
                            <Trash2 className="w-4 h-4 text-slate-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
