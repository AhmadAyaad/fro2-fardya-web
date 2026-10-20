import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

/**
 * Speech Therapy (التخاطب) uses the Taste (Mouth & Tongue) icon from the logo
 */
export const IconSpeech: React.FC<IconProps> = (props) => (
  <IconSenseMouth {...props} />
);

export const IconChatBubble: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H10l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
    <path d="M8 10.5h.01M12 10.5h.01M16 10.5h.01" strokeWidth="2.6" />
  </svg>
);

export const IconBook: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M12 6.5C10.5 5.3 8.5 4.8 4 5v13c4.5-.2 6.5.3 8 1.5 1.5-1.2 3.5-1.7 8-1.5V5c-4.5-.2-6.5.3-8 1.5zM12 6.5v13" />
  </svg>
);

export const IconSprout: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M12 21v-8M12 13c0-3.5-2.5-6-6.5-6 0 3.5 2.5 6 6.5 6zM12 15c0-3 2.2-5.2 6-5.2 0 3-2.2 5.2-6 5.2z" />
  </svg>
);

export const IconBlocks: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <rect x="3" y="13" width="8" height="8" rx="2" />
    <rect x="13" y="13" width="8" height="8" rx="2" />
    <rect x="8" y="3" width="8" height="8" rx="2" />
    <path d="M7 17h.01M17 17h.01M12 7h.01" strokeWidth="2.5" />
  </svg>
);

export const IconFamily: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <circle cx="8" cy="7" r="3" />
    <circle cx="16.5" cy="10" r="2.2" />
    <path d="M2.5 19c.4-3.5 3-5.5 6.5-5.5 1.8 0 3.3.6 4.3 1.8" />
    <path d="M13.5 19c.3-2.3 1.8-3.8 4-3.8 2.2 0 3.7 1.5 4 3.8" />
  </svg>
);

export const IconClipboard: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M9 4h6v3H9zM7 5.5H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1h-1M8.5 13l2 2 4-4.5" />
  </svg>
);

export const IconTarget: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r=".8" />
  </svg>
);

export const IconHeart: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
  </svg>
);

export const IconUsers: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20c.5-3.3 3.1-5.5 6.5-5.5s6 2.2 6.5 5.5M16.5 4.5a3.5 3.5 0 0 1 0 6.5M18 14.8c1.9.7 3.2 2.4 3.5 5.2" />
  </svg>
);

export const IconChart: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M4 19V5M4 19h16M8 15l3.5-4 3 2.5L20 7" />
  </svg>
);

export const IconEye: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconWhatsapp: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2L9 8.5z" />
  </svg>
);

export const IconPhone: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const IconPin: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconClock: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconSearch: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </svg>
);

export const IconMenu: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export const IconChevronDown: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/**
 * Arrow pointing forward (direction-aware: points left in RTL, right in LTR)
 */
export const IconArrowStart: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`icon-arrow-forward ${className}`}
    {...props}
  >
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const IconGlobe: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const IconCheck: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const IconPlus: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconMinus: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M5 12h14" />
  </svg>
);

/**
 * Five Senses Icons from Forooq Fardya Logo
 */
export const IconSenseEye: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path
      d="M10 50 C24 28 76 28 90 50 C76 72 24 72 10 50 Z"
      fill="#FFFFFF"
      stroke={color}
      strokeWidth="7"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="50" r="19" fill="none" stroke={color} strokeWidth="6.5" />
    <path d="M50 36 A14 14 0 1 0 64 50 A14 14 0 0 0 50 36 Z" fill={color} />
    <circle cx="45" cy="44" r="4.5" fill="#FFFFFF" />
  </svg>
);

export const IconSenseEar: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path
      d="M48 16 C68 16 82 32 82 48 C82 66 64 84 48 84 C32 84 26 72 28 58 C30 44 36 28 48 16 Z"
      fill="#FFFFFF"
      stroke={color}
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48 32 C60 36 64 48 58 58 C54 64 44 64 42 56 C40 46 50 42 46 34"
      fill="none"
      stroke={color}
      strokeWidth="6.5"
      strokeLinecap="round"
    />
  </svg>
);

export const IconSenseNose: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path
      d="M42 22 C46 20 54 20 58 22 C62 34 68 54 80 64 C84 68 80 78 70 76 C60 74 56 80 50 80 C44 80 40 74 30 76 C20 78 16 68 20 64 C32 54 38 34 42 22 Z"
      fill="#FFFFFF"
      stroke={color}
      strokeWidth="7"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path d="M28 68 C34 60 42 64 46 72" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />
    <path d="M72 68 C66 60 58 64 54 72" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

export const IconSenseMouth: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path
      d="M14 46 C28 38 40 44 50 40 C60 44 72 38 86 46 C78 66 64 70 50 70 C36 70 22 66 14 46 Z"
      fill="#FFFFFF"
      stroke={color}
      strokeWidth="6.5"
      strokeLinejoin="round"
    />
    <path
      d="M36 56 V68 C36 82 64 82 64 68 V56"
      fill="#F5768B"
      stroke={color}
      strokeWidth="6.5"
      strokeLinejoin="round"
    />
    <path d="M50 56 V74" stroke={color} strokeWidth="5" strokeLinecap="round" />
  </svg>
);

export const IconSenseTaste = IconSenseMouth;

export const IconSenseHand: React.FC<IconProps> = ({ size = 24, color = "currentColor", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path
      d="M26 44 C26 36 32 36 32 44 V52 M34 32 C34 24 40 24 40 32 V48 M42 26 C42 18 48 18 48 26 V48 M50 32 C50 24 56 24 56 32 V54 C56 54 62 44 68 44 C74 44 74 54 68 64 C62 76 52 84 40 84 C28 84 20 76 20 62 V44"
      fill="#FFFFFF"
      stroke={color}
      strokeWidth="6.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M46 66 C52 64 58 56 58 50" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" />
  </svg>
);

export const IconHeadBrain: React.FC<IconProps> = ({ size = 24, color = "#2C384D", className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path
      d="M34 42 C30 30 42 20 58 22 C72 24 76 36 72 44 C76 48 74 54 68 56 C60 58 54 58 48 60 C40 60 32 54 34 42 Z"
      fill="#BBC3CE"
      stroke={color}
      strokeWidth="4.5"
      strokeLinejoin="round"
    />
    <path
      d="M42 34 C48 30 54 36 62 34 M44 42 C50 44 56 38 68 40 M38 46 C44 50 50 48 54 54 M60 48 C64 52 66 48 70 50"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M32 94 C32 80 28 66 28 50 C28 26 44 14 62 14 C78 14 86 28 86 44 C86 48 84 52 86 56 C88 60 90 62 88 66 C86 70 80 70 80 72 C80 76 76 80 70 82 C64 84 60 94 60 94"
      fill="none"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

