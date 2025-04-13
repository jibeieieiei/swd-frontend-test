'use client'
import React, { useState } from 'react'
import styles from '.././page.module.css'
import '../styles/shape.css'
import { Button, ConfigProvider } from 'antd'
import { useTranslation } from 'react-i18next'

const Layout = () => {
  const { t } = useTranslation()
  const [shapes, setShapes] = useState([
    'square',
    'circle',
    'oval',
    'trapezoid',
    'rectangle',
    'parallelogram',
  ])
  const [position, setPosition] = useState(true)

  const displayShapes = (shape: string) => {
    switch (shape) {
      case 'square':
        return <div className="square"></div>
      case 'circle':
        return <div className="circle"></div>
      case 'oval':
        return <div className="oval"></div>
      case 'trapezoid':
        return <div className="trapezoid"></div>
      case 'rectangle':
        return <div className="rectangle"></div>
      case 'parallelogram':
        return <div className="parallelogram"></div>
      default:
        return <div></div>
    }
  }

  const handleClickPosition = () => {
    setPosition(!position)
  }

  const handleClickPrevious = () => {
    setShapes((prev) => {
      const first = prev[0]
      const rest = prev.slice(1)
      return [...rest, first]
    })
  }

  const handleClickNext = () => {
    setShapes((prev) => {
      const last = prev[prev.length - 1]
      const rest = prev.slice(0, -1)
      return [last, ...rest]
    })
  }

  const shuffle = (array: string[]) => {
    const newArray = [...array]
    let i = newArray.length,
      j,
      temp
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1))
      temp = newArray[j]
      newArray[j] = newArray[i]
      newArray[i] = temp
    }
    return newArray
  }
  const handleRandomPosition = () => {
    setShapes(shuffle(shapes))
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverBg: '#FFA200',
            defaultBorderColor: '#FFFFFF',
            defaultHoverColor: '#000000',
            defaultHoverBorderColor: '#FFA200',
          },
        },
      }}
    >
      <div className={styles.page}>
        <span
          style={{
            position: 'absolute',
            fontSize: '32px',
            top: '20px',
            left: '40px',
          }}
        >
          {t('Layout & Style')}
        </span>
        <header className={styles.header}>
          <Button
            onClick={handleClickPrevious}
            className={styles.moveShapeButton}
          >
            <div className="triangle-left"></div>
            <span>{t('Move Shape')}</span>
          </Button>
          <Button
            onClick={handleClickPosition}
            className={styles.movePositionButton}
          >
            <div className="triangle-up"></div>
            <div className="triangle-down"></div>
            <span>{t('Move Position')}</span>
          </Button>
          <Button onClick={handleClickNext} className={styles.moveShapeButton}>
            <div className="triangle-right"></div>
            <span>{t('Move Shape')}</span>
          </Button>
        </header>
        <main className={styles.main}>
          <div className={styles.container}>
            <div
              style={{
                gridArea: position ? ' 1 / 2 / 2 / 5 ' : '1 / 1 / 2 / 4',
                display: 'flex',
                gap: '10px',
              }}
            >
              {shapes.slice(0, 3).map((item) => (
                <Button
                  key={item}
                  className={styles.boxShape}
                  onClick={handleRandomPosition}
                >
                  {displayShapes(item)}
                </Button>
              ))}
            </div>
            <div
              style={{
                gridArea: position ? ' 2 / 1 / 3 / 4 ' : '2 / 2 / 3 / 5',
                display: 'flex',
                gap: '10px',
              }}
            >
              {shapes.slice(3).map((item) => (
                <Button
                  key={item}
                  className={styles.boxShape}
                  onClick={handleRandomPosition}
                >
                  {displayShapes(item)}
                </Button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </ConfigProvider>
  )
}

export default Layout
