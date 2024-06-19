import React from 'react'
import { ButtonWrap } from './commonButton.module'

const CommonButton = ({
  image,
  alt,
  text,
  type,
  status,
  arrowVisible,
  setOpenScannerModal,
}) => {
  let border
  let mobileBorder
  let color
  let bg
  let hoverBg
  let hoverBorder
  let hoverShadow
  let hoverColor
  let cursor
  let padding

  if (type === 'influencer') {
    border = '1.5px solid rgba(31, 31, 31, 0.15)'
    mobileBorder = '0.9px solid rgba(31, 31, 31, 0.15)'
    color = status === 'disabled' ? 'rgba(31, 31, 31, 0.4)' : 'black'
    bg = 'none'
    hoverBg = status === 'disabled' ? 'none' : '#fffcfc'
    cursor = status === 'disabled' ? 'not-allowed' : 'pointer'
    hoverShadow =
      status !== 'disabled'
        ? 'rgba(100, 100, 111, 0.2) 0px 4px 9px 0px, #dddddd 0px 0px 0px 3px'
        : 'none'
    padding =
      alt === 'playStore' || alt === 'appStore' ? '0 25px' : '0px 34px 0px 42px'
  } else if (type === 'imagine') {
    border = 'none'
    mobileBorder = 'none'
    color =
      arrowVisible === 'true'
        ? '#5910A6 !important'
        : 'rgba(215,179,254,1) !important'
    hoverColor =
      status === 'disabled'
        ? '#5910A6 !important'
        : 'rgba(215,179,254,1) !important'
    bg =
      status === 'disabled'
        ? 'rgba(243,231,255,1)'
        : 'rgba(243, 231, 255, 0.12)'
    hoverBg = 'rgba(243,231,255,1)'
    hoverShadow =
      'rgba(100, 100, 111, 0.2) 0px 4px 17px 0px, rgba(215,179,254,1) 0px 0px 0px 4px'

    cursor = status === 'disabled' ? 'pointer' : 'not-allowed !important'
  } else if (type === 'imagineResponsive') {
    border = 'none'
    mobileBorder = 'none'
    color =
      arrowVisible === 'true'
        ? '#5910A6 !important'
        : 'rgba(215,179,254,1) !important'
    hoverColor =
      status === 'disabled'
        ? 'rgba(215,179,254,1) !important'
        : '#5910A6 !important'
    bg =
      status === 'disabled'
        ? 'rgba(243,231,255,1)'
        : 'rgba(243, 231, 255, 0.12)'
    hoverBg = 'white'
    hoverShadow = 'none'

    cursor = status === 'disabled' ? 'pointer' : 'not-allowed !important'
  } else if (type === 'hashFame') {
    border = 'none'
    mobileBorder = 'none'
    color = 'rgba(255, 255, 255, 1)'
    bg =
      'radial-gradient(circle,rgba(160, 73, 252, 1) 0%,rgba(67, 0, 139, 1) 500%)'
    hoverShadow =
      'rgba(100, 100, 111, 0.2) 0px 4px 17px 0px, #D7B3FE 0px 0px 0px 4px'
    cursor = 'pointer'
    padding = '0 32px'
  }
  return (
    <ButtonWrap
      border={border}
      mobileBorder={mobileBorder}
      color={color}
      bg={bg}
      hoverBg={hoverBg}
      hoverBorder={hoverBorder}
      hoverShadow={hoverShadow}
      hoverColor={hoverColor}
      cursor={cursor}
      onClick={() =>
        (type === 'hashFame' && window.innerWidth > 991) ||
        (type === 'influencer' &&
          text !== 'Explore now' &&
          window.innerWidth > 991)
          ? setOpenScannerModal(true)
          : ''
      }
      padding={padding}
    >
      {(alt === 'appStore' || alt === 'playStore') && (
        <div>
          <img src={image} alt={alt} height="100%" width="auto" />
        </div>
      )}
      {text}
      {arrowVisible === 'true' && (
        <div>
          <img src={image} alt={alt} height="100%" width="auto" />
        </div>
      )}
    </ButtonWrap>
  )
}

export default CommonButton
