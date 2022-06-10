import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const history=useHistory()
    function AddMeetupHandler (meetupData){
        fetch('https://react-getting-started-978c9-default-rtdb.firebaseio.com/meetups.json',{
            method: 'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(() => {
            history.replace('/all-meetup')
        })
    }
    return ( 
        <section>
            <h1 className="text-3xl font-bold my-5 text-red-900">Add New Meetups</h1>
            <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
        </section>
    );
}
 
export default NewMeetupPage;