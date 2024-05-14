'use client'

import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div className='realative pt-4 w-full'>
          <input
              type='text'
              placeholder='Search...'
              className='w-full py-2 pl-10 border border-primary rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/60'
          />   

          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <FiSearch className='text-gray-400 mt-4' />
          </div>
    </div>
  )
}

export default Search