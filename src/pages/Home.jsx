import React from 'react'
import Hero from '../component/Hero'
import IELTSFeatures from '../component/IELTSFeatures'
import ProgressTrackingSection from '../component/ProgressTracking'
import WhereYouStandSection from '../component/WhereYouStandSection'
import Learner from '../component/Learner'
import Plan from '../component/Plan'
import CTASection from '../component/CTASection'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className="">
        <Hero/>
       <IELTSFeatures/>
       <ProgressTrackingSection/>
       <WhereYouStandSection/>
       <Learner/>
       <Plan/>
       <CTASection/>
      <Footer/>
    </div>
  )
}

export default Home