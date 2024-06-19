/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
/* eslint-disable eqeqeq */
/* eslint-disable no-compare-neg-zero */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { useEffect, useState, useRef } from 'react'
import { cloneDeep } from 'lodash'
import styles from './Home/home.module.css'
import { aboutDetails } from '../components/constants'
import { downWardMove, upWardMove } from '../components/animation'
import Hero from '../components/hero'
import Header from '../components/header'
import About from '../components/about'
import CreatorCategories from '../components/creatorCategories'
import Footer from '../components/footer'
import ImagineCards from '../components/imagineCards'
import { ImagineBackground } from '../components/imagineCards.module'

const HomePage = () => {
  const [showSecondDiv, setShowSecondDiv] = useState(false)
  const [hideSecondDiv, setHideSecondDiv] = useState(false)
  const [showThirdDiv, setShowThirdDiv] = useState(false)
  const [hideThirdDiv, setHideThirdDiv] = useState(false)
  const [showFourthDiv, setShowFourthDiv] = useState(false)
  const [hideFourthDiv, setHideFourthDiv] = useState(false)
  const [inDisplay, setInDisplay] = useState('first')
  const [innerEventsThird, setInnerEventsThird] = useState('notstarted')
  const [isTitleCenter, setIsTitleCenter] = useState(true)
  const [isTitleGoingDown, setIsTitleGoingDown] = useState(false)
  const [currentImaginCard, setCurrentImaginCard] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [innerEventsSecondDiv, setInnerEventsSecondDiv] =
    useState('notCompleted')
  const [imageIndex, setImageIndex] = useState(0)
  const [postionAnimate, setPosAnimate] = useState({
    firstIndex: 0,
    secondIndex: 1,
    outIndex: null,
    outDirection: 'top',
  })
  const [imagineIndex, setImagineIndex] = useState(0)
  const [imagineAnimate, setImagineAnimate] = useState({
    firstIndex: 0,
    secondIndex: 1,
    outIndex: null,
    outDirection: 'top',
  })
  const [backgroundImage, setBackgroundImage] = useState(
    'linear-gradient(rgba(160, 73, 252, 0.8),rgba(89, 16, 166, 0.8))',
  )
  const [stackCards, setStackkedCards] = useState([
    {
      name: 'card1',
      subTitle: 'For brands and agencies',
      description:
        '… want to search, connect, and collaborate with verified professional influencers all within Hashfame. Access their contact and have a direct call or chat with ease',
      imgSrc: '/assets/imagineCard/imagineImg1.avif',
      buttonText: 'Explore Now',
      style: {
        top: 0,
        width: 'calc(100% - 50px)',
        snapped: true,
        display: 'block',
        pos: 'absolute',
        boxShadow: '0px 30px 90px 0px #16012d29',
        borderRadius: '60px',
      },
    },
    {
      name: 'card2',
      subTitle: 'For Creators',
      description:
        '… want to connect with leading brands and agencies eager to collaborate with creators like you.. Increase your earning potential and build a strong reputation in the influencer space.',
      imgSrc: '/assets/imagineCard/imagineImg2.avif',
      buttonText: 'Coming Soon',
      style: {
        top: 560,
        width: 'calc(100% - 50px)',
        snapped: false,
        display: 'bloc',
        pos: 'absolute',
        boxShadow: '0px 30px 90px 0px #16012d29',
        borderRadius: '60px',
      },
    },
    {
      name: 'card3',
      subTitle: 'For Talent Managers',
      description:
        '... want to connect with top brands seeking collaborations with your influencer talent. Become a top rated talent manager within the platform and expand your network.',
      imgSrc: '/assets/imagineCard/imagineImg3.avif',
      buttonText: 'Explore Creators',
      style: {
        top: 0,
        width: '88%',
        snapped: false,
        display: 'none',
        pos: 'absolute',
        boxShadow: '0px 30px 90px 0px #16012d29',
        borderRadius: '60px',
      },
    },
    {
      name: 'card3',
      subTitle: 'For Talent Managers',
      description:
        '... want to connect with top brands seeking collaborations with your influencer talent. Become a top rated talent manager within the platform and expand your network.',
      imgSrc: '/assets/imagineCard/imagineImg3.avif',
      buttonText: 'Explore Creators',
      style: {
        top: 0,
        width: '88%',
        snapped: false,
        display: 'none',
        pos: 'absolute',
        boxShadow: '0px 30px 90px 0px #16012d29',
        borderRadius: '60px',
      },
    },
  ])

  useEffect(() => {
    const temp = cloneDeep(stackCards)
    if (showFourthDiv && inDisplay === 'fourth') {
      temp[0].style.top = 55
      temp[1].style.top = 55
    } else if (hideFourthDiv) {
      temp[0].style.top = 15
      temp[1].style.top = 35
    }
    setStackkedCards(temp)
  }, [showFourthDiv])
  useEffect(() => {
    let initialTouchY

    const handleTouchStart = (event) => {
      initialTouchY = event.touches[0].clientY
    }

    const handleScroll = (event) => {
      event.preventDefault()
      // Prevent handling scroll if still processing previous transition
      if (isScrolling) return
      // going to down
      if (event.type == 'wheel') {
        if (event.deltaY >= -0) {
          setIsScrolling(true)
          handleScrollDown()
        }
        // going to up
        else {
          setIsScrolling(true)
          handleScrollUp()
        }
      } else {
        // Handle cases without initial touch
        if (initialTouchY === undefined) return

        const currentTouchY = event.touches[0].clientY
        const swipeDistance = initialTouchY - currentTouchY

        if (swipeDistance > 0) {
          // going to down
          handleScrollDown(event)
        } else {
          // going to up
          handleScrollUp(event)
        }
        // Update initialTouchY for next touchmove (optional, prevents multiple calculations per touch)
        initialTouchY = currentTouchY
      }
    }

    if (inDisplay !== 'fourth') {
      window.addEventListener('wheel', handleScroll, { passive: false })
      window.addEventListener('touchmove', handleScroll, { passive: false })
    } else {
      window.addEventListener('wheel', handleScroll)
      window.addEventListener('touchmove', handleScroll)
    }
    window.onkeyup = function (e) {
      // setIsScrolling(true)
      e?.key === 'ArrowDown'
        ? handleScrollDown(e)
        : e?.key === 'ArrowUp' && handleScrollUp(e)
    }
    // window.onkeyup=function(e){
    //   handleScrollUp(e)
    // }
    window.addEventListener('touchstart', handleTouchStart)

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
      window.removeEventListener('touchstart', handleTouchStart)
    }
  }, [inDisplay, isScrolling])

  useEffect(() => {
    if (isScrolling) {
      const timer = setTimeout(() => setIsScrolling(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [isScrolling])

  /**
   * Handle Scroll towards bottom from top
   */
  const handleScrollDown = () => {
    if (inDisplay === 'first') {
      transitionToSecond()
    } else if (inDisplay === 'second') {
      if (innerEventsSecondDiv === 'completed') {
        transitionToThird()
      } else {
        handleSecondDivScrollingDown()
      }
    } else if (inDisplay === 'third') {
      if (window.innerWidth > 991) {
        setIsScrolling(true)
        handleThirdDivScrollingDown()
      } else {
        setIsScrolling(true)
        handleThirdDivMobileScrollingDown()
      }
    }
  }

  // Need to use If user need to come to third only while they pull
  let lastScrollTop = 0
  /**
   * Handle scroll towards top from bottom
   */
  const handleScrollUp = (e) => {
    if (inDisplay === 'third') {
      if (window.innerWidth > 991) {
        handleThirdDivScrollingUp()
      } else {
        setIsScrolling(true)
        handleThirdDivMobileScrollingUp()
      }
    } else if (inDisplay === 'second') {
      if (
        innerEventsThird === 'notstarted' &&
        postionAnimate.firstIndex === 0
      ) {
        transitionToFirst()
      } else {
        handleSecondDivScrollingUp()
      }
    } else if (inDisplay === 'fourth') {
      setIsScrolling(true)
      const fourthDiv = document.getElementsByClassName(`${styles.fourthDiv}`)
      const currentScrollTop = fourthDiv[0].scrollTop
      if (currentScrollTop === 0) {
        // Going up from fourth to third
        transitionToThirdFromFourth()
      } else {
      }
      lastScrollTop = currentScrollTop
    }
  }

  const handleThirdDivMobileScrollingDown = () => {
    setIsScrolling(true)
    if (innerEventsThird === 'completed') {
      transitionToFourth()
    } else {
      const tempPos = cloneDeep(imagineAnimate)
      let tempImgIndex = cloneDeep(imagineIndex)
      if (tempPos.secondIndex < stackCards.length - 1) {
        tempPos.outIndex = tempPos.firstIndex
        tempPos.firstIndex += 1
        tempPos.secondIndex += 1
        tempPos.outDirection = 'top'
        tempImgIndex += 1
        if (tempPos.secondIndex === stackCards.length - 1) {
          setInnerEventsThird('completed')
          setIsBottomVisible(true)
        }
        setImagineIndex(tempImgIndex)
        setImagineAnimate(tempPos)
      }
    }
  }

  const handleThirdDivMobileScrollingUp = () => {
    setIsScrolling(true)

    if (innerEventsThird === 'notstarted' && imagineAnimate.firstIndex === 0) {
      transitionToSecondFromThird()
    } else {
      const tempPos = cloneDeep(imagineAnimate)
      let tempImgIndex = cloneDeep(imagineIndex)
      if (tempPos.firstIndex > 0) {
        tempPos.outIndex = tempPos.secondIndex
        tempPos.firstIndex -= 1
        tempPos.secondIndex -= 1
        tempPos.outDirection = 'bottom'
        tempImgIndex -= 1
        if (tempPos.firstIndex === 0) {
          setInnerEventsThird('notstarted')
        }
        if (tempPos.secondIndex === 2) {
          setInnerEventsThird('notCompleted')
        }
        setImagineIndex(tempImgIndex)
        setImagineAnimate(tempPos)
      }
    }
  }

  /**
   * Handles Transition from first to second section
   */
  const transitionToSecond = () => {
    // Transition to second.....
    setIsScrolling(true)
    setInDisplay('second')
    setHideSecondDiv(false)
    setShowSecondDiv(true)
    // Transition completed to first to second
  }

  /**
   * Handles transition for third to second section
   */
  const transitionToSecondFromThird = () => {
    // Transition from third to second started.........
    setIsScrolling(true)
    setInDisplay('second')
    setHideThirdDiv(true)
    setShowThirdDiv(false)
    // Transition completed to second from third
  }

  /**
   * Handles transition for second to third section
   */
  const transitionToThird = () => {
    // Transition from second to third started.........
    setIsScrolling(true)
    setInDisplay('third')
    setHideThirdDiv(false)
    setShowThirdDiv(true)
    // Transition completed to second to third
  }

  /**
   * Handles transition to fourth from third
   */
  const transitionToFourth = () => {
    // Transition from Third to Fourth started.........
    setIsScrolling(true)
    setInDisplay('fourth')
    setHideFourthDiv(false)
    setShowFourthDiv(true)
    setIsBottomVisible(false)
    // Transition completed to Third to Fourt");
  }

  const [isBottomVisible, setIsBottomVisible] = useState(false)
  /**
   * Handles transition from fourth to third section
   */

  const transitionToThirdFromFourth = () => {
    setIsScrolling(true)
    setInDisplay('third')
    setHideFourthDiv(true)
    setShowFourthDiv(false)
    setTimeout(() => {
      setIsBottomVisible(true)
    }, 400)
  }

  /**
   * Handles traansition from second to first
   */
  const transitionToFirst = () => {
    setIsScrolling(true)
    setInDisplay('first')
    setHideSecondDiv(true)
    setShowSecondDiv(false)
  }

  /**
   * Handles the scroll inside the second division
   */
  const handleSecondDivScrollingDown = () => {
    setIsScrolling(true)
    const tempPos = cloneDeep(postionAnimate)
    let tempImgIndex = cloneDeep(imageIndex)
    if (tempPos.secondIndex < aboutDetails.length - 1) {
      tempPos.outIndex = tempPos.firstIndex
      tempPos.firstIndex += 1
      tempPos.secondIndex += 1
      tempPos.outDirection = 'top'
      tempImgIndex += 1
      if (tempPos.secondIndex === aboutDetails.length - 1) {
        setInnerEventsSecondDiv('completed')
      }
      setImageIndex(tempImgIndex)
      setPosAnimate(tempPos)
    }
  }

  /**
   * Handles second division scrolling top to down
   */
  const handleSecondDivScrollingUp = () => {
    setIsScrolling(true)
    const tempPos = cloneDeep(postionAnimate)
    let tempImgIndex = cloneDeep(imageIndex)
    if (tempPos.firstIndex > 0) {
      tempPos.outIndex = tempPos.secondIndex
      tempPos.firstIndex -= 1
      tempPos.secondIndex -= 1
      tempPos.outDirection = 'bottom'
      tempImgIndex -= 1
      if (tempPos.firstIndex === 0) {
        setInnerEventsSecondDiv('notstarted')
      }
      if (tempPos.secondIndex === 2) {
        setInnerEventsSecondDiv('notCompleted')
      }
      setImageIndex(tempImgIndex)
      setPosAnimate(tempPos)
    }
  }

  /**
   * Handle scrolling for third section top to bottom
   */
  const handleThirdDivScrollingDown = () => {
    if (innerEventsThird === 'notstarted' && currentImaginCard === 0) {
      // Title is in center Bring it up and 2 cards up
      setStackkedCards([
        {
          name: 'card1',
          subTitle: 'For brands and agencies',
          description:
            '… want to search, connect, and collaborate with verified professional influencers all within Hashfame. Access their contact and have a direct call or chat with ease',
          imgSrc: '/assets/imagineCard/imagineImg1.avif',
          buttonText: 'Explore Now',
          style: {
            top: 0,
            width: 'calc(100% - 50px)',
            snapped: true,
            display: 'block',
            pos: 'absolute',
            // background: "rgba(160, 78, 252, 1)",
            boxShadow: '0px 30px 90px 0px #16012d29',
            borderRadius: '60px',
          },
        },
        {
          name: 'card2',
          subTitle: 'For Creators',
          description:
            '… want to connect with leading brands and agencies eager to collaborate with creators like you.. Increase your earning potential and build a strong reputation in the influencer space.',
          imgSrc: '/assets/imagineCard/imagineImg2.avif',
          buttonText: 'Coming Soon',
          style: {
            top: 560,
            width: 'calc(100% - 50px)',
            snapped: false,
            display: 'bloc',
            pos: 'absolute',
            // background: "rgba(160, 88, 252, 1)",
            boxShadow: '0px 30px 90px 0px #16012d29',
            borderRadius: '60px',
          },
        },
        {
          name: 'card3',
          subTitle: 'For Talent Managers',
          description:
            '... want to connect with top brands seeking collaborations with your influencer talent. Become a top rated talent manager within the platform and expand your network.',
          imgSrc: '/assets/imagineCard/imagineImg3.avif',
          buttonText: 'Explore Creators',
          style: {
            top: 0,
            width: '88%',
            snapped: false,
            display: 'none',
            pos: 'absolute',
            // background: "rgba(160, 98, 252, 1)",
            boxShadow: '0px 30px 90px 0px #16012d29',
            borderRadius: '60px',
          },
        },
        {
          name: 'card3',
          subTitle: 'For Talent Managers',
          description:
            '... want to connect with top brands seeking collaborations with your influencer talent. Become a top rated talent manager within the platform and expand your network.',
          imgSrc: '/assets/imagineCard/imagineImg3.png',
          buttonText: 'Explore Creators',
          style: {
            top: 0,
            width: '88%',
            snapped: false,
            display: 'none',
            pos: 'absolute',
            // background: "rgba(160, 98, 252, 1)",
            boxShadow: '0px 30px 90px 0px #16012d29',
            borderRadius: '60px',
          },
        },
      ])
      setIsScrolling(true)
      setIsTitleGoingDown(false)
      setIsTitleCenter(false)
      setInnerEventsThird('notCompleted')
    } else if (currentImaginCard === 0) {
      setIsScrolling(true)
      // Second card will come to top
      downWardMove(1, setCurrentImaginCard, setStackkedCards, stackCards)
    } else if (currentImaginCard === 2) {
      // Third card will come to top;
      setIsScrolling(true)
      downWardMove(2, setCurrentImaginCard, setStackkedCards, stackCards)
      setInnerEventsThird('completed')
    } else if (innerEventsThird === 'completed') {
      // Inner Events Completed and going to fourth
      transitionToFourth()
    }
  }

  /**
   * Handle scrolling for bottom to top
   */
  const handleThirdDivScrollingUp = () => {
    if (innerEventsThird === 'notstarted' && currentImaginCard === 0) {
      if (!isTitleCenter) {
        setIsScrolling(true)
        upWardMove(
          0,
          setCurrentImaginCard,
          setStackkedCards,
          stackCards,
          setIsTitleCenter,
          setIsTitleGoingDown,
        )
        setInnerEventsThird('notstarted')
        setCurrentImaginCard(0)
      } else {
        setIsScrolling(true)
        transitionToSecondFromThird()
      }
    } else if (innerEventsThird === 'notCompleted' && currentImaginCard === 2) {
      setIsScrolling(true)
      upWardMove(1, setCurrentImaginCard, setStackkedCards, stackCards)
      setInnerEventsThird('notstarted')
    } else if (currentImaginCard === 3) {
      setIsScrolling(true)
      upWardMove(2, setCurrentImaginCard, setStackkedCards, stackCards)
      setInnerEventsThird('notCompleted')
      setCurrentImaginCard(2)
    } else if (currentImaginCard === 1 && innerEventsThird === 'notCompleted') {
      setIsScrolling(true)
      upWardMove(1, setCurrentImaginCard, setStackkedCards, stackCards)
      setInnerEventsThird('notstarted')
    } else if (innerEventsThird === 'notCompleted' && currentImaginCard === 0) {
      setIsScrolling(true)
      upWardMove(
        0,
        setCurrentImaginCard,
        setStackkedCards,
        stackCards,
        setIsTitleCenter,
        setIsTitleGoingDown,
      )
      setInnerEventsThird('notstarted')
      setCurrentImaginCard(0)
    }
  }

  const [background, setBackground] = useState(
    '#1f1f1f linear-gradient(rgba(160, 73, 252, 0.8), rgba(89, 16, 166, 0.8))',
  )

  useEffect(() => {
    const updateBackground = () => {
      const top0 = parseInt(stackCards[0].style.top, 10)
      const top1 = parseInt(stackCards[1].style.top, 10)
      const top2 = parseInt(stackCards[2].style.top, 10)

      let newBackground =
        '#1f1f1f linear-gradient(rgba(160, 73, 252, 0.8), rgba(89, 16, 166, 0.8))'

      if (top0 === 0) {
        newBackground =
          '#1f1f1f linear-gradient(rgba(160, 73, 252, 0.7), rgba(89, 16, 166, 0.7))'
      } else if (top1 === 25) {
        newBackground =
          '#1f1f1f linear-gradient(rgba(160, 73, 252, 0.6), rgba(89, 16, 166, 0.6))'
      } else if (top2 === 55) {
        newBackground =
          '#1f1f1f linear-gradient(rgba(160, 73, 252, 0.5), rgba(89, 16, 166, 0.5))'
      }

      setBackground(newBackground)
    }

    // Set an interval to check the positions and update the background
    const intervalId = setInterval(updateBackground, 100)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId)
  }, [stackCards])
  const targetDivRef = useRef(null)

  useEffect(() => {
    const targetDiv = targetDivRef.current

    if (targetDiv && inDisplay === 'fourth') {
      setTimeout(() => {
        targetDiv.focus()
      }, 1000)
    } else {
      targetDiv.blur()
    }
  }, [inDisplay])

  return (
    <div className={styles.container}>
      <Header display={inDisplay} />
      {/* --------------First section--------------- */}
      <div className={`${styles.firstDiv}`}>
        <Hero display={inDisplay} />
      </div>
      {/* --------------Second section--------------- */}
      <div
        className={`${styles.secondDiv} ${
          showSecondDiv ? styles.slideUp : ''
        } ${hideSecondDiv ? styles.slideDown : ''}`}
      >
        <About
          position={postionAnimate}
          imageindex={imageIndex}
          display={inDisplay}
        />
      </div>
      {/* --------------Third section--------------- */}
      <ImagineBackground
        background={background}
        className={`${styles.thirdDiv}
      ${showThirdDiv ? styles.slideUp : ''}
      ${hideThirdDiv ? styles.slideDown : ''}`}
      >
        <ImagineCards
          stackCards={stackCards}
          display={inDisplay}
          position={imagineAnimate}
          imageindex={imagineIndex}
          isTitleCenter={isTitleCenter}
          isTitleGoingDown={isTitleGoingDown}
        />
      </ImagineBackground>
      {/* -------------Fourth section--------------- */}
      <div
        className={`${styles.fourthDiv}
        ${
          innerEventsThird === 'completed'
            ? inDisplay === 'third'
              ? isBottomVisible && styles.bottomVisibleContainer
              : styles.bottomNotVisibleContainer
            : ''
        }
        ${showFourthDiv ? styles.slideUp : ''}
        ${hideFourthDiv ? styles.slideDown : ''}
        ${
          innerEventsThird === 'completed'
            ? inDisplay === 'third'
              ? styles.bottomVisibleContainer
              : styles.bottomNotVisibleContainer
            : ''
        }
        `}
      >
        <CreatorCategories display={inDisplay} ref={targetDivRef} />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
