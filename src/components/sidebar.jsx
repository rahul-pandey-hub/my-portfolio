import React from 'react';

import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PetsIcon from '@mui/icons-material/Pets';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import TwitterIcon from '@mui/icons-material/Twitter';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Link, Outlet } from 'react-router-dom';
import{
  Home as HomeIcon,
  Whatshot as TrendingIcon,
  Code as SnippetsIcon,
  
  Instagram as InstagramIcon,
  GitHub as GithubIcon,
  
  Layers as StackOverflowIcon,
  LinkedIn as LinkedinIcon,
  
  
} from '@mui/icons-material';

const Sidebar = ({toggleSidebar}) => {
  return (
    <Drawer
      sx={{
        width: '300px',
        flexShrink: 0,
        display: { lg: 'block'},
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <Button sx={{marginLeft:'70%', display:{lg:'none'}}} onClick={toggleSidebar}>X</Button>        <ListItem button  component={Link}  to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/skills">
          <ListItemIcon>
            <TrendingIcon />
          </ListItemIcon>
          <ListItemText primary="skills" />
        </ListItem>
        <ListItem button component={Link}  to="/projects">
          <ListItemIcon>
            <SnippetsIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
       
        <div className="mt-5">Socials</div>
        <ListItem button component="a" href="https://www.instagram.com/rahul.pandey_95/" target="_blank">
          <ListItemIcon>
            <InstagramIcon style={{ color: 'rgb(255 0 218)' }} />
          </ListItemIcon>
          <ListItemText primary="Instagram" />
        </ListItem>
        <ListItem button component="a" href="https://github.com/rahul-pandey-hub" target="_blank">
          <ListItemIcon>
            <GithubIcon style={{ color: 'rgb(0 255 224)' }} />
          </ListItemIcon>
          <ListItemText primary="Github" />
        </ListItem>
        <ListItem button component="a" href="https://twitter.com/RahulPa76721852" target="_blank">
          <ListItemIcon>
            <TwitterIcon style={{ color: 'rgb(3 82 231)' }} />
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </ListItem>
        <ListItem button component="a" href="https://stackoverflow.com/users/15528481/rahul-pandey" target="_blank">
          <ListItemIcon>
            <StackOverflowIcon style={{ color: '#f77f00' }} />
          </ListItemIcon>
          <ListItemText primary="Stack Overflow" />
        </ListItem>
        <ListItem button component="a" href="https://www.linkedin.com/in/rahul-pandey-577a3b248/" target="_blank">
          <ListItemIcon>
            <LinkedinIcon style={{ color: 'rgb(28 106 255)' }} />
          </ListItemIcon>
          <ListItemText primary="Linkedin" />
        </ListItem>
        <div className="mt-5">Projects</div>
        <ListItem button component="a" href="https://github.com/rahul-pandey-hub/Live-Long" target="_blank">
          <ListItemIcon>
            <VaccinesIcon />
          </ListItemIcon>
          <ListItemText primary="Live-Long" />
        </ListItem>
        <ListItem button component="a" href="https://github.com/rahul-pandey-hub/Urban-Paws" target="_blank">
          <ListItemIcon>
            <PetsIcon />
          </ListItemIcon>
          <ListItemText primary="Urban-Paws
" />
        </ListItem>
        <ListItem button component="a" href="https://github.com/rahul-pandey-hub/BrewHub-Cafe-Restro" target="_blank">
        
          <ListItemIcon><CoffeeIcon />
           
          </ListItemIcon>
          <ListItemText primary="BrewHub-Cafe" />
        
        </ListItem>
        <ListItem button component="a" href="https://github.com/rahul-pandey-hub/Variety" target="_blank">
          <ListItemIcon>
          <AutoFixHighIcon />
          </ListItemIcon>
          <ListItemText primary="Variety" />
        </ListItem>
       
      </List>
      <Outlet />
    </Drawer>
  );
};

export default Sidebar;
