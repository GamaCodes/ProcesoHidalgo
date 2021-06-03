import React from 'react'
import BlogRoll from '../components/BlogRoll'
import LastNews from '../components/LastNews'
import Layout from '../components/Layout'


const IndexPage = ({ data }) => {
  return (
    <Layout>
      Prensa Hidalgo
      <LastNews />
      Prensa Hidalgo
    </Layout>
  )
}

export default IndexPage
