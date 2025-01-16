import { useState } from "react"
import languages from "../../languages"

const Main = () => {
  return (
    <div className="container d-flex justify-content-between my-5">
      {languages.map(language => (
        <button className="btn btn-primary">{language.title}</button>
      ))}
      <div></div>
    </div>
  )
}

export default Main