import styled from 'styled-components';

const Wrapper = styled.article`
    width: 100%;
    height: auto;
    
    padding: 50px var(--padding-rl) 50px var(--padding-rl);
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    > section {
        width: 75%;
        height: 500px;

        padding: 10px;
        border-radius: 15px;

        border: 1px solid #212621;

    }




`

export { Wrapper };
