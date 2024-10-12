// components/TabBar.tsx

import React, { useState } from 'react';

interface Tab {
  id: number;
  label: string;
  Icon?: string;
}

const tabs: Tab[] = [
  { id: 1, label: 'Home' },
  { id: 2, label: 'About' },
  { id: 3, label: 'Services' },
  { id: 4, label: 'Contact' },
];

const TabBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="flex flex-col py-6">
      {/* Tab bar */}
      <div className="grid grid-cols-4 gap-5 px-[50px]">
        {tabs.map((tab) => (
          <div key={tab.id} className="flex relative h-[179px] rounded-lg border-[2px] border-gray-600 bg-gradient-to-r from-[#101010] to-[#000000] p-4">
            <button
              key={tab.id}
              className={`py-2 px-4 font-medium ${
                activeTab === tab.id
                  ? 'text-blue-500 border-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </div>
        ))}
        {/* Tab content */}
        <div className="p-4 mt-4">
          {activeTab === 1 && <div>Welcome to the Home tab!</div>}
          {activeTab === 2 && <div>Learn more about us in the About tab!</div>}
          {activeTab === 3 && <div>Check out our Services here!</div>}
          {activeTab === 4 && <div>Contact us through this tab!</div>}
        </div>
      </div>

    </div>
  );
};

export default TabBar;
