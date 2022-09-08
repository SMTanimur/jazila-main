import React, { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
  return (
    <div>
      {isVisible && (
        <a
          id="upper"
          className="focus:outline-none p-2 duration-300 bg-black bg-opacity-40 rounded-full text-white hover:bg-yellow-500 fixed xl:right-10 lg:right-3 right-2 lg:bottom-44 bottom-8 z-10"
          onClick={scrollTop}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
        </a>
      )}
    </div>
  )
}
