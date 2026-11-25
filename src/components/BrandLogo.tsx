import React, { useId } from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md';
  variant?: 'default' | 'inverted';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'default',
}) => {
  const isSmall = size === 'sm';
  const isInverted = variant === 'inverted';
  const gradId = useId();

  return (
    <span
      className="inline-flex items-center gap-3 select-none"
      aria-label="Elymento Insights"
    >
      {/* Geometric Layered Intelligence Mark */}
      <svg
        width={isSmall ? 30 : 34}
        height={isSmall ? 30 : 34}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id={gradId}
            x1="2"
            y1="2"
            x2="34"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={isInverted ? '#2865B0' : '#12346A'} />
            <stop offset="100%" stopColor={isInverted ? '#12346A' : '#091B46'} />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="10"
          fill={`url(#${gradId})`}
        />
        {/* Three precision ascending layers echoing the ELYMΞNTO signature */}
        <rect x="8.5" y="10" width="13.5" height="2.6" rx="1.3" fill="#DCE7FA" />
        <rect x="8.5" y="16.7" width="19" height="2.6" rx="1.3" fill="#FFFFFF" />
        <rect x="8.5" y="23.4" width="15.5" height="2.6" rx="1.3" fill="#2865B0" />
        {/* Precision insight node */}
        <circle cx="25.8" cy="11.3" r="2.1" fill="#FFFFFF" />
      </svg>

      {/* Signature ELYMΞNTO INSIGHTS Wordmark */}
      <span className="inline-flex items-baseline gap-2.5 leading-none">
        <span
          className={`inline-flex items-center font-sans font-normal uppercase tracking-[0.2em] ${
            isInverted ? 'text-white' : 'text-[#091B46]'
          } ${isSmall ? 'text-[17px]' : 'text-[19px]'}`}
        >
          <span>ELYM</span>
          <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={`shrink-0 mr-[0.2em] ${
              isSmall ? 'w-[12.5px] h-[12.5px]' : 'w-[14px] h-[14px]'
            }`}
          >
            <rect
              x="0.5"
              y="0.6"
              width="13"
              height="1.55"
              fill={isInverted ? '#FFFFFF' : '#091B46'}
            />
            <rect
              x="0.5"
              y="6.22"
              width="13"
              height="1.55"
              fill={isInverted ? '#FFFFFF' : '#091B46'}
            />
            <rect
              x="0.5"
              y="11.85"
              width="13"
              height="1.55"
              fill={isInverted ? '#FFFFFF' : '#091B46'}
            />
          </svg>
          <span className="-mr-[0.2em]">NTO</span>
        </span>
        <span
          className={`font-sans font-semibold uppercase tracking-[0.18em] ${
            isInverted ? 'text-[#DCE7FA]' : 'text-[#2865B0]'
          } ${isSmall ? 'text-[11px]' : 'text-[12.5px]'}`}
        >
          Insights
        </span>
      </span>
    </span>
  );
};
