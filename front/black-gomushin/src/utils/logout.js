const logout = () => {
  if (window.confirm('로그아웃 하시겠습니까?')) {
    localStorage.removeItem('token');
  }
  window.location.href = '/';
};

export default logout;
