import AppLayout from '@components/Layout/AppLayout'
import React from 'react'

 function NotPound() {
  return (
      <main className="w-full h-96">
        <section className="xl:px-24 sm:px-10 px-4 pt-5">
          <div className=" flex-col  justify-center items-center">
            <div className=" flex  justify-center items-center mt-28 text-9xl font-bold text-yellow-500 ">
              <span className=" animate-pulse">4</span>
              <span className=" animate-bounce">0</span>
              <span className=" animate-pulse">4</span>
            </div>
            <div className="mt-8 text-center text-3xl font-bold text-yellow-300 capitalize">
              page not found
            </div>
          </div>
        </section>
      </main>
  )
}

NotPound.layout = AppLayout
export default NotPound