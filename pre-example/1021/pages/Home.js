import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/index'
import PathNow from '../component/PathNow'

const Home = () => {
  let obj = { a: 1, b: 2 }

  return (
    <>
      <h1>首頁</h1>
      <PathNow />
      <ul class="list-group">
        {data.map(value => (
          <Link
            key={value.id}
            to={'/student/' + value.id}
            className="list-group-item list-group-item-action"
          >
            {value.name}
          </Link>
        ))}
      </ul>
    </>
  )
}

export default Home
