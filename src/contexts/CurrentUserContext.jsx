import { createContext, useState } from 'react';

export const CurrentUserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {}
});

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}