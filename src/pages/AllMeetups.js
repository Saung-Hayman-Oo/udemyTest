import MeetupList from "../components/meetups/MeetupList";
import { useState,useEffect } from "react";

// const data = [
//     {
//         id: 'm1',
//         title: 'This is a first meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1920px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
//         address: 'Meetupstreet 5, 12345 meetup city',
//         description: 'This is a first, amazing meetup'
//     },
//     {
//         id: 'm2',
//         title: 'This is a second meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Englischer_Garten_M%C3%BCnchen.jpg/1920px-Englischer_Garten_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 meetup city',
//         description: 'This is a first, amazing meetup'
//     }
// ]

const AllmeetupsPage = () => {
    const id = 1;
    const [isLoading, setIsLoading] = useState(true)
    const [meetupData,setMeetupData] = useState([])
    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-started-978c9-default-rtdb.firebaseio.com/meetups.json')
        .then(res=> res.json())
        .then(data => {
            const meetups = []
            for(const key in data){
                const meetup = {
                    id : key,
                    ...data[key]
                }
                meetups.push(meetup)
            }
           console.log(meetups)
            setIsLoading(false)
            setMeetupData(meetups)
        })
    }, [id])
    if(isLoading){
        return <section>
            <p>Loading .... </p>
        </section>
    }
    return ( 
        <section>
            <h1 className="text-red-900 font-bold text-3xl text-center space-y-3">All Meetups</h1>
           <div className="text-center">
             <MeetupList meetups={meetupData}/>
           </div>
        </section>
     );
}
 
export default AllmeetupsPage;