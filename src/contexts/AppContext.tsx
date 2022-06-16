import React, {
    useContext,
    createContext,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';

interface AppContextInterface {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}
const AppContext = createContext<AppContextInterface | object>({});

export const AppProvider = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const contextValue: AppContextInterface = {
        isAuthenticated,
        setIsAuthenticated,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext<AppContextInterface>(AppContext);
