import React from 'react'
import Navbar from '../components/Search_navbar'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const Saved = () => {
  let filteredResults = useSelector(state => state.collection.items)
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center items-start gap-5 px-2 md:px-4 py-4 w-full max-w-7xl mx-auto">
          {filteredResults.map((item) => (<Card key={item.id} item={item} />))}
        </div>
      </div>
    </div>
  )
}

export default Saved