import React, { useEffect, useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'

const SlideShowing = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextSlide = () => {
    setCurrentImage(
      currentImage === SliderData.length - 1 ? 0 : currentImage + 1
    )
  }
  const prevSlide = () => {
    setCurrentImage(
      currentImage === 0 ? SliderData.length - 1 : currentImage - 1
    )
  }

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setCurrentImage(
        currentImage === SliderData.length - 1 ? 0 : currentImage + 1
      )
    }, 5000)
    return () => {
      clearTimeout(myTimeout, 4000)
    }
  }, [currentImage])

  return (
    <>
      <div className='card-container'>
        <FaArrowCircleLeft className='prev-slide' onClick={prevSlide} />
        <FaArrowCircleRight className='next-slide' onClick={nextSlide} />
        <div className='about-det'>
          <h1>
            Quality F<span>oo</span>ds
          </h1>
          <h5>Healthy Food For Health Body</h5>
        </div>
        {SliderData.map((slide, ind) => {
          return (
            <div
              className={currentImage === ind ? 'active-slide' : 'slide'}
              key={ind}
            >
              <img
                src={slide.image}
                alt='meal on table'
                className='meal-card'
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SlideShowing
