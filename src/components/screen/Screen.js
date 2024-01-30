import React from 'react'
import '../assets/css/screen/screen.css'
import Navbar from '../navigation/Navbar'
import Footer from '../navigation/Footer'

const Screen = (props) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='main-Page'>
        {props?.children}
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Screen