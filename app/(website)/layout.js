import Header from '@/components/header/header'
import React from 'react'

const layout = ({children}) => {
  return (
        <div>
          <Header></Header>
          {children}
        </div>
  )
}

export default layout