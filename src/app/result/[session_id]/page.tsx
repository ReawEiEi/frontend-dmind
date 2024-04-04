"use client";
import ResultPanel from "@/components/ResultPanel";
import { Suspense, useEffect, useState } from "react";
import getDMINDResult from "@/libs/getDMINDResult";
import Loading from "@/components/Loading";

export default function ResultPage({
  params,
}: {
  params: { session_id: string };
}) {
  const [status, setStatus] = useState<string>("");
  const [level, setLevel] = useState<string | null>(null);

  const isFinished = status === "FINISHED";

  useEffect(() => {
    const fetchLevel = async () => {
      try {
        const res = await getDMINDResult(params.session_id);
        setStatus(res.data.result_ai_status);
        console.log(status);
        if (res.data.result_ai_status === "FINISHED") {
          setLevel(res.data.result_ai_severity_level);
        } else {
          console.log("AI is still processing...");
        }
      } catch (error) {
        console.error("Error fetching DMIND:", error);
      }
    };
    fetchLevel();
  }, [params.session_id]);

  return (
    <main
      className="flex flex-col items-center"
      style={{
        backgroundImage: `url(${level === "LOW" ? "/GREEN.png" : "/RED.png"})`,
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      {level && isFinished ? (
        <ResultPanel level={level} session_id={params.session_id} />
      ) : (
        <Loading />
      )}
    </main>
  );
}
