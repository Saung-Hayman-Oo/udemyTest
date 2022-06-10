import { createContext,useState } from 'react'


const favoriteContext=createContext({
    favorites:[],
    totalFavorites:0,
    addFavorites: (favoriteMeetup) => {},
    removeFavorites: (meetupId) => {},
    itemIsFavorites: (meetupId) => {}
});

export function FavoritesContextProvider({children}){
    const [userFavorites,setUserFavorites] = useState([]);
    function addFavoritesHandler(favoriteMeetup){
        setUserFavorites((prevFavorites)=>{
            return prevFavorites.concat(favoriteMeetup)
        })
    }
    function removeFavoritesHandler(meetupId){
        setUserFavorites((prevFavorites)=>{
            return prevFavorites.filter(meetup=> meetup.id !== meetupId)
        })
    }
    function itemIsFavoritesHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId)
    }
    const context={
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorites: addFavoritesHandler,
        removeFavorites: removeFavoritesHandler,
        itemIsFavorites: itemIsFavoritesHandler
    }
    return <favoriteContext.Provider value={context}>
        {children}
    </favoriteContext.Provider>
}
export default favoriteContext;
 