import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const MinimizeContext = createContext(null);

function App() {
  const [minimize, setMinimize] = useState(false);

  return (
    <>
      <MinimizeContext.Provider value={{ minimize, setMinimize }}>
        <Outlet />
      </MinimizeContext.Provider>
    </>
  );
}

export default App;
