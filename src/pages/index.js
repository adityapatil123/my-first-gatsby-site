import React, { useState, useEffect } from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  const [data, setData] = useState([])

  let loadPokemons = () => {
    fetch(
      `${process.env.GATSBY_API_URL}/pokemon?limit=10`
    )
    .then(res => res.json())
    .then(resp => setData(resp.results))
    // console.log(result)
    // setData(result.results)
  }
  
  return (
    <Layout pageTitle="Gatsby Demo">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />

      <h4>Lets learn random pokemons out of nowhere!</h4>
      <button onClick={loadPokemons}>Get Pokemons</button>
      <ul>
        {data.map(user => (
          <li key={user.name}>
            <a href={user.url}>{user.name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage