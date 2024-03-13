import React from 'react';

import Page from '../../components/page';
import Lecture from '../../components/lecture';

import { IUserInfo } from '../../data/types';
import { useParams } from 'react-router-dom';

interface LectureProps {
  userInfo?: IUserInfo;
};

const LecturePage: React.FC<LectureProps> = ({ userInfo }) => {
  const { id } = useParams();
  return (
    userInfo ?
      <Page userInfo={userInfo}>
        <Lecture id={Number(id)} userInfo={userInfo} />
      </Page>
      :
      <></>
  );
}

export default LecturePage;