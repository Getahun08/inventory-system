import React, { createContext, useState, useEffect } from "react";
import { fetchCategories } from "../Service/ServiceCategory";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }

    loadData();
  }, []);

  const contextValue = {
    categories,
    setCategories,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
