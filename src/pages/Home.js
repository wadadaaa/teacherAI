import React, { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const Home = () => {
  const [lessonPlan, setLessonPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Implement the logic to call the OpenAI API and generate the lesson plan
    // Set the response to the lessonPlan state
    setLoading(true);
    const generatedLessonPlan = {}; // Replace this with the actual API call and response
    setLessonPlan(generatedLessonPlan);
    setLoading(false);
  };

  return (
    <main className="container mt-32 mb-16 flex flex-col items-center justify-center gap-14">
      <div className="grid w-full max-w-3xl place-items-center gap-10">
        <div className="grid max-w-2xl place-items-center gap-5">
          <h1 className="text-center text-3xl font-bold leading-tight text-slate-50 sm:text-5xl sm:leading-tight">
            Generate Plan for your lesson with AI
          </h1>
          <p className="text-center text-lg text-slate-400 sm:text-xl">
            Simply describe your teaching subject, and get the plan in seconds
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;
