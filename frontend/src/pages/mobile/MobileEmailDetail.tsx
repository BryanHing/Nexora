import React from 'react';
import { Reply, ReplyAll, Archive, Trash2 } from 'lucide-react';
import { MobileHeader } from '@components/mobile/MobileHeader';
import { MobileContainer } from '@components/mobile/MobileContainer';
import { MobileCard, MobileCardBody, MobileCardHeader } from '@components/mobile/MobileCard';
import { MobileButton } from '@components/mobile/MobileButton';

export const MobileEmailDetail: React.FC = () => {
  return (
    <>
      <MobileHeader title="Email" showBack />
      <MobileContainer>
        {/* Email Card */}
        <MobileCard>
          {/* Sender Info */}
          <MobileCardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">John Doe</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">john@example.com</p>
              </div>
            </div>
          </MobileCardHeader>

          {/* Subject */}
          <MobileCardBody className="border-b border-slate-200 dark:border-slate-700 pb-4 mb-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Email Subject Title
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {new Date().toLocaleString()}
            </p>
          </MobileCardBody>

          {/* AI Summary */}
          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-900/30">
            <p className="text-xs font-semibold text-blue-900 dark:text-blue-200 mb-1">
              AI Summary
            </p>
            <p className="text-xs text-blue-800 dark:text-blue-300">
              This email discusses project updates and action items.
            </p>
          </div>

          {/* Content */}
          <MobileCardBody className="mb-4 border-b border-slate-200 dark:border-slate-700 pb-4">
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Email content goes here. This is the body of the email message that contains all the
              important information and details that the sender wanted to communicate.
            </p>
          </MobileCardBody>

          {/* Actions */}
          <div className="space-y-2">
            <MobileButton variant="primary" fullWidth size="md" className="gap-2">
              <Reply className="w-4 h-4" />
              Reply
            </MobileButton>
            <div className="flex gap-2">
              <MobileButton variant="secondary" fullWidth size="sm">
                <Archive className="w-4 h-4" />
              </MobileButton>
              <MobileButton variant="danger" fullWidth size="sm">
                <Trash2 className="w-4 h-4" />
              </MobileButton>
            </div>
          </div>
        </MobileCard>
      </MobileContainer>
    </>
  );
};
