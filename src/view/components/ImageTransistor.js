/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { useEffect, useRef, useState } from "react";
import { animated, useTransition } from "@react-spring/web";
import styled from "styled-components";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export default function ImageTransistor({
  disabled,
  imageSources,
  width,
  toggle,
  transitionTime,
}) {
  const [items, setItems] = useState(
    imageSources?.[0] ? [imageSources?.[0]] : []
  );

  const toggleRef = useRef(true);

  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 0.9 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    if (disabled) return;
    toggleRef.current = toggle;
    if (toggle) {
      transIn();
    } else {
      transOut();
    }
  }, [toggle]);

  async function transIn() {
    const newItems = [...items];
    for (const i in imageSources) {
      if (i < newItems.length) continue;
      if (i < 1) await sleep(transitionTime);

      const item = imageSources[i];
      newItems.push(item);

      setItems([...newItems]);
    }
    setTimeout(() => {
      if (!toggleRef.current) transOut();
    }, transitionTime);
  }

  async function transOut() {
    while (items.length > 1) {
      items.pop();
      await sleep(transitionTime);
      setItems([...items]);
    }
  }

  function render() {
    return (
      <Container>
        {transitions((style, item, t, i) => {
          return (
            <ImgContainer
              key={"img" + i + t}
              src={item}
              width={width}
              style={{
                opacity: style.opacity,
              }}
            />
          );
        })}
      </Container>
    );
  }

  return render();
}

const Container = styled(animated.div)`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`;
const ImgContainer = styled(animated.img)`
  position: absolute;
  -webkit-filter: drop-shadow(0px 0px 4px rgb(10, 78, 255, 0.8));
  -webkit-transition: all 0.42s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  :hover {
    -webkit-filter: drop-shadow(0 0 1rem #fff);
  }
`;
