import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const SearchBox = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const FlexGrowContainer = styled.div`
  flex-grow: 1;
`;

const SearchIconContainer = styled.div`
  padding: 4px 16px;
  pointer-events: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center
  height: 100%
  
`;

const SectionDesktop = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SectionMobile = styled.div`
  display: flex;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const classes = useStyles();
  const [popup, setPopup] = useState(null);
  const popupOpen = Boolean(popup);

  const detailMenuClose = () => {
    setPopup(null);
  };

  const detailMenuOpen = (event) => {
    setPopup(event.currentTarget);
  };

  const detailMenu = (
    <Menu
      anchorEl={popup}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={popupOpen}
      onClose={detailMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>채팅</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>마이페이지</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <ExitToAppIcon />
        </IconButton>
        <p>로그아웃</p>
      </MenuItem>
    </Menu>
  );

  return (
    <FlexGrowContainer>
      <AppBar position="static" style={{ background: '#9290dd' }}>
        <Toolbar>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
          <SearchBox>
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
            <InputBase
              placeholder="검색"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchBox>
          <FlexGrowContainer />
          <SectionDesktop>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <IconButton color="inherit">
              <ExitToAppIcon />
            </IconButton>
          </SectionDesktop>
          <SectionMobile>
            <IconButton onClick={detailMenuOpen} color="inherit">
              <p>Zigje9</p>
              <ArrowDropDownCircleIcon />
            </IconButton>
          </SectionMobile>
        </Toolbar>
      </AppBar>
      {detailMenu}
    </FlexGrowContainer>
  );
};

export default Header;
