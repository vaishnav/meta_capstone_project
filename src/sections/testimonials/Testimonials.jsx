import React from 'react'
import TestimonialCard from '../../components/testimonial-card/TestimonialCard'
import person1 from '../../img/person1.jpg'
import person2 from '../../img/person2.jpg'
import person3 from '../../img/person3.jpg'
import person4 from '../../img/person4.jpg'
import './Testimonials.css'

const Testimonials = () => {
  const users = [
    {
      name : 'John',
      image: person1,
      rating: 5
    },
    {
      name : 'Mary',
      image: person2,
      rating: 5
    },
    {
      name : 'Ben',
      image: person3,
      rating: 4
    },
    {
      name : 'Harold',
      image: person4,
      rating: 4
    },
  ]


  return (
    <section className='testimonials py-4 px-3'>
      <h1 className='font-bold text-4xl text-center'>Testimonials</h1>
      
      <div className='w-full p-4 m-auto grid grid-cols-2 md:grid-cols-4 gap-5 justify-center'>
        {users.map((user, index) => {
          return <TestimonialCard key={index} user={user} />
        })}
      </div>
    </section>
  )
}

export default Testimonials