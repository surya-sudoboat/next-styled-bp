import styled, { keyframes } from 'styled-components'

const headerFade = keyframes`
0%{
opacity:1;
}
50%{
opacity:0.3;
}
100%{
opacity:1;
}
`

const first = (props) => keyframes`
${
  props?.style?.name === 'second' &&
  `
0%{

  opacity:1;
  background-color: rgb(253 253 253 / 0%);
    }
  50%{
    opacity:0.5;
  }
    100%{
      opacity:1;
      background-color: rgba(253, 250, 255, 0.05);
    }`
}
  ${
    props?.style?.name === 'third' &&
    `
  0%{

    opacity:1;
    background-color: rgba(253, 250, 255, 0.05);
    border:1.5px solid rgba(253, 253, 253, 0.15);
      }
    50%{
      opacity:0.5;
    }
      100%{
        opacity:1;
        background-color: rgba(253, 253, 253, 0.15);
        border:1.5px solid rgba(253, 253, 253, 0.5);
      }`
  }
${
  props?.style?.name === 'fourth' &&
  `
0%{

  opacity:1;
  background-color: rgba(253, 253, 253, 0.15);
  border:1.5px solid rgba(253, 253, 253, 0.5);
    }
  50%{
    opacity:0.5;
  }
    100%{
      opacity:1;
      background-color: rgba(253, 250, 255, 0.05);
      border:1.5px solid rgba(31, 31, 31, 0.15);
    }`
}

`
const hashButtonAnimation = (props) => keyframes`
${
  props?.style?.name === 'second' &&
  `
0%{

  opacity:1;
  color: white ;
  background-color: rgba(160, 73, 252, 0.2);
    }
  50%{
    opacity:0.5;
  }
    100%{
      color: rgba(89, 16, 166, 1) ;
  background-color: rgba(160, 73, 252, 0.2);
      opacity:1;
    }`
}
  ${
    props?.style?.name === 'third' &&
    `
  0%{

    opacity:1;
    color: rgba(89, 16, 166, 1);
    background-color: rgba(160, 73, 252, 0.2);
      }
    50%{
      opacity:0.5;
    }
      100%{
        color: white ;
    background-color:rgba(253, 250, 255, 0.2);
        opacity:1;
  }`
  }
${
  props?.style?.name === 'fourth' &&
  `
0%{

  opacity:1;
  color: white;
  background-color: rgba(253, 250, 255, 0.2);
    }
  50%{
    opacity:0.5;
  }
    100%{
      color: rgba(89, 16, 166, 1);
  background-color:rgba(160, 73, 252, 0.2);
      opacity:1;
}`
}

`
export const LogoButton = styled.button`
  cursor: pointer;
  animation-name: ${(props) => first(props)};
  animation-duration: 1s;
  pointer-events: auto;
  background: ${(props) => props?.style?.LogoBg || 'rgba(253, 250, 255, 0.05)'};
  transition-delay: 1s, 1s;
  transition-property: background, border;
  border: ${(props) =>
    props?.style?.LogoBorder || '1.5px solid rgba(253, 253, 253, 0.15)'};
  padding: 3px 18px 0px 12px;
  border-radius: 120px;
  font-family: 'sans-serif';
  align-items: center;
  justify-content: center;
  display: flex;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  transition: border 0.5s ease, transform 0.5s ease, background 0.5s ease,
    transform 0.5s ease;
  height: 62px;
  &:hover {
    background: ${(props) => props?.style?.LogoHover};
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0px 24px;
    height: 52px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 0px 25px;
    height: 50px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 50px !important;
  }
`

export const HashFameButton = styled.button`
  cursor: pointer;
  height: 62px;
  animation-name: ${(props) => hashButtonAnimation(props)};
  animation-duration: 1s;
  line-height: 26px;
  pointer-events: auto;
  backdrop-filter: blur(5px);
  cursor: pointer;
  -webkit-backdrop-filter: blur(5px);
  background-color: ${(props) =>
    props?.style?.buttonBg || 'rgba(160, 73, 252, 0.2)'};
  color: ${(props) => props?.style?.fontColor || 'white'};
  transition-delay: 2s, 2s;
  transition-property: background, color;
  font-weight: 600;
  font-size: 16px;
  border-radius: 120px;
  border: 4px solid transparent;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.1s ease;
  padding: 2px 28px 0px 28px;

  &:hover {
    border: ${(props) => props?.style?.ButtonBorder};
    box-sizing: border-box;
  }

  @media only screen and (max-width: 399px) {
    padding: 0px 28px 0px 28px !important;
    font-size: 12px !important;
    line-height: 26px !important;
    height: 45px !important;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    font-size: 14px;
    font-weight: 600;
    padding: 0px 28px;
    height: 52px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
    font-weight: 600;
    padding: 0px 28px;
    height: 52px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
    font-weight: 600;
    padding: 0px 28px;
    height: 52px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 12px !important;
    padding: 0px 25px !important;
    height: 50px !important;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px !important;
    padding: 0px 25px !important;
    height: 50px !important;
  }
`

export const DuplicateButton = styled.div`
  animation: ${(props) => props?.style?.name !== 'first' && headerFade} 1s ease;
  @media only screen and (min-width: 767px) {
    display: none;
  }
`
export const Headers = styled.div`
  width: 100%;
  pointer-events: none;
  display: flex;
  z-index: 100;
  top: 0;
  position: fixed;
  justify-content: space-around;
  gap: 0px;
`

export const HeaderWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 40px 60px 0px;
    width: calc(100% - 120px);
  }
  @media only screen and (min-width: 480px) and (max-width: 991px) {
    padding: 40px 50px 0px;
    width: calc(100% - 100px);
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    padding: 40px 20px 0px;
    width: calc(100% - 40px);
  }
  @media only screen and (max-width: 479px) {
    padding: 30px 17px;
    width: calc(100% - 34px);
  }
`

export const WhiteLogo = styled.div`
  width: 136px;
  @media only screen and (min-width: 768px) {
    width: 114px;
  }
  @media only screen and (min-width: 1024px) {
    width: 114px;
  }
  @media only screen and (max-width: 767px) {
    width: 44px;
  }
`
