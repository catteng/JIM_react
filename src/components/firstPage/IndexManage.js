import React, { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Game from './Game'
import Page1 from './Page1'
import GameOver from './GameOver'

const IndexManage = () => {
  const { part } = useParams()
  const { sum, setSum } = useOutletContext()
  const [gameOver, setGameOver] = useState(false)

  let currentPage = ''
  switch (part) {
    case 'firstPage':
      currentPage = <Page1 sum={sum} />
      break
    case 'gameover':
      currentPage = <GameOver sum={sum} />
      break
    default:
      currentPage = (
        <Game
          sum={sum}
          setSum={setSum}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      )
  }
  return <>{currentPage}</>
}

export default IndexManage
