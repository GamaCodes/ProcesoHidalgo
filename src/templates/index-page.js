import React from 'react'
import Hero from '../components/Hero'
import LastNews from '../components/LastNews'
import Layout from '../components/Layout'


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <LastNews />
    </Layout>
  )
}

export default IndexPage
