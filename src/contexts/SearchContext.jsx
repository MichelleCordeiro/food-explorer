import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const SearchContext = createContext({})

export function SearchProvider({ children }) {
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  function clearSearch() {
    setSearch('')
    setInputValue('')
  }

  useEffect(() => {
    const trimmed = inputValue.trim()

    const timeout = setTimeout(() => {
      if (trimmed.length >= 2) {
        setSearch(trimmed)

        if (location.pathname !== '/') {
          navigate(`/?search=${trimmed}`, { replace: true })
        } else {
          navigate(`/?search=${trimmed}`)
        }

        setIsMenuOpen(false)
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [inputValue, navigate, location.pathname])

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        clearSearch,
        inputValue,
        setInputValue,
        isMenuOpen,
        setIsMenuOpen
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  return useContext(SearchContext)
}
