
import React, { useState } from 'react';
import { AppBar, IconButton, createTheme, MuiThemeProvider, useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavCarousel from './NavCarousel';

const ToolbarN = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobileOrTablet = useMediaQuery('(max-width:750px)');

  const theme = createTheme({
    palette: {
      primary: {
        main: '#d0e4eb',
      },
    },
  });

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <MuiThemeProvider theme={theme}>
        <AppBar position="sticky" className='nav-style' style={{padding:'1rem'}}>
            {isMobileOrTablet && (
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
          {!isMobileOrTablet && <NavCarousel/>}
        </AppBar>
    </MuiThemeProvider>
  );
};

export default ToolbarN;
