import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Team from '../../components/Team';
import Work from '../../components/Work';

import Services from '../../components/Services'

import { Wrapper } from './style';

function Landing() {
  return (
    <>
      <Navbar/>
      <Wrapper>
        <Header/>
        <div style={{ width: "100%", height: "2px", backgroundColor: "white", marginTop: '-1px', zIndex: "9", position: 'relative'}}></div>
        <Team/>
        <Services/>
        <Work/>
      </Wrapper>
      <Footer/>
    </>
  );
}

export default Landing;
