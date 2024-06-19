import styled from 'styled-components'

export const ModalPortion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`

export const ModalWrapper = styled.div`
  padding: 40px 40px 100px 40px;
`

export const CancelButton = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: end;
`

export const IconModalImg = styled.div`
  display: flex;
  cursor: pointer;
`

export const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
`

export const PlayStoreIcon = styled.div`
  width: 26px;
  height: 26px;
`

export const LogoIcon = styled.div`
  height: 48px;
  width: 184px;
`

export const ScanContent = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0px 0px 0px 216px;
`

export const ScannerBox = styled.div`
  border: 0.92px solid #d7b3fe;
  border-radius: 18px;

  & div {
    padding: 8px;
  }
`

export const ScanInfo = styled.div``

export const CompaniesInfoOuter = styled.div`
  display: flex;
  border: 0.9px solid #d7b3fe;
  border-radius: 25px;
  height: 80px;
`

export const CompaniesInfoInner = styled.div`
  display: flex;
  padding: 0 24px;
  gap: 16px;
  align-items: center;
`

export const UpTrendsArrow = styled.div`
  & div {
    width: 20px;
    height: 20px;
  }
`

export const TrendsText = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 440;
  line-height: 24px;
  text-align: left;
  text-align: left;
  max-width: 240px;
`

export const BrandsLogo = styled.div`
  max-width: 236px;
  width: 100%;
`

export const StarIcon = styled.div`
  & div {
    width: 20px;
    height: 20px;
  }
`

export const AvailableSource = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 15px;

  & div {
    display: flex;
    align-items: center;
  }
`

export const SourceInfo = styled.div`
  border: 1.35px solid #1f1f1f26;
  border-radius: 108px;
  align-items: center;
  justify-content: center;
  height: 62px;
  width: 240px;
  padding: 0 25px;
  gap: 8px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  color: #1f1f1f;
  transition: border 1s ease;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 4px 17px 0px,
      #dddddd 0px 0px 0px 3px;
    background: #fffcfc;
  }
`
