import { Route, Routes } from "react-router-dom";

import Routing from "./routing/Routing";
import AdminRouting from "./admin/routing/Routing";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/v1/" element={<AdminRouting />} />
        <Route path="/*" element={<Routing />} />
      </Routes>
    </>
  );
}

export default App;
