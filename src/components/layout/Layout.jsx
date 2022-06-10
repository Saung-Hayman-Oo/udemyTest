import React from 'react'
import MainNavigation from './MainNavigation'
function Layout({children}) {
  return (
    <div>
       <MainNavigation /> 
       <main className='container mx-auto'>
        {children}
       </main>
    </div>
  )
}

export default Layout