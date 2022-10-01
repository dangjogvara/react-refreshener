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

    const addFavoriteHandler = (favoriteMeetup: any) => {
        setUserFavorites((prevUserFavorite) => {
            return prevUserFavorite.concat(favoriteMeetup);
        });
    };

    const removeFavoriteHandler = (meetupId: any) => {
        setUserFavorites((prevUserFavorites) => {
            // @ts-ignore
            return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
        });
    };

    const itemIsFavorite = (meetupId: any) => {
        // @ts-ignore
        return userFavorites.some((meetup) => meetup.id === meetupId);
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    };

    // @ts-ignore
    return <FavoritesContext.Provider value={context}>
        {children}
    </FavoritesContext.Provider>;
};