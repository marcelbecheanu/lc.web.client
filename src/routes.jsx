import { useContext } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import { LangContext, LangProvider, langData } from './contexts/translate'
import GlobalStyles from './styles/globalstyles';
import Landing from './pages/landing';

const AddParamLang = () => {
    const params = useParams();
    const { lang } = useContext(LangContext);
    if(!params.lang){
        window.location.href = "/" + lang;
    }
}

function Website(){
  const {
    lang,
    currentLangData,
    switchLang
  } = useContext(LangContext);

  /* Validade if has Lang in Url */
  const params = useParams();
  if (params.lang !== lang) {
    if (Object.keys(langData).includes(params.lang.toLowerCase())) {
      switchLang(params.lang.toLowerCase());
      window.location.href = "/" + params.lang.toLowerCase();
    } else {
      window.location.href = "/" + lang;
    }
  }

  /* Change Head by Lang */
  const {
    headers
  } = currentLangData;
  
  document.title = headers.title;

  headers.meta.forEach(data => {
    let meta = document.head.querySelector(`[name="${data.name}"]`);
    if (meta){
      meta.content = data.content;
    } else {
      let newMeta = document.createElement('meta');
      newMeta.name = data.name;
      newMeta.content = data.content;
      document.head.appendChild(newMeta);
    }
  });

  return(
    <Routes>
      <Route path='/' element={ <Landing/> }/>
    </Routes>
  );
}

function Router() {
  return (
    <>
      <LangProvider>
        <GlobalStyles/>
        <BrowserRouter>
          <Routes>
            <Route path='/:lang/*' element={ <Website/> }/>
            <Route path='*' element={ <AddParamLang/> }/>
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </>
  );
}

export default Router;
