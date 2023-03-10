import React from 'react'
import Image from 'next/image'

function EventCard({ data }) {
  return (
    <div className='event_card'>
    {data.map(event => (
      <div key={event.id}>
        <Image src={event.image} alt={event.id} width={1500} height={500} />
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <input type='email'/><button>Submit</button>
      </div>
    ))}
</div>
  )
}

export default EventCard
