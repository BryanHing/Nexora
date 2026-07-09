import React from 'react';
import { Plus, Search } from 'lucide-react';
import { MobileHeader } from '@components/mobile/MobileHeader';
import { MobileContainer } from '@components/mobile/MobileContainer';
import { MobileCard, MobileCardBody } from '@components/mobile/MobileCard';
import { MobileButton } from '@components/mobile/MobileButton';

export const MobileEmails: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <>
      <MobileHeader
        title="Emails"
        rightContent={<MobileButton size="sm"><Plus className="w-5 h-5" /></MobileButton>}
      />
      <MobileContainer>
        {/* Search Bar */}
        <div className="mb-4 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search emails..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email List */}
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <MobileCard key={i}>
              <MobileCardBody>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-slate-900 dark:text-white truncate">
                        sender@example.com
                      </p>
                      <span className="text-xs text-slate-500 dark:text-slate-400 flex-shrink-0 ml-2">
                        2h ago
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate mt-1">
                      This is the email subject line
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-0.5 rounded-full">
                        High
                      </span>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                        Sales
                      </span>
                    </div>
                  </div>
                </div>
              </MobileCardBody>
            </MobileCard>
          ))}
        </div>
      </MobileContainer>
    </>
  );
};
