import { useAppContext } from "../context/AppContext";

export default function Header() {
  const { user, login, logout, theme, toggleTheme } = useAppContext();

  return (
    <header>
      <div>User: {user ? user.email : "Guest"}</div>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      {!user ? (
        <button onClick={() => login({ email: "test@example.com" })}>
          Login
        </button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </header>
  );
}