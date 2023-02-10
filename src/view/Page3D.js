import React, { useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Html, Text, Image, Sphere, Plane, useAspect } from '@react-three/drei'
import { Flex, Box } from '@react-three/flex'
import styled from 'styled-components'
import { BsArrowLeftCircle } from 'react-icons/bs'

const Container = styled.div`
  //background-color: cadetblue;
  //display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
`

export default function Page3D({ onBackPressed }) {
  const { size } = useThree()
  const [vpWidth] = useAspect('cover', size.width, size.height)
  // const flexContainer = useRef()
  // useFrame((state) => {
  //   flexContainer.current.rotation.y -= 0.0005
  // })

  return (
    <Flex
      // mainAxis="x"
      // crossAxis="y"
      // flexDirection="row"
      // flexWrap="wrap"
      // justify="center"
      //justify="space-be/tween"
      // alignItems="center"
      // size={[vpWidth, 0, 0]}
      position={[0, 0, -10]}
      justifyContent={'stretch'}
      alignItems={'center'}
    >
      <Box>
        <Plane args={[1.5, 1.5]}>
          <meshPhongMaterial
            attach="material"
            roughness={0.5}
            alphaTest={0.19}
            opacity={0.5}
          />
          <Html transform>
            <Container onClick={onBackPressed}>
              <BsArrowLeftCircle />
              <h1>voltar</h1> <br />
              <h1>?????????????????</h1>
            </Container>
          </Html>
        </Plane>
      </Box>
      {/*<Box>*/}
      {/*  <Plane args={[9, 1.5]}>*/}
      {/*    <meshPhongMaterial*/}
      {/*      attach="material"*/}
      {/*      roughness={0.5}*/}
      {/*      alphaTest={0.19}*/}
      {/*      opacity={0.5}*/}
      {/*      transparent*/}
      {/*    />*/}
      {/*    <Text fontSize={0.5} color="white" anchorX="center" anchorY="middle">*/}
      {/*      ??????????????????????*/}
      {/*    </Text>*/}
      {/*  </Plane>*/}
      {/*</Box>*/}
    </Flex>
  )
}
