import styled from 'styled-components';

import bg from '../../assets/svg/header/bg.svg';
import topgreen from '../../assets/svg/header/top-right-2.svg';
import light from '../../assets/svg/header/light.svg';
import persons from '../../assets/svg/header/persons.svg';

const Wrapper = styled.article`
    width: 100%;
    height: 100vh;
    min-height: 340px;
    position: relative;
    display: flex;
    flex-direction: row;
    z-index: 1;

    background: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > img:nth-child(1) {
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 2;

        width: 60%;
    }

    > div:nth-child(2) {
        background: url(${topgreen});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 1;

        width: 35%;
        height: 100%;

    }

    > div:nth-child(3) {
        background: url(${light});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: -100px;
        right: 20px;
        z-index: 3;

        width: 50px;
        height: 300px;
        
        @media (max-width: 820px) {
            top: -190px;
        }

        @media (max-width: 440px) {
            top: -200px;
        }



    }

    > div:nth-child(4) {
        background: url(${light});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 0px;
        right: 25%;
        z-index: 3;

        width: 50px;
        height: 300px;
        
        @media (max-width: 820px) {
            top: -100px;
        }

        @media (max-width: 400px) {
            top: -170px;
        }
 }

    > div:nth-child(5) {
        background: url(${light});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: -70px;
        right: 45%;
        z-index: 3;

        width: 50px;
        height: 300px;
        
        @media (max-width: 820px) {
            top: -150px;
        }
        @media (max-width: 400px) {
            top: -230px;
        }
    }

    
    > div:nth-child(6) {
        background: url(${persons});
        background-size: contain;
        background-position-x: right;
        background-position-y: bottom;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -1px;
        right: 0px;
        z-index: 3;

        width: 95%;
        height: 65%;

        @media (max-width: 1220px) {
            height: 45%;
        }

    }

    > div:nth-child(7) {
        position: absolute;
        z-index: 9;
        display: flex;
        flex-direction: column;

        bottom: 42%;
        left: 8%;

        @media (max-width: 680px) {
            left: 0px;
            padding: 0px 20px 0px 20px;

        }


        @media (max-height: 660px) {
            bottom: 35%;
        }

        @media (max-height: 450px) {
            bottom: 15%;
        }

        @media (max-height: 400px) {
            bottom: 10%;
        }

        > h1 {
            max-width: 600px;
            font-size: clamp(2rem, -0.875rem + 8.333vw, 3rem);
            line-height: calc(clamp(2rem, -0.875rem + 8.333vw, 3rem) + 5px);
          
            font-style: normal;
            font-weight: 600;
            color: #000000;
        }

        > h2 {
            margin-top: 10px;
            max-width: 600px;
            font-size: clamp(1.2rem, -0.875rem + 8.333vw, 1.5rem);
            line-height: calc(clamp(1.2rem, -0.875rem + 8.333vw, 1.5rem) + 5px);
            
            font-style: normal;
            font-weight: 500;
            color: #626262;
        }

        > button {
            all: unset;
            margin-top: 20px;
            background-color: #212621;
            border-radius: 10px;
            text-align: center;
            max-width: 40%;
            font-weight: bold;
            color: #FFF;
            cursor: pointer;
            transition: all ease-in-out .2s;
            padding: 5px;
            font-size: clamp(0.9rem, -0.875rem + 8.333vw, 1.3rem);


            &:hover {
                transform: scale(1.02);
            }
        }
    }

`



export { Wrapper };