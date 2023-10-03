import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Shell from "./features/Shell/Shell";
import MainPage from "./pages/MainPage";
import Selector from "./pages/Selectors";
import About from "./pages/About";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Shell />}>
        <Route index element={<MainPage />} />
        <Route path="selector" element={<Selector />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
