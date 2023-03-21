import React from "react";

const LoadingScreen = () => {
  return (
    // <div classNameName="flex items-center justify-center">
    //   <p>Generating ...</p>
    //   <div classNameName="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-violet-500"></div>
    // </div>
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-white">
        Please wait while the lesson plan is being generated...
      </p>
    </div>
  );
};

export default LoadingScreen;
