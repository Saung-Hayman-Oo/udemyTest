import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    return ( 
        <section>
            <h1 className="text-3xl font-bold my-5 text-red-900">Add New Meetups</h1>
            <NewMeetupForm />
        </section>
    );
}
 
export default NewMeetupPage;