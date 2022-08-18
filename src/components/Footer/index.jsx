import { Wrapper } from './style';

import github from '../../assets/svg/icons/github.svg';
import linkedin from '../../assets/svg/icons/linkedin.svg';


function Footer() {
  return (
    <Wrapper>
      <article>
        <img src='/favicon.svg' alt='logo'></img>
        <p>
          © 2022 Light Code. All rights reserved. 
        </p>
        <section>
            <img src={github} alt="github social"/>
            <img src={linkedin} alt="linkedin social"/>
        </section>
      </article>
    </Wrapper>
  );
}

export default Footer;
