import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import favoriteContext from '../../store/favorites-context';
function MainNavigation() {
    const favoritesCtx = useContext(favoriteContext);
  return (
    <header className='w-full flex justify-between mx-auto px-10 text-white items-center bg-red-900 py-4'>
        <div className=''>React Meetups</div>
        <nav>
            <ul className='w-full flex justify-around text-sm' >
                <li className='mx-3'>
                    <Link to='/all-meetup'>All Meetups</Link>
                </li>
                <li className='mx-3'>
                    <Link to='/new-meetup'>New Meetups</Link>
                </li>
                <li className='mx-3'>
                    <Link to='/favourite'>
                        My Favourites
                        <span className='bg-red-500 text-white rounded-md py-1 px-1 ml-2'>{favoritesCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation