import { Route, Routes } from "react-router-dom";

import Routing from "./routing/Routing";
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Routing />} />
      </Routes>
    </>
  );
}

export default App;
