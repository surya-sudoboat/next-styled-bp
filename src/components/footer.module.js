import styled from 'styled-components'

export const Footers = styled.div`
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
`

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: 181px;
  @media only screen and (max-width: 479px) {
    width: 100%;
    padding: 22px 0px 0 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  // @media only screen and (min-width: 480px) and (max-width: 767px) {
  //   padding: 70px 20px 160px 20px;
  //   flex-direction: column;
  // }
  @media only screen and (min-width: 480px) and (max-width: 991px) {
    width: 100%;
    padding: 102px 0px 0 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 100%;
    padding: 102px 0px 0 0px;
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
`

export const FooterDetails = styled.div`
  width: 50%;
  @media only screen and (max-width: 991px) {
    width: 100%;
  }
`

export const Footercontent = styled.div``

export const LogoHolder = styled.div`
  width: 119px;
  @media only screen and (max-width: 479px) {
    width: 71px;
  }
`

export const FooterQuotes = styled.div``

export const Quotes = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 31px;
  color: white;
  @media only screen and (max-width: 479px) {
    font-family: sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: white;
  }
`

export const SocialmediaHolder = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`

export const SocialMediaTitle = styled.div`
  font-family: sans-serif;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(120, 120, 120, 1);
  @media only screen and (max-width: 479px) {
    font-family: sans-serif;
    font-family: sans-serif;
    font-size: 10px;
    font-weight: 500;
    color: rgba(120, 120, 120, 1);
  }
`

export const FooterScaner = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 479px) {
    display: none;
  }
`

export const FooterMockup = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`

export const SocialMediaLogo = styled.div`
  display: flex;
  gap: 10px;
`

export const GetApp = styled.div`
  color: white;
  gap: 10px;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  font-family: sans-serif;
  @media only screen and (max-width: 479px) {
    font-size: 10px;
  }
`

export const Scanner = styled.div`
  display: flex;
  gap: 20px;
  :first-child {
    width: 150px;
    height: 150px;
  }
  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    gap: 10px;
  }
  @media only screen and (max-width: 479px) {
    display: none;
  }
`

export const Footeroverlap = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
export const DeviceBack = styled.div``

export const DevicFront = styled.div`
  position: absolute;
  margin-top: -238px;
  margin-left: 66px;
`

export const FooterImgHolder = styled.div`
  display: flex;
  align-items: flex-end;
`

export const FooterDetailsWrap = styled.div`
  padding: 32px 12px 101px 12px;
  gap: 32px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    gap: 32px;
    padding: 22px;
    margin-bottom: 54px;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 991px) and (min-width: 478px) {
    padding: 22px;
    gap: 32px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 479px) {
    padding: 20px;
    line-height: 24px;
    gap: 24px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
  }
`

export const ImgWrap = styled.div`
  display: flex;
  align-items: flex-end;
  @media only screen and (min-width: 1200px) {
    width: 560px;
    height: 470px;
  }
  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    width: 400px;
  }
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    width: 602px;
  }
  @media only screen and (min-width: 478px) and (max-width: 767px) {
    width: 400px;
  }
  @media only screen and (max-width: 479px) {
    width: 315px;
  }
`

export const App = styled.div`
  width: 20px;
  @media only screen and (max-width: 479px) {
    width: 12px;
  }
`

export const Span = styled.span`
  font-family: Libre-Italic;
  -webkit-font-smoothing: antialiased;
  font-style: italic;
  color: #a049fc;
`

export const Instagram = styled.img`
  position: absolute;
  transition: opacity 0.5s ease;
  opacity: 1;
`
export const ColoredInstagram = styled.img`
  position: absolute;
  transition: opacity 0.5s ease;
  opacity: 0;
`

export const Twitter = styled.img`
  position: absolute;
  transition: opacity 0.5s ease;
  opacity: 1;
`
export const ColoredTwitter = styled.img`
  position: absolute;
  transition: opacity 0.5s ease;
  opacity: 0;
`

export const Linkedin = styled.img`
  position: absolute;
  transition: opacity 0.5s ease;
  opacity: 1;
`
export const ColoredLinkedin = styled.img`
  position: absolute;
  transition: opacity 0.5s ease;
  opacity: 0;
`

export const Socials = styled.div`
  position: relative;
  cursor: pointer;
  width: 26px;

  &:hover ${Instagram} {
    opacity: 0;
  }
  &:hover ${ColoredInstagram} {
    opacity: 1;
  }
  &:hover ${Twitter} {
    opacity: 0;
  }
  &:hover ${ColoredTwitter} {
    opacity: 1;
  }
  &:hover ${Linkedin} {
    opacity: 0;
  }
  &:hover ${ColoredLinkedin} {
    opacity: 1;
  }
  @media only screen and (max-width: 479px) {
    width: 24px;
  }
`

export const DuplicateGetApp = styled.div`
  color: white;
  gap: 10px;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  @media only screen and (max-width: 479px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 478px) {
    display: none;
  }
`

export const DuplicateFooterHolder = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
`

export const PageLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const PageLink = styled.a`
  font-size: 16px;
  color: white;
  gap: 10px;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  font-family: sans-serif;
  margin: 16px 0;

  @media only screen and (max-width: 479px) {
    font-size: 14px;
  }
`
