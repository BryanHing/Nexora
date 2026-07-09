import React from 'react';

interface MobileCardProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileCard: React.FC<MobileCardProps> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 mb-4 ${className}`}>
    {children}
  </div>
);

interface MobileCardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileCardHeader: React.FC<MobileCardHeaderProps> = ({ children, className = '' }) => (
  <div className={`font-semibold text-slate-900 dark:text-white mb-3 ${className}`}>
    {children}
  </div>
);

interface MobileCardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileCardBody: React.FC<MobileCardBodyProps> = ({ children, className = '' }) => (
  <div className={`text-slate-700 dark:text-slate-300 ${className}`}>
    {children}
  </div>
);
