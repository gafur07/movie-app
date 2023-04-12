import React, { useContext } from 'react'
import { MoviesContext } from '../App'


const SearchMovies = () => {
    const data = useContext(MoviesContext)
    console.log(data)
  return (
    <div>
        <input type="text" onChange={e => data.setSearch(e.target.value)} />
    </div>
  )
}

export default SearchMovies