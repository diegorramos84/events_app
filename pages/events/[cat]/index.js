import React from 'react'
import CategoryEvent from '@/src/components/events/categoryEvent'

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json')
  const allPaths = events_categories.map(ev => {
    return {
      params: {
        cat: ev.id.toString()
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const id = context?.params.cat

  const { allEvents } = await import('/data/data.json')

  const data = allEvents.filter(ev => ev.city === id)

  return ( { props: { data, pageName: id } })
}

function EventsPerCatPage({ data, pageName }) {
  return(
    <CategoryEvent data={data} pageName={pageName}/>
  )
}

export default EventsPerCatPage
