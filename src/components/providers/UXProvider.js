import React, { useState, useEffect } from 'react'

import UXContext from 'utils/UXContext'
import usePageView from 'hooks/usePageView'

export default function UXProvider(props) {
  usePageView('Télétravail')

  const [embedOpen, setEmbedOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [typeShare, setTypeShare] = useState('simulator')
  const [details, setDetails] = useState(false)

  const [installPrompt, setInstallPrompt] = useState({ prompt: () => '' })
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      setInstallPrompt(e)
      console.log(`'beforeinstallprompt' event was fired.`)
    })
  }, [])

  return (
    <UXContext.Provider
      value={{
        embedOpen,
        setEmbedOpen: (value) => {
          if (value) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
            setShareOpen(false)
            setContactOpen(false)
            setTypeShare('simulator')
          }
          setEmbedOpen(value)
        },
        shareOpen,
        setShareOpen: (value) => {
          if (value) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
            setEmbedOpen(false)
            setContactOpen(false)
            setTypeShare('simulator')
          }
          setShareOpen(value)
        },
        contactOpen,
        setContactOpen: (value) => {
          if (value) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
            setShareOpen(false)
            setEmbedOpen(false)
            setTypeShare('simulator')
          }
          setContactOpen(value)
        },
        details,
        setDetails,
        typeShare,
        setTypeShare,
        installPrompt,
      }}
    >
      {props.children}
    </UXContext.Provider>
  )
}
