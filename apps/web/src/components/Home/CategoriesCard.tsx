import React from 'react'
import { CategoriesItem } from 'src/data/categoriseItem'

function CategoriesCard() {
  return (
    <div className=" lg:grid hidden grid-cols-4  divide-x  divide-gray-200 border rounded mt-6 p-4 px-0">
      {CategoriesItem.map((item) => (
        <div key={item.title} className=" flex items-center justify-center p-1">
          <span>{item.icon}</span>
          <div>
            <span className=" uppercase text-gray-500 font-bold hover:text-yellow-500">
              {item.title}
            </span>
            <h5 className="text-gray-400 text-sm">{item.subtitle}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoriesCard
