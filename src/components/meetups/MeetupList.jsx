import React from 'react'
import MeetupItem from './MeetupItem'

function MeetupList(props) {
  return (
    <ul className='py-5 list-none'>
        {props.meetups.map(meetup =>{
            return <MeetupItem 
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            description={meetup.description}
            image={meetup.image}
            address={meetup.address}
         />
        }
           
        )}
    </ul>
  )
}

export default MeetupList
