"use client";

export default function BackgroundDecorations() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {/* FIXED: Changed from var(--title-color) to text color with opacity */}
      <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-heading opacity-[0.03] rounded-full animate-float"></div>
      <div className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-heading opacity-[0.03] rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-[50%] left-[50%] w-32 h-32 bg-heading opacity-[0.03] rounded-full animate-float" style={{ animationDelay: '10s' }}></div>
      <div className="absolute bottom-[10%] right-[15%] w-40 h-40 bg-heading opacity-[0.03] rounded-full animate-float" style={{ animationDelay: '15s' }}></div>
      <div className="absolute top-[30%] left-[20%] w-24 h-24 bg-heading opacity-[0.03] rounded-full animate-float" style={{ animationDelay: '20s' }}></div>
    </div>
  );
}