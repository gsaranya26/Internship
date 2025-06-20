import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const addToCart = (item) => setCart([...cart, item]);
  const clearCart = () => setCart([]);

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        theme,
        toggleTheme,
        cart,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);