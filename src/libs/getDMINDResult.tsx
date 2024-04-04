export default async function getDMINDResult(session_id: string) {
  await new Promise((resolve) => setTimeout(resolve, 13000));

  const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const response = await fetch(`${BackendURL}/api/result/${session_id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch DMIND_Result!");
  }

  const data = await response.json();

  if (data.data.result_ai_status === "PROCESSING") {
    return {
      message: "success",
      data: {
        result_ai_status: "PROCESSING",
        result_ai_severity_level: null,
      },
    };
  }

  return data;
}
