import { useLocation } from "react-router-dom";
import MainPage from "../../../pages/MainPage";
import Selector from "../../../pages/Selectors";
import About from "../../../pages/About";

const AppContent = () => {
  const Pages = (path: string) => {
    switch (path) {
      case "":
        return <MainPage />;
      case "selector":
        return <Selector />;
      case "about":
        return <About />;
      default:
        return null;
    }
  };
  const projectPath = useLocation();
  return <div>{Pages(projectPath.pathname.split("/")[1])}</div>;
};

export default AppContent;
