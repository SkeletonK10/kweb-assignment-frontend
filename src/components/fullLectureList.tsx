import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

import { ISimpleLectureInfo, IUserInfo } from '../data/types';

import { text, URL } from '../data';

interface UserProps {
  userInfo: IUserInfo;
}

const FullLectureList: React.FC<UserProps> = ({ userInfo }) => {
  const navigate = useNavigate();
  const [list, setList] = useState<Array<ISimpleLectureInfo>>([]);
  
  const handleCourseRegister = async (id: number) => {
    try {
      const response = await axios.post(`http://localhost:8000/courseregister/${id}`, {}, { headers: { authorization: localStorage.getItem('accessToken') } });
      if (response.data.code) {
        alert(response.data.msg);
        window.location.reload();
      }
      else {
        alert(text.lectureList.registerSuccess);
        navigate(URL.lobby);
      }
    } catch (err) {
      alert(text.lectureList.listError);
      console.log(err);
    }
  }
  
  const getList = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/lecturelist/`, { headers: { authorization: localStorage.getItem('accessToken') } });
      if (response.data.code) {
        alert(response.data.msg);
        window.location.reload();
      }
      setList(response.data);
      console.log(response.data);
    } catch (err) {
      alert(text.lectureList.registerError);
      console.log(err);
      window.location.reload();
    }
  }
  
  const entries = list.map((row: ISimpleLectureInfo, index: number) => {
    return (
      <tr key={index}>
        <td onClick={() => navigate(`${URL.lecture}${row.id}`)}>{row.name}</td>
        <td onClick={() => navigate(`${URL.lecture}${row.id}`)}>{row.professor}</td>
        {userInfo.isstudent ? <td><Button onClick={() => handleCourseRegister(row.id)}>수강신청</Button></td> : <></>}
      </tr>
    );
  });
  
  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr><th>전체 강의 목록</th></tr>
      </thead>
      <tbody>
        {entries}
      </tbody>
    </Table>
  );
}

export default FullLectureList;
