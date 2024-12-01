import React from 'react'
import Header from '../components/Header'
import Bgslider from '../components/Bgslider'
import Upload from '../components/Upload'

const Home = () => {
  return (
    <div>
        <Header />
         <Steps />
         <Bgslider />
          <Testimonials />
          <Upload/>
    </div>
  )
}

export default Home