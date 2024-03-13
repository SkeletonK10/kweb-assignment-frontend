import React from 'react';

import Page from '../../components/page';
import LectureOpenForm from '../../components/lectureOpenForm';

import { IUserInfo } from '../../data/types';

interface LectureOpenProps {
  userInfo?: IUserInfo;
};

const LectureOpenPage: React.FC<LectureOpenProps> = ({ userInfo }) => {
  return (
    userInfo ?
      <Page userInfo={userInfo}>
        <h1>강의 개설</h1>
        <LectureOpenForm />
      </Page>
      :
      <></>
  );
}

export default LectureOpenPage;