import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const Capital = (props) => {
    const { data } = props
    const post = data.allMarkdownRemark.nodes

    console.log(post)

    return (
        <Layout>
            <h1 className=" w-3/5 text-3xl font-bold text-center border-b-6 border-whiteblue text-primary text-center m-auto py-8">Capital</h1>
        </Layout>
    )
}

Capital.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  export default () => (
    <StaticQuery
      query={graphql`
        query CapitalQuery {
            allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}, category: {eq: "Capital"}}}) {
                nodes {
                  fields {
                    slug
                  }
                  frontmatter {
                    category
                  }
                }
            }
        }      
      `}
      render={(data, count) => <Capital data={data} count={count} />}
    />
  )