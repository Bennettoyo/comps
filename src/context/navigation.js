import { Children, createContext } from "react";

const navigationContext = createContext();

function NavigationProvider({ children }) {
  return (
    <navigationContext.Provider value={{}}>
      {Children}
    </navigationContext.Provider>
  );
}

export { NavigationProvider };
export default navigationContext;
