import {
  Header,
  Container,
  MediaQuery,
  Burger,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";
import { BrandVite } from "tabler-icons-react";

type AppHeader = {
  isOpen: boolean;
  changeOpen: () => void;
};
const AppHeader = ({ isOpen, changeOpen }: AppHeader) => {
  const theme = useMantineTheme();
  return (
    <Header height={50} p="xs">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={isOpen}
            onClick={changeOpen}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <ActionIcon size="sm">
          <BrandVite color="Red" />
        </ActionIcon>
        <Container>Pollo Dojo Mojo House</Container>
      </div>
    </Header>
  );
};

export default AppHeader;
