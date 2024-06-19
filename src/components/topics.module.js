import styled, { keyframes } from 'styled-components'

export const TopicBody = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
  margin: auto;

  @media only screen and (min-width: 320px) and (max-width: 479px) {
    gap: 40px;
    padding: 0 17px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 40px;
    padding: 0 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0 20px;
    gap: 40px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 0 20px;
    gap: 40px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 80px;
    padding: 0 30px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    gap: 80px;
    padding: 0 30px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    gap: 80px;
    padding: 0 30px;
  }
`

export const TopicChipContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 12px;
  row-gap: 32px;
  padding: 72px 0 0 0;

  @media only screen and (max-width: 479px) {
    gap: 6px;
    row-gap: 12px;
    padding: 28px 0 0 0;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 6px;
    row-gap: 12px;
    padding: 28px 0 0 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 6px;
    row-gap: 12px;
    padding: 28px 0 0 0;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 6px;
    row-gap: 12px;
    padding: 28px 0 0 0;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 10px;
    row-gap: 30px;
    padding: 60px 0 0 0;
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

const fadeInLeft = keyframes`
0% {
    transform: translateX(0%);
    opacity:1;
}
  100% {
    opacity:0;
    transform: translateX(100%);
  }
`

const fadeInRight = keyframes`
0% {
    transform: translateX(100%);
    opacity:0;
  }
  100% {
    opacity:1;
    transform: translateX(0%);
  }
`
const fadeInIconRight = keyframes`
0% {
    transform: translateX(-100%);
    opacity:0;
  }
  100% {
    opacity:1;
    transform: translateX(0%);
  }
`
const fadeOutIconRight = keyframes`
0% {
    transform: translateX(0%);
    opacity:1;
  }
  100% {
    opacity:0;
    transform: translateX(-100%);
  }
`
export const TopicChipHolder = styled.div`
  padding: 15px 16px;
  display: flex;
  gap: 10px;
  align-items: center;
  .arrowanimate {
    animation: ${fadeOutIconRight} 300ms ease-in-out;
    opacity: 0;
    position: absolute;
  }
  .iconanimate {
    animation: ${fadeInRight} 300ms ease-in-out;
    opacity: 1;
    position: absolute;
  }
  &:hover {
    .arrowanimate {
      animation: ${fadeInIconRight} 300ms ease-in-out;
      opacity: 1;
      position: absolute;
    }
    .iconanimate {
      animation: ${fadeInLeft} 300ms ease-in-out;
      opacity: 0;
      position: absolute;
    }
  }
  @media only screen and (max-width: 479px) {
    padding: 10px !important;
    & div {
      width: 14px;
      height: 14px;
    }
  }
  & div {
    width: 24px;
    height: 24px;
    @media only screen and (max-width: 479px) {
      width: 14px;
      height: 14px;
    }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
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
    @media only screen and (min-width: 992px) and (max-width: 1024px) {
      width: 20px;
      height: 20px;
    }
  }

  @media only screen and (max-width: 479px) {
    padding: 10px !important;
    & div {
      width: 14px;
      height: 14px;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    padding: 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 10px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 10px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 10px 11px;
  }
`
export const TopicChip = styled.div`
  display: flex;
  border: 1px solid rgba(243, 231, 255, 1);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  block-size: fit-content;
  font-family: sans-serif;
  font-size: 16px;
  cursor: pointer;
  font-weight: 440;
  line-height: 25px;
  transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;
  &:hover {
    box-shadow: inset 0 0 0 3px #d7b3fe, 0px 5px 27px 0px #f3e7ff;
    transform: scale(1.02);
    border: 1px solid #d7b3fe;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  @media only screen and (max-width: 479px) {
    font-size: 10px;
    font-weight: 440;
    &:hover {
      box-shadow: inset 0 0 0 2px #d7b3fe, 0px 5px 27px 0px #f3e7ff;
      transform: scale(1.02);
      border: 1px solid #d7b3fe;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
    }
    line-height: 15.63px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 15.63px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 15.63px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 15.63px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px !important;
    line-height: 14px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px !important;
    line-height: 14px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 14px !important;
    line-height: 14px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 14px !important;
    line-height: 14px;
  }
`
