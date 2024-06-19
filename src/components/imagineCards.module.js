/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { keyframes, css } from 'styled-components'

export const ImagineCard = styled.section`
  width: 100%;
  background-color:
  height:100%;
`

const ContainerZoomout = keyframes`
  0% {
    transition: 0.5s;
    opacity:1;
    transform: translateY(0%);
  }
  100% {
    transition: 0.5s;
    opacity:0.2;
    transform: translateY(20%);
  }
`

const ContainerZoomin = keyframes`
0% {
  transition: 0.5s;
  transform: translateY(30%);
}

100% {
  transition: 0.5s;
  transform: translateY(0%);
}
`

export const ImagineContainer = styled.div`
  display: flex;
  max-width: 1200px;
  position: relative;
  display: flex;
  flex-direction: column;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-name: ${(props) =>
    (props?.display === 'second' && ContainerZoomout) ||
    (props?.display === 'third' && ContainerZoomin) ||
    (props?.display === 'fourth' && ContainerZoomout)};
  gap: 60px;
  margin: auto;
  width: 100%;
  align-items: center;
  padding: 0px 20px 0px 20px;
  @media only screen and (max-width: 399px) {
    padding: 100px 17px 156px 17px;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    padding: 126px 17px 156px 17px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    padding: 137px 20px 160px 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 135px 25px 165px 25px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding: 100px 30px 170px 30px;
  }
  @media only screen and (min-width: 992px) {
    max-height: 100vh !important;
    height: 100% !important;
  }
`
const TitleZoomin = keyframes`
0% {
  transition: 0.1s;
  opacity:0.5;
  transform: translateY(90%);
}

100% {
  transition: 0.1s;
  opacity:1;
  transform: translateY(0%);
}
`

export const ImagineTitle = styled.div`
  font-family: Libre-Bold;
  font-size: 60px;
  font-weight: 700;
  line-height: 73.8px;
  letter-spacing: -0.01em;
  color: #fdfaff;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 15px;

  & span {
    font-family: Libre-italic;
    font-size: 60px;
    font-style: italic;
    font-weight: 400;
    line-height: 73.8px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #fdfaff;
    @media only screen and (max-width: 399px) {
      font-size: 28px;
      font-weight: 400;
      line-height: 30.36px;
    }

    @media only screen and (min-width: 400px) and (max-width: 479px) {
      font-size: 32px;
      font-weight: 400;
      line-height: 39.36px;
    }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
      font-size: 40px;
      font-weight: 400;
      line-height: 39.36px;
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 40px;
      font-weight: 400;
      line-height: 39.36px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1024px) {
      font-size: 40px;
      font-weight: 400;
      line-height: 39.36px;
    }
    @media only screen and (min-width: 1025px) and (max-width: 1280px) {
      font-size: 50px;
      & span {
        font-size: 50px;
      }
    }
    @media only screen and (min-width: 1281px) and (max-width: 1440px) {
      font-size: 50px;
      & span {
        font-size: 50px;
      }
    }
  }
  @media only screen and (max-width: 479px) {
    font-size: 32px;
    font-weight: 400;
    line-height: 39.36px;

    animation-duration: 1s;
    animation-timing-function: ease;
    animation-name: ${(props) => props?.display === 'third' && TitleZoomin};
    letter-spacing: -0.01em;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 40px;
    font-weight: 400;
    line-height: 39.36px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 40px;
    font-weight: 400;
    line-height: 39.36px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 40px;
    font-weight: 400;
    line-height: 39.36px;
  }
`

export const ImagineCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 70px;
  width: calc(100% - 140px);
  justify-content: space-between;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    padding: 0px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1050px) {
    padding: 40px;
    width: calc(100% - 250px);
  }
  @media only screen and (min-width: 1051px) and (max-width: 1100px) {
    padding: 50px;
    width: calc(100% - 50px);
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 40px;
    width: 100% !important;
    gap: 70px;
    justify-content: normal;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    padding: 60px !important;
    width: calc(100% - 120px) !important;
  }
`
export const ImaginImageContainer = styled.div`
  width: 340px;
  height: 260px;
  width: 340px;
  height: 260px;
  @media only screen and (max-width: 399px) {
    width: 290px;
    height: 230px;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    width: 300px;
    height: auto;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 360px;
    height: 280px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 340px;
    height: 260px;
  }
`

export const ImagineTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  @media only screen and (max-width: 399px) {
    width: 100%;
    gap: 8px;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    width: 100%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }
  @media only screen and (min-width: 991px) and (max-width: 1024px) {
    gap: 10px;
    width: 330px;
  }
`

export const ImagineSubTitle = styled.div`
  display: flex;
  font-family: Libre-Bold;
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fdfaff;

  @media only screen and (max-width: 399px) {
    font-size: 15px;
    line-height: 19.68px;
    width: 200px;
  }

  @media only screen and (min-width: 400px) and (max-width: 479px) {
    font-size: 16px;
    line-height: 19.68px;
    width: 200px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 23px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 24px;
    line-height: 20px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 30px !important;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 25px !important;
  }
`
export const ImagineDescription = styled.div`
  display: flex;
  color: #fdfaff;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 440;
  line-height: 25px;
  text-align: left;
  @media only screen and (max-width: 399px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 15px;
  }

  @media only screen and (min-width: 400px) and (max-width: 479px) {
    font-size: 12px;
    font-weight: 440;
    line-height: 20px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
    font-weight: 440;
    line-height: 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 16px;
    font-weight: 440;
    line-height: 20px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 14px;
  }
`

export const ImagineExploreButton = styled.div`
  display: flex;
  ${'' /* cursor: pointer; */}

  & button:hover {
    background: rgba(243, 231, 255, 1) !important;
  }

  & button {
    display: flex;
    border: none;
    font-family: sans-serif;
    text-align: center;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    background: ${(props) =>
      props.details === 'Coming Soon'
        ? 'rgba(243, 231, 255, 0.12)'
        : 'rgba(243, 231, 255, 1)'};
  }
`
export const ImagineImage = styled.div`
  display: flex;
  width: 450px;
  height: 350px;
  @media only screen and (min-width: 992px) and (max-width: 1050px) {
    width: 430px;
    height: 340px;
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }
  @media only screen and (min-width: 991px) and (max-width: 1024px) {
    width: auto;
    height: 200px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 420px;
    height: 330px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 420px;
    height: 330px;
  }
`

const gradientAnimation1 = keyframes`
0% { background: #1f1f1f linear-gradient(rgba(160, 73, 252, 0.8), rgba(89, 16, 166, 0.8)); }
100% { background: #1f1f1f linear-gradient(rgba(160, 73, 252, 0.7), rgba(89, 16, 166, 0.7)); }
`

const gradientAnimation2 = keyframes`
0% { background: #1f1f1f linear-gradient(rgba(160, 73, 252, 0.7), rgba(89, 16, 166, 0.7)); }
100% { background: #1f1f1f linear-gradient(rgba(160, 73, 252, 0.6), rgba(89, 16, 166, 0.6)); }
`

const gradientAnimation3 = keyframes`
0% { background: #1f1f1f linear-gradient(rgba(160, 73, 252, 0.6), rgba(89, 16, 166, 0.6)); }
100% { background: #1f1f1f linear-gradient(rgba(160, 73, 252, 0.5), rgba(89, 16, 166, 0.5)); }
`

export const ImagineBackground = styled.div`
  background: ${({ background }) => background};
  transition: background 2s ease-in-out !important;
`
