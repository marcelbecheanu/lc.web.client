import styled from 'styled-components';

import correct from '../../assets/svg/icons/correct.svg';

const Wrapper = styled.article`
    margin-top: 50px;
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;

    padding: 0px var(--padding-rl) 0px var(--padding-rl);

    @media (max-width: 720px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    > img {
        width: 50%;

        @media (max-width: 720px) {
            width: 90%;
        }
    }

    > section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 20px;

        @media (max-width: 720px) {
            margin-top: 20px;
            margin-left: 0px;
        }

        > h2 {
            font-style: normal;
            font-weight: 600;
            font-size: 48px;
            line-height: 62px;

            color: #000000;
            font-size: clamp(2rem, -0.875rem + 5.333vw, 3rem);
            line-height: calc(clamp(2rem, -0.875rem + 5.333vw, 3rem) + 5px);
        }

        > h3 {
            margin-top: 20px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 29px;

            color: #626262;

            font-size: clamp(14px, -0.875rem + 5.333vw, 16px);
            line-height: calc(clamp(14px, -0.875rem + 5.333vw, 16px) + 5px);
        }

        > section {
            width: 100%;
            > section {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-top: 20px;
                height: 70px;
                
                background: #FFFFFF;
                box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.07);
                border-radius: 8px;
                padding: 6px;

                > section:nth-child(1) {
                    background-color: #000;
                    background-image: url(${correct});
                    background-size: 42px;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 8px; 
                    width: 58px;
                    height: 58px;
                }

                > p {
                    max-width: calc(100% - 58px);
                    margin-left: 10px;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 36px;

                    color: #000000;

                    
                    font-size: clamp(1rem, -0.875rem + 2.333vw, 24px);
                    line-height: calc(clamp(1rem, -0.875rem + 2.333vw, 24px) + 5px);
                }

            }
        }
    }

`

export { Wrapper };