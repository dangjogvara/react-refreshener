import { createContext, useState, ReactNode } from 'react';

interface favoritesProps {
    children: ReactNode;
}

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});


const FavoritesContextProvider = ({children}: favoritesProps) => {
    const [userFavorites, setUserFavorites] = useState([]);

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    };

    // @ts-ignore
    return <FavoritesContext.Provider value={context}>
        {children}
    </FavoritesContext.Provider>;
};