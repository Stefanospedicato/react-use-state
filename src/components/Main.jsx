import { useState } from "react"
import languages from "../../languages"

const Main = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(null)

  return (
    <>
      <div className="container d-flex justify-content-between my-5">
        {languages.map(language => (
          <button key={language.id} onClick={() => setSelectedLanguage(language)} className={selectedLanguage.id == language.id ? "btn btn-warning" : "btn btn-primary"}>{language.title}</button>
        ))}
      </div>
      {selectedLanguage ? (
        <div className="container description">
          <h3>{selectedLanguage.title}</h3>
          <p>{selectedLanguage.description}</p>
        </div>
      ) : <h2 className="text-center">Nessun linguaggio selezionato</h2>}

    </>
  )
}

export default Main