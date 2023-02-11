import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from '@react-spring/web'
import { useMediaQuery } from '@react-hook/media-query'
import { TiThMenu } from 'react-icons/ti'
import logoPng from '../../assets/images/logo.png'
import logoNamePng from '../../assets/images/escrita.png'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function MenuTop({ toggleMenu }) {
  const toggleMenuSpring = useSpring({
    to: {
      bottom: toggleMenu ? 0 : -100,
      opacity: toggleMenu ? 1 : 0,
    },
    config: { duration: 900 },
  })
  const vwMatches = useMediaQuery('(min-width: 792px)')
  const vhMatches = useMediaQuery('(min-height: 510px)')
  const [mobMenuVisible, setMobMenuVisible] = useState(false)
  const [mobCruzeiroDoSulSubMenu, setMobCruzeiroDoSulSubMenu] = useState(true)

  const aTagProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }

  return (
    <>
      {mobMenuVisible && (
        <MobMenuContainer>
          <CloseIcon onClick={() => setMobMenuVisible(false)} />
          <MobMenuContent>
            <MenuItemDropDown2>
              <div
                onClick={() =>
                  setMobCruzeiroDoSulSubMenu(!mobCruzeiroDoSulSubMenu)
                }
              >
                {'Cruzeiro Do Sul'.toUpperCase()} <p>{'>'}</p>
              </div>
              {mobCruzeiroDoSulSubMenu && (
                <>
                  <a
                    {...aTagProps}
                    href={'https://www.cruzeirodosuleducacional.com.br/'}
                  >
                    <MenuItem>{'Educacional'.toUpperCase()}</MenuItem>
                  </a>
                  <a
                    {...aTagProps}
                    href={'https://nossojeitodeensinar.com.br//'}
                  >
                    <MenuItem>{'Nosso Jeito'.toUpperCase()}</MenuItem>
                  </a>
                  <a
                    {...aTagProps}
                    href={
                      'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1657904527&entry_id=1_iluqjb58'
                    }
                  >
                    <MenuItem>{'Institucional'.toUpperCase()}</MenuItem>
                  </a>
                </>
              )}
            </MenuItemDropDown2>
            <a {...aTagProps} href={'https://www.unifran.edu.br/'}>
              <MenuItemMob>{'Unifran'.toUpperCase()}</MenuItemMob>
            </a>
            <a {...aTagProps} href={'https://www.unipe.edu.br/'}>
              <MenuItemMob>{'Unipê'.toUpperCase()}</MenuItemMob>
            </a>
            <a {...aTagProps} href={'https://www.brazcubas.edu.br/'}>
              <MenuItemMob>{'Braz Cubas'.toUpperCase()}</MenuItemMob>
            </a>
            <a {...aTagProps} href={'https://www.fsg.edu.br/'}>
              <MenuItemMob>{'FSG'.toUpperCase()}</MenuItemMob>
            </a>
            <a {...aTagProps} href={'https://www.up.edu.br/'}>
              <MenuItemMob>{'Positivo'.toUpperCase()}</MenuItemMob>
            </a>
            <a {...aTagProps} href={'https://www.unicid.edu.br/'}>
              <MenuItemMob>{'Unicid'.toUpperCase()}</MenuItemMob>
            </a>
          </MobMenuContent>
        </MobMenuContainer>
      )}
      <ContainerTop style={toggleMenuSpring}>
        <Logo>
          {vhMatches && (
            <a {...aTagProps} href={'https://www.cruzeirodosulvirtual.com.br/'}>
              <img src={logoPng} alt={'Logo da Cruzeiro do Sul'} />
              <img src={logoNamePng} alt={'Slogan - Educação a distância'} />
            </a>
          )}
        </Logo>

        <MenuContainer>
          {vwMatches && vhMatches ? (
            <>
              <MenuItemDropDown>
                {'Cruzeiro Do Sul'.toUpperCase()} <p>{'>'}</p>
                <MenuDropDownContent>
                  <a
                    {...aTagProps}
                    href={'https://www.cruzeirodosuleducacional.com.br/'}
                  >
                    <MenuItem>{'Educacional'.toUpperCase()}</MenuItem>
                  </a>
                  <a
                    {...aTagProps}
                    href={'https://nossojeitodeensinar.com.br//'}
                  >
                    <MenuItem>{'Nosso Jeito'.toUpperCase()}</MenuItem>
                  </a>
                  <a
                    {...aTagProps}
                    href={
                      'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1657904527&entry_id=1_iluqjb58'
                    }
                  >
                    <MenuItem>{'Institucional'.toUpperCase()}</MenuItem>
                  </a>
                </MenuDropDownContent>
              </MenuItemDropDown>
              <a {...aTagProps} href={'https://www.unifran.edu.br/'}>
                <MenuItem>{'Unifran'.toUpperCase()}</MenuItem>
              </a>
              <a {...aTagProps} href={'https://www.unipe.edu.br/'}>
                <MenuItem>{'Unipê'.toUpperCase()}</MenuItem>
              </a>
              <a {...aTagProps} href={'https://www.brazcubas.edu.br/'}>
                <MenuItem>{'Braz Cubas'.toUpperCase()}</MenuItem>
              </a>
              <a {...aTagProps} href={'https://www.fsg.edu.br/'}>
                <MenuItem>{'FSG'.toUpperCase()}</MenuItem>
              </a>
              <a {...aTagProps} href={'https://www.up.edu.br/'}>
                <MenuItem>{'Positivo'.toUpperCase()}</MenuItem>
              </a>
              <a {...aTagProps} href={'https://www.unicid.edu.br/'}>
                <MenuItem>{'Unicid'.toUpperCase()}</MenuItem>
              </a>
            </>
          ) : (
            <TiThMenu onClick={() => setMobMenuVisible(true)} />
          )}
        </MenuContainer>
      </ContainerTop>
    </>
  )
}

const MobMenuContainer = styled(animated.div)`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const MobMenuContent = styled(animated.nav)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  margin-left: 9%;
`
const CloseIcon = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  font-size: 2.4rem;
  top: 3%;
  right: 3%;
  position: absolute;
`
const MenuItemDropDown2 = styled(animated.li)`
  font-family: 'BlissProBold', sans-serif;
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
    font-family: BlissProHeavy, sans-serif;
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
`
const ContainerTop = styled(animated.nav)`
  //background-color: blue;
  position: absolute;
  top: 0;
  padding-top: 9px;
  display: flex;
  width: 100%;
  height: clamp(36px, 9vh, 150px);
  flex-direction: row;
  @media (min-height: 510px) {
    padding: 0;
  }
  @media (max-width: 792px) {
    justify-content: flex-end;
  }
  z-index: 9;
`
const Logo = styled(animated.div)`
  //background-color: aquamarine;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 9px;
  padding: 3% 0 0 9%;
  img:nth-child(1) {
    height: clamp(41px, 9vw, 72px);
  }
  img:nth-child(2) {
    height: clamp(36px, 6vw, 51px);
  }
  @media (max-width: 792px) {
    padding: 3% 0 0 18%;
  }
`
const MenuContainer = styled(animated.ul)`
  //background-color: #0060ab;
  list-style: none;
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: start;
  @media (max-width: 792px), (max-height: 510px) {
    justify-content: flex-end;
    svg {
      cursor: pointer;
      font-size: 2.2rem;
      margin-right: 6%;
    }
  }
`
const MenuItem = styled(animated.li)`
  font-family: 'BlissProLight', sans-serif;
  letter-spacing: 3px;
  font-size: 0.72rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  :hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.5;
  }
`
const MenuItemMob = styled(MenuItem)`
  font-size: 1rem;
`
const MenuItemDropDown = styled(animated.li)`
  display: inline-block;
  font-family: 'BlissProLight', sans-serif;
  letter-spacing: 3px;
  font-size: 0.72rem;
  padding: 1rem;
  cursor: pointer;
  :hover {
    display: block;
    ul {
      display: block;
    }
  }
  p {
    font-family: BlissProHeavy, sans-serif;
    color: #008eff;
    width: 1rem;
    height: 1rem;
    float: right;
    transform: rotateZ(90deg);
    translate: 0 0.3rem;
  }
`
const MenuDropDownContent = styled(animated.ul)`
  background-color: black;
  opacity: 0.9;
  display: none;
  position: absolute;
  list-style: none;
  padding-top: 1rem;
  z-index: 3;
`
