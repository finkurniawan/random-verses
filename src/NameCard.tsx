// src/components/NameCard.tsx
import React from 'react';

interface NameCardProps {
    arab: string;
    indonesia: string;
    english: string;
}

const NameCard: React.FC<NameCardProps> = ({arab, indonesia, english}) => {
    return (
        <div
            className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-in">
            <h2 className="text-xl font-semibold mb-2">{arab}</h2>
            <p className="text-md mb-1">{indonesia}</p>
            <p className="text-sm">{english}</p>
        </div>
    );
};

export default NameCard;
