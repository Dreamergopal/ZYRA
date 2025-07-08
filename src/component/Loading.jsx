import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-black via-zinc-900 to-black bg-opacity-90 flex items-center justify-center z-50 font-[Poppins]">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated Logo */}
        <img
          src="/logo.png"
          alt="ZYRA Logo"
          className="w-24 h-24 animate-ping-slow filter drop-shadow-[0_0_25px_#22c55e]"
        />

        {/* Loading Text */}
        <p className="text-green-300 text-xl font-semibold animate-pulse tracking-wide">
          Igniting your chronicle...
        </p>

        {/* Subtext */}
        <p className="text-green-500 text-xs uppercase tracking-widest italic">
          create. connect. chronical.
        </p>
      </div>
    </div>
  );
}

export default Loading;
