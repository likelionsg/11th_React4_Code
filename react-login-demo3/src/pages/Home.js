import React, { useState } from "react";
import styled from "styled-components";
import { AfterLogin, BeforeLogin } from "../components/Login";
import { useEffect } from "react";
import { KAKAO_USER_URI } from "../utils/OAuth";
import axios from "axios";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({ nickname: undefined, image: undefined });

  const getUserData = async (token) => {
    const headers = {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(KAKAO_USER_URI, { headers });
    return data;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getUserData(token)
        .then((res) => {
          setUser({
            nickname: res.data.properties.nickname,
            image: res.data.properties.profile_image,
          });
          setIsLogin(true);
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <HomeContainer>
      {isLogin ? <AfterLogin {...user} /> : <BeforeLogin />}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export default Home;
