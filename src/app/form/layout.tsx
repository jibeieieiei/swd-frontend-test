'use client'
import React from 'react'
import store from './store'
import { Provider } from 'react-redux'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  )
}

export default Layout
