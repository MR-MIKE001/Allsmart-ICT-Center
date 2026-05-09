import { useState, useEffect } from 'react'

/**
 * Manages mobile nav open/close state.
 * Locks body scroll when open and closes on ESC key.
 */
export function useNavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen(prev => !prev)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return { isOpen, open, close, toggle }
}
