import React,{useRef} from 'react'
import Card from '../ui/Card'

export default function NewMeetupForm({onAddMeetup}) {
    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();
    
    function submitHandler(e){
        e.preventDefault();
        
        const enteredTitle = titleRef.current.value;
        const enteredImage = imageRef.current.value;
        const enteredAddress = addressRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        onAddMeetup(meetupData);
    }
  return (
   <Card>
    <form className='my-5' onSubmit={(e) => submitHandler(e)}>
        <div className='flex flex-col my-3 mx-10'>
            <label htmlFor="title">Meetup Title</label>
            <input className='border-2 border-gray-400 px-3 py-2 mt-2' id='title' name='title' type="text" ref={titleRef}  required/>
        </div>
        <div className='flex flex-col my-3 mx-10'>
            <label htmlFor="image">Meetup Image</label>
            <input className='border-2 border-gray-400 px-3 py-2 mt-2' id='image' name='image' type="url" ref={imageRef} required/>
        </div>
        <div className='flex flex-col my-3 mx-10'>
            <label htmlFor="address">Meetup Address</label>
            <input className='border-2 border-gray-400 px-3 py-2 mt-2' id='address' name='address' type="text" ref={addressRef} required/>
        </div>
        <div className='flex flex-col my-3 mx-10'>
            <label htmlFor="description">Meetup Description</label>
            <textarea rows='7' className='border-2 border-gray-400 px-3 py-2 mt-2' id="description" name='description' ref={descriptionRef}/>
        </div>
        <div className='text-right mx-10'>
            <button className='bg-red-900 text-white px-3 py-1 rounded '>Add Meetup</button>
        </div>
    </form>
   </Card>
  )
}
