import React from 'react';
import { Calendar, Filter } from 'lucide-react';

export default function SearchBar() {
    return (
        <section className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6 space-y-4 sm:space-y-0 justify-end w-full max-w-[800px] ml-auto">
            {/* Search Input */}
            <input
                className="flex-1 w-1/3 sm:w-auto rounded-lg border border-gray-200 bg-[#F9FAFB] px-4 py-2 text-sm text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1340]"
                placeholder="Search"
                type="text"
            />
            {/* Calendar Button */}
            <Button
                ariaLabel="Calendar"
                icon={<Calendar size={16} />}
                buttonClass="bg-[#E6E8FF] text-[#1B1340] hover:bg-[#D0D4FF]"
            />
            {/* Filter Button */}
            <Button
                ariaLabel="Filter"
                icon={<Filter size={16} />}
                buttonClass="bg-[#E6E8FF] text-[#1B1340] hover:bg-[#D0D4FF]"
            />
            {/* Add New Story Button */}
            <button
                className="rounded-lg bg-[#1B1340] px-5 py-2 text-white text-sm font-semibold hover:bg-[#0f0a2a]"
                type="button"
            >
                Add New Story
            </button>
        </section>
    );
}

function Button({ ariaLabel, icon, buttonClass }) {
    return (
        <button
            aria-label={ariaLabel}
            className={`flex items-center justify-center rounded-lg p-2 ${buttonClass}`}
            type="button"
        >
            {icon}
        </button>
    );
}
