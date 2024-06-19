/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import { Modal, Box } from '@mui/material'
import {
  ModalPortion,
  IconModalImg,
  CancelButton,
  LogoAndTitle,
  LogoIcon,
  ScanContent,
  ScannerBox,
  ScanInfo,
  CompaniesInfoOuter,
  CompaniesInfoInner,
  UpTrendsArrow,
  TrendsText,
  BrandsLogo,
  StarIcon,
  AvailableSource,
  SourceInfo,
  PlayStoreIcon,
  ModalWrapper,
} from './scannerModal.module'
import CommonButton from './commonButton'

const ScannerModal = ({ setOpenScannerModal }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '80px',
    outline: 'none',
    width: window.innerWidth > 1150 ? '1100px' : '850px',
  }
  return (
    <Modal
      open
      onClose={() => {
        setOpenScannerModal(false)
      }}
      style={{ backdropFilter: 'blur(5px)' }}
    >
      <Box sx={style} className="scanner-modal-transition">
        <ModalWrapper>
          <CancelButton>
            <IconModalImg
              className="cancel-button"
              onClick={() => {
                setOpenScannerModal(false)
              }}
            >
              <img
                src="/assets/commonImages/closeIcon.svg"
                alt="cancel"
                width="100%"
                height="100%"
              />
            </IconModalImg>
          </CancelButton>
          <ModalPortion>
            <LogoAndTitle>
              <LogoIcon>
                <img
                  src="/assets/scannerModal/logo.png"
                  alt="logo"
                  width="100%"
                  height="100%"
                />
              </LogoIcon>
            </LogoAndTitle>

            <ScanContent>
              <ScannerBox>
                <div>
                  <img
                    src="/assets/scannerModal/qr.svg"
                    alt="qr"
                    width="100%"
                    height="100%"
                  />
                </div>
              </ScannerBox>
              <ScanInfo>
                <img
                  src="/assets/scannerModal/scannerInfoDoodle.svg"
                  alt="scanInfo"
                  width="100%"
                  height="100%"
                />
              </ScanInfo>
            </ScanContent>

            <CompaniesInfoOuter>
              <CompaniesInfoInner>
                <UpTrendsArrow>
                  <div>
                    <img
                      src="/assets/scannerModal/upArrow.svg"
                      alt="up"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </UpTrendsArrow>
                <TrendsText>
                  Companies already benefiting from our app, including
                </TrendsText>
                <BrandsLogo>
                  <img
                    src="/assets/scannerModal/brands.png"
                    alt="brands"
                    width="100%"
                    height="100%"
                  />
                </BrandsLogo>
                <StarIcon>
                  <div>
                    <img
                      src="/assets/scannerModal/star.svg"
                      alt="star"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </StarIcon>
              </CompaniesInfoInner>
            </CompaniesInfoOuter>

            <AvailableSource>
              <CommonButton
                image="/assets/scannerModal/appStore.svg"
                alt="appStore"
                text="Get from App Store"
                type="influencer"
                status="enabled"
                arrowVisible="false"
              />

              <CommonButton
                image="/assets/scannerModal/playStore.png"
                alt="playStore"
                text=" Get from Play Store"
                type="influencer"
                status="enabled"
                arrowVisible="false"
              />
            </AvailableSource>
          </ModalPortion>
        </ModalWrapper>
      </Box>
    </Modal>
  )
}

export default ScannerModal
