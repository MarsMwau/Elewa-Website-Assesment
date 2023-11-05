import React from 'react'
import IntroInvest from './IntroInvest'
import InvestGlobal from './InvestGlobal'
import Footer from '../../components/Footer'
import InvestStatement from './InvestStatement'

// This is the main container for the Invest page
const MainInvest: React.FC<{}> = () => {
  return (
    <>
    <IntroInvest />
    <InvestGlobal />
    <InvestStatement />
    <Footer />
    </>
  )
}

export default MainInvest