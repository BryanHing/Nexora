import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MobileHeaderProps {
  title: string;
  showBack?: boolean;
  rightContent?: React.ReactNode;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  title,
  showBack = false,
  rightContent,
}) => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-3 flex-1">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900 dark:text-white" />
            </button>
          )}
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h1>
        </div>
        {rightContent && <div className="flex items-center gap-2">{rightContent}</div>}
      </div>
    </div>
  );
};
