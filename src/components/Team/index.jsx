import { useContext } from 'react';
import { Wrapper } from './style';

import { LangContext } from '../../contexts/translate'

import bg from '../../assets/svg/team/teams.svg';

function Team() {
    const { team } = useContext(LangContext).currentLangData;

    return (
        <Wrapper>
            <img src={bg} alt='Team work image.'/>
            <section>
                <h2>{team.title}</h2>
                <h3>{team.description}</h3>
                <section>
                {
                    team.checks.map((elem, index) => {
                        return(
                            <section key={index}>
                                <section></section>
                                <p>{elem}</p>
                            </section>
                        );
                    })
                }
                </section>
            </section>
        </Wrapper>
    );
}

export default Team;
