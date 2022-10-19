import { useRef } from 'react';
import { Rerousel } from 'rerousel';
 
import styled from 'styled-components';

function Technologies() {
    const ref = useRef(null);

    const brands = [
      {
        img: "https://logospng.org/download/microsoft/logo-microsoft-2048.png",
        alt: "1"
      },
      {
        img: "",
        alt: "2"
      },
      {
        img: "",
        alt: "3"
      },
      {
        img: "",
        alt: "4"
      },
      {
        img: "",
        alt: "5"
      },
    ]
  

    const Wrapper = styled.div`
      margin-top: 50px;
      width: 100%;
      height: 50%;
      padding: 0px var(--padding-rl) 0px var(--padding-rl);


      > h1 {
        text-align: center;
        width: 100%;

        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 62px;

        color: #000000;
        font-size: clamp(2rem, -0.875rem + 5.333vw, 3rem);
        line-height: calc(clamp(2rem, -0.875rem + 5.333vw, 3rem) + 5px);

      }

      > div {
        margin-top: 20px;
      }

    `

    const Item = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(100% / (${props => props.length} - 2) );
      height: 100px;
      font-family: Signika;
      font-weight: bold;
      font-size: 1.5em;
      background-color: grey;
      background-image: url(${props => props.img});
      margin: 0px 3% 0px 3%;
    `;
  
    return (
      <Wrapper>
        <h1>Empresas que confiam no nosso trabalho.</h1>
        <Rerousel itemRef={ref}>
          {
            brands.map((e, i) => {
              return <Item ref={ref} length={brands.length} image={e.img} key={i}>{e.alt}</Item>
            })
          }
        </Rerousel>
      </Wrapper>
    );
  }

export default Technologies;