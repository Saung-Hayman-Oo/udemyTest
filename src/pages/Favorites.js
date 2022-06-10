import favoriteContext from "../store/favorites-context";
import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
const FavouritesPage = () => {
    const favoriteCtx = useContext(favoriteContext);
    let content;
    if(favoriteCtx.totalFavorites === 0 ){
        content="Yor favorites is none";
    }else{
        content=<MeetupList meetups={favoriteCtx.favorites} />;
    }
    return ( 
        <section>
            <h1 className="font-bold text-3xl my-5 text-center"> My Favorites Meetup</h1>
             { content  }
        </section>
     );
}
 
export default FavouritesPage;