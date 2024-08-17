import React from 'react';

const features = [
  {
    title: 'Monitor',
    description: 'View access and error events in real-time. Monitor and react instantly to what\'s happening on your server.',
    color: '#b8bb26',
  },
  {
    title: 'Manage',
    description: ' Start, stop, or restart Nginx with a single click—no command line required.',
    color: '#fe8019',
  },
  {
    title: 'Configure',
    description: 'Ensure your Nginx configurations are always correct with real-time monitoring.',
    color: '#d3869b',
  },
  {
    title: 'Watch',
    description: 'Easily check the current state of your Nginx server.',
    color: '#8ec07c',
  },
];

export const Features = () => (
  <div className="mb-16 max-sm:mb-64 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    {features.map((feature) => (
      <div
        key={feature.title}
        className="group rounded-lg border border-transparent px-4 sm:px-5 py-4 transition-colors md:hover:scale-150 hover:bg-[#504945]"
      >
        <h2
          className="mb-2 sm:mb-3 text-xl sm:text-2xl font-semibold"
          style={{ color: feature.color }}
        >
          {feature.title}
        </h2>
        <p className="m-0 max-w-[30ch] text-sm text-[#ebdbb2]">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
);
