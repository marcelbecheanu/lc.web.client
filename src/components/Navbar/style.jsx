import styled from 'styled-components';

const Wrapper = styled.nav`
    width: 100%;
    height: 70px;
    padding: 0px var(--padding-rl) 0px var(--padding-rl);

    position: fixed;
    z-index: 10;

    display: flex;
    flex-direction: row;
    align-items: center;

    > article {
        > img {
            width: 44px;
        }
    }

`

const Options = styled.div`
    padding-left: 30px;
    display: flex;
    flex-direction: row;

    @media (max-width: 780px){
        padding-left: 0px;
        display: ${props => props.open ? "flex" : "none"};
        top: 70px;
        left: 20px;
        right: 20px;
        width: calc(100% - 40px);
        border-radius: 10px;

        position: absolute; 
        flex-direction: column;
        background-color: white;
        border-bottom: 1px solid rgba(0,0,0, .2 );

        padding-top: 10px;
        padding-bottom: 10px;
        
        @media (min-width: 680px) {
            left: calc(8% + 28px);
            right: calc(8% + 28px);
            width: calc(100% - 16% - 56px);
        }


    }

`

const Option = styled.div`
    margin-left: 5px;
    margin-right: 5px;

    font-weight: 600;
    font-size: 18px;

    cursor: pointer;
    color: #566272;

    &:hover {
        color: #000;
    }

    @media (max-width: 780px) {
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 2px 10px 2px 10px;
        border-left: ${props => props.selected ? "3px solid #56BBD0" : "" };
    
        &:hover {
            border-left: 3px solid #56BBD0;
        }
    }



`


export { Wrapper, Options, Option }