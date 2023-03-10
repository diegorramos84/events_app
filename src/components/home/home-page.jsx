import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


function HomePage({ data }) {
  return (
    <div className='home_body'>
      {data.map(ev => (
        <Link className='card' key={ev.id} href={`/events/${ev.id}`}>
          <Image className='card_image' width={400} height={300}src={ev.image} alt={ev.id}/>
          <div className="content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default HomePage
