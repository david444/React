import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppBar from "./features/AppBar/AppBar";
import Selector from "./pages/Selectors";
import MainPage from "./pages/MainPage";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppBar />,
      children: [
        {
          element: <MainPage />,
          path: "/",
        },
        {
          element: <Selector />,
          path: "/selector",
        },
        {
          element: <About />,
          path: "/about",
        },
      ],
      errorElement: <MainPage />,
    },
  ]);
  return (
    <div>
      {/* Fix overlapping */}
      <RouterProvider router={router} />
      {/* <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/selector" element={<Selector />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
