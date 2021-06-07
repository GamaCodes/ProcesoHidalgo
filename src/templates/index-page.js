import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Contact from '../components/Contact'
import LastNews from '../components/LastNews'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <LastNews />
      <Carousel />
      <Contact />
    </Layout>
  )
}

export default IndexPage
