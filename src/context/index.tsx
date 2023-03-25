import { createContext, useMemo, useState } from 'react'

type ContextType = {
  recent: {
    id: string,
    progress: number,
    title: string,
  }[] | [],
  setRecent: any,
  favorites: {id: string, title: string}[],
  setFavorites: any
};

export const Context = createContext({} as ContextType)

function ContextApi({ children }: { children: any }) {
  const [recent, setRecent] = useState([])
  const [favorites, setFavorites] = useState([])

  const ProviderValue = useMemo(
    () => ({ recent, setRecent, favorites, setFavorites }),
    [recent, setRecent, favorites, setFavorites],
  );
  return <Context.Provider value={ProviderValue}>{children}</Context.Provider>;
}

export default ContextApi