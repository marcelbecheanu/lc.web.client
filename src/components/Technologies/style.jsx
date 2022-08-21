import { useContext } from 'react';
import { Wrapper } from './style';

import { LangContext } from '../../contexts/translate'

import bg from '../../assets/svg/work/work.svg';

function Work() {
    const { work } = useContext(LangContext).currentLangData;

    return (
        <Wrapper>
            <img src={bg} alt='Team work image.'/>
            <section>
                <h2>{work.title}</h2>
                {
                    work.description.map((e, k) => {
                        return <p key={k}>{e}</p>
                    })
                }
            </section>
        </Wrapper>
    );
}

export default Work;
