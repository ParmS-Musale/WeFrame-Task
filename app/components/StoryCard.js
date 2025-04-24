import React from 'react';
import { FaEye, FaChartBar } from 'react-icons/fa';

const StoryCard = ({ card }) => {
    return (
        <div className="relative max-w-xs w-full  rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white">

            <img
                src={card.image}
                alt={card.alt}
                className="w-full h-[450px] object-cover rounded-xl filter brightness-50"
                width="400"
                height="500"
            />
            {/* Top Right Badges */}
            <div className="absolute top-3 right-3 flex space-x-2">
                <div className="flex items-center space-x-1 bg-white rounded-md py-1 px-3 text-gray-700 text-sm font-semibold shadow">
                    <FaEye />
                    <span>{card.views}</span>
                </div>
                <button
                    aria-label="Statistics"
                    className="bg-white rounded-md p-2 text-gray-700 shadow hover:bg-gray-100 transition"
                >
                    <FaChartBar />
                </button>
            </div>

            {/* Title */}
            <div className="absolute bottom-32 left-4 right-4 text-white drop-shadow-lg font-semibold text-lg leading-tight">
                {card.title}
            </div>

            {/* Subtitle + Badge */}
            <div className="absolute bottom-20 left-4 right-4 flex items-center space-x-3 text-white drop-shadow-md">
                <span className="font-bold uppercase text-xs tracking-wide">{card.category}</span>
                <span className="text-xs font-medium">• {card.date}</span>
                <span className="ml-auto bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-md select-none">
                    {card.status}
                </span>
            </div>

            {/* Buttons */}
            <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                <button
                    type="button"
                    className="flex-1 bg-purple-100 text-purple-900 font-medium text-base rounded-xl py-3 text-center"
                >
                    View
                </button>
                <button
                    type="button"
                    aria-label="More options"
                    className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-gray-700 text-3xl font-extrabold"
                >
                    <span>...</span>
                </button>
            </div>
        </div>
    );
};

export default StoryCard
