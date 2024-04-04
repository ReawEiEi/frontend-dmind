import { Feedback } from "@/interface";

export default async function createFeedback({
  session_id,
  feedback,
}: {
  session_id: string;
  feedback: Feedback;
}) {
  const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const response = await fetch(`${BackendURL}/api/feedback/${session_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedback),
  });
  if (!response.ok) {
    throw new Error("Fail to create feedback");
  }
  return await response.json();
}
