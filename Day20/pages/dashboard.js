import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") signIn();
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;
  if (!session) return null;

  return <div>Welcome, {session.user.email}!</div>;
}