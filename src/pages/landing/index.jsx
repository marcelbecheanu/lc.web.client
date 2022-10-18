import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Team from '../../components/Team';
import Services from '../../components/Services';
import Technologies from '../../components/Technologies';
import Work from '../../components/Work';
import Contacts from '../../components/Contacts';

import { Wrapper } from './style';

function Landing() {
  return (
    <>
      <Navbar/>
      <Wrapper>
        <Header/>
        <div style={{ width: "100%", height: "2px", backgroundColor: "white", marginTop: '-1px', zIndex: "9", position: 'relative'}}></div>
        <Technologies/>
        <Team/>
        <Services/>
        <Work/>
        <Contacts/>
      </Wrapper>
      <Footer/>
    </>
  );
}

export default Landing;
