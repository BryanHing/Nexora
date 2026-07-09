import React from 'react';
import { ArrowLeft, Download, Flag, Archive, Trash2, Reply, ReplyAll } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardHeader } from '@components/common/Card';
import { Header } from '@components/common/Header';
import { Sidebar } from '@components/common/Sidebar';
import { Button } from '@components/common/Button';

export const EmailDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-6 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Inbox
            </button>

            {/* Email Card */}
            <Card>
              {/* Header */}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Email Subject Title</h1>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full" />
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">John Doe</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">john@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition">
                      <Flag className="w-5 h-5 text-slate-500" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition">
                      <Archive className="w-5 h-5 text-slate-500" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition">
                      <Trash2 className="w-5 h-5 text-slate-500" />
                    </button>
                  </div>
                </div>
              </CardHeader>

              {/* Metadata */}
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-sm text-slate-600 dark:text-slate-400">
                <p>To: to@example.com</p>
                <p>Date: {new Date().toLocaleString()}</p>
              </div>

              {/* Summary */}
              <div className="px-6 py-4 bg-blue-50 dark:bg-blue-900/10 border-b border-blue-200 dark:border-blue-900/30">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">AI Summary</p>
                <p className="text-sm text-blue-800 dark:text-blue-300">This email discusses project updates and action items.</p>
              </div>

              {/* Body */}
              <CardBody>
                <div className="prose dark:prose-invert max-w-none">
                  <p>Email content goes here...</p>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 flex gap-3">
                  <Button variant="primary" size="sm" className="gap-2">
                    <Reply className="w-4 h-4" />
                    Reply
                  </Button>
                  <Button variant="secondary" size="sm" className="gap-2">
                    <ReplyAll className="w-4 h-4" />
                    Reply All
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};
