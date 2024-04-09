import React from 'react';

export default function Caja({ children }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow ml-64 mt-28 p-4 w-3/4 h-3/4">
        {children}
      </div>
    </div>
  );
}