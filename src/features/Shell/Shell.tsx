import { AppShell, Container } from "@mantine/core";
import AppNavigation from "./AppNavigation/AppNavigation";
import { useState } from "react";
import AppHeader from "./AppHeader/AppHeader";
import AppContent from "./AppContent/AppContent";

const Shell = () => {
  const [opened, setOpened] = useState(false);
  const handleOpenMenu = () => {
    setOpened(!opened);
  };

  return (
    <AppShell padding="none">
      <AppShell
        padding="xs"
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
          body: {
            padding: 0,
            margin: 0,
          },
        })}
        navbar={<AppNavigation opened={opened} />}
        header={<AppHeader isOpen={opened} changeOpen={handleOpenMenu} />}
      >
        <AppContent />
      </AppShell>
    </AppShell>
  );
};

export default Shell;
