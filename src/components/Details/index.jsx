import { } from 'react';
import { Wrapper } from './style';

import moment from 'moment';

function Details() {
  return (
    <Wrapper>
        <h2>Sobre  nos e Nosso Trabalho</h2>
        <p>We provide specialized deals for individuals and companies. <br/> We make sure you are always getting the best guidance from the best people across the industry.</p>
        <section>
            <section className='margin-type-01'>
                <article>
                    <h2>&infin;</h2>
                    <h3>Copos de Café</h3>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </article>
            </section>
            <section className='margin-type-02'>
                <article>
                    <h2>1</h2>
                    <h3>Contratos</h3>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </article>
            </section>
            <section className='margin-type-02'>
                <article>
                    <h2>{ Math.round(new moment.duration((new Date().getTime() - new Date("2022/10/15").getTime())).asDays())   } dias</h2>
                    <h3>Tempo de Mercado</h3>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </article>
            </section>    
            <section className='margin-type-01'>
                <article>
                    <h2>5</h2>
                    <h3>Projetos Finalizados</h3>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </article>
            </section>
        </section>
    </Wrapper>
  );
}

export default Details;
