"use client";
import Result from "./Result";
import FeedbackModal from "./FeedbackModal";
import { useState } from "react";

export default function ResultPanel({
  level,
  session_id,
}: {
  level: string;
  session_id: string;
}) {
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const ShowFeedbackHandler = () => {
    setShowFeedback(!showFeedback);
  };
  return (
    <div className="flex flex-col text-black items-center w-[90%] md:w-[75%] lg:w-[65%] mt-10">
      <div className="text-xl md:text-2xl lg:text-3xl mb-8 text-stone-700">
        ผลการประเมินของคุณ
      </div>
      <Result level={level}></Result>
      <button
        className="bg-white w-[100%] text-violet-500 py-3 rounded-full drop-shadow-lg"
        onClick={ShowFeedbackHandler}
      >
        ให้คะแนนความพึงพอใจ
      </button>
      <FeedbackModal
        sessionID={session_id}
        showFeedback={showFeedback}
        setShowFeedback={ShowFeedbackHandler}
      />
    </div>
  );
}
