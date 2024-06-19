/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */

/* eslint-disable no-nested-ternary */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import styles from '../pages/Home/home.module.css'
import { aboutDetails, mobileImages } from './constants'
import {
  AboutContent,
  BodyContent,
  Button,
  ResponseWrapper,
  EndContent,
  Count,
  Description,
  AboutImageContainer,
  DescriptionContent,
  DescriptionTitle,
  InformationContainer,
  MobileImage,
  Hashtag,
  TitleContainer,
  Titlecontent,
} from './about.module'
import CommonButton from './commonButton'
import ScannerModal from './scannerModal'

const About = ({ position, imageindex, display }) => {
  const [previousContent, setPreviousContent] = useState()
  const [animate, setAnimate] = useState(false)
  const [openHashfameModal, setOpenHashfameModal] = useState(false)

  useEffect(() => {
    let data = previousContent
    setPreviousContent(display)
    if (data === 'third' && display === 'second') {
      setAnimate(true)
    } else {
      setAnimate(false)
    }
  }, [display])
  return (
    <AboutContent display={display}>
      {openHashfameModal && (
        <ScannerModal setOpenScannerModal={setOpenHashfameModal} />
      )}
      <TitleContainer display={display}>
        <div>With Hashfame</div>
        <Titlecontent>you can</Titlecontent>
      </TitleContainer>
      <BodyContent>
        <div className={styles.leftContent}>
          {aboutDetails.map((value, i) => {
            return (
              <div
                key={i}
                className={`${styles.contentItem}
                    ${
                      i === position.outIndex
                        ? position.outDirection === 'top'
                          ? styles.fadeOutFirst
                          : styles.fadeOutLast
                        : ''
                    }
                    ${
                      i === position.firstIndex
                        ? position.outDirection === 'top'
                          ? styles.firstContentUp
                          : styles.firstContentDown
                        : i === position.secondIndex
                        ? position.outDirection == 'top'
                          ? i === 3
                            ? styles.secondContentUpVisible
                            : styles.secondContentUp
                          : styles.secondContentDown
                        : ''
                    }
                     `}
              >
                {i !== 3 && (
                  <Hashtag className="text">
                    <img
                      src="/assets/aboutContentImages/hash.svg"
                      alt="hash"
                      width="100%"
                      height="100%"
                    />
                    <Count>{i + 1}</Count>
                  </Hashtag>
                )}
                {i !== 3 && (
                  <InformationContainer>
                    <Description>
                      <DescriptionTitle className="text">
                        <div>{value.descriptionTitle}</div>
                      </DescriptionTitle>
                      <DescriptionContent className="text">
                        <div>{value.description}</div>
                      </DescriptionContent>
                    </Description>
                    <CommonButton
                      image="/assets/aboutContentImages/arrow.svg"
                      alt="arrow"
                      text={value.buttonName}
                      type="influencer"
                      status="enabled"
                      arrowVisible={i === 0 ? 'true' : 'false'}
                      setOpenScannerModal={setOpenHashfameModal}
                    />
                  </InformationContainer>
                )}
                {i === 3 && (
                  <EndContent>
                    <img
                      src="/assets/aboutContentImages/rightArrow.svg"
                      alt="arrow"
                      width="100%"
                      height="100%"
                    />
                    <div>simple as that</div>
                  </EndContent>
                )}
              </div>
            )
          })}
        </div>
        <div className={styles.rightContent}>
          {mobileImages.map((value, i) => {
            return (
              <MobileImage key={i}>
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
                  className={`${
                    i === position?.firstIndex &&
                    position?.outDirection == 'top'
                      ? 'image-fade-in'
                      : ''
                  }
                            ${
                              i === position?.outIndex &&
                              position?.outDirection == 'top'
                                ? 'image-fade-out'
                                : ''
                            }
                            ${i === imageindex ? 'show_image' : 'hide_image'}
                          `}
                >
                  <AboutImageContainer>
                    <img
                      src={value}
                      alt="mobile"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </AboutImageContainer>
                </div>
              </MobileImage>
            )
          })}
        </div>
      </BodyContent>
      <ResponseWrapper>
        <div
          style={{ width: '100%', height: '220px' }}
          className={styles.rightContent}
        >
          {mobileImages.map((value, i) => {
            return (
              <MobileImage key={i} style={{ position: 'absolute' }}>
                <div
                  className={`${
                    i === position?.firstIndex &&
                    position?.outDirection == 'top'
                      ? 'image-fade-in'
                      : ''
                  }
                            ${
                              i === position?.outIndex &&
                              position?.outDirection == 'top'
                                ? 'image-fade-out'
                                : ''
                            }
                            ${i === imageindex ? 'show_image' : 'hide_image'}
                          `}
                >
                  <AboutImageContainer display={!animate && display}>
                    <img
                      src={value}
                      alt="mobile"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </AboutImageContainer>
                </div>
              </MobileImage>
            )
          })}
        </div>

        <div
          style={{
            width: '100%',
            gap: position.firstIndex === 2 ? '80px' : '40px',
          }}
          className={styles.leftContent}
        >
          {aboutDetails.map((value, i) => {
            return (
              <div
                key={i}
                style={{ flexDirection: 'column', gap: '16px' }}
                className={`${styles.contentItem}
                        ${
                          i === position?.outIndex
                            ? position.outDirection === 'top'
                              ? styles.fadeOutFirst
                              : styles.fadeOutLast
                            : ''
                        }
                        ${
                          i === position.firstIndex
                            ? position.outDirection === 'top'
                              ? styles.firstContentUp
                              : styles.firstContentDown
                            : i === position.secondIndex
                            ? position.outDirection == 'top'
                              ? i === 3
                                ? styles.secondContentUpVisible
                                : styles.secondContentUp
                              : styles.secondContentDown
                            : ''
                        }
                        `}
              >
                {i !== 3 && (
                  <Hashtag className="text">
                    <img
                      src="/assets/aboutContentImages/hash.svg"
                      alt="hash"
                      width="100%"
                      height="100%"
                    />
                    <Count>{i + 1}</Count>
                  </Hashtag>
                )}
                {i !== 3 && (
                  <InformationContainer>
                    <Description>
                      <DescriptionTitle className="text">
                        <div>{value.descriptionTitle}</div>
                      </DescriptionTitle>
                      <DescriptionContent className="text">
                        <div>{value.description}</div>
                      </DescriptionContent>
                    </Description>
                    <CommonButton
                      className="text"
                      image="/assets/aboutContentImages/arrow.svg"
                      alt="arrow"
                      text={i !== 0 ? 'Get & Connect' : value.buttonName}
                      type="influencer"
                      status="enabled"
                      arrowVisible={i === 0 ? 'true' : 'false'}
                      setOpenScannerModal={setOpenHashfameModal}
                    />
                  </InformationContainer>
                )}
                {i === 3 && (
                  <EndContent>
                    <img
                      src="/assets/aboutContentImages/rightArrow.svg"
                      alt="arrow"
                      width="100%"
                      height="100%"
                    />
                    <div>simple as that</div>
                  </EndContent>
                )}
              </div>
            )
          })}
        </div>
      </ResponseWrapper>
    </AboutContent>
  )
}

export default About
