import styled, { keyframes } from 'styled-components'

export const HeroContent = styled.div`
  background-color: #1f1f1f;
  background-image: linear-gradient(
      to bottom,
      rgba(160, 73, 252, 0.5),
      rgba(6, 3, 13, 0.5)
    ),
    linear-gradient(to bottom, rgba(160, 73, 252, 1), rgba(160, 73, 252, 1));
  background-blend-mode: overlay;
  background-color: #1f1f1f;
  background-image: linear-gradient(
      to bottom,
      rgba(160, 73, 252, 0.5),
      rgba(6, 3, 13, 0.5)
    ),
    linear-gradient(to bottom, rgb(177 115 242), rgb(118 51 188));
  background-blend-mode: overlay;
  width: 100%;
  height: 100vh;
  margin: 0px;
  position: relative;
  margin: 0px;
`

export const MaincontainerWrap = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  ${'' /* padding: 200px 0 0 0; */}
  padding: 200px 0 0 0;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  gap: 108px;
  display: flex;
  @media only screen and (max-width: 399px) {
    padding: 140px 0 0 0 !important;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    padding: 220px 0 0 0;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 40px;
    padding: 160px 0 0 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 100px;
    padding: 180px 0 0 0;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 140px 0 0 0;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 140px;
    padding: 150px 0 0 0;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 180px 0 0 0;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    gap: 140px;
    padding: 200px 0 0 0;
  }
`

const ZoomIn = keyframes`
  0% {
    transition: 0.5s;
    transform: translateY(10%);
  }

  100% {
    transition: 0.5s;
    transform: translateY(0%);
  }
`

const Zoomout = keyframes`
  0% {
    transition: 0.5s;
    transform: translateY(0%);
  }
  100% {
    transition: 0.5s;
    transform: translateY(10%);
  }
`

export const BodyWrap = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  flex-direction: column;
  gap: 108px;
  display: flex;
  align-items: center;
  animation-duration: 1s;
  animation-name: ${(props) =>
    (props?.display === 'first' && ZoomIn) ||
    (props?.display === 'second' && Zoomout)};
  animation-timing-function: ease;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    gap: 40px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    gap: 100px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1180px) {
    gap: 140px;
  }
  @media only screen and (max-width: 399px) {
  }
`
export const BodyComponent = styled.div`
  display: flex;

  gap: 42px;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 399px) {
    gap: 15px;
    padding: 0px 23px;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    gap: 20px;
    padding: 0px 23px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 15px;
    padding: 0px 30px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 15px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 12px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 25px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    gap: 20px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    gap: 30px;
  }
`

export const BodyTitle = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 480px) and (max-width: 991px) {
    display: none;
  }
  @media only screen and (max-width: 479px) {
    display: none;
  }
`

export const TitleContain = styled.div`
  display: none;

  @media only screen and (min-width: 480px) and (max-width: 991px) {
    width: 100%;
    gap: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 479px) {
    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const TitleImgContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 479px) {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`
export const Title1 = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media only screen and (min-width: 480px) and (max-width: 991px) {
    gap: 0px;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: center;
  }
`

export const TitleText = styled.div`
  font-family: Clash;
  font-weight: 600;
  font-size: 70px;
  color: white;
  text-align: right;

  @media only screen and (max-width: 399px) {
    font-size: 35px !important;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 45px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 45px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 60px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 55px;
  }
`
export const BodyContent = styled.div`
  font-family: Libre-Italic;
  color: white;
  font-size: 70px;
  display: flex;
  font-style: italic;
  font-weight: 400;
  text-align: center;
  @media only screen and (max-width: 399px) {
    font-size: 35px !important;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 45px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 45px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 55px;
  }
`
export const BodyContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 16px;
  font-family: sans-serif !important;

  @media only screen and (max-width: 399px) {
    gap: 15px;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    gap: 15px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 10px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 16px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 16px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 16px;
  }
`
export const HashButton = styled.button`
  cursor: pointer;
  height: 62px;
  padding: 0px 32px;
  font-weight: 600;
  font-size: 13px;
  border-radius: 120px;
  border: 1.5px solid rgba(31, 31, 31, 0.15);
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: radial-gradient(
    circle,
    rgba(160, 73, 252, 1) 0%,
    rgba(67, 0, 139, 1) 500%
  );
  transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;
  &:hover {
    border: 4px solid rgb(168 100 239);
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
    padding: 16px 30px;
  }

  @media only screen and (min-width: 992px) {
    padding: 0px 25px;
    font-size: 16px;
    height: 62px;
  }

  @media only screen and (max-width: 479px) {
    padding: 0px 28px;
    font-size: 14px;
    height: 52px;
  }
`

export const BodyDescription = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 440;
  text-align: center;
  @media only screen and (max-width: 399px) {
    font-size: 12px;
    font-weight: 440;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    font-size: 12px;
    font-weight: 440;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 12px;
  }
`
export const Span = styled.div``
export const Picturecomponent1 = styled.div`
  position: absolute;
  top: 55%;
  right: -60px;
  z-index: 1;
  width: 160px;

  @media only screen and (max-width: 399px) {
    width: 120px !important;
    position: absolute !important;
    right: -50px !important;
    top: 56%;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    width: 140px;
    position: absolute;
    bottom: 33px;
    right: -70px;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    top: 60%;
    right: -74px;
    z-index: 1;
    width: 150px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    top: 52%;
    right: -77px;
    z-index: 1;
    width: 150px;
  }
  @media only screen and (min-width: 991px) and (max-width: 1024px) {
    width: 100px;
    top: 54%;
    right: -40px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 140px;
    top: 65%;
    right: -60px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    width: 140px;
    top: 65%;
    right: -60px;
  }
`
export const Picturecomponent2 = styled.div`
  top: 24%;
  position: absolute;
  left: -60px;
  width: 160px;
  z-index: 1;

  @media only screen and (max-width: 399px) {
    width: 110px !important;
    top: 20%;
    position: absolute;
    left: -20%;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    width: 140px;
    top: 25%;
    position: absolute;
    left: -28%;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    top: 30%;
    left: -70px;
    z-index: 1;
    width: 150px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    top: 15%;
    left: -70px;
    z-index: 1;
    width: 150px;
  }
  @media only screen and (min-width: 991px) and (max-width: 1024px) {
    width: 100px;
    top: 22%;
    left: -40px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 140px;
    top: 35%;
    left: -70px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    width: 140px;
    top: 35%;
    left: -70px;
  }
`

export const PicHolder = styled.div`
  display: flex;
  gap: 8px;
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
export const MockImg = styled.div`
  bottom: 0px;
  position: absolute;
  display: flex;
  align-items: flex-end;
`

export const MobileImg = styled.div`
  animation-duration: 0.5s;

  animation-name: ${mockimgAnimate};
  animation-timing-function: ease;
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    display: none;
  }
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`

const ImageholdAnimate = keyframes`
  0% {
    transition: 0.1s;
    transform: translateY(200%);
  }

  100% {
    transition: 0.1s;
    transform: translateY(0%);
  }
`

const ImageholdAnimateReverse = keyframes`
  0% {
    transition: 0.1s;
    transform: translateY(0%);
  }

  100% {
    transition: 0.1s;
    transform: translateY(200%);
  }
`
export const ImageHold = styled.div`
  animation-timing-function: ease;
  animation-duration: 1.5s;
  animation-name: ${(props) =>
    (props?.animate === 'first' && ImageholdAnimate) ||
    (props?.animate === 'second' && ImageholdAnimateReverse)};
  ${
    '' /* height: 290px;
  width: 380px; */
  }
  height: 290px;
  width: 390px;
  position: absolute;
  bottom: 0px;
  z-index: 1;
  border-top-left-radius: 130px;
  border-top-right-radius: 130px;
  border-left: 2px solid #ead6fe1f;
  border-right: 2px solid #ead6fe1f;
  border-top: 2px solid #ead6fe1f;

  @media only screen and (max-width: 399px) {
    border-top-left-radius: 96px;
    border-top-right-radius: 96px;
    width: 260px;
    height: 210px;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    height: 240px;
    width: 290px;
    border-top-left-radius: 96px;
    border-top-right-radius: 96px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    height: 215px;
    width: 270px;
    border-top-left-radius: 96px;
    border-top-right-radius: 96px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 222px;
    width: 282px;
    border-top-left-radius: 96px;
    border-top-right-radius: 96px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    width: 268px;
    height: 210px;
    border-top-left-radius: 96px;
    border-top-right-radius: 96px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 311px !important;
    height: 247px !important;
    border-top-left-radius: 96px;
    border-top-right-radius: 96px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    height: 250px;
    width: 350px;
    border-top-left-radius: 96px;
    border-top-right-radius: 96px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    height: 250px;
    width: 350px;
    border-top-left-radius: 96px;
    border-top-right-radius: 96px;
  }
`
const ImageContainAnimate = keyframes`
  0% {
    transition: 0.1s;
    transform: translateY(200%);
  }

  100% {
    transition: 0.1s;
    transform: translateY(0%);
  }
`

const ImageContainAnimateReverse = keyframes`
  0% {
    transition: 0.1s;
    transform: translateY(0%);
  }

  100% {
    transition: 0.1s;
    transform: translateY(200%);
  }
`

export const Imagecontain = styled.div`
  animation-timing-function: ease;
  animation-name: ${(props) =>
    (props?.animate === 'first' && ImageContainAnimate) ||
    (props?.animate === 'second' && ImageContainAnimateReverse)};
  animation-duration: 1.75s;
  ${
    '' /* width: 550px;
  height: 360px; */
  }

  height: 360px;
  width: 550px;
  bottom: 0px;
  z-index: 1;
  position: absolute;
  border-left: 2px solid #ead6fe1f;
  border-right: 2px solid #ead6fe1f;
  border-top: 2px solid #ead6fe1f;
  border-top-left-radius: 165px;
  border-top-right-radius: 165px;

  @media only screen and (max-width: 399px) {
    width: 382px !important;
    height: 260px !important;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    width: 420px;
    height: 300px;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 400px !important;
    height: 280px !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 400px !important;
    height: 280px !important;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    width: 365px;
    height: 253px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 440px !important;
    height: 300px !important;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    height: 310px;
    width: 500px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    height: 310px;
    width: 500px;
  }
`

const showup = keyframes`
  0% {
    transition: 0.1s;
    transform: translateY(200%);
  }

  100% {
    transition: 0.1s;
    transform: translateY(0%);
  }
`
const showreverse = keyframes`
  0% {
    transition: 0.1s;
    transform: translateY(0%);
  }

  100% {
    transition: 0.1s;
    transform: translateY(200%);
  }
`
export const Animatewrap = styled.div`
  ${
    '' /* height: 430px;
  width: 700px; */
  }
  height: 440px;
  width: 750px;

  position: absolute;
  bottom: 0px;
  z-index: 1;
  border-top-left-radius: 178px;
  border-top-right-radius: 178px;
  border-left: 2px solid #ead6fe1f;
  border-right: 2px solid #ead6fe1f;
  border-top: 2px solid #ead6fe1f;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-name: ${(props) =>
    (props?.animate === 'first' && showup) ||
    (props?.animate === 'second' && showreverse)};

  @media only screen and (max-width: 399px) {
    width: 480px !important;
    height: 318px !important;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    height: 360px;
    width: 547px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    height: 340px;
    width: 534px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 340px;
    width: 534px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    width: 470px;
    height: 295px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 564px;
    height: 355px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    height: 370px;
    width: 650px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    height: 370px;
    width: 650px;
  }
`

const MockPicContainAnimate = keyframes`
0% {
  transition: 0.1s;
  transform: translateY(200%);
}

100% {
  transition: 0.1s;
  transform: translateY(0%);
}
`
export const MockPicContain = styled.div`
  width: 100%;
  // animation-duration: 0.3s;
  // animation-name: ${(props) =>
    props?.animate === 'first' && MockPicContainAnimate};
  animation-timing-function: ease;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  bottom: 0px;
`

export const ImageWrap = styled.div`
  ${
    '' /* height: 278px;
  width: 280px; */
  }
  height: 300px;
  width: 280px;

  position: absolute;
  bottom: 0px;
  animation-duration: 1.5s;
  animation-name: ${(props) =>
    (props?.animate === 'first' && mockimgAnimate) ||
    (props?.animate === 'first' && mockimgAnimateReverse)};
  animation-timing-function: ease;
  z-index: 1;

  @media only screen and (max-width: 399px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    width: 220px;
    height: 245px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    height: 245px !important;
    width: 200px !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 237px;
    height: 272px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    height: 300px;
    width: 240px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    height: 300px;
    width: 240px;
  }
`

export const MockMobileContain = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  @media only screen and (max-width: 479px) {
    width: 100%;
  }
`
export const InfluencerHolder = styled.div`
  width: 43px;
  height: 43px;
  @media only screen and (max-width: 399px) {
    width: 24px;
    height: 24px;
  }
  @media only screen and (min-width: 400px) and (max-width: 479px) {
    width: 32px;
    height: 32px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 36px;
    height: 36px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 37px;
    height: 37px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 32px;
    height: 32px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 38px;
    height: 38px;
  }
`

export const Spans = styled.span`
  font-family: sans-serif;
  font-style: italic;
  color: rgba(197, 143, 253, 1);
`
