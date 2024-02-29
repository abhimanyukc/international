npx create-react-app  internationalization --template typescript
npm install i18next react-i18next 


src/translation
  translation/en
  translation/नेपा

  en/global.json
  global.json
  {
    "header": {
        "message": "My name is Abhi"
    },
    "home": {
        "body":  "I live in Bhalam"
    }
}


  नेपा/global.json
{
    "header": {
        "message": "मेरो नाम अभि हो"
    },
    "home": {
        "body":  "भालममा बस्छु"
    }
}


src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import global_en from "./translation/EN/global.json"
//importing json file
import global_नेपा from "./translation/नेपा/global.json"


import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

//initializing ii8next object
//escapeValue:true to mitigate xss attack
//en as default language
//associating json file we made for each language
i18next.init({
  interpolation: {escapeValue: true},
  lng: "en",
  resources: {
      en: {
        global: global_en,
      },
      नेपा: {
        global: global_नेपा,
      }
  }
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//wrap appln in I18nextProvider <App/> and passing i18next object we just made 
//in this way access to translation in whole appln
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>
);


src/components
src/components/Home.tsx
rafce
src/components/Header.tsx
rafce

src/App.tsx
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
    </div>
  );
}
export default App;


src/components/Home.tsx
//useTranslation Hook
import { useTranslation } from 'react-i18next'
//global as parameter for translation of the file
//array with translation function and ii8nnext object
const Homel = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <p>
      //using translation function and passing key we want to access
     {t("home.body")}
    
      </p>
    </div>
  )
}
export default Homel


src/components/Header.tsx

import { useTranslation } from 'react-i18next'

const Headerl = () => {
     
     //usetranslation hook to make use of transllation
     //defining trasnlation function and ii8n from ii8next and passing global  as argument for translation
    const [t, ii8n] = useTranslation("global");

  //making function to switch between languages when clicking a button
  //this function recieve a lang as parameter
    const handleChangeLanguage = ( lang: string) => {
        //changelanguagefunction of ii8n object return from the usetranslation hook to switch the language.
        ii8n.changeLanguage(lang);

    }

  return (
    <div> 
    //using translation function and passing headermessage from json file
        <h1> {t("header.message")}</h1>
           //button with onclick event and passing  en as parameter
          <button onClick={() => handleChangeLanguage("en")}>EN</button>
          //नेपा as parameter
        <button onClick={() => handleChangeLanguage("नेपा")}>नेपा</button>
    </div>
  )
}

export default Headerl







#   i n t e r n a t i o n a l  
 