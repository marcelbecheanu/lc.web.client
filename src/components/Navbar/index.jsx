import { useState } from 'react';
import { Wrapper, Options, Option } from './style';

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <article>
        <img src="/favicon.svg" alt="Logo"/>
        <Options open={isOpen}>
            <Option selected={false}></Option>
            <Option selected={true}></Option>
            <Option selected={false}></Option>
        </Options>
      </article>
    </Wrapper>
  );
}

export default Navbar;
