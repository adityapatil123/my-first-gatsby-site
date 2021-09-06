import React, { useState, useEffect } from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  const [data, setData] = useState([])
  useEffect(async () => {
    const result = await fetch(
      `${process.env.GATSBY_API_URL}/pokemon?limit=10&offset=20`
    ).then(res => res.json())
    setData(result.results)
  })
  
  return (
    <Layout pageTitle="Gatsby Demo">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />

      <h4>Lets learn random pokemons out of nowhere!</h4>
      <ul>
        {data.map(user => (
          <li>
            <a href={user.url}>{user.name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage