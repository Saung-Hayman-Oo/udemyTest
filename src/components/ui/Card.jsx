import React from 'react'

function Card({children}) {
  return (
    <div className='bg-white rounded shadow pb-7 overflow-hidden'>
        {children}
    </div>
  )
}

export default Card