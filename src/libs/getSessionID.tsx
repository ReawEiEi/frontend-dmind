export default async function getSessionID() {
  const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const response = await fetch(`${BackendURL}/api/start`, {});

  if (!response.ok) {
    console.log(response.status);
    throw new Error("Fail to fetch session_id!");
  }

  return response.json();
}
