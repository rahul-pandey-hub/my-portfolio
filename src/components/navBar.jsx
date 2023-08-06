
import {Button} from '@mui/material';
import { AppBar, Toolbar, IconButton , Typography ,Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar({ toggleSidebar }) {
  
  return (
  
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleSidebar}
          >
             <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <a href="https://github.com/rahul-pandey-hub/my-portfolio" target='blank'>
          <Button color="inherit" >my portfolio</Button>
          </a>
        </Toolbar>
      </AppBar>
    </Box>

    </>
  );
}

export default Navbar;
