import { useRef } from 'react';
import { Rerousel } from 'rerousel';
 
import styled from 'styled-components';

function Technologies() {
    const ref = useRef(null);
  

    const Wrapper = styled.div`
      width: 100%;
      height: 50%;
    `

    const Item = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(100%/4);
      height: 100px;
      font-family: Signika;
      font-weight: bold;
      font-size: 1.5em;
      border: solid 1px black;
      background-color: #61DAFB;
      
      @media(max-width: 1150px) {
          width: 100%/3
      }
    `;
  
    return (
      <Wrapper>
        <h1></h1>
        <Rerousel itemRef={ref}>
          <Item ref={ref}>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
        </Rerousel>
      </Wrapper>
    );
  }

export default Technologies;