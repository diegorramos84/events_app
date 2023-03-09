import React from 'react'
import Image from 'next/image'

export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json')
  const allPaths = allEvents.map(ev => {
    return {
      params: {
        cat: ev.city.toString(),
        slug: ev.id.toString()
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { allEvents } = await import('/data/data.json')

  const event = context?.params.slug

  const data = allEvents.filter(ev => ev.id === event)

  return({props: { data }})
}

function EventPage({ data }) {
  return (
    <div>
        {data.map(event => (
          <div key={event.id}>
            <Image src={event.image} alt={event.id} width={1500} height={500} />
            <h1>{event.title}</h1>
            <p>{event.description}</p>
          </div>
        ))}
    </div>
  )
}

export default EventPage
