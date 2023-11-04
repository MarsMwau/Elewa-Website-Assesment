import React from 'react'
import Introduction from './Introduction'
import Mission from './Mission';
import Footer from '../../components/Footer';
import Team from './Team';
import CultureValues from './CultureValues';
import MapLocation from './mapLocation';
import History from './History';

const MainAbout: React.FC<{}> = () => {
  return (
    <>
    <Introduction />
    <Mission />
      <Team />
      <CultureValues />
      <MapLocation />
      <History />
      <Footer />
    </>
  )
}

export default MainAbout