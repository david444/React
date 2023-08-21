import { Routes, Route } from "react-router-dom";
import Selector from "./pages/Selectors";
import AppBar from "./features/AppBar/AppBar";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      {/* Fix overlapping */}
      <AppBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/selector" element={<Selector />} />
      </Routes>
    </div>
  );
}

export default App;
