"use client";
import { Feedback } from "@/interface";
import createFeedback from "@/libs/createFeedback";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function FeedbackModal({
  sessionID,
  showFeedback,
  setShowFeedback,
}: {
  sessionID: string;
  showFeedback: boolean;
  setShowFeedback: () => void;
}) {
  const [reviewText, setReviewText] = useState<string>("");

  const createFeedbackHandler = async () => {
    if (reviewText === "") {
      alert("Feedback is require!");
    } else {
      const feedback: Feedback = {
        feedback: reviewText,
      };
      try {
        await createFeedback({
          session_id: sessionID,
          feedback: feedback,
        });
        alert("Feedback sent :3");
        setReviewText("");
      } catch {
        console.log("Cannot create!");
      }
    }
  };
  return (
    <div
      className={`${
        showFeedback ? "" : "invisible "
      }absolute h-[50vh] w-[100vw] lg:w-[70vw] bg-white bottom-0 z-20 px-6 py-5 flex flex-col items-center rounded-2xl`}
    >
      <div className="flex flex-row-reverse w-[100%]">
        <div onClick={setShowFeedback}>
          <CloseIcon
            sx={{
              fontSize: "30px",
            }}
          />
        </div>
      </div>
      <div className="text-lg md:text-xl lg:text-2xl text-stone-800 mb-4">
        แสดงความคิดเห็นเพิ่มเติม
      </div>
      <div className="text-2xl w-[100%] h-[50%]">
        <textarea
          className="text-black text-base md:text-lg lg:text-xl border-2 border-gray-300 outline-none rounded-lg w-full placeholder-gray-300 px-3 py-1 h-[100%]"
          style={{ maxHeight: "100%", minHeight: "100%" }}
          rows={4}
          placeholder="ความคิดเห็น..."
          value={reviewText}
          onChange={(e) => {
            setReviewText(e.target.value);
          }}
        />
      </div>
      <button
        className="text-base lg:text-lg font-semibold bg-indigo-300 w-[100%] h-[20%] mt-3 mb-8 text-white py-3 rounded-full drop-shadow-lg"
        onClick={createFeedbackHandler}
      >
        ส่งข้อมูล
      </button>
    </div>
  );
}
