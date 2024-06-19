import styled from 'styled-components'

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :first-child {
    font-family: Libre-Bold;
    font-size: 60px;
    font-weight: 700;
    line-height: 73.8px;
    letter-spacing: -0.01em;
    text-align: center;
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
    flex-direction: column;
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

export const ContactPortionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  @media only screen and (max-width: 479px) {
    padding: 0 17px;
    gap: 28px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    padding: 0 20px;
    gap: 28px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0 20px;
    gap: 28px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 0 20px;
    gap: 28px;
  }
`

export const ContactTitlecontent = styled.div`
  font-family: Libre-Italic;
  font-size: 60px;
  font-style: italic;
  font-weight: 400;
  line-height: 73.8px;
  letter-spacing: -0.01em;
  text-align: right;
  color: #1f1f1f;
  @media only screen and (max-width: 479px) {
    font-size: 32px;
    line-height: 39.36px;
    text-align: center;
    gap: 16px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 42px;
    line-height: 39.36px;
    text-align: center;
    gap: 16px;
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
    gap: 16px;
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

export const ContactDescription = styled.div`
  display: flex;
  color: rgba(31, 31, 31, 1);
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 440;
  line-height: 25px;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  & span {
    font-family: sans-serif;
    font-size: 16px;
    font-style: italic;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
    color: rgba(160, 73, 252, 1);
  }
  @media only screen and (max-width: 479px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 16px;
    & span {
      font-style: normal;
      font-size: 10px;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 16px;
    & span {
      font-size: 10px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 16px;
    & span {
      font-size: 10px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    font-size: 10px;
    font-weight: 440;
    line-height: 16px;
    & span {
      font-size: 10px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 14px;
    font-weight: 440;
    line-height: 14px;
    & span {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 1441px) and (max-width: 1600px) {
    font-size: 14px;
    font-weight: 440;
    line-height: 14px;
    & span {
      font-size: 14px;
    }
  }
`

export const ContactTitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 479px) {
    gap: 16px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    gap: 16px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 20px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    gap: 20px;
  }
`

export const ContactButton = styled.div`
  display: flex;
  cursor:pointer;
  justify-content: center;
  align-items: center;
  height:62px;
  box-sizing: border-box;
  border: 1.5px solid rgba(31, 31, 31, 0.15);
  padding: 0px 34px 0px 42px;
  border-radius: 120px;
  gap: 8px;
  background: none;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  width: fit-content;
background: rgb(160,73,252);
background: radial-gradient(circle, rgba(160,73,252,1) 0%, rgba(67,0,139,1) 500%);
  transition:
    box-shadow 0.5s ease-in-out,
    transform 0.5s ease-in-out;

  &:hover {
    border: 4px solid rgba(160, 73, 252, 1);
    transform: scale(1.02);
  }

  @media only screen and (max-width: 479px) {
    font-size: 12px;
    font-weight: 600;
    line-height: 26px;
    height: 52px;
    padding: 0px 28px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
    font-weight: 600;
    line-height: 26px;
    height: 52px;
    padding: 0px 28px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px)
    height:52px;
    padding: 0px 28px;
  }
`
