import React, { useContext, useState } from "react";

const LogContext = React.createContext();

export function useLog() {
  return useContext(LogContext);
}

export function LogProvider({ children }) {
  const [logMessages, setLogMessages] = useState([]);

  function log(text, error) {
    console.log(text);
    setLogMessages((prev) => [
      ...prev,
      error ? <span style={{ color: "red" }}>{text}</span> : text,
    ]);
    setTimeout(() => setLogMessages((prev) => prev.slice(1)), 5000);
  }

  return (
    <LogContext.Provider value={{ log, logMessages }}>
      {children}
    </LogContext.Provider>
  );
}
