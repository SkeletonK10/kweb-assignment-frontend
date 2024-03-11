export interface ILoginInfo {
  id: string;
  pw: string;
};

export interface IRegisterInfo {
  id: string;
  pw: string;
  name: string;
  stid: number;
  isstudent: boolean;
};

export interface IUserInfo {
  id: string;
  name: string;
  stid: number;
  isstudent: boolean;
};

export interface IArticleWriteInfo {
  title: string;
  content: string;
}

export interface ISimpleArticleInfo {
  id: number;
  title: string;
  createdat: string;
};

export interface IArticleInfo {
  id: number;
  title: string;
  createdat: string;
  lecture: string;
  professor: number;
  content: string;
};

export interface ISimpleLectureInfo {
  id: number;
  name: string;
  professor: string;
};

export interface ILectureInfo {
  id: number;
  name: string;
  professor: string;
  professorid: string;
  articles: Array<ISimpleArticleInfo>;
};
