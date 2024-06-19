/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react'
import {
  HeroContent,
  MaincontainerWrap,
  MockImg,
  MockPicContain,
  BodyWrap,
  BodyComponent,
  BodyTitle,
  Title1,
  TitleText,
  MockMobileContain,
  ImageWrap,
  BodyContent,
  BodyContentWrap,
  HashButton,
  BodyDescription,
  ImageHold,
  Imagecontain,
  Animatewrap,
  Picturecomponent1,
  Picturecomponent2,
  TitleContain,
  Spans,
  TitleImgContain,
  PicHolder,
  InfluencerHolder,
} from './hero.module'
import '../pages/Home/home.module.css'

import ScannerModal from './scannerModal'
import CommonButton from './commonButton'

const Hero = forwardRef((display, ref) => {
  const [openScannerModal, setOpenScannerModal] = useState(false)

  return (
    <HeroContent className="wrapper-hero" ref={ref}>
      {openScannerModal && (
        <ScannerModal setOpenScannerModal={setOpenScannerModal} />
      )}

      <MaincontainerWrap>
        <BodyWrap display={display?.display}>
          <BodyComponent>
            <BodyTitle>
              <Title1>
                <TitleText className="web-title">WORK WITH</TitleText>
                <PicHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer1.svg"
                      alt="firstImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer2.svg"
                      alt="secondImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer3.svg"
                      alt="thirdImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                </PicHolder>
              </Title1>
              <Title1>
                <PicHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer4.svg"
                      alt="fouthImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer5.svg"
                      alt="fifthImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer6.svg"
                      alt="sixthImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                </PicHolder>
                <BodyContent className="libre-caslon-condensed-italic">
                  verified influencers
                </BodyContent>
              </Title1>
            </BodyTitle>
            <TitleContain>
              <TitleImgContain>
                <PicHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer1.svg"
                      alt="firstImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer2.svg"
                      alt="secondImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer3.svg"
                      alt="thirdImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                </PicHolder>
                <PicHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer4.svg"
                      alt="fouthImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer5.svg"
                      alt="fifthImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                  <InfluencerHolder>
                    <img
                      src="/assets/HeroImages/influencer6.svg"
                      alt="sixthImage"
                      style={{ width: '100%' }}
                    />
                  </InfluencerHolder>
                </PicHolder>
              </TitleImgContain>
              <Title1>
                <TitleText>WORK WITH</TitleText>
                <BodyContent>verified influencers</BodyContent>
              </Title1>
            </TitleContain>
            <BodyContentWrap>
              <CommonButton
                image=""
                alt="arrow"
                text="Get HashFame Now"
                type="hashFame"
                status="enabled"
                arrowVisible="false"
                setOpenScannerModal={setOpenScannerModal}
              />
              <BodyDescription>
                an open community of 70K+ verified influencers where you can
                call or chat directly and it's <Spans> free for ever.</Spans>
              </BodyDescription>
            </BodyContentWrap>
          </BodyComponent>
        </BodyWrap>

        <MockPicContain animate={display?.display}>
          <MockMobileContain>
            <Animatewrap
              className="animatestring1"
              animate={display?.display}
            />
            <Imagecontain
              className="animatestring2"
              animate={display?.display}
            />
            <ImageHold className="animatestring3" animate={display?.display} />
            <ImageWrap className="animatemobile" animate={display?.display}>
              <MockImg>
                <img
                  src={'/assets/HeroImages/mobile.avif'}
                  alt="displayimage"
                  height="auto"
                  width="100%"
                />
              </MockImg>
              <Picturecomponent2>
                <img
                  src="/assets/HeroImages/whatsapp.svg"
                  alt="whatsapp"
                  height="auto"
                  width="100%"
                />
              </Picturecomponent2>
              <Picturecomponent1>
                <img
                  src="/assets/HeroImages/call.svg"
                  alt="call"
                  height="auto"
                  width="100%"
                />
              </Picturecomponent1>
            </ImageWrap>
          </MockMobileContain>
        </MockPicContain>
      </MaincontainerWrap>
    </HeroContent>
  )
})
export default Hero
