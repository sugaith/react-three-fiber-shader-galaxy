/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import styled from "styled-components";
import { animated } from "@react-spring/web";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const CloseIcon = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  font-size: 2.4rem;
  top: 3%;
  right: 3%;
  position: absolute;
`;

export const ContainerTop = styled(animated.nav)`
  //background-color: blue;
  position: absolute;
  top: 0;
  padding-top: 9px;
  display: flex;
  width: 100%;
  height: clamp(36px, 9vh, 150px);
  flex-direction: row;
  li,
  ul,
  menuitem {
    letter-spacing: 3.08px;
  }
  @media (min-height: 510px) {
    padding: 0;
  }
  @media (max-width: 792px) {
    justify-content: flex-end;
  }
  z-index: 9;
`;
export const Logo = styled(animated.div)`
  //background-color: aquamarine;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 9px;
  padding: 35px 0 0 111px;
  img:nth-child(1) {
    height: clamp(41px, 9vw, 60px);
  }
  img:nth-child(2) {
    height: clamp(36px, 6vw, 51px);
  }
  @media (max-width: 792px) {
    padding: 35px 0 0 111px;
  }
`;
export const MenuContainer = styled(animated.ul)`
  //background-color: #0060ab;
  list-style: none;
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  text-align: start;
  margin-top: 20px;
  @media (max-width: 792px), (max-height: 510px) {
    justify-content: flex-end;
    svg {
      cursor: pointer;
      font-size: 2.2rem;
      margin-right: 6%;
    }
  }
  a{
  padding: 0.4rem;
  }
`;
export const MenuItem = styled(animated.li)`
  font-family: "BlissProMedium", sans-serif;
  letter-spacing: 3.08px;
  padding: 0.5rem 0.4rem;
  cursor: pointer;
  font-size: 12px;
  :hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.5;
  }
  display: flex;
  align-items: center;
  width: max-content;
`;

export const MenuItemDropDown = styled(animated.ul)`
  display: inline-block;
  font-family: "BlissProMedium", sans-serif;
  letter-spacing: 3.08px;
  padding: 0.4rem;
  font-size: 12px;
  cursor: pointer;
  :hover {
    display: block;
    ul {
      display: block;
    }
  }
  p {
    font-family: "BlissProMedium", sans-serif;
    color: #008eff;
    width: 1rem;
    height: 1rem;
    float: right;
    margin-left: 5px;
  }
  ul,
  li {
    animation: growDown 800ms ease-in-out forwards;
    transform-origin: top center;
    @keyframes growDown {
      0% {
        transform: scaleY(0);
      }
      80% {
        transform: scaleY(1.1);
      }
      100% {
        transform: scaleY(1);
      }
    }
  }
`;

export const MenuDropDownContent = styled(animated.ul)`
  background-color: black;
  opacity: 0.9;
  display: none;
  position: fixed;
  list-style: none;
  padding-top: 1rem;
  z-index: 3;
`;

export const Modal = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobMenuContainer = styled(animated.div)`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const MobMenuContent = styled(animated.nav)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  margin-left: 1%;
`;

export const MenuItemDropDown2 = styled(animated.li)`
  letter-spacing: 4px;
  font-size: 1.2rem;
  padding: 1rem;
  cursor: pointer;
  color: #008eff;

  :hover {
    display: block;

    ul {
      display: block;
    }
  }

  p {
    color: #ffffff;
    width: 1rem;
    height: 1rem;
    float: right;
    transform: rotateZ(90deg);
    translate: 0 0.3rem;
  }

  li {
    margin-top: 3px;
    list-style: none;
  }
`;

export const MenuItemMob = styled(MenuItem)`
  font-size: 1rem;
  :hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.5;
  }
`;
