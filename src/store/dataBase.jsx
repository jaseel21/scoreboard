import React, { createContext, useState } from "react";

// Create context
export const DataOfOne = createContext();

// Provider component
export const DataProvider = ({ children }) => {
  const [faqriyya, setFaqriyya] = useState(160);
  const [nizamiyya, setNizamiyya] = useState(110);
  const [maqbariyya, setMaqbariyya] = useState(39);

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
