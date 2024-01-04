import React, { useState } from 'react'


const Form = () =>  {
    const [value, setValue] = useState("");
    const [submited, setSubmited] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(value)
        setSubmited(true)
    };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
        <input type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="input-text"
        />
        <button type='submit'>Enviar</button>
        {submited && <p data-testid="success">Formulario enviado</p>}
    </form>
  )
}

export default Form