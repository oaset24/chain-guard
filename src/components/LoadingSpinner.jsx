
export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="relative">
        {/* Outer Ring */}
        <div className="animate-spin rounded-full h-6 w-6 border-2 border-white/30 border-t-white"></div>
        {/* Inner Ring */}
        <div className="absolute inset-1 animate-spin rounded-full border-2 border-secondary/60 border-b-secondary" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        {/* Center Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-secondary to-primary rounded-full loading-bounce"></div>
        </div>
      </div>
      <span className="text-sm font-medium loading-pulse">
        <span className="morph-icon inline-block mr-1">🔍</span>
        Analysiere Netzwerke...
      </span>
    </div>
  );
}
