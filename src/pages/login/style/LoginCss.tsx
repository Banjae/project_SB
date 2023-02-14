import styled from "styled-components";

const LoginCss = styled.section`
  .kakao {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 12px;
    background-color: #fddc3f;
    height: 90px;
    width: 40%;
    margin: 10px 0px;
    color: #3a2929;
    font-size: 25px;
    font-weight: 600;
    img {
      height: 80px;
      width: 80px;
      margin-right: 10px;
    }
  }
  .naver {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 12px;
    background-color: #03c75a;
    height: 90px;
    width: 40%;
    margin: 10px 0px;
    color: #ffffff;
    font-size: 25px;
    font-weight: 600;
    img {
      height: 80px;
      width: 80px;
      margin-right: 10px;
    }
  }
`;

export default LoginCss;
