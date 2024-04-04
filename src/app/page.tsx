"use client";
import getSessionID from "@/libs/getSessionID";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [sessionID, setSessionID] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await getSessionID();
        setSessionID(res.data.session_id);
      } catch {
        console.log("Cannot fetch!");
      }
    };
    fetchSession();
  }, []);

  useEffect(() => {
    if (sessionID !== "") {
      router.push(`/result/${sessionID}`);
    }
  }, [sessionID]);

  return <div></div>;
}
