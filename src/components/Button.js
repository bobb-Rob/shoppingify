import React from 'react'

const Button = ({name, onClick, onSubmit}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {name}
    </button>
  )
}

export default Button;