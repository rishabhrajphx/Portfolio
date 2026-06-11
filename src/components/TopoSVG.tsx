export default function TopoSVG({
  className = "",
  spectral = false,
}: {
  className?: string;
  spectral?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 800 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Spectral gradient — higher stop opacity so it actually shows */}
        <linearGradient id="spectral-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#dcceff" stopOpacity="0.0" />
          <stop offset="20%"  stopColor="#dcceff" stopOpacity="0.55" />
          <stop offset="45%"  stopColor="#d7f3f4" stopOpacity="0.7" />
          <stop offset="65%"  stopColor="#f3d8e7" stopOpacity="0.55" />
          <stop offset="85%"  stopColor="#ddf2e6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#dcceff" stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id="spectral-stroke-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#d7f3f4" stopOpacity="0.0" />
          <stop offset="30%"  stopColor="#f3d8e7" stopOpacity="0.45" />
          <stop offset="55%"  stopColor="#dcceff" stopOpacity="0.6" />
          <stop offset="75%"  stopColor="#d7f3f4" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ddf2e6" stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id="spectral-stroke-3" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%"   stopColor="#ddf2e6" stopOpacity="0.0" />
          <stop offset="25%"  stopColor="#dcceff" stopOpacity="0.4" />
          <stop offset="50%"  stopColor="#f3d8e7" stopOpacity="0.55" />
          <stop offset="75%"  stopColor="#d7f3f4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#dcceff" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {/* Warm base topo lines */}
      <path d="M-40 280 C80 240, 180 260, 300 220 S480 180, 600 200 S740 240, 840 210"
        stroke="rgba(78,55,31,0.11)" strokeWidth="1" fill="none" />
      <path d="M-40 240 C100 200, 200 220, 320 180 S500 140, 620 160 S760 200, 840 170"
        stroke="rgba(78,55,31,0.09)" strokeWidth="1" fill="none" />
      <path d="M-40 200 C120 160, 220 180, 340 140 S520 100, 640 120 S780 160, 840 130"
        stroke="rgba(78,55,31,0.07)" strokeWidth="1" fill="none" />
      <path d="M-40 160 C140 120, 240 140, 360 100 S540 60, 660 80 S800 120, 840 90"
        stroke="rgba(78,55,31,0.06)" strokeWidth="1" fill="none" />
      <path d="M-40 120 C160 80, 260 100, 380 60 S560 20, 680 40"
        stroke="rgba(78,55,31,0.05)" strokeWidth="1" fill="none" />
      <path d="M0 300 C150 260 250 280 400 250 S580 220 700 240 S800 270 840 255"
        stroke="rgba(78,55,31,0.08)" strokeWidth="0.8" fill="none" />
      <path d="M0 180 C60 150 140 170 220 145 S360 115 440 130 S560 155 640 140 S750 120 840 130"
        stroke="rgba(78,55,31,0.06)" strokeWidth="0.8" fill="none" />
      <path d="M200 310 C280 280 360 295 440 270 S580 245 660 260"
        stroke="rgba(78,55,31,0.07)" strokeWidth="0.8" fill="none" />

      {/* Spectral accent lines — visible iridescence at the contours */}
      {spectral && (
        <>
          {/* Primary shimmer line — traces over the warm contour */}
          <path
            d="M-40 240 C100 200, 200 220, 320 180 S500 140, 620 160 S760 200, 840 170"
            stroke="url(#spectral-stroke)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Second spectral contour — slightly offset */}
          <path
            d="M-40 200 C120 160, 220 180, 340 140 S520 100, 640 120 S780 160, 840 130"
            stroke="url(#spectral-stroke-2)"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Third — reversed gradient direction for interference feel */}
          <path
            d="M-40 160 C140 120, 240 140, 360 100 S540 60, 660 80 S800 120, 840 90"
            stroke="url(#spectral-stroke-3)"
            strokeWidth="1"
            fill="none"
          />
          {/* Faint echo shimmer — lower line */}
          <path
            d="M0 300 C150 260 250 280 400 250 S580 220 700 240 S800 270 840 255"
            stroke="url(#spectral-stroke)"
            strokeWidth="0.8"
            fill="none"
            opacity="0.5"
          />
        </>
      )}
    </svg>
  );
}
