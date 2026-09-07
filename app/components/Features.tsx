import React from "react";

const features = [
  {
    title: "Real-Time Control",
    description:
      "Start, stop, and restart Nginx with one click. Live service status monitoring and configuration validation.",
    color: "#b8bb26",
    icon: "lightning",
  },
  {
    title: "Log Monitoring",
    description:
      "Real-time log streaming with color-coded status codes, searchable entries, and support for 1000+ lines.",
    color: "#fe8019",
    icon: "chart",
  },
  {
    title: "Performance Metrics",
    description:
      "Live CPU, memory, and network monitoring with visual charts tracking worker processes and connections.",
    color: "#d3869b",
    icon: "trend",
  },
  {
    title: "Configuration",
    description: "View Nginx version, edit settings, categorized configurations with automatic systemd integration.",
    color: "#8ec07c",
    icon: "settings",
  },
  {
    title: "Remote Access",
    description:
      "Install it on a remote server and open that host in a browser. Same app, reachable from anywhere you can reach the machine.",
    color: "#83a598",
    icon: "remote",
  },
];

const IconComponent = ({ type, color }: { type: string; color: string }) => {
  const iconProps = {
    className: "w-12 h-12",
    fill: "none",
    stroke: color,
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
  };

  switch (type) {
    case "lightning":
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "chart":
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "trend":
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      );
    case "settings":
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "remote":
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      );
    default:
      return null;
  }
};

export const Features = () => (
  <div className="mb-8 mt-4 grid text-center w-full min-w-0 max-w-5xl lg:mb-0 lg:grid-cols-3 lg:items-start gap-4">
    {features.map((feature) => {
      const isLast = feature === features[features.length - 1];
      return (
        <div
          key={feature.title}
          className={`${isLast && "mb-16"} bg-[#3c3836] backdrop-blur-sm z-50 group rounded-lg border border-[#3c3836] px-4 sm:px-5 py-6 transition-all duration-300 hover:border-[#504945] hover:bg-[#3c3836] hover:shadow-lg hover:scale-105 flex flex-col items-center h-full`}
        >
          <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
            <IconComponent type={feature.icon} color={feature.color} />
          </div>
          <h2
            className="mb-3 sm:mb-4 text-2xl sm:text-2xl font-bold"
            style={{ color: feature.color }}
          >
            {feature.title}
          </h2>
          <p className="m-0 max-w-[30ch] text-base text-[#d5c4a1] text-center leading-relaxed">
            {feature.description}
          </p>
        </div>
      );
    })}
  </div>
);
