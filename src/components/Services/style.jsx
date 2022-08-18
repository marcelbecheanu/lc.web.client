import styled from 'styled-components';

const Wrapper = styled.article`
    margin-top: 50px;
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;

    padding: 0px var(--padding-rl) 0px var(--padding-rl);

    @media (max-width: 720px) {
        flex-direction: column-reverse;
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
        justify-content: center;
        margin-right: 20px;

        @media (max-width: 720px) {
            margin-top: 20px;
            margin-right: 0px;
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

        > section {
            margin-top: 20px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            
            > section {
                flex: calc(50% - 10px * 4);
                width: 210px;
                min-width: 210px;
                height: auto;
                margin-right: 10px;
                margin-top: 10px;
                padding: 10px;
                background: #FFF;
                box-shadow: 0px 13px 14px rgba(0, 0, 0, 0.16);
                border-radius: 8px;

                @media (max-width: 540px) {
                    min-height: auto;
                }

                > section {
                    height: 58px;
                    width: 58px;

                    background-color: #000;
                    background-size: 36px;
                    background-position: center;
                    background-repeat: no-repeat;

                    box-shadow: 0px 13px 14px rgba(0, 0, 0, 0.16);
                    border-radius: 8px;
                }
                
                > h2 {
                    margin-top: 20px;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 36px;

                    font-size: clamp(1rem, -0.875rem + 2.333vw, 24px);
                    line-height: calc(clamp(1rem, -0.875rem + 2.333vw, 24px) + 5px);
                }

                > p {
                    margin-top: 10px;

                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 21px;


                    color: #626262;
                    font-size: clamp(14px, -0.875rem + 5.333vw, 16px);
                    line-height: calc(clamp(14px, -0.875rem + 5.333vw, 16px) + 5px);
                }
                
            }
        }
    }

`

export { Wrapper };