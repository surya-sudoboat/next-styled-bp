/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable react/display-name */
import React, { useEffect, forwardRef, useRef, useState } from 'react'
import cloneDeep from 'lodash'
import imagine from '../pages/Home/imagine.module.css'
import styles from '../pages/Home/home.module.css'
import {
  ImagineCardsContent,
  ImagineContainer,
  ImagineTitle,
  ImagineCardWrapper,
  ImagineCardBox,
  ImagineTextContent,
  ImagineSubTitle,
  ImagineDescription,
  ImagineExploreButton,
  ImagineImage,
  ImagineMobileContainer,
  ImagineCard,
  ImaginImageContainer,
} from './imagineCards.module'
import { imagineImages } from './constants'
import { AboutContent, MobileImage, ResponseWrapper } from './about.module'
import CommonButton from './commonButton'

const ImagineCards = ({
  isTitleGOingDownWithCard,
  stackCards,
  position,
  isTitleCenter,
  isTitleGoingDown,
  imageindex,
  display,
}) => {
  const [previousContent, setPreviousContent] = useState()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    let data = previousContent
    setPreviousContent(display)
    if (data === 'fourth' && display === 'third') {
      setAnimate(true)
    } else {
      setAnimate(false)
    }
  }, [display])

  return (
    <ImagineContainer display={display}>
      <div
        className={`${imagine.title}
    ${isTitleCenter ? imagine.titleCenter : imagine.titleTop}
    ${isTitleGoingDown ? imagine.goTitleToDown : ''}`}
      >
        <ImagineTitle>
          Imagine a <span>place</span>
        </ImagineTitle>
      </div>
      {!isTitleCenter && (
        <div className={imagine.cardContainer}>
          <div
            className={imagine.cardsWrapper}
            style={{ position: 'relative' }}
          >
            {stackCards?.map((_x, index) => {
              const cardClasses = `${imagine.card1} ${
                !isTitleCenter && imagine.card1Come
              } ${isTitleGoingDown ? styles.cardGoDown : ''} `
              return (
                <div key={index} style={_x.style} className={cardClasses}>
                  <ImagineCardWrapper>
                    <ImagineTextContent>
                      <ImagineSubTitle>{_x.subTitle}</ImagineSubTitle>
                      <ImagineDescription>{_x.description}</ImagineDescription>
                      <ImagineExploreButton details={_x.buttonText}>
                        <CommonButton
                          image="/assets/imagineCard/rightArrow.svg"
                          alt="arrow"
                          text={_x.buttonText}
                          type="imagine"
                          status={
                            _x.buttonText !== 'Coming Soon'
                              ? 'disabled'
                              : 'enabled'
                          }
                          arrowVisible={
                            _x.buttonText !== 'Coming Soon' ? 'true' : 'false'
                          }
                        />
                      </ImagineExploreButton>
                    </ImagineTextContent>
                    <ImagineImage>
                      <img src={_x.imgSrc} alt="Imagine" />
                    </ImagineImage>
                  </ImagineCardWrapper>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <ResponseWrapper>
        <ImagineTitle>
          Imagine a <span>place</span>
        </ImagineTitle>
        <div
          style={{ width: '100%', height: '220px' }}
          className={`${styles.leftContent} ${
            display === 'third' && !animate ? imagine.animatePic : ''
          }`}
        >
          {imagineImages?.map((value, i) => {
            return (
              <MobileImage key={i} style={{ position: 'absolute' }}>
                <div
                  className={`
                  ${
                    i === position?.firstIndex &&
                    position?.outDirection == 'top'
                      ? 'show-image-scale-up'
                      : ''
                  }
                  ${
                    i === position?.outIndex && position?.outDirection == 'top'
                      ? 'hide-image-scale-up'
                      : ''
                  }
                  ${i === position?.firstIndex ? 'show_image' : 'hide_image'}
                  ${
                    i === position?.firstIndex &&
                    position?.outDirection == 'bottom'
                      ? 'down-show-image-scale-down'
                      : ''
                  }
                  ${
                    i === position?.secondIndex &&
                    position?.outDirection == 'bottom'
                      ? 'down-hide-image-scale-down'
                      : ''
                  }
                   `}
                >
                  <ImaginImageContainer>
                    <img
                      src={value}
                      alt="mobile"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </ImaginImageContainer>
                </div>
              </MobileImage>
            )
          })}
        </div>
        <div
          style={{ width: '100% !important', gap: '40px' }}
          className={`${styles.leftContent} ${
            display === 'third' && !animate ? imagine.animatePic : ''
          }`}
        >
          {stackCards?.map((_x, i) => {
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
                          ? imagine.secondContentUpVisibleImagine
                          : styles.secondContentUp
                        : styles.secondContentDown
                      : ''
                  }
                  `}
              >
                <ImagineTextContent>
                  <ImagineSubTitle>{_x.subTitle}</ImagineSubTitle>
                  <ImagineDescription>{_x.description}</ImagineDescription>
                  <ImagineExploreButton details={_x.buttonText}>
                    <CommonButton
                      image="/assets/imagineCard/rightArrow.svg"
                      alt="arrow"
                      text={_x.buttonText}
                      type="imagineResponsive"
                      status={
                        _x.buttonText === 'Coming Soon' ? 'disabled' : 'enabled'
                      }
                      arrowVisible={
                        _x.buttonText !== 'Coming Soon' ? 'true' : 'false'
                      }
                    />
                  </ImagineExploreButton>
                </ImagineTextContent>
              </div>
            )
          })}
        </div>
      </ResponseWrapper>
    </ImagineContainer>
  )
}

export default ImagineCards
