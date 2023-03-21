import React, { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import LoadingScreen from "../../layouts/Loading";

const Generate = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      subject: "",
    },
  });

  const [plan, setPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "/ask",
        { subject: data.subject },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const planResponse = response.data.message.content;
      setPlan(planResponse);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching subtopics:", error);
      setIsLoading(false);
    }
  };

  const renderForm = () => (
    <>
      <form
        className="grid w-full max-w-xl gap-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="description"
          className="flex gap-2.5 text-sm font-medium text-slate-50 sm:text-base"
        >
          <span className="grid h-6 w-6  place-items-center rounded-full bg-violet-500 text-xs text-white sm:text-sm">
            1
          </span>
          <span className="flex-1">
            Describe your subject for teach{" "}
            <span className="text-slate-400">
              (inclue title and description for best results)
            </span>
          </span>
        </label>
        <Controller
          name="subject"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea
              {...field}
              className="w-full rounded-md border-2 border-slate-400 bg-transparent px-4 pt-2.5 pb-10 text-base text-slate-50 transition-colors placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 sm:pb-6"
              rows="4"
              placeholder="Enter subject description..."
            />
          )}
        />
        <button
          type="submit"
          className="mt-4 bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded focus:ring-1 focus:ring-violet-500 focus:outline-none"
        >
          Generate
        </button>
      </form>
    </>
  );

  const renderPlan = () => (
    <article className="mt-8 mx-auto prose prose-invert ">
      <ReactMarkdown>{plan}</ReactMarkdown>
    </article>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        {isLoading ? <LoadingScreen /> : plan ? renderPlan() : renderForm()}
      </div>
    </div>
  );
};

export default Generate;
