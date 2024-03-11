import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ILectureInfo } from '../data/types';

import { text, URL } from '../data';

interface UserProps {
  isstudent: boolean;
}

const TakingList: React.FC<UserProps> = ({ isstudent }) => {
  const navigate = useNavigate();
  const [list, setList] = useState<Array<ILectureInfo>>([]);
  
  const getList = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/lecture/`, { headers: { authorization: localStorage.getItem('accessToken') } });
      if (response.data.code) {
        alert(response.data.msg);
        window.location.reload();
      }
      setList(response.data);
      console.log(response.data);
    } catch (err) {
      alert(text.lobby.listError);
      console.log(err);
      window.location.reload();
    }
  }
  
  const entries = list.map((row: ILectureInfo, index: number) => {
    return (
      <tr key={index} onClick={() => navigate(`${URL.lecture}${row.id}`)}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.professor}</td>
      </tr>
    );
  });
  
  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table>
      <thead>
        <tr><th>{isstudent ? "수강 중인 강의" : "개설한 강의"}</th></tr>
      </thead>
      <tbody>
        {entries}
      </tbody>
    </table>
  );
}

export default TakingList;