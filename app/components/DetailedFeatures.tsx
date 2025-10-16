import React from "react";

const DetailedIconComponent = ({ type, color }: { type: string; color: string }) => {
  const iconProps = {
    className: "w-10 h-10",
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
    case "search":
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    default:
      return null;
  }
};

const detailedFeatures = [
  {
    title: "Real-Time Nginx Service Control",
    icon: "lightning",
    color: "#b8bb26",
    features: [
      "Start, stop, and restart Nginx with one click",
      "Live service status monitoring",
      "Configuration validation checking",
    ],
  },
  {
    title: "Advanced Log Monitoring & Analysis",
    icon: "chart",
    color: "#fe8019",
    features: [
      "Real-time access and error log streaming",
      "Color-coded HTTP status codes and error levels",
      "Searchable log entries with raw/formatted views",
      "Support for 1000+ log lines with auto-rotation",
    ],
  },
  {
    title: "System Performance Metrics",
    icon: "trend",
    color: "#d3869b",
    features: [
      "Live CPU and memory usage tracking",
      "Network bandwidth monitoring (ports 80/443)",
      "Worker process and active connection counts",
      "Visual charts with Chart.js",
    ],
  },
  {
    title: "Nginx Configuration Management",
    icon: "settings",
    color: "#8ec07c",
    features: [
      "View current Nginx version and build info",
      "Edit configuration arguments (desktop mode)",
      "Categorized settings (Paths, Modules, Process)",
      "Automatic systemd integration",
    ],
  },
  {
    title: "Multi-Service System Logs",
    icon: "search",
    color: "#83a598",
    features: [
      "Journalctl integration",
      "Date range filtering and line count customization",
      "Log level detection with statistics",
      "Export and search capabilities",
    ],
  },
];

export const DetailedFeatures = () => (
  <div className="w-full max-w-7xl mx-auto px-4 py-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#fbf1c7] mb-6 leading-tight">
        Everything you need to manage Nginx
      </h2>
      <p className="text-xl text-[#d5c4a1] max-w-2xl mx-auto leading-relaxed">
        A comprehensive suite of tools designed to simplify Nginx server management
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {detailedFeatures.map((section) => (
        <div
          key={section.title}
          className="bg-[#3c3836] rounded-lg border border-[#504945] p-6 hover:border-[#665c54] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex items-start mb-4">
            <div className="mr-4 flex-shrink-0">
              <DetailedIconComponent type={section.icon} color={section.color} />
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold leading-tight"
              style={{ color: section.color }}
            >
              {section.title}
            </h3>
          </div>
          <ul className="space-y-3">
            {section.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-[#d5c4a1] text-base leading-relaxed"
              >
                <span
                  className="mr-3 mt-0.5 flex-shrink-0 font-bold text-lg"
                  style={{ color: section.color }}
                >
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
