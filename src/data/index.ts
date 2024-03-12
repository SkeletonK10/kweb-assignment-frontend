export const URL = {
  main: '/',
  register: '/register/',
  lobby: '/lobby/',
  lecture: '/lecture/',
  article: '/article/',
  articleWrite: '/articlewrite/',
  lectureOpen: '/lectureopen/',
  lectureList: '/lecturelist',
}

export const text = {
  page: {
    error: '페이지 로딩 중 에러가 발생했습니다. 다시 시도해 주세요.',
  },
  
  main: {
    title: '온라인 교육 플랫폼',
  },
  
  login: {
    success: '로그인 되었습니다!',
    error: '로그인 중 에러가 발생했습니다. 다시 시도해 주세요.',
  },
  
  register: {
    success: '회원가입 되었습니다!',
    error: '회원가입 중 에러가 발생했습니다. 다시 시도해 주세요.',
  },
  
  lobby: {
    userNotFound: '존재하지 않는 유저 정보입니다.',
    error: '로비 페이지 로딩 중 에러가 발생했습니다. 다시 시도해 주세요.',
    listError: '강의 목록 리스트 로딩 중 에러가 발생했습니다. 다시 시도해 주세요.'
  },
  
  lecture: {
    error: '강의 페이지 로딩 중 에러가 발생했습니다. 다시 시도해 주세요.',
    noArticle: '현재 작성된 게시글이 없습니다.',
  },
  
  article: {
    error: '게시글 로딩 중 에러가 발생했습니다. 다시 시도해 주세요.',
  },
  
  articleWrite: {
    success: '게시글이 작성되었습니다!',
    forbidden: '강의 게시글은 담당 교수만 작성할 수 있습니다.',
    error: '게시글 로딩 중 에러가 발생했습니다. 다시 시도해 주세요.',
    lectureNameError: '게시글을 작성할 강의에 문제가 발생했습니다.',
  },
  
  lectureOpen: {
    success: '강의를 성공적으로 개설했습니다!',
    error: '강의 개설 중 에러가 발생했습니다. 다시 시도해 주세요.',
  },
  
  lectureList: {
    listError: '강의 목록 로딩 중 에러가 발생했습니다. 다시 시도해 주세요.',
    registerSuccess: '수강신청 성공!',
    registerError: '수강 신청 중 에러가 발생했습니다. 다시 시도해 주세요.',
  }
}