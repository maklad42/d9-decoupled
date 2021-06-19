import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

import Layout from "../components/layout"

const BlogPosts = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <div>{Posts}</div>
    </Layout>
  )
}

export default BlogPosts

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          excerpt(pruneLength: 10)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
