import React from 'react';

/**
 * SectionDivider — SVG-based organic transitions between sections.
 * 
 * Props:
 *  - type: 'wave' | 'curve' | 'angle' | 'tilt'
 *  - from: top section background color (default: black)
 *  - to: bottom section background color (default: #1C1C1C)
 *  - flip: boolean — flips vertically
 *  - className: extra classes
 */
const SectionDivider = ({
  type = 'wave',
  from = '#000000',
  to = '#1C1C1C',
  flip = false,
  className = '',
}) => {
  const dividers = {
    wave: (
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`w-full block ${flip ? 'rotate-180' : ''}`}
        style={{ height: '80px' }}
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={to}
        />
        <path
          d="M0,80 C240,110 480,20 720,70 C960,110 1200,30 1440,80 L1440,120 L0,120 Z"
          fill={to}
          opacity="0.5"
        />
      </svg>
    ),

    curve: (
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`w-full block ${flip ? 'rotate-180' : ''}`}
        style={{ height: '60px' }}
      >
        <path
          d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z"
          fill={to}
        />
      </svg>
    ),

    angle: (
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`w-full block ${flip ? 'rotate-180' : ''}`}
        style={{ height: '60px' }}
      >
        <polygon
          points="0,80 1440,0 1440,80"
          fill={to}
        />
      </svg>
    ),

    tilt: (
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`w-full block ${flip ? 'rotate-180' : ''}`}
        style={{ height: '70px' }}
      >
        <path
          d="M0,100 C360,30 1080,30 1440,100 L1440,100 L0,100 Z"
          fill={to}
        />
        <path
          d="M0,100 C480,50 960,50 1440,100 L1440,100 L0,100 Z"
          fill={to}
          opacity="0.4"
        />
      </svg>
    ),
  };

  return (
    <div
      className={`relative w-full leading-[0] -mb-px ${className}`}
      style={{ backgroundColor: from }}
      aria-hidden="true"
    >
      {dividers[type] || dividers.wave}
    </div>
  );
};

export default SectionDivider;
