import AllEvents from '@/src/components/events/events-page'
import React from 'react'


function EventsPage({ data }) {

  return (
    <AllEvents data={ data }/>
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
