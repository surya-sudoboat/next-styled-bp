import styled from 'styled-components'

export const ButtonWrap = styled.button`
  transition: border 0.5s ease !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.border};
  padding: ${(props) => (props.padding ? props.padding : '0px 34px 0px 42px')};
  border-radius: 120px;
  gap: 8px;
  height: 62px;
  background: ${(props) => props.bg};
  width: fit-content;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.color};
  line-height: 26px;
  text-align: center;

  &:hover {
    box-shadow: ${(props) => props.hoverShadow};
    background: ${(props) => props.hoverBg};
    cursor: ${(props) => props.cursor};
    color: ${(props) => props.hoverColor};
    transition: 0.5s ease !important;
  }

  & div {
    width: 20px;
    height: 20px;
  }

  @media only screen and (max-width: 399px) {
    padding: 0px 25px !important;
    height: 45px !important;
    font-size: 12px;
    font-weight: 600;
    border: ${(props) => props.mobileBorder};
  }

  @media only screen and (max-width: 479px) {
    font-size: 12px;
    font-weight: 600;
    border: ${(props) => props.mobileBorder};
    padding: 0px 28px;
    height: 52px;
    &:hover {
      background: ${(props) => props.responsiveBg} !important;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
    font-weight: 600;
    border: ${(props) => props.mobileBorder};
    padding: 0px 28px;
    height: 52px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
    font-weight: 600;
    padding: 0px 28px;
    height: 52px;
  }
  @media only screen and (min-width: 991px) and (max-width: 1024px) {
    font-size: 12px !important;
    padding: 0px 25px !important;
    height: 50px !important;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px !important;
    padding: 0px 25px !important;
    height: 50px !important;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 14px !important;
    padding: 0px 25px !important;
    height: 50px !important;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 14px !important;
    padding: 0px 25px !important;
    height: 50px !important;
  }
`
