import React from 'react'
import star from '../../img/star.png'
import './TestimonialCard.css'

const TestimonialCard = ({ user }) => {
  // Convert rating into an array of 5 stars
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < user.rating ? "★" : "☆"
  );

  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center space-y-4">
      <img
        src={user.image}
        alt={user.name}
        className="w-40 h-32 rounded-lg object-cover"
      />
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <div className="text-yellow-400 text-xl">
        {stars.map((star, i) => (
          <span key={i}>{star}</span>
        ))}
      </div>
      <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi repellendus quisquam repellat perspiciatis odit hic.</p>
    </div>
  );
};

export default TestimonialCard