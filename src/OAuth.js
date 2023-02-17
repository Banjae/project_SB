// 카카오 로그인

export const REST_API_KEY = process.env.REACT_APP_KAKAO;
export const REDIRECT_URI = "http://localhost:3000/wait";
export const LOGOUT_REDIRECT_URI = "http://localhost:3000/login";
export const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const KAKAO_LOGOUT = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;

// 네이버 로그인

export const CLIENT_ID = process.env.REACT_APP_NAVER;
export const CLIENT_SECRET = process.env.REACT_APP_NAVER_SECRET;
export const NAVER_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=NaverLogin&redirect_uri=${REDIRECT_URI}`;