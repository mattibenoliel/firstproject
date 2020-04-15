import React, { Fragment } from 'react'

const Membre = ({ nom, age, children, cacherNom, handleChange, handleChangeAge }) => {
  return (
    <Fragment>
      <input value={nom} onChange={handleChange} type="text" />
      <input value={age} onChange={handleChangeAge} type="text" />
      <h2 style={{ backgroundColor: age < 5 ? '#cecece' : 'yellow' }}>{nom.toUpperCase()} - {age} ans</h2>
      <button style={{display: 'block', margin: 'auto', marginBottom: '50px'}} onClick={cacherNom}>X</button>
      { children ? <p>{children}</p> : <Fragment />}
    </Fragment>
  )
}

export default Membre
