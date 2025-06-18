import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import "../styles/dashboard.css";

export default function Dashboard() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") signIn();
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;
  if (!session) return null;

  return (
    <div className="dashboard-container">
      <h1>
        Welcome,<br />
        <span className="user-email">{session.user.email}</span>
      </h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}