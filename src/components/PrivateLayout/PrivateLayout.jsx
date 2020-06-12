import React from 'react';
import { useHistory } from 'react-router-dom';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListSubheader from '@material-ui/core/ListSubheader';
import useAuthentication from '../../hooks/useAuthentication';
import { PageWrapper, PageContent, AppBar, Toolbar, Avatar } from './styles';

const PrivateLayout = ({ admin, children }) => {
  const avatarRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const history = useHistory();
  const { user, onLogout } = useAuthentication();

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleNavigation = (route) => {
    handleMenuClose();
    history.push(route);
  };

  const handleLogout = () => {
    handleMenuClose();
    onLogout();
  };

  const handleToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  return (
    <PageWrapper>
      <AppBar color="inherit">
        <Toolbar>
          <IconButton color="inherit" onClick={() => handleNavigation('/quotes')}>
            <FormatQuoteRoundedIcon />
          </IconButton>
          <Typography variant="h5">Fantastic Quotes</Typography>
          <IconButton ref={avatarRef} onClick={handleToggle}>
            <Avatar alt={user.displayName} src={user.photoURL} />
          </IconButton>
          <Popper
            open={menuOpen}
            anchorEl={avatarRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: 'center top',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleMenuClose}>
                    <MenuList
                      autoFocusItem={menuOpen}
                      subheader={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <ListSubheader component="div">
                          Signed in as
                          <strong>{` ${user.email}`}</strong>
                        </ListSubheader>
                      }
                    >
                      {admin && (
                        <MenuItem onClick={() => handleNavigation('/dashboard')}>
                          Dashboard
                        </MenuItem>
                      )}
                      <MenuItem onClick={() => handleNavigation('/my-quotes')}>My quotes</MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
      <PageContent>{children}</PageContent>
    </PageWrapper>
  );
};

export default PrivateLayout;
