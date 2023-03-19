import React, { useState } from "react";

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
    <div>
      <h2>Welcome to TeacherAI Lesson Plan Assistant</h2>
      <p>
        Please select the topic, subtopic, grade, and language you want to
        generate a lesson plan for, and click "Submit" to generate your lesson
        plan.
      </p>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded mt-4"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Home;
