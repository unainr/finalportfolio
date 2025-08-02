import {Footer} from '@/components/layouts/Footer'
import Header2 from '@/components/layouts/Navbar'
import { LayoutProps } from '@/types'
import React from 'react'

const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <Header2/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
