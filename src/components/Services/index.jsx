import { useContext } from 'react';
import { Wrapper } from './style';

import { LangContext } from '../../contexts/translate'

import bg from '../../assets/svg/services/services.svg';
import apps from '../../assets/svg/icons/apps.svg';
import search from '../../assets/svg/icons/search.svg';
import compass from '../../assets/svg/icons/compass.svg';
import database from '../../assets/svg/icons/database.svg';

function ShowServices({services}){

    return(
        <>
            <section>
                <section style={{backgroundImage: "url("+ database +")"}}/>
                <h2>{services[0].title}</h2>
                <p>{services[0].description}</p>
            </section>
            <section>
                <section style={{backgroundImage: "url("+ apps +")"}}/>
                <h2>{services[1].title}</h2>
                <p>{services[1].description}</p>
            </section>
            <section>
                <section style={{backgroundImage: "url("+ search +")"}}/>
                <h2>{services[2].title}</h2>
                <p>{services[2].description}</p>
            </section>
            <section>
                <section style={{backgroundImage: "url("+ compass +")"}}/>
                <h2>{services[3].title}</h2>
                <p>{services[3].description}</p>
            </section>
        </>
    );
}

function Services() {
    const { services } = useContext(LangContext).currentLangData;

    return (
        <Wrapper>
            <section>
                <h2>{services.title}</h2>
                <section>
                    <ShowServices services={services.list}/>
                </section>
            </section>
            <img src={bg} alt='Services provided image.'/>
        </Wrapper>
    );
}

export default Services;
