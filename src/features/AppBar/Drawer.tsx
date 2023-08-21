import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DrawerMUI from "@mui/material/Drawer";

type DrawerProps = {
  handleToggle: () => void;
  isOpen: boolean;
  navItems: string[];
};

const Drawer = ({ handleToggle, navItems, isOpen }: DrawerProps) => {
  const container =
    window !== undefined ? () => window.document.body : undefined;

  const content = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Pollo Mojo Dojo House
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box>
      <DrawerMUI
        container={container}
        open={isOpen}
        variant="temporary"
        onClose={handleToggle}
      >
        {content}
      </DrawerMUI>
    </Box>
  );
};

export default Drawer;
