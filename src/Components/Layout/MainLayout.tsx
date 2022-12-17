import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode;
}

function MainLayout({children}: Props) {
  return (
    <>
        {children}
        <Footer/>
    </>
  )
}

export default MainLayout;
