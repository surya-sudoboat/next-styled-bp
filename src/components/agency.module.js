import styled from 'styled-components'

export const AgencyContainer = styled.div`
  display: flex;
  gap: 40px;
  max-width: 100%;
  overflow-y: scroll;
  padding: 72px 0px 50px 0px;

  @media only screen and (max-width: 991px) {
    gap: 13px;
    padding: 28px 0;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 40px;
    padding: 40px 0 40px 0px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 40px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 50px 0 40px 0;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    padding: 50px 0 40px 0;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;

  gap: 12px;
  justify-content: center;

  animation-timing-function: ease;
  :first-child {
    font-family: Libre-Bold;
    font-size: 60px;
    font-weight: 700;
    line-height: 73.8px;
    letter-spacing: -0.01em;
    text-align: right;
    color: #c58ffd;
  }
  @media only screen and (max-width: 479px) {
    flex-direction: column;
    :first-child {
      font-size: 32px;
      line-height: 39.36px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
    :first-child {
      font-size: 42px;
      line-height: 39.36px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
    :first-child {
      font-size: 40px;
      line-height: 49.36px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    :first-child {
      font-size: 40px;
      line-height: 39.36px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    :first-child {
      font-size: 50px;
    }
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    :first-child {
      font-size: 50px;
    }
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    :first-child {
      font-size: 50px;
    }
  }
`

export const AgencyBody = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  gap: 80px;

  @media only screen and (max-width: 479px) {
    gap: 40px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    gap: 80px;
  }
`

export const AgencyButtonHolder = styled.div`
  display: flex;
  padding: 10px 0px 0px 0px;
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 0px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    padding: 0px;
  }
`

export const AllPortionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AgencyCardWrapper = styled.div`
  min-width: 350px;
  max-height: 380px;
  display: flex;
  cursor: pointer;
  border: 1px solid rgba(243, 231, 255, 1);
  box-shadow: 0px 15px 26px 0px rgba(89, 16, 166, 0.02);
  border-radius: 44px;
  box-sizing: border-box;

  &:hover > div > button {
    background: rgba(243, 231, 255, 1);
    border: 1.5px solid rgba(243, 231, 255, 1);
  }

  &:hover {
    ${'' /* border: 4px solid rgba(215, 179, 254, 1); */}
    box-shadow:
      inset 0 0 0 4px #d7b3fe,
      0px 25px 26px 0px #5910a60f;
    transform: scale(1);
  }

  @media only screen and (max-width: 479px) {
    border-radius: 26px;
    min-width: 205px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    border-radius: 26px;
    min-width: 205px;
  }
  @media only screen and (min-width: 991px) and (max-width: 1024px) {
    border-radius: 26px;
    min-width: 205px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    border-radius: 26px;
    min-width: 205px;
  }
`

export const AgencyCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 27px;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 479px) {
    gap: 14px;
    padding: 12px 14px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 14px;
    padding: 12px 14px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 14px;
    padding: 12px 14px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 14px;
    padding: 12px 14px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 14px;
    padding: 15px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    gap: 14px;
    padding: 24px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    gap: 14px;
    padding: 24px;
  }
`
export const AgencyCardDetails = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media only screen and (max-width: 479px) {
    gap: 9px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 9px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }
`
export const AgencyProfileIcon = styled.div`
  width: 90px;
  height: 90px;
  @media only screen and (max-width: 479px) {
    width: 54px;
    height: 54px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 54px;
    height: 54px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 54px;
    height: 54px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    width: 54px;
    height: 54px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 70px;
    height: 70px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 70px;
    height: 70px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    width: 70px;
    height: 70px;
  }
`

export const AgencyCardProfile = styled.div`
  display: flex;
  gap: 8px;

  @media only screen and (max-width: 479px) {
    gap: 5px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 5px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 5px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 5px;
  }
`

export const AgencyProfileBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;

  @media only screen and (max-width: 479px) {
    gap: 3px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 3px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 3px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 3px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 3px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    gap: 3px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    gap: 3px;
  }
`
export const AgencyName = styled.div`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
  color: rgba(31, 31, 31, 1);

  @media only screen and (max-width: 479px) {
    font-size: 12px;
    font-weight: 600;
    line-height: 16.2px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
    font-weight: 600;
    line-height: 16.2px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 12px;
    font-weight: 600;
    line-height: 16.2px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 12px;
    font-weight: 600;
    line-height: 16.2px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 18px;
    line-height: 18px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 18px;
    line-height: 18px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 18px;
    line-height: 18px;
  }
`

export const AgencyContact = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 440;
  line-height: 21.6px;
  text-align: left;
  color: rgba(126, 126, 126, 1);

  @media only screen and (max-width: 479px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 12.96px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 12.96px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 12.96px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 12.96px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 14px;
  }
`
export const AgencySocialMedia = styled.div`
  display: flex;
  gap: 12px;
  @media only screen and (max-width: 479px) {
    gap: 8px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 10px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 11px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 11px;
  }
`

export const AgencyMedia = styled.div`
  width: 20px;
  height: 20px;
  display: flex;

  @media only screen and (max-width: 479px) {
    width: 10px;
    height: 10px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 13px;
    height: 13px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 13px;
    height: 13px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 18px;
  }
`
export const AgencyDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (max-width: 479px) {
    gap: 4px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 4px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 4px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 4px;
  }
`
export const AgencyPoint = styled.div`
  display: flex;
  gap: 4px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 440;
  line-height: 21.6px;
  text-align: left;
  color: rgba(126, 126, 126, 1);

  @media only screen and (max-width: 479px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 12.96px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 12.96px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 12.96px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 12.96px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 14px;
  }

  & span {
    color: rgba(160, 73, 252, 1);
    text-decoration: underline;

    @media only screen and (max-width: 479px) {
      gap: 9px;
    }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
      gap: 9px;
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      gap: 9px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1024px) {
      gap: 9px;
    }
  }

  &:second-child {
    display: flex;
    flex-direction: column;
  }
`
export const AgencyPointTag = styled.div`
  width: 16px;
  height: 16px;
  @media only screen and (max-width: 1024px) {
    width: 10px;
    height: 10px;
  }
`
export const AgencyWebsiteViewButton = styled.button`
  display: flex;
  color: black;
  justify-content: center;
  cursor: pointer;
  color: black;
  align-items: center;
  border: 1.5px solid rgba(31, 31, 31, 0.15);
  padding: 18px 34px 18px 42px;
  border-radius: 120px;
  gap: 8px;
  background: none;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  &:hover {
    background: none !important;
    box-shadow: inset 0 0 0 4px rgba(243, 231, 255, 1),
      0px 1px 2px 0px #5910a60f;
    transform: scale(1);
  }
  & div {
    width: 20px;
    height: 20px;
  }

  @media only screen and (max-width: 479px) {
    font-size: 10px;
    font-weight: 600;
    line-height: 15.6px;
    gap: 4px;
    padding: 10px;
    &:hover {
      background: none !important;
      box-shadow: inset 0 0 0 2px rgba(243, 231, 255, 1),
        0px 1px 2px 0px #5910a60f;
      transform: scale(1);
    }
    & div {
      width: 10px;
      height: 10px;
    }
    border: 0.9px solid rgba(31, 31, 31, 0.15);
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    font-weight: 600;
    line-height: 15.6px;
    gap: 4px;
    padding: 10px;
    border: 0.9px solid rgba(31, 31, 31, 0.15);
    & div {
      width: 13px;
      height: 13px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    font-weight: 600;
    line-height: 15.6px;
    gap: 4px;
    padding: 10px;
    border: 0.9px solid rgba(31, 31, 31, 0.15);
    & div {
      width: 13px;
      height: 13px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 10px;
    font-weight: 600;
    line-height: 15.6px;
    gap: 4px;
    padding: 10px;
    border: 0.9px solid rgba(31, 31, 31, 0.15);
    & div {
      width: 13px;
      height: 13px;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px;
    padding: 0px 34px 0px 42px;
    height: 50px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 14px;
    line-height: 14px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 14px;
    line-height: 14px;
  }

  @media & img {
    rotate: 310deg;
  }
`
