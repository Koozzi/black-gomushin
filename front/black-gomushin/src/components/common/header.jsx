import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
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
import refresh from '../../utils/refresh';
import logout from '../../utils/logout';
import { getAxios } from '../../utils/axios';

const InputBaseBox = styled(InputBase)`
  &.MuiInputBase-root {
    color: inherit;
  }
  & .MuiInputBase-input {
    padding: 8px 8px 8px 4px;
    padding-left: 3em;
  }
`;

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
  position: fixed;
  width: 100%;
`;

const ToolbarBox = styled(Toolbar)`
  align-items: center;
  justify-content: space-between;
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
  const history = useHistory();
  const [popup, setPopup] = useState(null);
  const [userName, setUserName] = useState(null);
  const popupOpen = Boolean(popup);

  const getUserName = async () => {
    try {
      const { data } = await getAxios('/profile');
      setUserName(data.username);
    } catch (error) {
      setUserName('None');
    }
  };

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
      <MenuItem onClick={logout}>
        <IconButton color="inherit">
          <ExitToAppIcon />
        </IconButton>
        <p>로그아웃</p>
      </MenuItem>
    </Menu>
  );

  const [search, setSearch] = useState('');
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      if (history.location.pathname === '/search') {
        window.location.href = '/search';
      }
      history.push('/search', { content: search });
    }
  };

  useEffect(() => {
    getUserName();
  }, [userName]);

  return (
    <FlexGrowContainer>
      <AppBar position="static" style={{ background: '#9290dd' }}>
        <ToolbarBox>
          <IconButton onClick={refresh} color="inherit">
            <HomeIcon />
          </IconButton>
          <SearchBox>
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
            <InputBaseBox
              placeholder="검색"
              inputProps={{ 'aria-label': 'search' }}
              onChange={searchHandler}
              onKeyUp={enterHandler}
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
            <IconButton onClick={logout} color="inherit">
              <ExitToAppIcon />
            </IconButton>
          </SectionDesktop>
          <SectionMobile>
            <IconButton onClick={detailMenuOpen} color="inherit">
              <p>{userName}</p>
              <ArrowDropDownCircleIcon />
            </IconButton>
          </SectionMobile>
        </ToolbarBox>
      </AppBar>
      {detailMenu}
    </FlexGrowContainer>
  );
};

export default Header;
