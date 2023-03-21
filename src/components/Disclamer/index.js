import React from "react";

const Disclaimer = () => (
  <div className="grid w-full max-w-3xl place-items-center gap-10">
    <div className="grid max-w-2xl place-items-center gap-5">
      <h1 className="text-center text-3xl font-bold leading-tight text-slate-50 sm:text-5xl sm:leading-tight">
        Generate{" "}
        <span className="underline underline-offset-3 decoration-8 decoration-violet-400 dark:decoration-violet-600">
          Plan
        </span>{" "}
        for your{" "}
        <span className="underline underline-offset-3 decoration-8 decoration-violet-400 dark:decoration-violet-600">
          Lesson
        </span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          with AI
        </span>
      </h1>
      <p className="text-center text-lg text-slate-400 sm:text-xl">
        Simply describe your teaching subject, and get the plan in seconds
      </p>
    </div>
  </div>
);

export default Disclaimer;
