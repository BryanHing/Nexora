import React from 'react';

export const Loading: React.FC = () => (
  <div className="flex items-center justify-center h-full">
    <div className="space-y-4 text-center">
      <div className="flex justify-center">
        <div className="w-12 h-12 border-4 border-slate-200 dark:border-slate-700 border-t-blue-500 rounded-full animate-spin" />
      </div>
      <p className="text-slate-600 dark:text-slate-400">Loading...</p>
    </div>
  </div>
);

interface SkeletonProps {
  count?: number;
  height?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ count = 3, height = 20 }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" style={{ height: `${height}px` }} />
    ))}
  </div>
);
