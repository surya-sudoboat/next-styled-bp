import styled from 'styled-components'

export const InfluencersContainer = styled.div`
  display: flex;
  gap: 40px;
  max-width: 100%;
  overflow-y: scroll;
  padding: 80px 0px 50px 0px;

  @media only screen and (max-width: 991px) {
    gap: 13px;
    padding: 50px 0 40px 0;
  }

  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 40px;
    padding: 50px 0 40px 0px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 40px;
    padding: 70px 0 60px 0;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 50px 0 40px 0;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    padding: 50px 0 40px 0;
  }
`
export const InfluencerButtonHolder = styled.div`
  display: flex;
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
export const InfluencerBody = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`

export const InfluencersCardWrapper = styled.div`
  border: 1.2px solid rgba(243, 231, 255, 1);
  box-shadow: 0px 15px 26px 0px rgba(89, 16, 166, 0.02);
  min-width: 282px;
  max-height: 395px;
  border-radius: 44px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  align-items: center;
  box-sizing: content-box;
  transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;

  &:hover > div > button {
    cursor: pointer;
    background: rgba(243, 231, 255, 1);
    border: 1.5px solid rgba(243, 231, 255, 1);
  }
  &:hover {
    box-sizing: content-box;
    box-shadow: inset 0 0 0 4px #d7b3fe, 0px 25px 26px 0px #5910a60f;
    transform: scale(1);
  }

  @media only screen and (max-width: 479px) {
    border-radius: 26px;
    min-width: 169px;
    justify-content: center;
    align-items: center;
    &:hover {
      box-sizing: content-box;
      box-shadow: inset 0 0 0 3px #d7b3fe, 0px 25px 26px 0px #5910a60f;
      transform: scale(1);
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    border-radius: 26px;
    min-width: 169px;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 991px) and (max-width: 1024px) {
    border-radius: 26px;
    min-width: 169px;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    border-radius: 26px;
    min-width: 169px;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 992px) and (max-width: 1280px) {
  }
`
export const InfluencersCardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 28px 22px 22px 22px;

  @media only screen and (max-width: 479px) {
    gap: 14px;
    padding: 13px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 14px;
    padding: 13px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 14px;
    padding: 13px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 14px;
    padding: 13px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 14px;
    padding: 15px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    gap: 14px;
    padding: 15px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    gap: 14px;
    padding: 15px;
  }
`

export const InfluencersProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  @media only screen and (max-width: 991px) {
    gap: 2px;
    align-items: center;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 2px;
    align-items: center;
  }
`

export const InfluencersShortBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: 479px) {
    gap: 10px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 10px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 10px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 10px;
  }
`

export const InfluencerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 991px) {
    width: 54px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    width: 54px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 70px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 70px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    width: 70px;
  }
`

export const InfluencerName = styled.div`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  text-align: center;
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
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 18px;
  }
`
export const InfluencerLocation = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 440;
  line-height: 25px;
  text-align: center;
  color: rgba(126, 126, 126, 1);
  @media only screen and (max-width: 479px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 15px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 15px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 15px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 10px;
    font-weight: 600;
    line-height: 16.2px;
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

export const InfluencerSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 440;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 479px) {
    font-size: 10px;
    font-weight: 440;
    align-items: center;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    font-weight: 440;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 15px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 10px;
    font-weight: 600;
    line-height: 16.2px;
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
    border: 1.2px solid rgba(22, 1, 45, 0.2);
    height: 22px;

    @media only screen and (max-width: 479px) {
      border: 0.72px solid rgba(22, 1, 45, 0.2);
      height: 13px;
    }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
      border: 0.72px solid rgba(22, 1, 45, 0.2);
      height: 13px;
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      border: 0.72px solid rgba(22, 1, 45, 0.2);
      height: 13px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1024px) {
      border: 0.72px solid rgba(22, 1, 45, 0.2);
      height: 13px;
    }
    @media only screen and (min-width: 1281px) and (max-width: 1440px) {
      border: 0.72px solid rgba(22, 1, 45, 0.2);
      height: 13px;
    }
    @media only screen and (min-width: 1441px) and (max-width: 1600px) {
      border: 0.72px solid rgba(22, 1, 45, 0.2);
      height: 13px;
    }
  }
`

export const InfluencerInstagram = styled.div`
  display: flex;
  padding: 10px 14px;
  gap: 6px;
  align-items: center;

  & div:nth-child(1) {
    width: 14px;
    height: 14px;

    @media only screen and (max-width: 991px) {
      width: 14px;
      height: 14px;
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 14px;
      height: 14px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1024px) {
      width: 14px;
      height: 14px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 5px;
  }
`

export const InfluencerPlayVedio = styled.div`
  display: flex;
  padding: 10px 14px;
  gap: 6px;

  & div:nth-child(1) {
    width: 14px;
    height: 14px;

    @media only screen and (max-width: 991px) {
      width: 14px;
      height: 14px;
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 14px;
      height: 14px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1024px) {
      width: 14px;
      height: 14px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 5px;
  }
`
export const InfluencerTags = styled.div`
  display: flex;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 440;
  line-height: 25px;
  text-align: left;
  gap: 6px;

  @media only screen and (max-width: 479px) {
    font-family: sans-serif;
    font-size: 10px;
    font-weight: 440;
    line-height: 15px;
    gap: 3px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 15px;
    gap: 3px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 15px;
    gap: 3px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 15px;
    gap: 3px;
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

export const InfluencerAboutTag1 = styled.div`
  display: flex;
  padding: 7px 16px;
  border: 1.2px solid rgba(31, 31, 31, 0.05);
  border-radius: 30px;

  @media only screen and (max-width: 479px) {
    padding: 4px 9px;
    border-radius: 18px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    padding: 4px 9px;
    border-radius: 18px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 4px 9px;
    border-radius: 18px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 4px 9px;
    border-radius: 18px;
  }
`
export const InfluencerAboutTag2 = styled.div`
  display: flex;
  padding: 7px 16px;
  border: 1.2px solid rgba(31, 31, 31, 0.05);
  border-radius: 30px;

  @media only screen and (max-width: 479px) {
    padding: 4px 9px;
    border-radius: 18px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    padding: 4px 9px;
    border-radius: 18px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 4px 9px;
    border-radius: 18px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 4px 9px;
    border-radius: 18px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    padding: 4px 9px;
    border-radius: 18px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 4px 9px;
    border-radius: 18px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    padding: 4px 9px;
    border-radius: 18px;
  }
`

export const InfluencerViewProfileButton = styled.button`
  cursor: pointer;
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  border: 1.5px solid rgba(31, 31, 31, 0.15);
  padding: 18px 34px 18px 42px;
  border-radius: 120px;
  gap: 8px;
  background: none;
  color: black;
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
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
  }

  @media only screen and (max-width: 479px) {
    font-size: 10px;
    font-weight: 600;
    line-height: 15.6px;
    gap: 4px;
    padding: 10px;
    border: 0.9px solid rgba(31, 31, 31, 0.15);
    width: 100%;
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
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    font-weight: 600;
    line-height: 15.6px;
    gap: 4px;
    padding: 10px;
    width: 100%;
    border: 0.9px solid rgba(31, 31, 31, 0.15);
    & div {
      width: 13px;
      height: 13px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: '100%';
    & div {
      width: 18px;
      height: 18px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    font-weight: 600;
    line-height: 15.6px;
    gap: 4px;
    padding: 10px;
    width: 100%;
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
    width: 100%;
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
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px;
    padding: 0px 34px 0px 42px;
    height: 50px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 14px;
    padding: 0px 34px 0px 42px;
    height: 50px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 14px;
    padding: 0px 34px 0px 42px;
    height: 50px;
  }
`

export const InfluencerExploreButton = styled.button`
  display: flex;
  cursor: pointer;
  margin-top: 72px;
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
  transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 4px 17px 0px,
      #dddddd 0px 0px 0px 3px;
    background: #fffcfc;
  }

  & div {
    width: 20px;
    height: 20px;
  }

  @media only screen and (max-width: 479px) {
    font-size: 12px;
    font-weight: 600;
    border: 0.9px solid rgba(31, 31, 31, 0.15);
    padding: 13px 28px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
    font-weight: 600;
    border: 0.9px solid rgba(31, 31, 31, 0.15);
    padding: 13px 28px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
  }
`
