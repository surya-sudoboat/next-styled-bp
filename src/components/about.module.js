import styled, { keyframes } from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdfaff;
  height: 100%;
`
const ContainerZoomout = keyframes`
  0% {
    transition: 0.5s;
    transform: translateY(0%);
  }
  100% {
    transition: 0.5s;
    transform: translateY(10%);
  }
`

const ContainerZoomin = keyframes`
0% {
  transition: 0.5s;
  transform: translateY(50%);
}

100% {
  transition: 0.5s;
  transform: translateY(0%);
}
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  justify-content: center;
  animation-duration: 0.1s;
  animation-timing-function: ease;
  animation-name: ${(props) => props?.display === 'second' && TitleZoomin};
  :first-child {
    font-family: Libre-Bold;
    font-size: 60px;
    font-weight: 700;
    line-height: 73.8px;
    letter-spacing: -0.01em;
    text-align: right;
    color: #c58ffd;
  }
  @media only screen and (max-width: 399px) {
    flex-direction: column;
    gap: 0px;
    :first-child {
      font-size: 28px;
      line-height: 30.36px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    flex-direction: column;
    gap: 0px;
    :first-child {
      font-size: 32px;
      line-height: 39.36px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
    gap: 0px;
    :first-child {
      font-size: 42px;
      line-height: 39.36px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
    gap: 0px;
    :first-child {
      font-size: 40px;
      line-height: 49.36px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 0px;
    :first-child {
      font-size: 40px;
      line-height: 49.36px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    :first-child {
      font-size: 50px !important;
    }
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
  }
`

export const Titlecontent = styled.div`
  font-family: Libre-Italic;
  font-size: 60px;
  font-style: italic;
  font-weight: 400;
  line-height: 73.8px;
  letter-spacing: -0.01em;
  text-align: right;
  color: #1f1f1f;
  @media only screen and (max-width: 399px) {
    font-size: 28px;
    line-height: 30.36px;
    text-align: center;
  }

  @media only screen and (min-width: 400px) and (max-width: 479px) {
    font-size: 32px;
    line-height: 39.36px;
    text-align: center;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 42px;
    line-height: 39.36px;
    text-align: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 40px;
    line-height: 49.36px;
    text-align: center;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 40px;
    line-height: 39.36px;
    text-align: center;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 50px;
  }
`

export const AboutContent = styled.div`
  max-width: 1200px;
  display: flex;
  margin: auto;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-name: ${(props) =>
    (props?.display === 'second' && ContainerZoomin) ||
    (props?.display === 'third' && ContainerZoomout) ||
    (props?.display === 'first' && ContainerZoomout)};
  justify-content: center;
  padding: 150px 20px 276px 20px;
  flex-direction: column;
  gap: 140px;
  @media only screen and (max-width: 399px) {
    gap: 20px !important;
    padding: 100px 17px 156px 17px;
  }
  @media only screen and (min-width: 400px) and (max-width: 480px) {
    gap: 20px !important;
    padding: 120px 17px 156px 17px;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 20px !important;
    padding: 120px 17px 156px 17px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 40px;
    padding: 135px 25px 143px 25px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 40px !important;
    padding: 135px 25px 143px 25px !mportant;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 80px;
    padding: 150px 30px 168px 30px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    gap: 100px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    gap: 100px;
  }
`

const TitleZoomin = keyframes`
0% {
  transition: 0.1s;
  opacity:0.5;
  transform: translateY(150%);
}

100% {
  transition: 0.1s;
  opacity:1;
  transform: translateY(0%);
}
`

export const ResponseWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    gap: 40px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    gap: 40px;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    display: none;
  }
`

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 140px;
  @media only screen and (max-width: 479px) {
    display: none;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }
`

export const BodyContent = styled.div`
  width: 100%;
  display: flex;
  gap: 172px;
  justify-content: center;
  @media only screen and (max-width: 479px) {
    display: none;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    gap: 60px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 140px;
  }
`

export const ContentWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    gap: 70px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    display: none;
  }
`
export const Content = styled.div`
  width: 100%;
  display: none;
  gap: 24px;
  height:48%
  z-index: 1;
  transition: transform 2s ease, opacity 1s ease;
    @media only screen and (max-width: 399px){
  width: 100%;
    flex-direction: column;
    gap: 8px;
    }
  @media only screen and (min-width:400px) and (min-width: 320px) and (max-width: 479px) {
    width: 100%;
    flex-direction: column;
    gap: 16px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: 16px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    gap: 20px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    height: 193px;
    display: flex;
    gap: 24px;
  }
`

export const Hashtag = styled.div`
  display: flex;
  justify-content: space-between;
  & img {
    width: 32px;
    height: 32px;
  }
  @media only screen and (max-width: 399px) {
    justify-content: flex-start;

    & img {
      width: 15px;
      height: 15px;
    }
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    justify-content: flex-start;

    & img {
      width: 20px;
      height: 20px;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    justify-content: flex-start;

    & img {
      width: 20px;
      height: 20px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    justify-content: flex-start;

    & img {
      width: 20px;
      height: 20px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    & img {
      width: 20px;
      height: 20px;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    & img {
      width: 24px;
      height: 28px;
    }
  }
`

export const Count = styled.div`
  font-size: 26px;
  font-style: italic;
  font-family: Inter;
  font-weight: 700;
  line-height: 31.47px;
  letter-spacing: -0.01em;
  text-align: right;
  color: #16012d;
  @media only screen and (max-width: 399px) {
    font-size: 15px;
    line-height: 19.36px;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    font-size: 18px;
    line-height: 19.36px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 24px;
    line-height: 30.36px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 24px;
    line-height: 25px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 20px;
    line-height: 25px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 20px;
  }
`
export const InformationContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  @media only screen and (max-width: 399px) {
    gap: 10px !important;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 25px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }
`

export const Description = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
  @media only screen and (max-width: 399px) {
    gap: 10px;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    gap: 16px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 16px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 16px;
  }
`

export const DescriptionTitle = styled.div`
  :first-child {
    font-family: Libre-Bold;
    font-size: 26px;
    font-weight: 700;
    line-height: 31.98px;
    text-align: left;
    color: #16012d;
  }
  @media only screen and (max-width: 399px) {
    :first-child {
      font-size: 15px;
      line-height: 19px;
    }
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    :first-child {
      font-size: 16px;
      line-height: 19px;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    :first-child {
      font-size: 23px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    :first-child {
      font-size: 24px;
      line-height: 20px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    :first-child {
      font-size: 16px;
      line-height: 20px;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    :first-child {
      font-size: 20px;
    }
  }
`
export const DescriptionContent = styled.div`
  :first-child {
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 440;
    line-height: 25px;
    text-align: left;
    color: #1f1f1fcc;
  }
  @media only screen and (max-width: 399px) {
    :first-child {
      font-size: 10px;
      line-height: 15px;
      font-weight: 440;
    }
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    :first-child {
      font-size: 12px;
      line-height: 20px;
      font-weight: 440;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    :first-child {
      font-size: 14px;
      line-height: 20px;
      font-weight: 440;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    :first-child {
      font-size: 16px;
      font-weight: 440;
      line-height: 20px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    :first-child {
      font-size: 12px;
      line-height: 20px;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    :first-child {
      font-size: 14px;
    }
  }
`

export const MobileImage = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    width: calc(100% - 34px);
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: calc(100% - 34px);
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: calc(100% - 34px);
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }
`
const mockimgAnimate = keyframes`
  0% {
    transform: translateY(200%);
  }

  100% {

    transform: translateY(0%);
  }
`

const mockimgAnimateReverse = keyframes`
  0% {
    transform: translateY(0px);
  }

  100% {

    transform: translateY(250px);
  }
`

export const AboutImageContainer = styled.div`
  width: 495px;
  height: 370px;
  @media only screen and (max-width: 399px) {
    width: auto;
    height: 170px;
    z-index: 5;
    animation-duration: 1s;
    animation-name: ${(props) =>
      (props?.display === 'second' && mockimgAnimate) ||
      (props?.display === 'second' && mockimgAnimateReverse)};
    animation-timing-function: ease;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    width: 310px;
    height: 220px;
    z-index: 5;
    animation-duration: 1s;
    animation-name: ${(props) =>
      (props?.display === 'second' && mockimgAnimate) ||
      (props?.display === 'second' && mockimgAnimateReverse)};
    animation-timing-function: ease;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 330px;
    height: 250px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 355px;
    height: 240px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    width: 360px;
    height: 260px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 420px;
    height: auto;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 400px;
    height: 290px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    width: 400px;
    height: 290px;
  }
`
export const EndContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  & div {
    font-family: Libre-Italic;
    font-size: 64px;
    font-style: italic;
    font-weight: 700;
    color: #dddddd;
    line-height: 78.72px;
    text-align: left;
  }
  & img {
    width: 30px;
    height: 30px;
    color: #dddddd;
  }
  @media only screen and (max-width: 479px) {
    height: 138px !imortant;
    & div {
      font-size: 32px;
      font-weight: 400;
      line-height: 39.36px;
    }
    & img {
      width: 15px;
      height: 15px;
      color: #dddddd;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    & div {
      font-size: 40px;
      font-weight: 400;
      line-height: 39.36px;
    }
    & img {
      width: 15px;
      height: 15px;
      color: #dddddd;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 200px !important;
    & div {
      font-size: 40px;
      font-weight: 400;
      line-height: 39.36px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    & div {
      font-size: 40px;
      font-weight: 400;
      line-height: 39.36px;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    & div {
      font-size: 50px;
    }
    & img {
      width: 28px;
      height: 28px;
      color: #dddddd;
    }
  }
`
