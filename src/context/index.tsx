import React, { createContext, useMemo, useState } from "react";
import { favoriteType } from "../utils/favorite";

type ContextType = {
  recent:
    | {
        id: string;
        progress: number;
        title: string;
      }[]
    | [];
  setRecent: any;
  favorites: favoriteType[];
  setFavorites: any;
  currentPosition: number;
  setCurrentPosition: any;
};

export const Context = createContext({} as ContextType);

function ContextApi({ children }: { children: any }) {
  const [recent, setRecent] = useState([]);
  const [favorites, setFavorites] = useState<favoriteType[]>([]);
  const [currentPosition, setCurrentPosition] = useState(0);

  const ProviderValue = useMemo(
    () => ({
      recent,
      setRecent,
      favorites,
      setFavorites,
      currentPosition,
      setCurrentPosition,
    }),
    [
      recent,
      setRecent,
      favorites,
      setFavorites,
      currentPosition,
      setCurrentPosition,
    ]
  );
  return <Context.Provider value={ProviderValue}>{children}</Context.Provider>;
}

export default ContextApi;
