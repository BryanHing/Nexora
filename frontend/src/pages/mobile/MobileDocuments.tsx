import React from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';
import { MobileHeader } from '@components/mobile/MobileHeader';
import { MobileContainer } from '@components/mobile/MobileContainer';
import { MobileCard, MobileCardBody, MobileCardHeader } from '@components/mobile/MobileCard';
import { MobileButton } from '@components/mobile/MobileButton';

export const MobileDocuments: React.FC = () => {
  return (
    <>
      <MobileHeader
        title="Documents"
        rightContent={<MobileButton size="sm"><Plus className="w-5 h-5" /></MobileButton>}
      />
      <MobileContainer>
        <MobileCard>
          <MobileCardHeader>Recent Documents</MobileCardHeader>
          <MobileCardBody>
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-700 last:border-0 last:pb-0">
                  <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📄</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 dark:text-white text-sm truncate">
                      Document {i + 1}.pdf
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">2024-01-{15 + i}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition">
                      <Download className="w-4 h-4 text-slate-500" />
                    </button>
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
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
