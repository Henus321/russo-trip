import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.config';

export const PathwaysContext = createContext({
  pathwaysInfo: [],
});

export const PathwaysProvider = ({ children }) => {
  const initialState = { init: null };

  const [pathwaysInfo, setPathwaysInfo] = useState({ initialState });

  useEffect(() => {
    const getPathwaysInfo = async () => {
      const pathways = await getCategoriesAndDocuments();
      setPathwaysInfo(pathways);
    };

    getPathwaysInfo();
  }, []);

  const value = { pathwaysInfo };
  return (
    <PathwaysContext.Provider value={value}>
      {children}
    </PathwaysContext.Provider>
  );
};
