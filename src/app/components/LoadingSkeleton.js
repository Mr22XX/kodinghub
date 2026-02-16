"use client";
import React from 'react';

export const SkeletonCard = () => (
  <div className="w-full bg-[#121212] border border-white/5 rounded-[32px] p-8 animate-pulse">
    <div className="w-12 h-12 bg-white/10 rounded-2xl mb-6"></div>
    <div className="h-6 w-3/4 bg-white/10 rounded-lg mb-4"></div>
    <div className="h-4 w-full bg-white/5 rounded-lg mb-2"></div>
    <div className="h-4 w-2/3 bg-white/5 rounded-lg"></div>
  </div>
);

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-[#080808] px-6 py-24">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="h-20 w-1/2 bg-white/5 rounded-3xl mx-auto animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}