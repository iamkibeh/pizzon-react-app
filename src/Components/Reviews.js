import React, { useEffect, useState } from 'react'
import { ReviewsData } from './ReviewsData'

const Reviews = () => {
  const [reviewDisplay, setReviewDisplay] = useState(0)

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setReviewDisplay(
        reviewDisplay === ReviewsData.length - 1 ? 0 : reviewDisplay + 1
      )
    }, 8000)

    return () => {
      clearTimeout(myTimeout, 8000)
    }
  }, [reviewDisplay])

  return (
    <>
      <div className='customer-reviews'>
        <h2>What Our Clients Say</h2>
        <h1>Customer Reviews</h1>
        <div className='customer-review-card'>
          {ReviewsData.map((review, ind) => {
            return (
              <div
                className={
                  reviewDisplay === ind ? 'active-review' : 'not-active-review'
                }
                key={ind}
              >
                <div className='card-div'>
                  <img src={review.image} alt='avatar of a person' />
                  <p>{review.name}</p>
                </div>
                <div className='comment-sec'>
                  <p>{review.comment}</p>
                  <p className='my-date'>
                    <span>{review.name}</span> {review.date}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Reviews
