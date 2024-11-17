import React, { createContext, useState } from "react";

// Create context
export const DataOfOne = createContext();

// Provider component
export const DataProvider = ({ children }) => {
  const [nizamiyya, setNizamiyya] = useState(0);
  const [faqriyya, setFaqriyya] = useState(0);
  const [maqbariyya, setMaqbariyya] = useState(0);

  // Function to update scores dynamically
  const updateScores = (n, f, m) => {
    setNizamiyya(n);
    setFaqriyya(f);
    setMaqbariyya(m);
  };

  return (
    <DataOfOne.Provider
      value={{
        nizamiyya,
        faqriyya,
        maqbariyya,
        updateScores, // Pass the updateScores function through context
      }}
    >
      {children}
    </DataOfOne.Provider>
  );
};
