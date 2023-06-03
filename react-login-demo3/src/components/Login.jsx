import React from "react";
import styled from "styled-components";
import KakaoLogin from "../assets/kakao_login.png";
import Text from "./Text";
import { KAKAO_AUTH_URL } from "../utils/OAuth";

const AfterLogin = ({ nickname, image }) => {
  return (
    <LoginContainer>
      <Text>이름 : {nickname}</Text>
      <ProfileImage src={image} alt="profile" />
    </LoginContainer>
  );
};

const BeforeLogin = () => {
  return (
    <LoginContainer>
      <LoginContainer>
        <Text>로그인 해주세요</Text>
        <a href={KAKAO_AUTH_URL}>
          <img src={KakaoLogin} alt="loginBanner" />
        </a>
      </LoginContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;

export { AfterLogin, BeforeLogin };
