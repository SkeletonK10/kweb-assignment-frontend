import React from 'react';

import Page from '../../components/page';

const LobbyPage: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.reload();
  }
  return (
    <Page>
      환영합니다, ...님!
      <button onClick={handleLogout}>로그아웃</button>
    </Page>
  );
}

export default LobbyPage;