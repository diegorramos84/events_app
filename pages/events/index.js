import React from 'react'
import Image from 'next/image'

function EventsPage({ data }) {

  return (
    <div>
      <h1>Events Page</h1>
      <div>
        {data.map(ev => (
            <a key={ev.id} href={`/events/${ev.id}`}>
              <Image width={200} height={200}src={ev.image} alt={ev.id}/>
              <h2>{ev.title}</h2>
            </a>
          ))}
      </div>
    </div>
  )
}


export default EventsPage

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')
  console.log(events_categories)

  return {
    props: {
      data: events_categories
    }
  }
}
