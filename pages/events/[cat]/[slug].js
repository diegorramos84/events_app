import React from 'react'
import SingleEvent from '@/src/components/events/single-event'

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
    <SingleEvent data={data}/>
  )
}

export default EventPage
