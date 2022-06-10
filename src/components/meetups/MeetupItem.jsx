import Card from "../ui/Card";

const MeetupItem = (props) => {
    return ( 
        <li className="mb-10">
         <Card>
            <div className="mb-5">
                <img className="w-full h-64 object-cover" src={props.image} alt="" />
            </div>
            <div>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className="my-5 mx-auto w-40 px-2 py-1 border-2 border-red-900 text-red-900 rounded">
                <button>To Favorites</button>
            </div>
         </Card>
        </li>
     );
}
 
export default MeetupItem;