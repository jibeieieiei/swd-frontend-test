'use client'
import React, { useState } from 'react'
import styles from '.././page.module.css'
import shapeStyles from '../styles/shape.module.css'
import { Button } from 'antd'

const Layout = () => {
  const [shapes, setShapes] = useState([
    'square',
    'circle',
    'oval',
    'trapezoid',
    'rectangle',
    'rhombus',
  ])

  const displayShapes = (shape: string) => {
    switch (shape) {
      case 'square':
        return <div>square</div>
      case 'circle':
        return <div>circle</div>
      case 'oval':
        return <div>oval</div>
      case 'trapezoid':
        return <div>trapezoid</div>
      case 'rectangle':
        return <div>rectangle</div>
      case 'rhombus':
        return <div>rhombus</div>
      default:
        return <div></div>
    }
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
  return (
    <div className={styles.page}>
      <header>
        <Button onClick={handleClickPrevious}>Move Shape</Button>
        <Button>Move Position</Button>
        <Button onClick={handleClickNext}>Move Shape</Button>
      </header>
      <main className={styles.main}>
        {shapes.map((item) => (
          <div key={item}>{displayShapes(item)}</div>
        ))}
      </main>
    </div>
  )
}

export default Layout
