import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const Nacional = (props) => {
    const { data } = props
    const post = data.allMarkdownRemark.nodes

    console.log(post)

    return (
        <Layout>
            <h1 className=" w-3/5 text-3xl font-bold text-center border-b-6 border-whiteblue text-primary text-center m-auto py-8">Nacional</h1>
        </Layout>
    )
}

Nacional.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  export default () => (
    <StaticQuery
      query={graphql`
        query NacionalQuery {
            allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}, category: {eq: "Nacional"}}}) {
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
      render={(data, count) => <Nacional data={data} count={count} />}
    />
  )