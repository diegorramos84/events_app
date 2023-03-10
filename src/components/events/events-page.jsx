import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function AllEvents({ data }) {
  return (
    <div className='events_page'>
      {data.map(ev => (
          <Link className='card' key={ev.id} href={`/events/${ev.id}`}>
            <Image width={500} height={500} src={ev.image} alt={ev.id}/>
            <h2>{ev.title}</h2>
          </Link>
        ))}
  </div>
  )
}

export default AllEvents
