import { Button, Navbar } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type AppNavigationProps = {
  opened: boolean;
};
const AppNavigation = ({ opened }: AppNavigationProps) => {
  const navItems = [
    { label: "Home", link: "" },
    { label: "Selector", link: "selector" },
    { label: "About", link: "about" },
  ];

  const navigate = useNavigate();
  //TODO: When the user click an option and is opened, then close the menu
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 150 }}
      style={{ width: 150 }}
    >
      <Navbar.Section p="lg">
        <div>
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="subtle"
              onClick={() => navigate(`/${item.link}`)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </Navbar.Section>
      <Navbar.Section>Settings</Navbar.Section>
    </Navbar>
  );
};

export default AppNavigation;
