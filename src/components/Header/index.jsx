import { useContext } from 'react';
import { Wrapper } from './style';

import { LangContext } from '../../contexts/translate'

import top from '../../assets/svg/header/top-right-1.svg';

function Header() {
    const { header } = useContext(LangContext).currentLangData;

    return (
        <Wrapper>
            <img src={top} alt=""/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div>
                <h1>{header.title}</h1>
                <h2>{header.description}</h2>
                <button>{header.button}</button>
            </div>
        </Wrapper>
    );
}

export default Header;
