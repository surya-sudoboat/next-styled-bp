/* eslint-disable no-unused-vars */

import styled, { keyframes } from 'styled-components'

export const CategoryContainer = styled.section`
  height: 100%;
  width: 100%;
`

const ContainerZoomout = keyframes`
  0% {
    transition: 0.5s;
    transform: translateY(0%);
    opacity:1
  }
  100% {
    transition: 0.5s;
    opacity:0.4;
    transform: translateY(150%);
  }
`

const ContainerZoomin = keyframes`
0% {
  transition: 0.5s;
  opacity:0.4;
  transform: translateY(150%);
}

100% {
  transition: 0.5s;
  opacity:1;
  transform: translateY(0%);
}
`

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 140px 0px 200px 0px;
  flex-direction: column;
  position: relative;
  align-items: center;
  gap: 245px;
  max-width: 100%;
  background: #fdfaff;
  width: 100%;
  @media only screen and (max-width: 479px) {
    gap: 140px;
    padding: 90px 0px 120px 0px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 145px;
    padding: 130px 0px 125px 0px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 160px;
    padding: 130px 0px 130px 0px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 125px 0px 135px 0px;
    gap: 150px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 220px;
    padding: 120px 0px 135px 0px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    gap: 200px;
    padding: 120px 0px 135px 0px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    gap: 200px;
    padding: 120px 0px 135px 0px;
  }
`

const ComponentZoom = keyframes`
  0% {
    transition: 0.5s;
    transform: translateY(0%);
  }

  100% {
    transition: 0.5s;
    transform: translateY(20%);
  }
`
export const CategoryContent = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-name: ${(props) =>
    (props?.display === 'third' && ComponentZoom) ||
    (props?.display === 'fourth' && ZoomIn)};
  flex-direction: column;
  margin: 0;
  gap: 80px;

  @media only screen and (max-width: 479px) {
    gap: 40px;
    padding: 0px 17px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 40px;
    padding: 0px 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 60px;
    padding: 0px 25px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 40px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1199px) {
    gap: 80px;
    padding: 0px 30px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    gap: 50px;
    padding: 0px 30px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    gap: 40px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    gap: 40px;
  }
`

const ZoomIn = keyframes`
  0% {
    transition: 0.5s;
    transform: translateY(20%);
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
  animation-duration: 0.7s;
  &:focus {
    outline: none;
  }
  outline: none;

  animation-timing-function: ease;
  animation-name: ${(props) =>
    (props?.display === 'third' && ContainerZoomout) ||
    (props?.display === 'fourth' && ContainerZoomin)};
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
      font-size: 40px;
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
export const Titlecontent = styled.div`
  font-family: Libre-Italic;
  font-size: 60px;
  font-style: italic;
  font-weight: 400;
  line-height: 73.8px;
  letter-spacing: -0.01em;
  text-align: right;
  color: #16012d;

  @media only screen and (max-width: 479px) {
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
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 50px;
  }
`

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 51px;
  align-items: center;
  @media only screen and (max-width: 479px) {
    gap: 40px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 40px;
  }
  @media only screen and (min-width: 1025px) and (max -width: 1280px) {
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    gap: 40px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    gap: 40px;
  }
`

const BlueEfftect = keyframes`
0%{
  opacity:0.5;
}
100%{
  opacity:1;
}
`

const ButtonAnimate = (props) => keyframes`
${
  props?.display === 'fourth' &&
  ` 0% {
    transition:0.9s;
    gap:44px;
    column-gap: 164px;
  }
  50% {
    transition:0.9s;
    gap:36px;
    column-gap: 164px;
  }
  100% {
    transition:0.9s;
    gap:28px;
    column-gap: 164px;
  }`
}
${
  props?.display === 'third' &&
  ` 0% {
   transition:0.9s;
   gap:28px;
   column-gap: 164px;
 }
 50% {
   transition:0.9s;
   gap:40px;
   column-gap: 164px;
 }
 100% {
   transition:0.9s;
   gap:52px;
   column-gap: 164px;
 }`
}
`

const ButtonAnimateMobile = (props) => keyframes`

${
  props?.display === 'fourth' &&
  `0% {
  transition:0.9s;
  gap:24px;
  column-gap: 10px;
}
50% {
  transition:0.9s;
  gap:20px;
  column-gap: 10px;
}
100% {
  transition:0.9s;
  gap:16px;
  column-gap: 10px;
}`
}
${
  props?.display === 'third' &&
  ` 0% {
   transition:0.9s;
   gap:16px;
   column-gap: 10px;
 }
 50% {
   transition:0.9s;
   gap:36px;
   column-gap: 10px;
 }
 100% {
   transition:0.9s;
   gap:46px;
   column-gap: 10px;
 }`
}
`
const ButtonAnimateLargeMobile = (props) => keyframes`

${
  props?.display === 'fourth' &&
  `0% {
  transition:0.9s;
  gap:24px;
  column-gap: 20px;
}
50% {
  transition:0.9s;
  gap:10px;
  column-gap: 20px;
}
100% {
  transition:0.9s;
  gap:16px;
  column-gap: 20px;
}`
}
${
  props?.display === 'third' &&
  ` 0% {
   transition:0.9s;
   gap:16px;
   column-gap: 20px;
 }
 50% {
   transition:0.9s;
   gap:36px;
   column-gap: 20px;
 }
 100% {
   transition:0.9s;
   gap:46px;
   column-gap: 20px;
 }`
}

`
const ButtonAnimateTab = (props) => keyframes`


${
  props?.display === 'fourth' &&
  `0% {
  transition:0.9s;
  gap:32px;
  column-gap: 30px;
}
50% {
  transition:0.9s;
  gap:38px;
  column-gap: 30px;
}
100% {
  transition:0.9s;
  gap:28px;
  column-gap: 30px;
}`
}
${
  props?.display === 'third' &&
  `0% {
  transition:0.9s;
  gap:20px;
  column-gap: 30px;
}
50% {
  transition:0.9s;
  gap:30px;
  column-gap: 30px;
}
100% {
  transition:0.9s;
  gap:40px;
  column-gap: 30px;
}`
}
`
const ButtonAnimateLaptop = (props) => keyframes`

${
  props?.display === 'fourth' &&
  `0% {
  transition:0.9s;
  gap:40px;
  column-gap: 24px;
}
50% {
  transition:0.9s;
  gap:32px;
  column-gap: 24px;
}
100% {
  transition:0.9s;
  gap:24px;
  column-gap: 24px;
} `
}
${
  props?.display === 'third' &&
  `0% {
  transition:0.9s;
  gap:24px;
  column-gap: 24px;
}
50% {
  transition:0.9s;
  gap:34px;
  column-gap: 24px;
}
100% {
  transition:0.9s;
  gap:44px;
  column-gap: 24px;
} `
} `
const ButtonAnimateNest = (props) => keyframes`

${
  props?.display === 'fourth' &&
  `0% {
  transition:0.9s;
  gap:48px;
  column-gap: 120px;
}
50% {
  transition:0.9s;
  gap:38px;
  column-gap: 120px;
}
100% {
  transition:0.9s;
  gap:28px;
  column-gap: 120px;
} `
}
${
  props?.display === 'third' &&
  `0% {
  transition:0.9s;
  gap:28px;
  column-gap: 120px;
}
50% {
  transition:0.9s;
  gap:38px;
  column-gap: 120px;
}
100% {
  transition:0.9s;
  gap:48px;
  column-gap: 120px;
} `
} `

export const BodyContent = styled.div`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-name: ${(props) => ButtonAnimate(props)};
  justify-content: center;
  align-items: center;
  column-gap: 164px;
  animation-duration: 1s;

  @media only screen and (max-width: 479px) {
    gap: 16px;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-name: ${(props) => ButtonAnimateMobile(props)};
    width: 100%;
    justify-content: center;
    column-gap: 10px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 16px;
    width: 95%;
    justify-content: center;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-name: ${(props) => ButtonAnimateLargeMobile(props)};
    column-gap: 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 20px;
    width: 85%;
    justify-content: center;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-name: ${(props) => ButtonAnimateTab(props)};
    column-gap: 30px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    gap: 24px;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-name: ${(props) => ButtonAnimateLaptop(props)};
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 16px;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-name: ${(props) => ButtonAnimateMobile(props)};
    width: 100%;
    justify-content: center;
    column-gap: 10px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    animation-name: ${(props) => ButtonAnimateNest(props)};
    column-gap: 120px;
    ${'' /* gap: 20px; */}
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    animation-name: ${(props) => ButtonAnimateNest(props)};
    column-gap: 120px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    animation-name: ${(props) => ButtonAnimateNest(props)};
    column-gap: 120px;
  }
`

const containerAnimation = (props) => keyframes`
${
  props?.display === 'fourth' &&
  `
  0% {
    transition: 0.5s;
    opacity:0.4;
    transform: translateY(550%);
  }

  100% {
    transition: 0.5s;
    opacity:1;
    transform: translateY(0%);
  }
  `
}
${
  props?.display === 'third' &&
  `
  0% {
    transition: 0.5s;
    opacity:0.4;
    transform: translateY(0%);
  }

  100% {
    transition: 0.5s;
    opacity:1;
    transform: translateY(550%);
  }
  `
}

`
export const CreatorButtonWrapper = styled.div`
  animation-duration: 1.2s;
  animation-timing-function: ease;
  animation-name: ${(props) => containerAnimation(props)};
`

const animatedButton = keyframes`
0% {
  transform: scale(5);
  opacity:0.5;
}
100% {
  transform: scale(1);
  opacity:2.5;
}
`

const animateIcon = keyframes`
0% {
  transform: translateX(-50%);
  opacity:0;
}
100% {
    transform: translateX(0%);
  opacity:1;
}
`
const animateIconFade = keyframes`
0% {
  transform: translateX(0%);
  opacity:1;
}
100% {
    transform: translateX(-50%);
  opacity:0;
}
`

export const ComponentName = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 440;
  line-height: 25px;
  text-align: left;
  animation-name: none;

  &:hover {
    animation-name: ${animatedButton};
  }
  @media only screen and (max-width: 479px) {
    font-size: 10px;
    line-height: 15.63px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    line-height: 15.63px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
    line-height: 20.63px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 14px;
  }
`

export const ContainerChipContainer = styled.div`
  padding: 0px 15px 0px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media only screen and (max-width: 479px) {
    padding: 0px 10px 0px 10px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    padding: 0px 10px 0px 10px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0px 12px 0px 12px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1199px) {
    padding: 0px 12px 0px 14px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 0px 10px 0px 10px;
  }
`

export const ContainerComponent = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
  gap: 8px;
  height: 60px;
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid #f3e7ff;
  justify-content: space-between;
  .arrow {
    animation: ${animateIconFade} 300ms ease-in-out;
    opacity: 0;
    width: 20px !important;
    height: 20px !important;
  }

  transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;

  &:hover {
    box-shadow: inset 0 0 0 3px #d7b3fe, 0px 5px 27px 0px #f3e7ff;
    animation-name: ${animatedButton};
    border: 1px solid #d7b3fe;
    background: #f0e6fb54;

    .arrow {
      animation: ${animateIcon} 300ms ease-in-out;
      opacity: 1;
    }
    transform: scale(1.02);
  }

  @media only screen and (max-width: 399px) {
    width: 135px !important;
    height: 40px;
    border: 0.63px solid #d7b3fe;
    border-radius: 7.5px;
  }

  @media only screen and (min-width: 399px) and (max-width: 479px) {
    border: 0.63px solid #d7b3fe;
    border-radius: 7.5px;
    width: 150px;
    height: 40px;
    justify-content: space-between;
    &:hover {
      box-shadow: inset 0 0 0 2px #d7b3fe, 0px 5px 27px 0px #f3e7ff;
      animation-name: ${animatedButton};
      border: 1px solid #d7b3fe;
      background: #f0e6fb54;
    }
    img {
      width: 15px;
      height: 15px;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    border: 0.63px solid #d7b3fe;
    border-radius: 7.5px;
    width: 175px;
    height: 40px;
    justify-content: space-between;
    img {
      width: 15px;
      height: 15px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    border: 0.63px solid #d7b3fe;
    border-radius: 7.5px;
    height: 45px;
    width: 200px;
    img {
      width: 15px;
      height: 15px;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1199px) {
    gap: 8px;
    width: 270px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    border: 0.63px solid #d7b3fe;
    border-radius: 7.5px;
    width: 175px;
    height: 40px;
    justify-content: space-between;
    img {
      width: 15px;
      height: 15px;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 240px;
    height: 50px;
    justify-content: space-between;
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 230px;
    height: 40px;
    justify-content: space-between;
    img {
      width: 18px;
      height: 18px;
    }
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    width: 230px;
    height: 40px;
    justify-content: space-between;
    img {
      width: 18px;
      height: 18px;
    }
  }
`

export const ArrowImage = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 479px) {
    display: flex;
    align-items: center;
    img {
      width: 12px;
      height: 12px;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: flex;
    align-items: center;
    img {
      width: 15px;
      height: 15px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }
  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
  }
  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
  }
`
export const ButtonName = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  @media only screen and (max-width: 479px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }
`

export const CategoryName = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  & div:nth-child(1) {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 991px) {
      width: 15px;
      height: 15px;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 4px;
  }
`
