import React from 'react';

import Page from '../../components/page';
import { IUserInfo } from '../../data/types';
import FullLectureList from '../../components/fullLectureList';

interface LobbyInfo {
  userInfo?: IUserInfo;
}

const LobbyPage: React.FC<LobbyInfo> = ({ userInfo }) => {
  return (
    userInfo ?
      <Page userInfo={userInfo}>
        <FullLectureList userInfo={userInfo} />
      </Page>
      :
      <></>
  );
}

export default LobbyPage;
