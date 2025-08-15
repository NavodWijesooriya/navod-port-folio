import React from "react";

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-12 w-12 bg-blue-500 rounded-full mb-4 animate-bounce"></div>
      <div className="text-gray-600 dark:text-gray-300">Loading ...</div>
    </div>
  </div>
);

export default Loading;