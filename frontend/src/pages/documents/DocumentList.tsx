import React from 'react';
import { Upload, FileText, Download, Trash2 } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@components/common/Card';
import { Header } from '@components/common/Header';
import { Sidebar } from '@components/common/Sidebar';
import { Button } from '@components/common/Button';

export const DocumentList: React.FC = () => {
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
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Documents</h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Analyze your PDFs and spreadsheets</p>
              </div>
              <Button variant="primary" className="gap-2">
                <Upload className="w-4 h-4" />
                Upload Document
              </Button>
            </div>

            {/* Document Table */}
            <Card>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Type</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-slate-400" />
                          <span className="font-medium text-slate-900 dark:text-white">Document {i + 1}.pdf</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">PDF</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">2024-01-{15 + i}</td>
                      <td className="px-6 py-4">
                        <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">Completed</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition">
                            <Download className="w-4 h-4 text-slate-500" />
                          </button>
                          <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition">
                            <Trash2 className="w-4 h-4 text-slate-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};
