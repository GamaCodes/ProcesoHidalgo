import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Cass from '../components/Cass'
import LastNews from '../components/LastNews'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <LastNews />
      <Carousel />
    </Layout>
  )
}

export default IndexPage
