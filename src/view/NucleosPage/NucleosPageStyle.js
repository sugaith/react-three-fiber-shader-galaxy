/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { animated } from "@react-spring/web";
import styled from "styled-components";

export const Container = styled(animated.div)`
  position: relative;
  //background-color: #4f1572;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const MainView = styled(animated.div)``;
export const SubPageBody = styled.div`
  //background-color: #8171be;
  width: clamp(360px, 90vw, 720px);
  display: flex;
  flex-direction: column;
  grid-template-rows: auto;
  gap: 0.5rem;
  justify-items: center;
  font-family: "BlissProHeavy", sans-serif;
  p {
    text-align: center;
    font-size: clamp(0.4rem, 1.52vh + 1.6vw, 1rem);
    white-space: pre-line;
    font-family: "BlissProHeavy", sans-serif;

    span {
      font-family: "BlissProMedium", sans-serif;
      font-size: 20px;
    }
  }
  @media (max-height: 576px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: "
      logo text 
      logo slides
    ";
  }
  .row {
    display: flex;
    margin-left: 150px;
    align-content: center;
    height: 100vh;
    justify-content: center;
    display: flex;
    flex-flow: column;
    margin-top: 20px;
  }
  .right {
    margin-top: -210px;
    position: fixed;
    right: 45%;
  }
  .left {
    align-items: center;
    width: 370px;
    text-align: left;
    left: 200px;
    position: fixed;
    h1 {
      font-size: 44px;
    }
    p {
      font-size: 18px;
      text-align: left;
      font-family: "BlissProMedium", sans-serif;
      letter-spacing: -0.4px;
    }
    img {
      width: 250px;
      height: auto;
    }
    button {
      top: 20px !important;
      border-radius: 50px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0057d4;
      color: #ffffff;
      width: 170px;
      height: 40px;
      cursor: pointer;
      margin-top: 30px;
      border: none;
      transition: 0.5s all ease-in-out;
      &:hover {
        transform: scale(1.1);
        -webkit-filter: drop-shadow(0 0 0.5rem #ffffff);
        transition: transform 0.5s ease;
      }
    }
  }
`;
export const LogoSubPage = styled.div`
  display: grid;
  align-items: center;
  grid-row: 1/3;
  img {
  }
`;
export const LogosContainer = styled.div`
  //background-color: aqua;
  margin: 0 auto;
  width: clamp(360px, 90vw, 720px);
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-height: 576px) {
    width: auto;
  }
  .npct {
    img {
      max-height: 85px !important;
      margin-top: 40px;
      margin-right: -160px;
    }
  }
  .niac {
    margin: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Logo = styled(animated.div)`
  //background-color: green;
  display: flex;
  flex: 1;
  height: 100px;
  width: 150px;
  margin: 5px;
  justify-content: center;
  margin-right: 50px;

  img {
    margin: 21px 21px auto;
    max-height: 130px;
    //position: absolute;
  }
  img:hover {
    cursor: pointer;
  }
`;
export const SubPagesSlidesContainer = styled(animated.div)`
  //background-color: #01a56d;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: ${({ plural }) => (!plural ? "center" : "space-between")};
  align-items: center;
  width: 100%;
  padding-top: 0.5rem;
`;

export const SlidesContainer = styled.div`
  //background-color: aquamarine;
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  height: clamp(150px, 45vh, 360px);
`;
export const SlideView = styled(animated.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: clamp(0.4rem, 1vh + 1.6vw, 1rem);
  }
  p:nth-child(1) {
    font-family: BlissProHeavy, sans-serif;
  }
  img {
    height: clamp(150px, 36vh, 360px);
  }
`;

export const BackButtonDivLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 10px;
  color: white;
  cursor: pointer;
  position: absolute;
  width: 100px;
  span {
    font-size: 18px;
    margin-left: 9px;
  }
  svg:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgb(61, 135, 222);
  }
  span:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgb(61, 135, 222);
  }
`;
export const BackButtonDivRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 10px;
  color: white;
  cursor: pointer;
  position: absolute;
  width: 100px;
  transform: rotateX(180deg);
  span {
    font-size: 18px;
    margin-left: 9px;
  }
  svg:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgb(61, 135, 222);
  }
  span:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgb(61, 135, 222);
  }
`;

export const RightDiv = styled.div`
  display: flex;
`;
