import MeetupList from "../components/meetups/MeetupList";

const data = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1920px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
        address: 'Meetupstreet 5, 12345 meetup city',
        description: 'This is a first, amazing meetup'
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Englischer_Garten_M%C3%BCnchen.jpg/1920px-Englischer_Garten_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 meetup city',
        description: 'This is a first, amazing meetup'
    }
]

const AllmeetupsPage = () => {
    return ( 
        <section>
            <h1 className="text-red-900 font-bold text-3xl text-center space-y-3">All Meetups</h1>
           <div className="text-center">
             <MeetupList meetups={data}/>
           </div>
        </section>
     );
}
 
export default AllmeetupsPage;