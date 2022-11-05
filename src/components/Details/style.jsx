import styled from 'styled-components';

const Wrapper = styled.section`
    height: auto;
    width: 100%;
    margin-top: 20px;
    color: #FFF;

    background-color: #90d0dc;


    padding: 40px var(--padding-rl) 40px var(--padding-rl);
    > h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 62px;

        font-size: clamp(2rem, -0.875rem + 5.333vw, 3rem);
        line-height: calc(clamp(2rem, -0.875rem + 5.333vw, 3rem) + 5px);
    }

    > h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        
        font-size: clamp(14px, -0.875rem + 5.333vw, 16px);
        line-height: calc(clamp(14px, -0.875rem + 5.333vw, 16px) + 5px);
    }


    > section {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: -10px;

        .margin-type-01 {
            padding: 10px 10px 10px 10px;
        }

        .margin-type-02 {
            padding: 10px 10px 10px 10px;
        }

        > section {
            flex: calc(25% - 20px * 4);
            width: 280px;
            min-width: calc(280px - 20px * 2);
            max-height: 300px;
            
            > article {
                padding: 10px;
                flex: calc(25% - 20px * 4);
                width: 100%;
                background: #FFF;
                border-radius: 8px;

                > h2 {
                    text-align: center;
                    color: #000;

                }

                > h3 {
                    text-align: center;
                    color: #000;
                }

                > p {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 21px;
                    margin-top: 10px;


                    color: #626262;
                    font-size: clamp(14px, -0.875rem + 5.333vw, 16px);
                    line-height: calc(clamp(14px, -0.875rem + 5.333vw, 16px) + 5px);
                }
            }
        }
    }

`

export { Wrapper };