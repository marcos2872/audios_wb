import { createContext, useMemo, useState } from 'react'

type ContextType = {
  recent: string[] | []
  setRecent: any
};

export const Context = createContext({} as ContextType)

function ContextApi({ children }: { children: any }) {
  const [recent, setRecent] = useState([])

  const ProviderValue = useMemo(
    () => ({ recent, setRecent }),
    [recent, setRecent],
  );
  return <Context.Provider value={ProviderValue}>{children}</Context.Provider>;
}

export default ContextApi