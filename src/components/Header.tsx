
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EventBus from "./EventBus";

export default function Header() {
  const handleClick = (text: any) => (event: any) => {
    EventBus.dispatch("AppBarSelectEvent", text);
  };
  return (
      <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar >
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleClick("menuToggle")}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Mail
          </Typography>
        </Toolbar>
      </AppBar>
  );
}