import React from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';
import { MobileHeader } from '@components/mobile/MobileHeader';
import { MobileContainer } from '@components/mobile/MobileContainer';
import { MobileCard, MobileCardBody } from '@components/mobile/MobileCard';
import { MobileButton } from '@components/mobile/MobileButton';

export const MobileMeetings: React.FC = () => {
  return (
    <>
      <MobileHeader
        title="Meetings"
        rightContent={<MobileButton size="sm"><Plus className="w-5 h-5" /></MobileButton>}
      />
      <MobileContainer>
        {/* Meetings Grid */}
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <MobileCard key={i}>
              <MobileCardBody>
                {/* Thumbnail */}
                <div className="mb-3 bg-slate-200 dark:bg-slate-700 rounded-lg h-32 flex items-center justify-center">
                  <div className="text-3xl">🎥</div>
                </div>

                {/* Info */}
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Meeting {i + 1}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">45 min • 2024-01-15</p>

                {/* Summary */}
                <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-900/30">
                  <p className="text-xs font-semibold text-blue-900 dark:text-blue-200 mb-1">
                    Summary
                  </p>
                  <p className="text-xs text-blue-800 dark:text-blue-300">
                    Discussion about project updates.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-3">
                  <MobileButton variant="secondary" size="sm" fullWidth>
                    Play
                  </MobileButton>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition">
                    <Download className="w-4 h-4 text-slate-500" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </MobileCardBody>
            </MobileCard>
          ))}
        </div>
      </MobileContainer>
    </>
  );
};
