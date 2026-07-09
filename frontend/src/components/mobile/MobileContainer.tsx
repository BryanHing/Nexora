import React from 'react';

interface MobileContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileContainer: React.FC<MobileContainerProps> = ({
  children,
  className = '',
}) => (
  <div className={`w-full h-screen bg-slate-50 dark:bg-slate-950 overflow-y-auto pb-24 ${className}`}>
    <div className="p-4">{children}</div>
  </div>
);
