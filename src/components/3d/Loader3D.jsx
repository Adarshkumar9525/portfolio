import React from 'react';
import { useProgress } from '@react-three/drei';

export default function Loader3D() {
  const { progress } = useProgress();

  return (
    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-[#0a0d14]/90 backdrop-blur-lg pointer-events-none transition-opacity duration-500">
      <div className="relative flex items-center justify-center w-20 h-20 mb-4">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 animate-ping" />
        <div className="w-16 h-16 rounded-full border-2 border-t-cyan-400 border-r-teal-400 border-b-blue-500 border-l-transparent animate-spin" />
        <span className="absolute font-mono text-xs font-bold text-cyan-300">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="text-xs font-mono tracking-widest text-slate-400 uppercase">
        Initializing 3D Workspace
      </div>
    </div>
  );
}
