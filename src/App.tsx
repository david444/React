import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shell from "./features/Shell/Shell";

function App() {
  const router = createBrowserRouter([
    {
      element: <Shell />,
      errorElement: <Shell />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
