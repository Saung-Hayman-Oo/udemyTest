import Card from "../ui/Card";
import favoriteContext from "../../store/favorites-context";
import { useContext } from "react";
const MeetupItem = (props) => {
    const favoritesCtx = useContext(favoriteContext)
    const itemIsFavorite = favoritesCtx.itemIsFavorites(props.id);
   
    function toggleFavoritesHandler(){
        if(itemIsFavorite){
            favoritesCtx.removeFavorites(props.id)
        }else{
            favoritesCtx.addFavorites({
                id:props.id,
                image:props.image,
                title:props.title,
                address:props.address,
                description:props.description
            })
        }
    }
    return ( 
        <li className="mb-10">
         <Card>
            <div className="mb-5">
                <img className="w-full h-64 object-cover" src={props.image} alt="" />
            </div>
            <div className="text-center">
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className="my-5 mx-auto w-40 px-2 py-1 border-2 border-red-900 text-red-900 rounded">
                <button onClick={toggleFavoritesHandler}>{itemIsFavorite? "Remove Favorites" : "To Favorites"}</button>
            </div>
         </Card>
        </li>
     );
}
 
export default MeetupItem;