import styled from 'styled-components';


const Wrapper = styled.footer`
    width: 100%;
    height: auto;

    padding: var(--padding-rl);
    padding-bottom: 20px;
    padding-top: 20px;

    z-index: 20;

    > article:nth-child(1) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        
        @media (max-width: 720px) {
            flex-direction: column;
            > p {
                margin-top: 5px;
            }
            > section {
                margin-top: 5px;
            }
        }

        > img {
            width: 36px;
        }

        > p {
            display: flex;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 26px;
            color: #000;
            font-size: clamp(0.75rem, -0.875rem + 3.333vw, 14px);
            line-height: calc(clamp(0.75rem, -0.875rem + 3.333vw, 14px) + 5px);
        }

        > section {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            
            > img {
                margin: 0px 5px 0px 5px;
                width: 28px;
            }

        } 
    }


    
`

export { Wrapper }