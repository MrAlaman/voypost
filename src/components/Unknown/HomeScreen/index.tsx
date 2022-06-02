import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import { useUser } from 'reactfire';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Typography, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import { UIContext } from '../UIContext';

import clearFirestoreCache from '../../../common/clearFirestoreCache';
import getAvatarFirstLetters from '../../../common/secondaryFunctions';
import useStyles from './style';

const HomeScreen: React.FC = ({ children }) => {
  const classes = useStyles();
  const { data: user } = useUser();
  const [open, setOpen] = useState(false);
  const { setAlert } = useContext(UIContext);

  const logout = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        clearFirestoreCache();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAlert({
          show: true,
          severity: 'error',
          message: errorMessage,
        });
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.home}>
        <Toolbar className={classes.home__wrapper}>
          <Box className={classes.home__item}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.home__logo}
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Voypost
            </Typography>
          </Box>
          <Avatar
            className={classes.home__avatar}
            onClick={() => setOpen((prev) => !prev)}
          >
            {getAvatarFirstLetters(user?.displayName)}
          </Avatar>

          {open && (
            <Button className={classes.home__logout} onClick={logout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default HomeScreen;
