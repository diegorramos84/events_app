import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function SingleEvent({ data }) {
  const inputEmail = useRef()
  const router = useRouter()
  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const emailValue = inputEmail.current.value
    const eventId = router?.query.slug
    const validRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    if(!emailValue.match(validRegex)) {
      setMessage('Please use a valid email')
    }


    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailValue, eventId: eventId })
      })

      if(!response.ok) throw new Error(`Error: ${response.status}`)

      const eventData = await response.json()
      setMessage(eventData.message)
      inputEmail.current.value = ''

    } catch (error) {
      console.log('error', error)
    }

  }

  return (
    <div className='event_single_page'>
    {data.map(event => (
      <div key={event.id}>
        <h1>{event.title}</h1>
        <Image src={event.image} alt={event.id} width={1000} height={500} />
        <p>{event.description}</p>
        <form onSubmit={onSubmit} className='email_registration'>
          <label>Get registred for the event: </label>
          <input
            id='email'
            type='email'
            placeholder='please insert your email here'
            ref={inputEmail}
          />
          <button type='submit'>Submit</button>
        </form>
        <p>{message}</p>
      </div>
    ))}
</div>
  )
}

export default SingleEvent
