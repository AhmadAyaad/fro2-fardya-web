import React from "react";

export type SenseNodeType = "cyan" | "purple" | "green" | "pink" | "yellow" | "center";

interface SenseNodeProps {
  type: SenseNodeType;
  size?: number | string;
  className?: string;
  children?: React.ReactNode;
}

const colorStyles: Record<
  SenseNodeType,
  { bg: string; border: string; iconColor: string }
> = {
  cyan: {
    bg: "#83DDE6",
    border: "#327790",
    iconColor: "#2C384D",
  },
  purple: {
    bg: "#AF89F6",
    border: "#5E378F",
    iconColor: "#2C384D",
  },
  green: {
    bg: "#B1DD30",
    border: "#517B11",
    iconColor: "#2C384D",
  },
  pink: {
    bg: "#F6598B",
    border: "#921B48",
    iconColor: "#2C384D",
  },
  yellow: {
    bg: "#F8D940",
    border: "#8F660F",
    iconColor: "#2C384D",
  },
  center: {
    bg: "#FFFFFF",
    border: "#D9C27E",
    iconColor: "#B0285C",
  },
};

export const SenseNode: React.FC<SenseNodeProps> = ({
  type,
  size = 64,
  className = "",
  children,
}) => {
  const styles = colorStyles[type];
  const sizePx = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={`relative rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${className}`}
      style={{
        width: sizePx,
        height: sizePx,
        backgroundColor: styles.bg,
        borderWidth: "4px",
        borderColor: styles.border,
        boxShadow: "0 6px 18px rgba(44, 56, 77, 0.12)",
      }}
    >
      {children}
    </div>
  );
};
