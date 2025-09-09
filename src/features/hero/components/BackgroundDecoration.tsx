import React from 'react';

export const BackgroundDecoration: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Purple circles */}
      <div className="absolute -left-80 top-48 w-152 h-152 bg-purple-300 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -left-49 bottom-0 w-85 h-85 bg-purple-300 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute right-0 top-1/2 w-138 h-138 bg-purple-300 rounded-full blur-3xl opacity-60"></div>
      
      {/* Green circles */}
      <div className="absolute right-0 -top-12 w-118 h-118 bg-green-300 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute right-0 bottom-0 w-167 h-167 bg-green-300 rounded-full blur-3xl opacity-60"></div>
    </div>
  );
};
