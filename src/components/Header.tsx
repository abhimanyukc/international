
import { useTranslation } from 'react-i18next'

const Headerl = () => {

    const [t, ii8n] = useTranslation("global");

    const handleChangeLanguage = ( lang: string) => {
        ii8n.changeLanguage(lang);

    }

  return (
    <div>
        <h1> {t("header.message")}</h1>
          <button onClick={() => handleChangeLanguage("en")}>EN</button>
        <button onClick={() => handleChangeLanguage("nep")}>नेपा</button>
    </div>
  )
}

export default Headerl
