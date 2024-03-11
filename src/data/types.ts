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

export interface ILectureInfo {
  id: number;
  name: string;
  professor: string;
}
