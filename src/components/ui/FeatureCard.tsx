import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 max-w-2xl ${className}`}
      style={{ boxShadow: "0 4px 24px 0 rgba(44, 62, 80, 0.05)" }}
    >
      <h2 className="text-3xl font-bold mb-4 text-cyan-300">
        {title}
      </h2>
      <p className="text-xl text-gray-600">
        {description}
      </p>
    </div>
  );
};
