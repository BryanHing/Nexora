import React from 'react';
import { Upload, Play, Download, Trash2 } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@components/common/Card';
import { Header } from '@components/common/Header';
import { Sidebar } from '@components/common/Sidebar';
import { Button } from '@components/common/Button';

export const MeetingList: React.FC = () => {
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
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Meetings</h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Transcribe and analyze your recordings</p>
              </div>
              <Button variant="primary" className="gap-2">
                <Upload className="w-4 h-4" />
                Upload Recording
              </Button>
            </div>

            {/* Meeting Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i}>
                  <CardBody>
                    {/* Thumbnail */}
                    <div className="mb-4 bg-slate-200 dark:bg-slate-700 rounded-lg h-48 flex items-center justify-center">
                      <Play className="w-12 h-12 text-slate-400" />
                    </div>

                    {/* Info */}
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Meeting Title {i + 1}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">45 minutes • 2024-01-15</p>

                    {/* Summary */}
                    <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                      <p className="text-xs font-semibold text-blue-900 dark:text-blue-200 mb-1">Summary</p>
                      <p className="text-xs text-blue-800 dark:text-blue-300">Discussion about project updates and next steps.</p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm" className="flex-1 gap-1">
                        <Play className="w-4 h-4" />
                        Play
                      </Button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition">
                        <Download className="w-4 h-4 text-slate-500" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition">
                        <Trash2 className="w-4 h-4 text-slate-500" />
                      </button>
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
