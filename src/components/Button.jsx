import React, { useState } from 'react'

const Button = () => {
    const [text, setText] = useState("texto inicial");

    const handleClick = () => {
        setText("Texto alterado após o click")
    }
  return (
    <div>
        <p data-testid="text">{text}</p>
        <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default Button