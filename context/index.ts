import { createContext } from 'react';
import { Option } from '../components/common/layout';

interface UserContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuth: boolean) => void;
}

export const UserContext = createContext<UserContextInterface>({
  isAuthenticated: false,
  setIsAuthenticated: (isAuth) => { }
});

interface AppContextInterface {
  menuOption: Option;
  setMenuOption: (option: Option) => void;
}

export const AppContext = createContext<AppContextInterface>({
  menuOption: 'datasets',
  setMenuOption: (option) => { }
});
