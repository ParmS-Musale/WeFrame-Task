'use client'
import React, { useState } from 'react';

const Tabs = ({ tabsData }) => {
    const [activeTab, setActiveTab] = useState(tabsData[0].label);

    return (
        <div className="flex gap-3 overflow-x-auto">
            {tabsData.map((tab) => {
                const isActive = activeTab === tab.label;

                return (
                    <button
                        key={tab.label}
                        onClick={() => setActiveTab(tab.label)}
                        className={`px-4 py-1.5 rounded-xl text-md font-medium transition-colors whitespace-nowrap
              ${isActive ? 'bg-[#1B1340] text-white' : 'bg-gray-200 py-2 text-gray-500 hover:bg-gray-200'}`}
                    >
                        {tab.label} ({tab.count.toLocaleString()})
                    </button>
                );
            })}
        </div>
    );
};

export default Tabs;
