import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import { NavLink } from "react-router-dom";
interface Props {
  checked: boolean;
  handleDarkMode: () => void;
}

export default function Header({ checked, handleDarkMode }: Props) {
  const midLinks = [
    { title: "contact", path: "/contact" },
    { title: "about", path: "/about" },
    { title: "catalog", path: "/catalog" },
  ];

  const rightLinks = [
    { title: "login", path: "/login" },
    { title: "register", path: "/register" },
  ];
  const navStyles = {
    color: "inherit",
    textDecoration: "none",
    "&.active": { color: "secondary.main" },
    "&:hover": { color: "grey.300" },
  };
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography component={NavLink} to={"/"} sx={navStyles}>
            RE-STORE
          </Typography>
          <Switch checked={checked} onChange={handleDarkMode} />
        </Box>
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ path, title }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ path, title }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
