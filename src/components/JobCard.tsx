import React from "react";
import { Card } from "./ui/card";

interface JobCardProps {
  title: string;
  type: string;
  location: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  type,
  location,
  buttonText = "More Details",
  onButtonClick,
}) => {
  return (
    <Card className="p-8 max-w-xl">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="flex flex-col gap-4 mb-8 text-lg text-gray-500">
        <div className="flex items-center gap-2">
          <span role="img" aria-label="type">⏱️</span>
          <span>{type}</span>
        </div>
        <div className="flex items-center gap-2">
          <span role="img" aria-label="location">📍</span>
          <span>{location}</span>
        </div>
      </div>
      <button
        className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold py-2 px-6 rounded-lg transition"
        onClick={onButtonClick}
      >
        {buttonText} →
      </button>
    </Card>
  );
};

export default JobCard;
