import { cloneDeep } from 'lodash'

// Scroll cards down
const upWardMove = (
  cardIndex,
  setCurrentImaginCard,
  setStackkedCards,
  stackCards,
  setIsTitleCenter,
  setIsTitleGoingDown,
) => {
  const tempPos = cloneDeep(stackCards)
  switch (cardIndex) {
    case 2:
      tempPos[2].style = {
        ...tempPos[2].style,
        top: 585,
        width: 'calc(100% - 150px)',
        transition: 'all linear 0.5s',
        transform: 'translateY(80%)',
      }
      tempPos[1].style = {
        ...tempPos[1].style,
        top: 25,
        width: 'calc(100% - 120px)',
        // backgroundImage: "radial-gradient(rgb(160, 73, 252, 1), rgb(125 35 219))",
        transition: 'all linear 0.5s',
        transform: 'translateY(180%)',
      }
      tempPos[0].style = {
        ...tempPos[0].style,
        top: 5,
        width: 'calc(100% - 170px)',
        transition: 'all linear 0.5s',
        transform: 'translateY(20%)',
        display: 'block',
      }
      setTimeout(() => {
        tempPos[2].style = {
          ...tempPos[2].style,
          // backgroundImage: "linear-gradient(rgba(160, 73, 252, 0.6),rgba(89, 16, 166, 0.6))"
        }
      }, 100) // Delay in milliseconds, match the duration of the position change transition

      setCurrentImaginCard(cardIndex - 1)
      break
    case 1:
      tempPos[0].style = {
        ...tempPos[0].style,
        // backgroundImage: "radial-gradient(rgb(160, 73, 252, 1), rgb(125 35 219))",
        width: 'calc(100% - 150px)',
        top: 0,
        transition: 'top 0.5s ease, background 0.5s ease',
      }
      tempPos[1].style = {
        ...tempPos[1].style,
        top: 560,
        width: 'calc(100% - 120px)',
        transition: 'top 0.5s ease, background-image 1s ease',
      }
      tempPos[2].style = {
        ...tempPos[2].style,
        top: '140%',
        transform: 'translateY(150%)',
        transition: 'top 0.5s ease, transform 0.5s ease',
      }

      setTimeout(() => {
        tempPos[1].style = {
          ...tempPos[1].style,
          // backgroundImage: "linear-gradient(rgba(160, 73, 252, 0.7), rgba(89, 16, 166, 0.7))"
        }
      }, 500) // Delay in milliseconds, match the duration of the position change transition

      setCurrentImaginCard(cardIndex - 1)
      break
    case 0:
      tempPos[0].style = {
        ...tempPos[0].style,
        width: 'calc(100% - 50px)',
        transition: 'all linear 0.5s',
        top: '110%',
      }
      tempPos[1].style = {
        ...tempPos[1].style,
        top: '110%',
        transition: 'all linear 0.5s',
        width: 'calc(100% - 50px)',
      }
      setIsTitleGoingDown(true)
      setTimeout(() => {
        setIsTitleCenter(true)
      }, 500)
      break

    default:
      break
  }
  setStackkedCards(tempPos)
}

// Scroll cards up
const downWardMove = (
  cardIndex,
  setCurrentImaginCard,
  setStackkedCards,
  stackCards,
) => {
  const tempPos = cloneDeep(stackCards)
  switch (cardIndex) {
    case 1:
      tempPos[0].style = {
        ...tempPos[0].style,
        top: 5,
        width: 'calc(100% - 140px)',
        transition: 'all linear 0.5s',
      }
      tempPos[1].style = {
        ...tempPos[1].style,
        top: 25,
        // backgroundImage: "radial-gradient(rgb(160, 73, 252, 1), rgb(125 35 219))",
        width: 'calc(100% - 120px)',
        transition: 'all linear 0.5s',
        transform: 'translateY(-80%)',
      }
      tempPos[2].style = {
        ...tempPos[2].style,
        top: 585,
        width: 'calc(100% - 50px)',
        transition: 'all linear 0.5s',
        // backgroundImage: "linear-gradient(rgba(160, 73, 252, 0.6),rgba(89, 16, 166, 0.6))",
        transform: 'translateY(-200%)',
        display: 'block',
      }
      setCurrentImaginCard(cardIndex + 1)
      break
    case 2:
      tempPos[0].style = {
        ...tempPos[0].style,
        top: 15,
        transition: 'all linear 0.5s',
        width: 'calc(100% - 170px)',
      }
      tempPos[1].style = {
        ...tempPos[1].style,
        top: 35,
        width: 'calc(100% - 140px)',
      }
      tempPos[2].style = {
        ...tempPos[2].style,
        top: 55,
        transition: 'all linear 0.5s',
        // backgroundImage:"radial-gradient(rgb(160, 73, 252), rgb(125, 35, 219))",
        transform: 'translateY(-80%)',
        width: 'calc(100% - 120px)',
      }
      setCurrentImaginCard(cardIndex + 1)
      break
    default:
      break
  }
  setStackkedCards(tempPos)
  if (cardIndex < 2) {
    setCurrentImaginCard(cardIndex + 1)
  }
}

export { upWardMove, downWardMove }
