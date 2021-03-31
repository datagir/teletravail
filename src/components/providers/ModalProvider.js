import React, { useState } from 'react'
import ModalContext from 'utils/ModalContext'

export default function ModalProvider(props) {
  const [CO2E, setCO2E] = useState(false)
  const [footprint, setFootprint] = useState(false)
  const [perimeter, setPerimeter] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        CO2E,
        setCO2E,
        footprint,
        setFootprint,
        perimeter,
        setPerimeter,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
