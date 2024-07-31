import React from 'react'
import { ButtonBase } from '@mui/material'
import './Button.css'

const Button = ({ text, icon, link,btntype }) => {
  return (
    <>
      {link ?
        (<a href={link} download>
          <button className='custom_btn'>
            <span className='btn_text'>{text}</span>
            {icon && <div className='btn_icon'>{icon}</div>}
          </button>
        </a>) : (
          <button className='custom_btn' type={btntype}>
            <span className='btn_text'>{text}</span>
            {icon && <div className='btn_icon'>{icon}</div>}
          </button>
        )
      }
    </>
  )
}

export default Button
