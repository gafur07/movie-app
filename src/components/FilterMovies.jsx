import React, { useContext } from 'react'
import { MoviesContext } from '../App'

const FilterMovies = () => {
    const data = useContext(MoviesContext)
    console.log(data)

  return (
    <div>
        <ul className='flex bg-slate-600'>
            <li onClick={() => data.setType("all")}>All</li>
            <li onClick={() => data.setType("movies")}>Movies</li>
            <li onClick={() => data.setType("series")}>Series</li>
            <li onClick={() => data.setType("episode")}>Episodes</li>
        </ul>
    </div>
  )
}

export default FilterMovies