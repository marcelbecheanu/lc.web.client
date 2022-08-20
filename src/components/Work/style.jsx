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

        > p {
            margin-top: 20px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 29px;

            color: #626262;

            font-size: clamp(14px, -0.875rem + 5.333vw, 16px);
            line-height: calc(clamp(14px, -0.875rem + 5.333vw, 16px) + 5px);
        }
        
    }

`

export { Wrapper };