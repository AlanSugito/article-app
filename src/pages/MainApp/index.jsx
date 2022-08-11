import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer, ConfirmModal } from '../../components'
import { useSelector } from 'react-redux'

const MainApp = () => {

  const {isVisible} = useSelector(state => state.globalReducer)

  return (
    <>
      { isVisible && <ConfirmModal />}
    <Navbar />
        <Outlet />
    <Footer />
    </>
  )
}

export default MainApp